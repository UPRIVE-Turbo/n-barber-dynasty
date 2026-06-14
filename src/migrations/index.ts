import * as migration_20260614_205059 from './20260614_205059';

export const migrations = [
  {
    up: migration_20260614_205059.up,
    down: migration_20260614_205059.down,
    name: '20260614_205059'
  },
];
