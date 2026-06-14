'use server'

import { getPayload } from 'payload'
import config from '@/payload.config'

export type BookingFormState = {
  status: 'idle' | 'success' | 'error'
  message?: string
}

export async function submitBooking(
  _prevState: BookingFormState,
  formData: FormData,
): Promise<BookingFormState> {
  const name = formData.get('name')?.toString().trim()
  const phone = formData.get('phone')?.toString().trim()

  if (!name || !phone) {
    return { status: 'error', message: 'Kérjük, add meg a neved és a telefonszámod.' }
  }

  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  try {
    await payload.create({
      collection: 'submissions',
      data: {
        name,
        phone,
        email: formData.get('email')?.toString().trim() || undefined,
        barber: (formData.get('barber')?.toString() || undefined) as
          | 'gabor'
          | 'oliver'
          | 'andrei'
          | 'any'
          | undefined,
        service: formData.get('service')?.toString().trim() || undefined,
        date: formData.get('date')?.toString().trim() || undefined,
        time: formData.get('time')?.toString().trim() || undefined,
        message: formData.get('message')?.toString().trim() || undefined,
      },
    })

    return {
      status: 'success',
      message: 'Köszönjük a foglalást! Hamarosan visszaigazoljuk telefonon vagy SMS-ben.',
    }
  } catch {
    return {
      status: 'error',
      message: 'Hiba történt a foglalás beküldése közben. Kérjük, próbáld újra, vagy hívj minket telefonon.',
    }
  }
}
