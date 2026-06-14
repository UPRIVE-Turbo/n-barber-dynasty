# N Barber Dynasty — Weboldal Specifikáció

**Típus:** Egyoldalas magyar nyelvű landing page
**Iparág:** Férfi fodrászat/Borbély | **Város:** Kaposvár
**Web státusz:** Csak Facebook (nincs weboldal)
**Elérhetőség:** Tel: +36 30 246 5594 (Gábor), +36 20 410 9151 (Olivér), +36 30 823 6167 (Andrei) | FB: facebook.com/nbarberdynasty | Cím: Ady Endre utca 10, Kaposvár

---

Készíts egy magyar nyelvű, egyoldalas landing page-et egy férfi fodrászatnak/borbélynak:

AZ ÜZLET ADATAI:
- Név: N Barber Dynasty
- Cím: Ady Endre utca 10, Kaposvár
- Telefonok: Gábor +36 30 246 5594, Olivér +36 20 410 9151, Andrei +36 30 823 6167
- Facebook: facebook.com/nbarberdynasty
- Szolgáltatások: Férfi hajvágás, szakálligazítás, borotválás

DESIGN:
- Stílus: Maszkulin, klasszikus barber, prémium
- Színek: Sötét antracit (#1E2A2E) fejlécekhez, réz/arany (#B07D3C) kiemelésekhez, krém (#EDE8E0) háttérhez, sötétszürke (#2A2A2A) szöveghez
- Betűtípus: Erős, klasszikus (pl. Oswald címekhez, Roboto szöveghez)

FELÉPÍTÉS (egyetlen görgethető oldal):
1. Hero szekció: "N Barber Dynasty — Kaposvár", szlogen ("Klasszikus borbélymunka, modern stílusban"), CTA: "Időpontfoglalás"
2. Szolgáltatások: Hajvágás, szakálligazítás, borotválás, kombinált csomagok — rövid leírás + ár
3. Csapatunk: Gábor, Olivér, Andrei bemutatása, saját telefonszámmal
4. Galéria: 6-8 kép placeholder
5. Időpontfoglalás űrlap: Név, telefon, borbély kiválasztása (Gábor/Olivér/Andrei), szolgáltatás, kívánt időpont (a 3 külön telefonszám kiváltására)
6. Elérhetőség: Telefonok, cím, nyitvatartás, Google Maps
7. Lábléc: Facebook, telefon, cím, © 2026

HANGNEM: Magabiztos, menő, közvetlen. Tegező.

TECHNIKAI: Mobilbarát, reszponzív. Az egységes foglalási rendszer kulcsfontosságú (3 borbély egy helyen).

---

## Technikai követelmények
- **Stack:** Next.js 14+ (App Router) + Payload CMS 3.x + Tailwind CSS
- **Nyelv:** Magyar (HU)
- **Hosting:** Vercel-kompatibilis
- **Responsive:** Mobile-first
- **SEO:** Meta tagek, Open Graph, magyar title/description
- **Űrlap:** Payload CMS form submission → submissions collection
- **Térkép:** Google Maps embed (Kaposvár)

## Payload CMS Collections
- `services` — Szolgáltatások (név, leírás, ár, ikon)
- `gallery` — Galéria képek (kép, alt, sorrend)
- `submissions` — Űrlap beküldések (név, telefon, email, üzenet, szolgáltatás, időpont)
- `settings` — Globális (cégnév, telefon, cím, nyitvatartás, social linkek)
