const exports = {}
Object.defineProperty(exports, "__esModule", { value: true });

import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions
} from '.././runtime/edge-esm.js'

const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.9.0
 * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
 */
Prisma.prismaVersion = {
  client: "4.9.0",
  engine: "ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


const dirname = '/'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.DinosaurScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = makeEnum({
  Dinosaur: 'Dinosaur'
});

const compressedDMMF = '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='
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/malo/Kamal/belajar-deno/app/bookingHotelApp-Expressjs-Backend/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "4.9.0",
  "engineVersion": "ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": true
}
config.document = dmmf
config.dirname = dirname

config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJkZW5vIl0KICBvdXRwdXQgICAgICAgICAgPSAiLi4vZ2VuZXJhdGVkL2NsaWVudCIKfQoKbW9kZWwgRGlub3NhdXIgewogIGlkICAgICAgICAgIEludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG5hbWUgICAgICAgIFN0cmluZyBAdW5pcXVlCiAgZGVzY3JpcHRpb24gU3RyaW5nCn0K'
config.inlineSchemaHash = '481b353aafab6e8137f4805c02f2b67aad8067d6552c1b37994c77e2f0883a22'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}

config.injectableEdgeEnv = {
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
}

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)
export { exports as default, Prisma, PrismaClient }

