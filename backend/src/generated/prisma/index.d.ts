
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model USER
 * 
 */
export type USER = $Result.DefaultSelection<Prisma.$USERPayload>
/**
 * Model PROBLEM
 * 
 */
export type PROBLEM = $Result.DefaultSelection<Prisma.$PROBLEMPayload>
/**
 * Model SUBMISSION
 * 
 */
export type SUBMISSION = $Result.DefaultSelection<Prisma.$SUBMISSIONPayload>
/**
 * Model TESTCASERESULT
 * 
 */
export type TESTCASERESULT = $Result.DefaultSelection<Prisma.$TESTCASERESULTPayload>
/**
 * Model PROBLEMSOLVED
 * 
 */
export type PROBLEMSOLVED = $Result.DefaultSelection<Prisma.$PROBLEMSOLVEDPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const Difficulty: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more USERS
 * const uSERS = await prisma.uSER.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more USERS
   * const uSERS = await prisma.uSER.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.uSER`: Exposes CRUD operations for the **USER** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more USERS
    * const uSERS = await prisma.uSER.findMany()
    * ```
    */
  get uSER(): Prisma.USERDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pROBLEM`: Exposes CRUD operations for the **PROBLEM** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PROBLEMS
    * const pROBLEMS = await prisma.pROBLEM.findMany()
    * ```
    */
  get pROBLEM(): Prisma.PROBLEMDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sUBMISSION`: Exposes CRUD operations for the **SUBMISSION** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SUBMISSIONS
    * const sUBMISSIONS = await prisma.sUBMISSION.findMany()
    * ```
    */
  get sUBMISSION(): Prisma.SUBMISSIONDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tESTCASERESULT`: Exposes CRUD operations for the **TESTCASERESULT** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TESTCASERESULTS
    * const tESTCASERESULTS = await prisma.tESTCASERESULT.findMany()
    * ```
    */
  get tESTCASERESULT(): Prisma.TESTCASERESULTDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pROBLEMSOLVED`: Exposes CRUD operations for the **PROBLEMSOLVED** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PROBLEMSOLVEDS
    * const pROBLEMSOLVEDS = await prisma.pROBLEMSOLVED.findMany()
    * ```
    */
  get pROBLEMSOLVED(): Prisma.PROBLEMSOLVEDDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    USER: 'USER',
    PROBLEM: 'PROBLEM',
    SUBMISSION: 'SUBMISSION',
    TESTCASERESULT: 'TESTCASERESULT',
    PROBLEMSOLVED: 'PROBLEMSOLVED'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "uSER" | "pROBLEM" | "sUBMISSION" | "tESTCASERESULT" | "pROBLEMSOLVED"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      USER: {
        payload: Prisma.$USERPayload<ExtArgs>
        fields: Prisma.USERFieldRefs
        operations: {
          findUnique: {
            args: Prisma.USERFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.USERFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          findFirst: {
            args: Prisma.USERFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.USERFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          findMany: {
            args: Prisma.USERFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>[]
          }
          create: {
            args: Prisma.USERCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          createMany: {
            args: Prisma.USERCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.USERCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>[]
          }
          delete: {
            args: Prisma.USERDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          update: {
            args: Prisma.USERUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          deleteMany: {
            args: Prisma.USERDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.USERUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.USERUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>[]
          }
          upsert: {
            args: Prisma.USERUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          aggregate: {
            args: Prisma.USERAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUSER>
          }
          groupBy: {
            args: Prisma.USERGroupByArgs<ExtArgs>
            result: $Utils.Optional<USERGroupByOutputType>[]
          }
          count: {
            args: Prisma.USERCountArgs<ExtArgs>
            result: $Utils.Optional<USERCountAggregateOutputType> | number
          }
        }
      }
      PROBLEM: {
        payload: Prisma.$PROBLEMPayload<ExtArgs>
        fields: Prisma.PROBLEMFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PROBLEMFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROBLEMPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PROBLEMFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROBLEMPayload>
          }
          findFirst: {
            args: Prisma.PROBLEMFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROBLEMPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PROBLEMFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROBLEMPayload>
          }
          findMany: {
            args: Prisma.PROBLEMFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROBLEMPayload>[]
          }
          create: {
            args: Prisma.PROBLEMCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROBLEMPayload>
          }
          createMany: {
            args: Prisma.PROBLEMCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PROBLEMCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROBLEMPayload>[]
          }
          delete: {
            args: Prisma.PROBLEMDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROBLEMPayload>
          }
          update: {
            args: Prisma.PROBLEMUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROBLEMPayload>
          }
          deleteMany: {
            args: Prisma.PROBLEMDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PROBLEMUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PROBLEMUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROBLEMPayload>[]
          }
          upsert: {
            args: Prisma.PROBLEMUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROBLEMPayload>
          }
          aggregate: {
            args: Prisma.PROBLEMAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePROBLEM>
          }
          groupBy: {
            args: Prisma.PROBLEMGroupByArgs<ExtArgs>
            result: $Utils.Optional<PROBLEMGroupByOutputType>[]
          }
          count: {
            args: Prisma.PROBLEMCountArgs<ExtArgs>
            result: $Utils.Optional<PROBLEMCountAggregateOutputType> | number
          }
        }
      }
      SUBMISSION: {
        payload: Prisma.$SUBMISSIONPayload<ExtArgs>
        fields: Prisma.SUBMISSIONFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SUBMISSIONFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SUBMISSIONPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SUBMISSIONFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SUBMISSIONPayload>
          }
          findFirst: {
            args: Prisma.SUBMISSIONFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SUBMISSIONPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SUBMISSIONFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SUBMISSIONPayload>
          }
          findMany: {
            args: Prisma.SUBMISSIONFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SUBMISSIONPayload>[]
          }
          create: {
            args: Prisma.SUBMISSIONCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SUBMISSIONPayload>
          }
          createMany: {
            args: Prisma.SUBMISSIONCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SUBMISSIONCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SUBMISSIONPayload>[]
          }
          delete: {
            args: Prisma.SUBMISSIONDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SUBMISSIONPayload>
          }
          update: {
            args: Prisma.SUBMISSIONUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SUBMISSIONPayload>
          }
          deleteMany: {
            args: Prisma.SUBMISSIONDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SUBMISSIONUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SUBMISSIONUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SUBMISSIONPayload>[]
          }
          upsert: {
            args: Prisma.SUBMISSIONUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SUBMISSIONPayload>
          }
          aggregate: {
            args: Prisma.SUBMISSIONAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSUBMISSION>
          }
          groupBy: {
            args: Prisma.SUBMISSIONGroupByArgs<ExtArgs>
            result: $Utils.Optional<SUBMISSIONGroupByOutputType>[]
          }
          count: {
            args: Prisma.SUBMISSIONCountArgs<ExtArgs>
            result: $Utils.Optional<SUBMISSIONCountAggregateOutputType> | number
          }
        }
      }
      TESTCASERESULT: {
        payload: Prisma.$TESTCASERESULTPayload<ExtArgs>
        fields: Prisma.TESTCASERESULTFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TESTCASERESULTFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TESTCASERESULTPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TESTCASERESULTFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TESTCASERESULTPayload>
          }
          findFirst: {
            args: Prisma.TESTCASERESULTFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TESTCASERESULTPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TESTCASERESULTFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TESTCASERESULTPayload>
          }
          findMany: {
            args: Prisma.TESTCASERESULTFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TESTCASERESULTPayload>[]
          }
          create: {
            args: Prisma.TESTCASERESULTCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TESTCASERESULTPayload>
          }
          createMany: {
            args: Prisma.TESTCASERESULTCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TESTCASERESULTCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TESTCASERESULTPayload>[]
          }
          delete: {
            args: Prisma.TESTCASERESULTDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TESTCASERESULTPayload>
          }
          update: {
            args: Prisma.TESTCASERESULTUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TESTCASERESULTPayload>
          }
          deleteMany: {
            args: Prisma.TESTCASERESULTDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TESTCASERESULTUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TESTCASERESULTUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TESTCASERESULTPayload>[]
          }
          upsert: {
            args: Prisma.TESTCASERESULTUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TESTCASERESULTPayload>
          }
          aggregate: {
            args: Prisma.TESTCASERESULTAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTESTCASERESULT>
          }
          groupBy: {
            args: Prisma.TESTCASERESULTGroupByArgs<ExtArgs>
            result: $Utils.Optional<TESTCASERESULTGroupByOutputType>[]
          }
          count: {
            args: Prisma.TESTCASERESULTCountArgs<ExtArgs>
            result: $Utils.Optional<TESTCASERESULTCountAggregateOutputType> | number
          }
        }
      }
      PROBLEMSOLVED: {
        payload: Prisma.$PROBLEMSOLVEDPayload<ExtArgs>
        fields: Prisma.PROBLEMSOLVEDFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PROBLEMSOLVEDFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROBLEMSOLVEDPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PROBLEMSOLVEDFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROBLEMSOLVEDPayload>
          }
          findFirst: {
            args: Prisma.PROBLEMSOLVEDFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROBLEMSOLVEDPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PROBLEMSOLVEDFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROBLEMSOLVEDPayload>
          }
          findMany: {
            args: Prisma.PROBLEMSOLVEDFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROBLEMSOLVEDPayload>[]
          }
          create: {
            args: Prisma.PROBLEMSOLVEDCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROBLEMSOLVEDPayload>
          }
          createMany: {
            args: Prisma.PROBLEMSOLVEDCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PROBLEMSOLVEDCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROBLEMSOLVEDPayload>[]
          }
          delete: {
            args: Prisma.PROBLEMSOLVEDDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROBLEMSOLVEDPayload>
          }
          update: {
            args: Prisma.PROBLEMSOLVEDUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROBLEMSOLVEDPayload>
          }
          deleteMany: {
            args: Prisma.PROBLEMSOLVEDDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PROBLEMSOLVEDUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PROBLEMSOLVEDUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROBLEMSOLVEDPayload>[]
          }
          upsert: {
            args: Prisma.PROBLEMSOLVEDUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROBLEMSOLVEDPayload>
          }
          aggregate: {
            args: Prisma.PROBLEMSOLVEDAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePROBLEMSOLVED>
          }
          groupBy: {
            args: Prisma.PROBLEMSOLVEDGroupByArgs<ExtArgs>
            result: $Utils.Optional<PROBLEMSOLVEDGroupByOutputType>[]
          }
          count: {
            args: Prisma.PROBLEMSOLVEDCountArgs<ExtArgs>
            result: $Utils.Optional<PROBLEMSOLVEDCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    uSER?: USEROmit
    pROBLEM?: PROBLEMOmit
    sUBMISSION?: SUBMISSIONOmit
    tESTCASERESULT?: TESTCASERESULTOmit
    pROBLEMSOLVED?: PROBLEMSOLVEDOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type USERCountOutputType
   */

  export type USERCountOutputType = {
    problems: number
    submission: number
    solvedProblems: number
  }

  export type USERCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | USERCountOutputTypeCountProblemsArgs
    submission?: boolean | USERCountOutputTypeCountSubmissionArgs
    solvedProblems?: boolean | USERCountOutputTypeCountSolvedProblemsArgs
  }

  // Custom InputTypes
  /**
   * USERCountOutputType without action
   */
  export type USERCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERCountOutputType
     */
    select?: USERCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * USERCountOutputType without action
   */
  export type USERCountOutputTypeCountProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PROBLEMWhereInput
  }

  /**
   * USERCountOutputType without action
   */
  export type USERCountOutputTypeCountSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SUBMISSIONWhereInput
  }

  /**
   * USERCountOutputType without action
   */
  export type USERCountOutputTypeCountSolvedProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PROBLEMSOLVEDWhereInput
  }


  /**
   * Count Type PROBLEMCountOutputType
   */

  export type PROBLEMCountOutputType = {
    submission: number
    solvedBy: number
  }

  export type PROBLEMCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | PROBLEMCountOutputTypeCountSubmissionArgs
    solvedBy?: boolean | PROBLEMCountOutputTypeCountSolvedByArgs
  }

  // Custom InputTypes
  /**
   * PROBLEMCountOutputType without action
   */
  export type PROBLEMCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEMCountOutputType
     */
    select?: PROBLEMCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PROBLEMCountOutputType without action
   */
  export type PROBLEMCountOutputTypeCountSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SUBMISSIONWhereInput
  }

  /**
   * PROBLEMCountOutputType without action
   */
  export type PROBLEMCountOutputTypeCountSolvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PROBLEMSOLVEDWhereInput
  }


  /**
   * Count Type SUBMISSIONCountOutputType
   */

  export type SUBMISSIONCountOutputType = {
    testCases: number
  }

  export type SUBMISSIONCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testCases?: boolean | SUBMISSIONCountOutputTypeCountTestCasesArgs
  }

  // Custom InputTypes
  /**
   * SUBMISSIONCountOutputType without action
   */
  export type SUBMISSIONCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SUBMISSIONCountOutputType
     */
    select?: SUBMISSIONCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SUBMISSIONCountOutputType without action
   */
  export type SUBMISSIONCountOutputTypeCountTestCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TESTCASERESULTWhereInput
  }


  /**
   * Models
   */

  /**
   * Model USER
   */

  export type AggregateUSER = {
    _count: USERCountAggregateOutputType | null
    _min: USERMinAggregateOutputType | null
    _max: USERMaxAggregateOutputType | null
  }

  export type USERMinAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    email: string | null
    image: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type USERMaxAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    email: string | null
    image: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type USERCountAggregateOutputType = {
    id: number
    name: number
    password: number
    email: number
    image: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type USERMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    email?: true
    image?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type USERMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    email?: true
    image?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type USERCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    email?: true
    image?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type USERAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which USER to aggregate.
     */
    where?: USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USEROrderByWithRelationInput | USEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned USERS
    **/
    _count?: true | USERCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: USERMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: USERMaxAggregateInputType
  }

  export type GetUSERAggregateType<T extends USERAggregateArgs> = {
        [P in keyof T & keyof AggregateUSER]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUSER[P]>
      : GetScalarType<T[P], AggregateUSER[P]>
  }




  export type USERGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: USERWhereInput
    orderBy?: USEROrderByWithAggregationInput | USEROrderByWithAggregationInput[]
    by: USERScalarFieldEnum[] | USERScalarFieldEnum
    having?: USERScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: USERCountAggregateInputType | true
    _min?: USERMinAggregateInputType
    _max?: USERMaxAggregateInputType
  }

  export type USERGroupByOutputType = {
    id: string
    name: string
    password: string
    email: string
    image: string | null
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: USERCountAggregateOutputType | null
    _min: USERMinAggregateOutputType | null
    _max: USERMaxAggregateOutputType | null
  }

  type GetUSERGroupByPayload<T extends USERGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<USERGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof USERGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], USERGroupByOutputType[P]>
            : GetScalarType<T[P], USERGroupByOutputType[P]>
        }
      >
    >


  export type USERSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    email?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problems?: boolean | USER$problemsArgs<ExtArgs>
    submission?: boolean | USER$submissionArgs<ExtArgs>
    solvedProblems?: boolean | USER$solvedProblemsArgs<ExtArgs>
    _count?: boolean | USERCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uSER"]>

  export type USERSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    email?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["uSER"]>

  export type USERSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    email?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["uSER"]>

  export type USERSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    email?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type USEROmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password" | "email" | "image" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["uSER"]>
  export type USERInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | USER$problemsArgs<ExtArgs>
    submission?: boolean | USER$submissionArgs<ExtArgs>
    solvedProblems?: boolean | USER$solvedProblemsArgs<ExtArgs>
    _count?: boolean | USERCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type USERIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type USERIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $USERPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "USER"
    objects: {
      problems: Prisma.$PROBLEMPayload<ExtArgs>[]
      submission: Prisma.$SUBMISSIONPayload<ExtArgs>[]
      solvedProblems: Prisma.$PROBLEMSOLVEDPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      password: string
      email: string
      image: string | null
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["uSER"]>
    composites: {}
  }

  type USERGetPayload<S extends boolean | null | undefined | USERDefaultArgs> = $Result.GetResult<Prisma.$USERPayload, S>

  type USERCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<USERFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: USERCountAggregateInputType | true
    }

  export interface USERDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['USER'], meta: { name: 'USER' } }
    /**
     * Find zero or one USER that matches the filter.
     * @param {USERFindUniqueArgs} args - Arguments to find a USER
     * @example
     * // Get one USER
     * const uSER = await prisma.uSER.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends USERFindUniqueArgs>(args: SelectSubset<T, USERFindUniqueArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one USER that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {USERFindUniqueOrThrowArgs} args - Arguments to find a USER
     * @example
     * // Get one USER
     * const uSER = await prisma.uSER.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends USERFindUniqueOrThrowArgs>(args: SelectSubset<T, USERFindUniqueOrThrowArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first USER that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERFindFirstArgs} args - Arguments to find a USER
     * @example
     * // Get one USER
     * const uSER = await prisma.uSER.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends USERFindFirstArgs>(args?: SelectSubset<T, USERFindFirstArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first USER that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERFindFirstOrThrowArgs} args - Arguments to find a USER
     * @example
     * // Get one USER
     * const uSER = await prisma.uSER.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends USERFindFirstOrThrowArgs>(args?: SelectSubset<T, USERFindFirstOrThrowArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more USERS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all USERS
     * const uSERS = await prisma.uSER.findMany()
     * 
     * // Get first 10 USERS
     * const uSERS = await prisma.uSER.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uSERWithIdOnly = await prisma.uSER.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends USERFindManyArgs>(args?: SelectSubset<T, USERFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a USER.
     * @param {USERCreateArgs} args - Arguments to create a USER.
     * @example
     * // Create one USER
     * const USER = await prisma.uSER.create({
     *   data: {
     *     // ... data to create a USER
     *   }
     * })
     * 
     */
    create<T extends USERCreateArgs>(args: SelectSubset<T, USERCreateArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many USERS.
     * @param {USERCreateManyArgs} args - Arguments to create many USERS.
     * @example
     * // Create many USERS
     * const uSER = await prisma.uSER.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends USERCreateManyArgs>(args?: SelectSubset<T, USERCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many USERS and returns the data saved in the database.
     * @param {USERCreateManyAndReturnArgs} args - Arguments to create many USERS.
     * @example
     * // Create many USERS
     * const uSER = await prisma.uSER.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many USERS and only return the `id`
     * const uSERWithIdOnly = await prisma.uSER.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends USERCreateManyAndReturnArgs>(args?: SelectSubset<T, USERCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a USER.
     * @param {USERDeleteArgs} args - Arguments to delete one USER.
     * @example
     * // Delete one USER
     * const USER = await prisma.uSER.delete({
     *   where: {
     *     // ... filter to delete one USER
     *   }
     * })
     * 
     */
    delete<T extends USERDeleteArgs>(args: SelectSubset<T, USERDeleteArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one USER.
     * @param {USERUpdateArgs} args - Arguments to update one USER.
     * @example
     * // Update one USER
     * const uSER = await prisma.uSER.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends USERUpdateArgs>(args: SelectSubset<T, USERUpdateArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more USERS.
     * @param {USERDeleteManyArgs} args - Arguments to filter USERS to delete.
     * @example
     * // Delete a few USERS
     * const { count } = await prisma.uSER.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends USERDeleteManyArgs>(args?: SelectSubset<T, USERDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many USERS
     * const uSER = await prisma.uSER.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends USERUpdateManyArgs>(args: SelectSubset<T, USERUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more USERS and returns the data updated in the database.
     * @param {USERUpdateManyAndReturnArgs} args - Arguments to update many USERS.
     * @example
     * // Update many USERS
     * const uSER = await prisma.uSER.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more USERS and only return the `id`
     * const uSERWithIdOnly = await prisma.uSER.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends USERUpdateManyAndReturnArgs>(args: SelectSubset<T, USERUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one USER.
     * @param {USERUpsertArgs} args - Arguments to update or create a USER.
     * @example
     * // Update or create a USER
     * const uSER = await prisma.uSER.upsert({
     *   create: {
     *     // ... data to create a USER
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the USER we want to update
     *   }
     * })
     */
    upsert<T extends USERUpsertArgs>(args: SelectSubset<T, USERUpsertArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERCountArgs} args - Arguments to filter USERS to count.
     * @example
     * // Count the number of USERS
     * const count = await prisma.uSER.count({
     *   where: {
     *     // ... the filter for the USERS we want to count
     *   }
     * })
    **/
    count<T extends USERCountArgs>(
      args?: Subset<T, USERCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], USERCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a USER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends USERAggregateArgs>(args: Subset<T, USERAggregateArgs>): Prisma.PrismaPromise<GetUSERAggregateType<T>>

    /**
     * Group by USER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends USERGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: USERGroupByArgs['orderBy'] }
        : { orderBy?: USERGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, USERGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUSERGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the USER model
   */
  readonly fields: USERFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for USER.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__USERClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problems<T extends USER$problemsArgs<ExtArgs> = {}>(args?: Subset<T, USER$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PROBLEMPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submission<T extends USER$submissionArgs<ExtArgs> = {}>(args?: Subset<T, USER$submissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SUBMISSIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    solvedProblems<T extends USER$solvedProblemsArgs<ExtArgs> = {}>(args?: Subset<T, USER$solvedProblemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PROBLEMSOLVEDPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the USER model
   */
  interface USERFieldRefs {
    readonly id: FieldRef<"USER", 'String'>
    readonly name: FieldRef<"USER", 'String'>
    readonly password: FieldRef<"USER", 'String'>
    readonly email: FieldRef<"USER", 'String'>
    readonly image: FieldRef<"USER", 'String'>
    readonly role: FieldRef<"USER", 'UserRole'>
    readonly createdAt: FieldRef<"USER", 'DateTime'>
    readonly updatedAt: FieldRef<"USER", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * USER findUnique
   */
  export type USERFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * Filter, which USER to fetch.
     */
    where: USERWhereUniqueInput
  }

  /**
   * USER findUniqueOrThrow
   */
  export type USERFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * Filter, which USER to fetch.
     */
    where: USERWhereUniqueInput
  }

  /**
   * USER findFirst
   */
  export type USERFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * Filter, which USER to fetch.
     */
    where?: USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USEROrderByWithRelationInput | USEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USERS.
     */
    cursor?: USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USERS.
     */
    distinct?: USERScalarFieldEnum | USERScalarFieldEnum[]
  }

  /**
   * USER findFirstOrThrow
   */
  export type USERFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * Filter, which USER to fetch.
     */
    where?: USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USEROrderByWithRelationInput | USEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USERS.
     */
    cursor?: USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USERS.
     */
    distinct?: USERScalarFieldEnum | USERScalarFieldEnum[]
  }

  /**
   * USER findMany
   */
  export type USERFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * Filter, which USERS to fetch.
     */
    where?: USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USEROrderByWithRelationInput | USEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing USERS.
     */
    cursor?: USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    distinct?: USERScalarFieldEnum | USERScalarFieldEnum[]
  }

  /**
   * USER create
   */
  export type USERCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * The data needed to create a USER.
     */
    data: XOR<USERCreateInput, USERUncheckedCreateInput>
  }

  /**
   * USER createMany
   */
  export type USERCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many USERS.
     */
    data: USERCreateManyInput | USERCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * USER createManyAndReturn
   */
  export type USERCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * The data used to create many USERS.
     */
    data: USERCreateManyInput | USERCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * USER update
   */
  export type USERUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * The data needed to update a USER.
     */
    data: XOR<USERUpdateInput, USERUncheckedUpdateInput>
    /**
     * Choose, which USER to update.
     */
    where: USERWhereUniqueInput
  }

  /**
   * USER updateMany
   */
  export type USERUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update USERS.
     */
    data: XOR<USERUpdateManyMutationInput, USERUncheckedUpdateManyInput>
    /**
     * Filter which USERS to update
     */
    where?: USERWhereInput
    /**
     * Limit how many USERS to update.
     */
    limit?: number
  }

  /**
   * USER updateManyAndReturn
   */
  export type USERUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * The data used to update USERS.
     */
    data: XOR<USERUpdateManyMutationInput, USERUncheckedUpdateManyInput>
    /**
     * Filter which USERS to update
     */
    where?: USERWhereInput
    /**
     * Limit how many USERS to update.
     */
    limit?: number
  }

  /**
   * USER upsert
   */
  export type USERUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * The filter to search for the USER to update in case it exists.
     */
    where: USERWhereUniqueInput
    /**
     * In case the USER found by the `where` argument doesn't exist, create a new USER with this data.
     */
    create: XOR<USERCreateInput, USERUncheckedCreateInput>
    /**
     * In case the USER was found with the provided `where` argument, update it with this data.
     */
    update: XOR<USERUpdateInput, USERUncheckedUpdateInput>
  }

  /**
   * USER delete
   */
  export type USERDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * Filter which USER to delete.
     */
    where: USERWhereUniqueInput
  }

  /**
   * USER deleteMany
   */
  export type USERDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which USERS to delete
     */
    where?: USERWhereInput
    /**
     * Limit how many USERS to delete.
     */
    limit?: number
  }

  /**
   * USER.problems
   */
  export type USER$problemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEM
     */
    select?: PROBLEMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEM
     */
    omit?: PROBLEMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMInclude<ExtArgs> | null
    where?: PROBLEMWhereInput
    orderBy?: PROBLEMOrderByWithRelationInput | PROBLEMOrderByWithRelationInput[]
    cursor?: PROBLEMWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PROBLEMScalarFieldEnum | PROBLEMScalarFieldEnum[]
  }

  /**
   * USER.submission
   */
  export type USER$submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SUBMISSION
     */
    select?: SUBMISSIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SUBMISSION
     */
    omit?: SUBMISSIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SUBMISSIONInclude<ExtArgs> | null
    where?: SUBMISSIONWhereInput
    orderBy?: SUBMISSIONOrderByWithRelationInput | SUBMISSIONOrderByWithRelationInput[]
    cursor?: SUBMISSIONWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SUBMISSIONScalarFieldEnum | SUBMISSIONScalarFieldEnum[]
  }

  /**
   * USER.solvedProblems
   */
  export type USER$solvedProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEMSOLVED
     */
    select?: PROBLEMSOLVEDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEMSOLVED
     */
    omit?: PROBLEMSOLVEDOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMSOLVEDInclude<ExtArgs> | null
    where?: PROBLEMSOLVEDWhereInput
    orderBy?: PROBLEMSOLVEDOrderByWithRelationInput | PROBLEMSOLVEDOrderByWithRelationInput[]
    cursor?: PROBLEMSOLVEDWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PROBLEMSOLVEDScalarFieldEnum | PROBLEMSOLVEDScalarFieldEnum[]
  }

  /**
   * USER without action
   */
  export type USERDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
  }


  /**
   * Model PROBLEM
   */

  export type AggregatePROBLEM = {
    _count: PROBLEMCountAggregateOutputType | null
    _min: PROBLEMMinAggregateOutputType | null
    _max: PROBLEMMaxAggregateOutputType | null
  }

  export type PROBLEMMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    difficulty: $Enums.Difficulty | null
    userId: string | null
    constraints: string | null
    hints: string | null
    editorial: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PROBLEMMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    difficulty: $Enums.Difficulty | null
    userId: string | null
    constraints: string | null
    hints: string | null
    editorial: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PROBLEMCountAggregateOutputType = {
    id: number
    title: number
    description: number
    difficulty: number
    tags: number
    userId: number
    examples: number
    constraints: number
    hints: number
    editorial: number
    testCases: number
    codeSnippet: number
    refrenceSolutions: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PROBLEMMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    userId?: true
    constraints?: true
    hints?: true
    editorial?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PROBLEMMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    userId?: true
    constraints?: true
    hints?: true
    editorial?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PROBLEMCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    tags?: true
    userId?: true
    examples?: true
    constraints?: true
    hints?: true
    editorial?: true
    testCases?: true
    codeSnippet?: true
    refrenceSolutions?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PROBLEMAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PROBLEM to aggregate.
     */
    where?: PROBLEMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PROBLEMS to fetch.
     */
    orderBy?: PROBLEMOrderByWithRelationInput | PROBLEMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PROBLEMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PROBLEMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PROBLEMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PROBLEMS
    **/
    _count?: true | PROBLEMCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PROBLEMMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PROBLEMMaxAggregateInputType
  }

  export type GetPROBLEMAggregateType<T extends PROBLEMAggregateArgs> = {
        [P in keyof T & keyof AggregatePROBLEM]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePROBLEM[P]>
      : GetScalarType<T[P], AggregatePROBLEM[P]>
  }




  export type PROBLEMGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PROBLEMWhereInput
    orderBy?: PROBLEMOrderByWithAggregationInput | PROBLEMOrderByWithAggregationInput[]
    by: PROBLEMScalarFieldEnum[] | PROBLEMScalarFieldEnum
    having?: PROBLEMScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PROBLEMCountAggregateInputType | true
    _min?: PROBLEMMinAggregateInputType
    _max?: PROBLEMMaxAggregateInputType
  }

  export type PROBLEMGroupByOutputType = {
    id: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags: string[]
    userId: string
    examples: JsonValue
    constraints: string
    hints: string | null
    editorial: string | null
    testCases: JsonValue
    codeSnippet: JsonValue
    refrenceSolutions: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: PROBLEMCountAggregateOutputType | null
    _min: PROBLEMMinAggregateOutputType | null
    _max: PROBLEMMaxAggregateOutputType | null
  }

  type GetPROBLEMGroupByPayload<T extends PROBLEMGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PROBLEMGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PROBLEMGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PROBLEMGroupByOutputType[P]>
            : GetScalarType<T[P], PROBLEMGroupByOutputType[P]>
        }
      >
    >


  export type PROBLEMSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testCases?: boolean
    codeSnippet?: boolean
    refrenceSolutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | USERDefaultArgs<ExtArgs>
    submission?: boolean | PROBLEM$submissionArgs<ExtArgs>
    solvedBy?: boolean | PROBLEM$solvedByArgs<ExtArgs>
    _count?: boolean | PROBLEMCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pROBLEM"]>

  export type PROBLEMSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testCases?: boolean
    codeSnippet?: boolean
    refrenceSolutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | USERDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pROBLEM"]>

  export type PROBLEMSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testCases?: boolean
    codeSnippet?: boolean
    refrenceSolutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | USERDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pROBLEM"]>

  export type PROBLEMSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testCases?: boolean
    codeSnippet?: boolean
    refrenceSolutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PROBLEMOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "difficulty" | "tags" | "userId" | "examples" | "constraints" | "hints" | "editorial" | "testCases" | "codeSnippet" | "refrenceSolutions" | "createdAt" | "updatedAt", ExtArgs["result"]["pROBLEM"]>
  export type PROBLEMInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | USERDefaultArgs<ExtArgs>
    submission?: boolean | PROBLEM$submissionArgs<ExtArgs>
    solvedBy?: boolean | PROBLEM$solvedByArgs<ExtArgs>
    _count?: boolean | PROBLEMCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PROBLEMIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | USERDefaultArgs<ExtArgs>
  }
  export type PROBLEMIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | USERDefaultArgs<ExtArgs>
  }

  export type $PROBLEMPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PROBLEM"
    objects: {
      user: Prisma.$USERPayload<ExtArgs>
      submission: Prisma.$SUBMISSIONPayload<ExtArgs>[]
      solvedBy: Prisma.$PROBLEMSOLVEDPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      difficulty: $Enums.Difficulty
      tags: string[]
      userId: string
      examples: Prisma.JsonValue
      constraints: string
      hints: string | null
      editorial: string | null
      testCases: Prisma.JsonValue
      codeSnippet: Prisma.JsonValue
      refrenceSolutions: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pROBLEM"]>
    composites: {}
  }

  type PROBLEMGetPayload<S extends boolean | null | undefined | PROBLEMDefaultArgs> = $Result.GetResult<Prisma.$PROBLEMPayload, S>

  type PROBLEMCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PROBLEMFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PROBLEMCountAggregateInputType | true
    }

  export interface PROBLEMDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PROBLEM'], meta: { name: 'PROBLEM' } }
    /**
     * Find zero or one PROBLEM that matches the filter.
     * @param {PROBLEMFindUniqueArgs} args - Arguments to find a PROBLEM
     * @example
     * // Get one PROBLEM
     * const pROBLEM = await prisma.pROBLEM.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PROBLEMFindUniqueArgs>(args: SelectSubset<T, PROBLEMFindUniqueArgs<ExtArgs>>): Prisma__PROBLEMClient<$Result.GetResult<Prisma.$PROBLEMPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PROBLEM that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PROBLEMFindUniqueOrThrowArgs} args - Arguments to find a PROBLEM
     * @example
     * // Get one PROBLEM
     * const pROBLEM = await prisma.pROBLEM.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PROBLEMFindUniqueOrThrowArgs>(args: SelectSubset<T, PROBLEMFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PROBLEMClient<$Result.GetResult<Prisma.$PROBLEMPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PROBLEM that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROBLEMFindFirstArgs} args - Arguments to find a PROBLEM
     * @example
     * // Get one PROBLEM
     * const pROBLEM = await prisma.pROBLEM.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PROBLEMFindFirstArgs>(args?: SelectSubset<T, PROBLEMFindFirstArgs<ExtArgs>>): Prisma__PROBLEMClient<$Result.GetResult<Prisma.$PROBLEMPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PROBLEM that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROBLEMFindFirstOrThrowArgs} args - Arguments to find a PROBLEM
     * @example
     * // Get one PROBLEM
     * const pROBLEM = await prisma.pROBLEM.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PROBLEMFindFirstOrThrowArgs>(args?: SelectSubset<T, PROBLEMFindFirstOrThrowArgs<ExtArgs>>): Prisma__PROBLEMClient<$Result.GetResult<Prisma.$PROBLEMPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PROBLEMS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROBLEMFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PROBLEMS
     * const pROBLEMS = await prisma.pROBLEM.findMany()
     * 
     * // Get first 10 PROBLEMS
     * const pROBLEMS = await prisma.pROBLEM.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pROBLEMWithIdOnly = await prisma.pROBLEM.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PROBLEMFindManyArgs>(args?: SelectSubset<T, PROBLEMFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PROBLEMPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PROBLEM.
     * @param {PROBLEMCreateArgs} args - Arguments to create a PROBLEM.
     * @example
     * // Create one PROBLEM
     * const PROBLEM = await prisma.pROBLEM.create({
     *   data: {
     *     // ... data to create a PROBLEM
     *   }
     * })
     * 
     */
    create<T extends PROBLEMCreateArgs>(args: SelectSubset<T, PROBLEMCreateArgs<ExtArgs>>): Prisma__PROBLEMClient<$Result.GetResult<Prisma.$PROBLEMPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PROBLEMS.
     * @param {PROBLEMCreateManyArgs} args - Arguments to create many PROBLEMS.
     * @example
     * // Create many PROBLEMS
     * const pROBLEM = await prisma.pROBLEM.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PROBLEMCreateManyArgs>(args?: SelectSubset<T, PROBLEMCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PROBLEMS and returns the data saved in the database.
     * @param {PROBLEMCreateManyAndReturnArgs} args - Arguments to create many PROBLEMS.
     * @example
     * // Create many PROBLEMS
     * const pROBLEM = await prisma.pROBLEM.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PROBLEMS and only return the `id`
     * const pROBLEMWithIdOnly = await prisma.pROBLEM.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PROBLEMCreateManyAndReturnArgs>(args?: SelectSubset<T, PROBLEMCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PROBLEMPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PROBLEM.
     * @param {PROBLEMDeleteArgs} args - Arguments to delete one PROBLEM.
     * @example
     * // Delete one PROBLEM
     * const PROBLEM = await prisma.pROBLEM.delete({
     *   where: {
     *     // ... filter to delete one PROBLEM
     *   }
     * })
     * 
     */
    delete<T extends PROBLEMDeleteArgs>(args: SelectSubset<T, PROBLEMDeleteArgs<ExtArgs>>): Prisma__PROBLEMClient<$Result.GetResult<Prisma.$PROBLEMPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PROBLEM.
     * @param {PROBLEMUpdateArgs} args - Arguments to update one PROBLEM.
     * @example
     * // Update one PROBLEM
     * const pROBLEM = await prisma.pROBLEM.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PROBLEMUpdateArgs>(args: SelectSubset<T, PROBLEMUpdateArgs<ExtArgs>>): Prisma__PROBLEMClient<$Result.GetResult<Prisma.$PROBLEMPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PROBLEMS.
     * @param {PROBLEMDeleteManyArgs} args - Arguments to filter PROBLEMS to delete.
     * @example
     * // Delete a few PROBLEMS
     * const { count } = await prisma.pROBLEM.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PROBLEMDeleteManyArgs>(args?: SelectSubset<T, PROBLEMDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PROBLEMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROBLEMUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PROBLEMS
     * const pROBLEM = await prisma.pROBLEM.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PROBLEMUpdateManyArgs>(args: SelectSubset<T, PROBLEMUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PROBLEMS and returns the data updated in the database.
     * @param {PROBLEMUpdateManyAndReturnArgs} args - Arguments to update many PROBLEMS.
     * @example
     * // Update many PROBLEMS
     * const pROBLEM = await prisma.pROBLEM.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PROBLEMS and only return the `id`
     * const pROBLEMWithIdOnly = await prisma.pROBLEM.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PROBLEMUpdateManyAndReturnArgs>(args: SelectSubset<T, PROBLEMUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PROBLEMPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PROBLEM.
     * @param {PROBLEMUpsertArgs} args - Arguments to update or create a PROBLEM.
     * @example
     * // Update or create a PROBLEM
     * const pROBLEM = await prisma.pROBLEM.upsert({
     *   create: {
     *     // ... data to create a PROBLEM
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PROBLEM we want to update
     *   }
     * })
     */
    upsert<T extends PROBLEMUpsertArgs>(args: SelectSubset<T, PROBLEMUpsertArgs<ExtArgs>>): Prisma__PROBLEMClient<$Result.GetResult<Prisma.$PROBLEMPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PROBLEMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROBLEMCountArgs} args - Arguments to filter PROBLEMS to count.
     * @example
     * // Count the number of PROBLEMS
     * const count = await prisma.pROBLEM.count({
     *   where: {
     *     // ... the filter for the PROBLEMS we want to count
     *   }
     * })
    **/
    count<T extends PROBLEMCountArgs>(
      args?: Subset<T, PROBLEMCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PROBLEMCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PROBLEM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROBLEMAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PROBLEMAggregateArgs>(args: Subset<T, PROBLEMAggregateArgs>): Prisma.PrismaPromise<GetPROBLEMAggregateType<T>>

    /**
     * Group by PROBLEM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROBLEMGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PROBLEMGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PROBLEMGroupByArgs['orderBy'] }
        : { orderBy?: PROBLEMGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PROBLEMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPROBLEMGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PROBLEM model
   */
  readonly fields: PROBLEMFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PROBLEM.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PROBLEMClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends USERDefaultArgs<ExtArgs> = {}>(args?: Subset<T, USERDefaultArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submission<T extends PROBLEM$submissionArgs<ExtArgs> = {}>(args?: Subset<T, PROBLEM$submissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SUBMISSIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    solvedBy<T extends PROBLEM$solvedByArgs<ExtArgs> = {}>(args?: Subset<T, PROBLEM$solvedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PROBLEMSOLVEDPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PROBLEM model
   */
  interface PROBLEMFieldRefs {
    readonly id: FieldRef<"PROBLEM", 'String'>
    readonly title: FieldRef<"PROBLEM", 'String'>
    readonly description: FieldRef<"PROBLEM", 'String'>
    readonly difficulty: FieldRef<"PROBLEM", 'Difficulty'>
    readonly tags: FieldRef<"PROBLEM", 'String[]'>
    readonly userId: FieldRef<"PROBLEM", 'String'>
    readonly examples: FieldRef<"PROBLEM", 'Json'>
    readonly constraints: FieldRef<"PROBLEM", 'String'>
    readonly hints: FieldRef<"PROBLEM", 'String'>
    readonly editorial: FieldRef<"PROBLEM", 'String'>
    readonly testCases: FieldRef<"PROBLEM", 'Json'>
    readonly codeSnippet: FieldRef<"PROBLEM", 'Json'>
    readonly refrenceSolutions: FieldRef<"PROBLEM", 'Json'>
    readonly createdAt: FieldRef<"PROBLEM", 'DateTime'>
    readonly updatedAt: FieldRef<"PROBLEM", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PROBLEM findUnique
   */
  export type PROBLEMFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEM
     */
    select?: PROBLEMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEM
     */
    omit?: PROBLEMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMInclude<ExtArgs> | null
    /**
     * Filter, which PROBLEM to fetch.
     */
    where: PROBLEMWhereUniqueInput
  }

  /**
   * PROBLEM findUniqueOrThrow
   */
  export type PROBLEMFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEM
     */
    select?: PROBLEMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEM
     */
    omit?: PROBLEMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMInclude<ExtArgs> | null
    /**
     * Filter, which PROBLEM to fetch.
     */
    where: PROBLEMWhereUniqueInput
  }

  /**
   * PROBLEM findFirst
   */
  export type PROBLEMFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEM
     */
    select?: PROBLEMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEM
     */
    omit?: PROBLEMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMInclude<ExtArgs> | null
    /**
     * Filter, which PROBLEM to fetch.
     */
    where?: PROBLEMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PROBLEMS to fetch.
     */
    orderBy?: PROBLEMOrderByWithRelationInput | PROBLEMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PROBLEMS.
     */
    cursor?: PROBLEMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PROBLEMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PROBLEMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PROBLEMS.
     */
    distinct?: PROBLEMScalarFieldEnum | PROBLEMScalarFieldEnum[]
  }

  /**
   * PROBLEM findFirstOrThrow
   */
  export type PROBLEMFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEM
     */
    select?: PROBLEMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEM
     */
    omit?: PROBLEMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMInclude<ExtArgs> | null
    /**
     * Filter, which PROBLEM to fetch.
     */
    where?: PROBLEMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PROBLEMS to fetch.
     */
    orderBy?: PROBLEMOrderByWithRelationInput | PROBLEMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PROBLEMS.
     */
    cursor?: PROBLEMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PROBLEMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PROBLEMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PROBLEMS.
     */
    distinct?: PROBLEMScalarFieldEnum | PROBLEMScalarFieldEnum[]
  }

  /**
   * PROBLEM findMany
   */
  export type PROBLEMFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEM
     */
    select?: PROBLEMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEM
     */
    omit?: PROBLEMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMInclude<ExtArgs> | null
    /**
     * Filter, which PROBLEMS to fetch.
     */
    where?: PROBLEMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PROBLEMS to fetch.
     */
    orderBy?: PROBLEMOrderByWithRelationInput | PROBLEMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PROBLEMS.
     */
    cursor?: PROBLEMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PROBLEMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PROBLEMS.
     */
    skip?: number
    distinct?: PROBLEMScalarFieldEnum | PROBLEMScalarFieldEnum[]
  }

  /**
   * PROBLEM create
   */
  export type PROBLEMCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEM
     */
    select?: PROBLEMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEM
     */
    omit?: PROBLEMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMInclude<ExtArgs> | null
    /**
     * The data needed to create a PROBLEM.
     */
    data: XOR<PROBLEMCreateInput, PROBLEMUncheckedCreateInput>
  }

  /**
   * PROBLEM createMany
   */
  export type PROBLEMCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PROBLEMS.
     */
    data: PROBLEMCreateManyInput | PROBLEMCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PROBLEM createManyAndReturn
   */
  export type PROBLEMCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEM
     */
    select?: PROBLEMSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEM
     */
    omit?: PROBLEMOmit<ExtArgs> | null
    /**
     * The data used to create many PROBLEMS.
     */
    data: PROBLEMCreateManyInput | PROBLEMCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PROBLEM update
   */
  export type PROBLEMUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEM
     */
    select?: PROBLEMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEM
     */
    omit?: PROBLEMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMInclude<ExtArgs> | null
    /**
     * The data needed to update a PROBLEM.
     */
    data: XOR<PROBLEMUpdateInput, PROBLEMUncheckedUpdateInput>
    /**
     * Choose, which PROBLEM to update.
     */
    where: PROBLEMWhereUniqueInput
  }

  /**
   * PROBLEM updateMany
   */
  export type PROBLEMUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PROBLEMS.
     */
    data: XOR<PROBLEMUpdateManyMutationInput, PROBLEMUncheckedUpdateManyInput>
    /**
     * Filter which PROBLEMS to update
     */
    where?: PROBLEMWhereInput
    /**
     * Limit how many PROBLEMS to update.
     */
    limit?: number
  }

  /**
   * PROBLEM updateManyAndReturn
   */
  export type PROBLEMUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEM
     */
    select?: PROBLEMSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEM
     */
    omit?: PROBLEMOmit<ExtArgs> | null
    /**
     * The data used to update PROBLEMS.
     */
    data: XOR<PROBLEMUpdateManyMutationInput, PROBLEMUncheckedUpdateManyInput>
    /**
     * Filter which PROBLEMS to update
     */
    where?: PROBLEMWhereInput
    /**
     * Limit how many PROBLEMS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PROBLEM upsert
   */
  export type PROBLEMUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEM
     */
    select?: PROBLEMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEM
     */
    omit?: PROBLEMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMInclude<ExtArgs> | null
    /**
     * The filter to search for the PROBLEM to update in case it exists.
     */
    where: PROBLEMWhereUniqueInput
    /**
     * In case the PROBLEM found by the `where` argument doesn't exist, create a new PROBLEM with this data.
     */
    create: XOR<PROBLEMCreateInput, PROBLEMUncheckedCreateInput>
    /**
     * In case the PROBLEM was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PROBLEMUpdateInput, PROBLEMUncheckedUpdateInput>
  }

  /**
   * PROBLEM delete
   */
  export type PROBLEMDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEM
     */
    select?: PROBLEMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEM
     */
    omit?: PROBLEMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMInclude<ExtArgs> | null
    /**
     * Filter which PROBLEM to delete.
     */
    where: PROBLEMWhereUniqueInput
  }

  /**
   * PROBLEM deleteMany
   */
  export type PROBLEMDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PROBLEMS to delete
     */
    where?: PROBLEMWhereInput
    /**
     * Limit how many PROBLEMS to delete.
     */
    limit?: number
  }

  /**
   * PROBLEM.submission
   */
  export type PROBLEM$submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SUBMISSION
     */
    select?: SUBMISSIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SUBMISSION
     */
    omit?: SUBMISSIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SUBMISSIONInclude<ExtArgs> | null
    where?: SUBMISSIONWhereInput
    orderBy?: SUBMISSIONOrderByWithRelationInput | SUBMISSIONOrderByWithRelationInput[]
    cursor?: SUBMISSIONWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SUBMISSIONScalarFieldEnum | SUBMISSIONScalarFieldEnum[]
  }

  /**
   * PROBLEM.solvedBy
   */
  export type PROBLEM$solvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEMSOLVED
     */
    select?: PROBLEMSOLVEDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEMSOLVED
     */
    omit?: PROBLEMSOLVEDOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMSOLVEDInclude<ExtArgs> | null
    where?: PROBLEMSOLVEDWhereInput
    orderBy?: PROBLEMSOLVEDOrderByWithRelationInput | PROBLEMSOLVEDOrderByWithRelationInput[]
    cursor?: PROBLEMSOLVEDWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PROBLEMSOLVEDScalarFieldEnum | PROBLEMSOLVEDScalarFieldEnum[]
  }

  /**
   * PROBLEM without action
   */
  export type PROBLEMDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEM
     */
    select?: PROBLEMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEM
     */
    omit?: PROBLEMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMInclude<ExtArgs> | null
  }


  /**
   * Model SUBMISSION
   */

  export type AggregateSUBMISSION = {
    _count: SUBMISSIONCountAggregateOutputType | null
    _min: SUBMISSIONMinAggregateOutputType | null
    _max: SUBMISSIONMaxAggregateOutputType | null
  }

  export type SUBMISSIONMinAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    laguage: string | null
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SUBMISSIONMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    laguage: string | null
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SUBMISSIONCountAggregateOutputType = {
    id: number
    userId: number
    problemId: number
    sourceCode: number
    laguage: number
    stdin: number
    stdout: number
    stderr: number
    compileOutput: number
    status: number
    memory: number
    time: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SUBMISSIONMinAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    laguage?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SUBMISSIONMaxAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    laguage?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SUBMISSIONCountAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    sourceCode?: true
    laguage?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SUBMISSIONAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SUBMISSION to aggregate.
     */
    where?: SUBMISSIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SUBMISSIONS to fetch.
     */
    orderBy?: SUBMISSIONOrderByWithRelationInput | SUBMISSIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SUBMISSIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SUBMISSIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SUBMISSIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SUBMISSIONS
    **/
    _count?: true | SUBMISSIONCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SUBMISSIONMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SUBMISSIONMaxAggregateInputType
  }

  export type GetSUBMISSIONAggregateType<T extends SUBMISSIONAggregateArgs> = {
        [P in keyof T & keyof AggregateSUBMISSION]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSUBMISSION[P]>
      : GetScalarType<T[P], AggregateSUBMISSION[P]>
  }




  export type SUBMISSIONGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SUBMISSIONWhereInput
    orderBy?: SUBMISSIONOrderByWithAggregationInput | SUBMISSIONOrderByWithAggregationInput[]
    by: SUBMISSIONScalarFieldEnum[] | SUBMISSIONScalarFieldEnum
    having?: SUBMISSIONScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SUBMISSIONCountAggregateInputType | true
    _min?: SUBMISSIONMinAggregateInputType
    _max?: SUBMISSIONMaxAggregateInputType
  }

  export type SUBMISSIONGroupByOutputType = {
    id: string
    userId: string
    problemId: string
    sourceCode: JsonValue
    laguage: string
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: string
    memory: string
    time: string
    createdAt: Date
    updatedAt: Date
    _count: SUBMISSIONCountAggregateOutputType | null
    _min: SUBMISSIONMinAggregateOutputType | null
    _max: SUBMISSIONMaxAggregateOutputType | null
  }

  type GetSUBMISSIONGroupByPayload<T extends SUBMISSIONGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SUBMISSIONGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SUBMISSIONGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SUBMISSIONGroupByOutputType[P]>
            : GetScalarType<T[P], SUBMISSIONGroupByOutputType[P]>
        }
      >
    >


  export type SUBMISSIONSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    laguage?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | USERDefaultArgs<ExtArgs>
    problem?: boolean | PROBLEMDefaultArgs<ExtArgs>
    testCases?: boolean | SUBMISSION$testCasesArgs<ExtArgs>
    _count?: boolean | SUBMISSIONCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sUBMISSION"]>

  export type SUBMISSIONSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    laguage?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | USERDefaultArgs<ExtArgs>
    problem?: boolean | PROBLEMDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sUBMISSION"]>

  export type SUBMISSIONSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    laguage?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | USERDefaultArgs<ExtArgs>
    problem?: boolean | PROBLEMDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sUBMISSION"]>

  export type SUBMISSIONSelectScalar = {
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    laguage?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SUBMISSIONOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "problemId" | "sourceCode" | "laguage" | "stdin" | "stdout" | "stderr" | "compileOutput" | "status" | "memory" | "time" | "createdAt" | "updatedAt", ExtArgs["result"]["sUBMISSION"]>
  export type SUBMISSIONInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | USERDefaultArgs<ExtArgs>
    problem?: boolean | PROBLEMDefaultArgs<ExtArgs>
    testCases?: boolean | SUBMISSION$testCasesArgs<ExtArgs>
    _count?: boolean | SUBMISSIONCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SUBMISSIONIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | USERDefaultArgs<ExtArgs>
    problem?: boolean | PROBLEMDefaultArgs<ExtArgs>
  }
  export type SUBMISSIONIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | USERDefaultArgs<ExtArgs>
    problem?: boolean | PROBLEMDefaultArgs<ExtArgs>
  }

  export type $SUBMISSIONPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SUBMISSION"
    objects: {
      user: Prisma.$USERPayload<ExtArgs>
      problem: Prisma.$PROBLEMPayload<ExtArgs>
      testCases: Prisma.$TESTCASERESULTPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      problemId: string
      sourceCode: Prisma.JsonValue
      laguage: string
      stdin: string | null
      stdout: string | null
      stderr: string | null
      compileOutput: string | null
      status: string
      memory: string
      time: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sUBMISSION"]>
    composites: {}
  }

  type SUBMISSIONGetPayload<S extends boolean | null | undefined | SUBMISSIONDefaultArgs> = $Result.GetResult<Prisma.$SUBMISSIONPayload, S>

  type SUBMISSIONCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SUBMISSIONFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SUBMISSIONCountAggregateInputType | true
    }

  export interface SUBMISSIONDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SUBMISSION'], meta: { name: 'SUBMISSION' } }
    /**
     * Find zero or one SUBMISSION that matches the filter.
     * @param {SUBMISSIONFindUniqueArgs} args - Arguments to find a SUBMISSION
     * @example
     * // Get one SUBMISSION
     * const sUBMISSION = await prisma.sUBMISSION.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SUBMISSIONFindUniqueArgs>(args: SelectSubset<T, SUBMISSIONFindUniqueArgs<ExtArgs>>): Prisma__SUBMISSIONClient<$Result.GetResult<Prisma.$SUBMISSIONPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SUBMISSION that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SUBMISSIONFindUniqueOrThrowArgs} args - Arguments to find a SUBMISSION
     * @example
     * // Get one SUBMISSION
     * const sUBMISSION = await prisma.sUBMISSION.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SUBMISSIONFindUniqueOrThrowArgs>(args: SelectSubset<T, SUBMISSIONFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SUBMISSIONClient<$Result.GetResult<Prisma.$SUBMISSIONPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SUBMISSION that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SUBMISSIONFindFirstArgs} args - Arguments to find a SUBMISSION
     * @example
     * // Get one SUBMISSION
     * const sUBMISSION = await prisma.sUBMISSION.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SUBMISSIONFindFirstArgs>(args?: SelectSubset<T, SUBMISSIONFindFirstArgs<ExtArgs>>): Prisma__SUBMISSIONClient<$Result.GetResult<Prisma.$SUBMISSIONPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SUBMISSION that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SUBMISSIONFindFirstOrThrowArgs} args - Arguments to find a SUBMISSION
     * @example
     * // Get one SUBMISSION
     * const sUBMISSION = await prisma.sUBMISSION.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SUBMISSIONFindFirstOrThrowArgs>(args?: SelectSubset<T, SUBMISSIONFindFirstOrThrowArgs<ExtArgs>>): Prisma__SUBMISSIONClient<$Result.GetResult<Prisma.$SUBMISSIONPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SUBMISSIONS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SUBMISSIONFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SUBMISSIONS
     * const sUBMISSIONS = await prisma.sUBMISSION.findMany()
     * 
     * // Get first 10 SUBMISSIONS
     * const sUBMISSIONS = await prisma.sUBMISSION.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sUBMISSIONWithIdOnly = await prisma.sUBMISSION.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SUBMISSIONFindManyArgs>(args?: SelectSubset<T, SUBMISSIONFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SUBMISSIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SUBMISSION.
     * @param {SUBMISSIONCreateArgs} args - Arguments to create a SUBMISSION.
     * @example
     * // Create one SUBMISSION
     * const SUBMISSION = await prisma.sUBMISSION.create({
     *   data: {
     *     // ... data to create a SUBMISSION
     *   }
     * })
     * 
     */
    create<T extends SUBMISSIONCreateArgs>(args: SelectSubset<T, SUBMISSIONCreateArgs<ExtArgs>>): Prisma__SUBMISSIONClient<$Result.GetResult<Prisma.$SUBMISSIONPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SUBMISSIONS.
     * @param {SUBMISSIONCreateManyArgs} args - Arguments to create many SUBMISSIONS.
     * @example
     * // Create many SUBMISSIONS
     * const sUBMISSION = await prisma.sUBMISSION.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SUBMISSIONCreateManyArgs>(args?: SelectSubset<T, SUBMISSIONCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SUBMISSIONS and returns the data saved in the database.
     * @param {SUBMISSIONCreateManyAndReturnArgs} args - Arguments to create many SUBMISSIONS.
     * @example
     * // Create many SUBMISSIONS
     * const sUBMISSION = await prisma.sUBMISSION.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SUBMISSIONS and only return the `id`
     * const sUBMISSIONWithIdOnly = await prisma.sUBMISSION.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SUBMISSIONCreateManyAndReturnArgs>(args?: SelectSubset<T, SUBMISSIONCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SUBMISSIONPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SUBMISSION.
     * @param {SUBMISSIONDeleteArgs} args - Arguments to delete one SUBMISSION.
     * @example
     * // Delete one SUBMISSION
     * const SUBMISSION = await prisma.sUBMISSION.delete({
     *   where: {
     *     // ... filter to delete one SUBMISSION
     *   }
     * })
     * 
     */
    delete<T extends SUBMISSIONDeleteArgs>(args: SelectSubset<T, SUBMISSIONDeleteArgs<ExtArgs>>): Prisma__SUBMISSIONClient<$Result.GetResult<Prisma.$SUBMISSIONPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SUBMISSION.
     * @param {SUBMISSIONUpdateArgs} args - Arguments to update one SUBMISSION.
     * @example
     * // Update one SUBMISSION
     * const sUBMISSION = await prisma.sUBMISSION.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SUBMISSIONUpdateArgs>(args: SelectSubset<T, SUBMISSIONUpdateArgs<ExtArgs>>): Prisma__SUBMISSIONClient<$Result.GetResult<Prisma.$SUBMISSIONPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SUBMISSIONS.
     * @param {SUBMISSIONDeleteManyArgs} args - Arguments to filter SUBMISSIONS to delete.
     * @example
     * // Delete a few SUBMISSIONS
     * const { count } = await prisma.sUBMISSION.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SUBMISSIONDeleteManyArgs>(args?: SelectSubset<T, SUBMISSIONDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SUBMISSIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SUBMISSIONUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SUBMISSIONS
     * const sUBMISSION = await prisma.sUBMISSION.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SUBMISSIONUpdateManyArgs>(args: SelectSubset<T, SUBMISSIONUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SUBMISSIONS and returns the data updated in the database.
     * @param {SUBMISSIONUpdateManyAndReturnArgs} args - Arguments to update many SUBMISSIONS.
     * @example
     * // Update many SUBMISSIONS
     * const sUBMISSION = await prisma.sUBMISSION.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SUBMISSIONS and only return the `id`
     * const sUBMISSIONWithIdOnly = await prisma.sUBMISSION.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SUBMISSIONUpdateManyAndReturnArgs>(args: SelectSubset<T, SUBMISSIONUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SUBMISSIONPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SUBMISSION.
     * @param {SUBMISSIONUpsertArgs} args - Arguments to update or create a SUBMISSION.
     * @example
     * // Update or create a SUBMISSION
     * const sUBMISSION = await prisma.sUBMISSION.upsert({
     *   create: {
     *     // ... data to create a SUBMISSION
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SUBMISSION we want to update
     *   }
     * })
     */
    upsert<T extends SUBMISSIONUpsertArgs>(args: SelectSubset<T, SUBMISSIONUpsertArgs<ExtArgs>>): Prisma__SUBMISSIONClient<$Result.GetResult<Prisma.$SUBMISSIONPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SUBMISSIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SUBMISSIONCountArgs} args - Arguments to filter SUBMISSIONS to count.
     * @example
     * // Count the number of SUBMISSIONS
     * const count = await prisma.sUBMISSION.count({
     *   where: {
     *     // ... the filter for the SUBMISSIONS we want to count
     *   }
     * })
    **/
    count<T extends SUBMISSIONCountArgs>(
      args?: Subset<T, SUBMISSIONCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SUBMISSIONCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SUBMISSION.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SUBMISSIONAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SUBMISSIONAggregateArgs>(args: Subset<T, SUBMISSIONAggregateArgs>): Prisma.PrismaPromise<GetSUBMISSIONAggregateType<T>>

    /**
     * Group by SUBMISSION.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SUBMISSIONGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SUBMISSIONGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SUBMISSIONGroupByArgs['orderBy'] }
        : { orderBy?: SUBMISSIONGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SUBMISSIONGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSUBMISSIONGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SUBMISSION model
   */
  readonly fields: SUBMISSIONFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SUBMISSION.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SUBMISSIONClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends USERDefaultArgs<ExtArgs> = {}>(args?: Subset<T, USERDefaultArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends PROBLEMDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PROBLEMDefaultArgs<ExtArgs>>): Prisma__PROBLEMClient<$Result.GetResult<Prisma.$PROBLEMPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    testCases<T extends SUBMISSION$testCasesArgs<ExtArgs> = {}>(args?: Subset<T, SUBMISSION$testCasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TESTCASERESULTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SUBMISSION model
   */
  interface SUBMISSIONFieldRefs {
    readonly id: FieldRef<"SUBMISSION", 'String'>
    readonly userId: FieldRef<"SUBMISSION", 'String'>
    readonly problemId: FieldRef<"SUBMISSION", 'String'>
    readonly sourceCode: FieldRef<"SUBMISSION", 'Json'>
    readonly laguage: FieldRef<"SUBMISSION", 'String'>
    readonly stdin: FieldRef<"SUBMISSION", 'String'>
    readonly stdout: FieldRef<"SUBMISSION", 'String'>
    readonly stderr: FieldRef<"SUBMISSION", 'String'>
    readonly compileOutput: FieldRef<"SUBMISSION", 'String'>
    readonly status: FieldRef<"SUBMISSION", 'String'>
    readonly memory: FieldRef<"SUBMISSION", 'String'>
    readonly time: FieldRef<"SUBMISSION", 'String'>
    readonly createdAt: FieldRef<"SUBMISSION", 'DateTime'>
    readonly updatedAt: FieldRef<"SUBMISSION", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SUBMISSION findUnique
   */
  export type SUBMISSIONFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SUBMISSION
     */
    select?: SUBMISSIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SUBMISSION
     */
    omit?: SUBMISSIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SUBMISSIONInclude<ExtArgs> | null
    /**
     * Filter, which SUBMISSION to fetch.
     */
    where: SUBMISSIONWhereUniqueInput
  }

  /**
   * SUBMISSION findUniqueOrThrow
   */
  export type SUBMISSIONFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SUBMISSION
     */
    select?: SUBMISSIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SUBMISSION
     */
    omit?: SUBMISSIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SUBMISSIONInclude<ExtArgs> | null
    /**
     * Filter, which SUBMISSION to fetch.
     */
    where: SUBMISSIONWhereUniqueInput
  }

  /**
   * SUBMISSION findFirst
   */
  export type SUBMISSIONFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SUBMISSION
     */
    select?: SUBMISSIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SUBMISSION
     */
    omit?: SUBMISSIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SUBMISSIONInclude<ExtArgs> | null
    /**
     * Filter, which SUBMISSION to fetch.
     */
    where?: SUBMISSIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SUBMISSIONS to fetch.
     */
    orderBy?: SUBMISSIONOrderByWithRelationInput | SUBMISSIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SUBMISSIONS.
     */
    cursor?: SUBMISSIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SUBMISSIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SUBMISSIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SUBMISSIONS.
     */
    distinct?: SUBMISSIONScalarFieldEnum | SUBMISSIONScalarFieldEnum[]
  }

  /**
   * SUBMISSION findFirstOrThrow
   */
  export type SUBMISSIONFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SUBMISSION
     */
    select?: SUBMISSIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SUBMISSION
     */
    omit?: SUBMISSIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SUBMISSIONInclude<ExtArgs> | null
    /**
     * Filter, which SUBMISSION to fetch.
     */
    where?: SUBMISSIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SUBMISSIONS to fetch.
     */
    orderBy?: SUBMISSIONOrderByWithRelationInput | SUBMISSIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SUBMISSIONS.
     */
    cursor?: SUBMISSIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SUBMISSIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SUBMISSIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SUBMISSIONS.
     */
    distinct?: SUBMISSIONScalarFieldEnum | SUBMISSIONScalarFieldEnum[]
  }

  /**
   * SUBMISSION findMany
   */
  export type SUBMISSIONFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SUBMISSION
     */
    select?: SUBMISSIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SUBMISSION
     */
    omit?: SUBMISSIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SUBMISSIONInclude<ExtArgs> | null
    /**
     * Filter, which SUBMISSIONS to fetch.
     */
    where?: SUBMISSIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SUBMISSIONS to fetch.
     */
    orderBy?: SUBMISSIONOrderByWithRelationInput | SUBMISSIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SUBMISSIONS.
     */
    cursor?: SUBMISSIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SUBMISSIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SUBMISSIONS.
     */
    skip?: number
    distinct?: SUBMISSIONScalarFieldEnum | SUBMISSIONScalarFieldEnum[]
  }

  /**
   * SUBMISSION create
   */
  export type SUBMISSIONCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SUBMISSION
     */
    select?: SUBMISSIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SUBMISSION
     */
    omit?: SUBMISSIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SUBMISSIONInclude<ExtArgs> | null
    /**
     * The data needed to create a SUBMISSION.
     */
    data: XOR<SUBMISSIONCreateInput, SUBMISSIONUncheckedCreateInput>
  }

  /**
   * SUBMISSION createMany
   */
  export type SUBMISSIONCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SUBMISSIONS.
     */
    data: SUBMISSIONCreateManyInput | SUBMISSIONCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SUBMISSION createManyAndReturn
   */
  export type SUBMISSIONCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SUBMISSION
     */
    select?: SUBMISSIONSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SUBMISSION
     */
    omit?: SUBMISSIONOmit<ExtArgs> | null
    /**
     * The data used to create many SUBMISSIONS.
     */
    data: SUBMISSIONCreateManyInput | SUBMISSIONCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SUBMISSIONIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SUBMISSION update
   */
  export type SUBMISSIONUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SUBMISSION
     */
    select?: SUBMISSIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SUBMISSION
     */
    omit?: SUBMISSIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SUBMISSIONInclude<ExtArgs> | null
    /**
     * The data needed to update a SUBMISSION.
     */
    data: XOR<SUBMISSIONUpdateInput, SUBMISSIONUncheckedUpdateInput>
    /**
     * Choose, which SUBMISSION to update.
     */
    where: SUBMISSIONWhereUniqueInput
  }

  /**
   * SUBMISSION updateMany
   */
  export type SUBMISSIONUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SUBMISSIONS.
     */
    data: XOR<SUBMISSIONUpdateManyMutationInput, SUBMISSIONUncheckedUpdateManyInput>
    /**
     * Filter which SUBMISSIONS to update
     */
    where?: SUBMISSIONWhereInput
    /**
     * Limit how many SUBMISSIONS to update.
     */
    limit?: number
  }

  /**
   * SUBMISSION updateManyAndReturn
   */
  export type SUBMISSIONUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SUBMISSION
     */
    select?: SUBMISSIONSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SUBMISSION
     */
    omit?: SUBMISSIONOmit<ExtArgs> | null
    /**
     * The data used to update SUBMISSIONS.
     */
    data: XOR<SUBMISSIONUpdateManyMutationInput, SUBMISSIONUncheckedUpdateManyInput>
    /**
     * Filter which SUBMISSIONS to update
     */
    where?: SUBMISSIONWhereInput
    /**
     * Limit how many SUBMISSIONS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SUBMISSIONIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SUBMISSION upsert
   */
  export type SUBMISSIONUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SUBMISSION
     */
    select?: SUBMISSIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SUBMISSION
     */
    omit?: SUBMISSIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SUBMISSIONInclude<ExtArgs> | null
    /**
     * The filter to search for the SUBMISSION to update in case it exists.
     */
    where: SUBMISSIONWhereUniqueInput
    /**
     * In case the SUBMISSION found by the `where` argument doesn't exist, create a new SUBMISSION with this data.
     */
    create: XOR<SUBMISSIONCreateInput, SUBMISSIONUncheckedCreateInput>
    /**
     * In case the SUBMISSION was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SUBMISSIONUpdateInput, SUBMISSIONUncheckedUpdateInput>
  }

  /**
   * SUBMISSION delete
   */
  export type SUBMISSIONDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SUBMISSION
     */
    select?: SUBMISSIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SUBMISSION
     */
    omit?: SUBMISSIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SUBMISSIONInclude<ExtArgs> | null
    /**
     * Filter which SUBMISSION to delete.
     */
    where: SUBMISSIONWhereUniqueInput
  }

  /**
   * SUBMISSION deleteMany
   */
  export type SUBMISSIONDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SUBMISSIONS to delete
     */
    where?: SUBMISSIONWhereInput
    /**
     * Limit how many SUBMISSIONS to delete.
     */
    limit?: number
  }

  /**
   * SUBMISSION.testCases
   */
  export type SUBMISSION$testCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTCASERESULT
     */
    select?: TESTCASERESULTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TESTCASERESULT
     */
    omit?: TESTCASERESULTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTCASERESULTInclude<ExtArgs> | null
    where?: TESTCASERESULTWhereInput
    orderBy?: TESTCASERESULTOrderByWithRelationInput | TESTCASERESULTOrderByWithRelationInput[]
    cursor?: TESTCASERESULTWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TESTCASERESULTScalarFieldEnum | TESTCASERESULTScalarFieldEnum[]
  }

  /**
   * SUBMISSION without action
   */
  export type SUBMISSIONDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SUBMISSION
     */
    select?: SUBMISSIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SUBMISSION
     */
    omit?: SUBMISSIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SUBMISSIONInclude<ExtArgs> | null
  }


  /**
   * Model TESTCASERESULT
   */

  export type AggregateTESTCASERESULT = {
    _count: TESTCASERESULTCountAggregateOutputType | null
    _avg: TESTCASERESULTAvgAggregateOutputType | null
    _sum: TESTCASERESULTSumAggregateOutputType | null
    _min: TESTCASERESULTMinAggregateOutputType | null
    _max: TESTCASERESULTMaxAggregateOutputType | null
  }

  export type TESTCASERESULTAvgAggregateOutputType = {
    testCase: number | null
  }

  export type TESTCASERESULTSumAggregateOutputType = {
    testCase: number | null
  }

  export type TESTCASERESULTMinAggregateOutputType = {
    id: string | null
    submissionID: string | null
    testCase: number | null
    passed: boolean | null
    stdin: string | null
    stdout: string | null
    stderr: string | null
    expoectedOutput: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
  }

  export type TESTCASERESULTMaxAggregateOutputType = {
    id: string | null
    submissionID: string | null
    testCase: number | null
    passed: boolean | null
    stdin: string | null
    stdout: string | null
    stderr: string | null
    expoectedOutput: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
  }

  export type TESTCASERESULTCountAggregateOutputType = {
    id: number
    submissionID: number
    testCase: number
    passed: number
    stdin: number
    stdout: number
    stderr: number
    expoectedOutput: number
    compileOutput: number
    status: number
    memory: number
    time: number
    _all: number
  }


  export type TESTCASERESULTAvgAggregateInputType = {
    testCase?: true
  }

  export type TESTCASERESULTSumAggregateInputType = {
    testCase?: true
  }

  export type TESTCASERESULTMinAggregateInputType = {
    id?: true
    submissionID?: true
    testCase?: true
    passed?: true
    stdin?: true
    stdout?: true
    stderr?: true
    expoectedOutput?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
  }

  export type TESTCASERESULTMaxAggregateInputType = {
    id?: true
    submissionID?: true
    testCase?: true
    passed?: true
    stdin?: true
    stdout?: true
    stderr?: true
    expoectedOutput?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
  }

  export type TESTCASERESULTCountAggregateInputType = {
    id?: true
    submissionID?: true
    testCase?: true
    passed?: true
    stdin?: true
    stdout?: true
    stderr?: true
    expoectedOutput?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    _all?: true
  }

  export type TESTCASERESULTAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TESTCASERESULT to aggregate.
     */
    where?: TESTCASERESULTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TESTCASERESULTS to fetch.
     */
    orderBy?: TESTCASERESULTOrderByWithRelationInput | TESTCASERESULTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TESTCASERESULTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TESTCASERESULTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TESTCASERESULTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TESTCASERESULTS
    **/
    _count?: true | TESTCASERESULTCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TESTCASERESULTAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TESTCASERESULTSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TESTCASERESULTMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TESTCASERESULTMaxAggregateInputType
  }

  export type GetTESTCASERESULTAggregateType<T extends TESTCASERESULTAggregateArgs> = {
        [P in keyof T & keyof AggregateTESTCASERESULT]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTESTCASERESULT[P]>
      : GetScalarType<T[P], AggregateTESTCASERESULT[P]>
  }




  export type TESTCASERESULTGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TESTCASERESULTWhereInput
    orderBy?: TESTCASERESULTOrderByWithAggregationInput | TESTCASERESULTOrderByWithAggregationInput[]
    by: TESTCASERESULTScalarFieldEnum[] | TESTCASERESULTScalarFieldEnum
    having?: TESTCASERESULTScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TESTCASERESULTCountAggregateInputType | true
    _avg?: TESTCASERESULTAvgAggregateInputType
    _sum?: TESTCASERESULTSumAggregateInputType
    _min?: TESTCASERESULTMinAggregateInputType
    _max?: TESTCASERESULTMaxAggregateInputType
  }

  export type TESTCASERESULTGroupByOutputType = {
    id: string
    submissionID: string
    testCase: number
    passed: boolean
    stdin: string | null
    stdout: string | null
    stderr: string | null
    expoectedOutput: string | null
    compileOutput: string | null
    status: string
    memory: string | null
    time: string | null
    _count: TESTCASERESULTCountAggregateOutputType | null
    _avg: TESTCASERESULTAvgAggregateOutputType | null
    _sum: TESTCASERESULTSumAggregateOutputType | null
    _min: TESTCASERESULTMinAggregateOutputType | null
    _max: TESTCASERESULTMaxAggregateOutputType | null
  }

  type GetTESTCASERESULTGroupByPayload<T extends TESTCASERESULTGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TESTCASERESULTGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TESTCASERESULTGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TESTCASERESULTGroupByOutputType[P]>
            : GetScalarType<T[P], TESTCASERESULTGroupByOutputType[P]>
        }
      >
    >


  export type TESTCASERESULTSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionID?: boolean
    testCase?: boolean
    passed?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    expoectedOutput?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    submission?: boolean | SUBMISSIONDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tESTCASERESULT"]>

  export type TESTCASERESULTSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionID?: boolean
    testCase?: boolean
    passed?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    expoectedOutput?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    submission?: boolean | SUBMISSIONDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tESTCASERESULT"]>

  export type TESTCASERESULTSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionID?: boolean
    testCase?: boolean
    passed?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    expoectedOutput?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    submission?: boolean | SUBMISSIONDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tESTCASERESULT"]>

  export type TESTCASERESULTSelectScalar = {
    id?: boolean
    submissionID?: boolean
    testCase?: boolean
    passed?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    expoectedOutput?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
  }

  export type TESTCASERESULTOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "submissionID" | "testCase" | "passed" | "stdin" | "stdout" | "stderr" | "expoectedOutput" | "compileOutput" | "status" | "memory" | "time", ExtArgs["result"]["tESTCASERESULT"]>
  export type TESTCASERESULTInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SUBMISSIONDefaultArgs<ExtArgs>
  }
  export type TESTCASERESULTIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SUBMISSIONDefaultArgs<ExtArgs>
  }
  export type TESTCASERESULTIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SUBMISSIONDefaultArgs<ExtArgs>
  }

  export type $TESTCASERESULTPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TESTCASERESULT"
    objects: {
      submission: Prisma.$SUBMISSIONPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      submissionID: string
      testCase: number
      passed: boolean
      stdin: string | null
      stdout: string | null
      stderr: string | null
      expoectedOutput: string | null
      compileOutput: string | null
      status: string
      memory: string | null
      time: string | null
    }, ExtArgs["result"]["tESTCASERESULT"]>
    composites: {}
  }

  type TESTCASERESULTGetPayload<S extends boolean | null | undefined | TESTCASERESULTDefaultArgs> = $Result.GetResult<Prisma.$TESTCASERESULTPayload, S>

  type TESTCASERESULTCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TESTCASERESULTFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TESTCASERESULTCountAggregateInputType | true
    }

  export interface TESTCASERESULTDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TESTCASERESULT'], meta: { name: 'TESTCASERESULT' } }
    /**
     * Find zero or one TESTCASERESULT that matches the filter.
     * @param {TESTCASERESULTFindUniqueArgs} args - Arguments to find a TESTCASERESULT
     * @example
     * // Get one TESTCASERESULT
     * const tESTCASERESULT = await prisma.tESTCASERESULT.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TESTCASERESULTFindUniqueArgs>(args: SelectSubset<T, TESTCASERESULTFindUniqueArgs<ExtArgs>>): Prisma__TESTCASERESULTClient<$Result.GetResult<Prisma.$TESTCASERESULTPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TESTCASERESULT that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TESTCASERESULTFindUniqueOrThrowArgs} args - Arguments to find a TESTCASERESULT
     * @example
     * // Get one TESTCASERESULT
     * const tESTCASERESULT = await prisma.tESTCASERESULT.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TESTCASERESULTFindUniqueOrThrowArgs>(args: SelectSubset<T, TESTCASERESULTFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TESTCASERESULTClient<$Result.GetResult<Prisma.$TESTCASERESULTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TESTCASERESULT that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TESTCASERESULTFindFirstArgs} args - Arguments to find a TESTCASERESULT
     * @example
     * // Get one TESTCASERESULT
     * const tESTCASERESULT = await prisma.tESTCASERESULT.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TESTCASERESULTFindFirstArgs>(args?: SelectSubset<T, TESTCASERESULTFindFirstArgs<ExtArgs>>): Prisma__TESTCASERESULTClient<$Result.GetResult<Prisma.$TESTCASERESULTPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TESTCASERESULT that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TESTCASERESULTFindFirstOrThrowArgs} args - Arguments to find a TESTCASERESULT
     * @example
     * // Get one TESTCASERESULT
     * const tESTCASERESULT = await prisma.tESTCASERESULT.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TESTCASERESULTFindFirstOrThrowArgs>(args?: SelectSubset<T, TESTCASERESULTFindFirstOrThrowArgs<ExtArgs>>): Prisma__TESTCASERESULTClient<$Result.GetResult<Prisma.$TESTCASERESULTPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TESTCASERESULTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TESTCASERESULTFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TESTCASERESULTS
     * const tESTCASERESULTS = await prisma.tESTCASERESULT.findMany()
     * 
     * // Get first 10 TESTCASERESULTS
     * const tESTCASERESULTS = await prisma.tESTCASERESULT.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tESTCASERESULTWithIdOnly = await prisma.tESTCASERESULT.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TESTCASERESULTFindManyArgs>(args?: SelectSubset<T, TESTCASERESULTFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TESTCASERESULTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TESTCASERESULT.
     * @param {TESTCASERESULTCreateArgs} args - Arguments to create a TESTCASERESULT.
     * @example
     * // Create one TESTCASERESULT
     * const TESTCASERESULT = await prisma.tESTCASERESULT.create({
     *   data: {
     *     // ... data to create a TESTCASERESULT
     *   }
     * })
     * 
     */
    create<T extends TESTCASERESULTCreateArgs>(args: SelectSubset<T, TESTCASERESULTCreateArgs<ExtArgs>>): Prisma__TESTCASERESULTClient<$Result.GetResult<Prisma.$TESTCASERESULTPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TESTCASERESULTS.
     * @param {TESTCASERESULTCreateManyArgs} args - Arguments to create many TESTCASERESULTS.
     * @example
     * // Create many TESTCASERESULTS
     * const tESTCASERESULT = await prisma.tESTCASERESULT.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TESTCASERESULTCreateManyArgs>(args?: SelectSubset<T, TESTCASERESULTCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TESTCASERESULTS and returns the data saved in the database.
     * @param {TESTCASERESULTCreateManyAndReturnArgs} args - Arguments to create many TESTCASERESULTS.
     * @example
     * // Create many TESTCASERESULTS
     * const tESTCASERESULT = await prisma.tESTCASERESULT.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TESTCASERESULTS and only return the `id`
     * const tESTCASERESULTWithIdOnly = await prisma.tESTCASERESULT.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TESTCASERESULTCreateManyAndReturnArgs>(args?: SelectSubset<T, TESTCASERESULTCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TESTCASERESULTPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TESTCASERESULT.
     * @param {TESTCASERESULTDeleteArgs} args - Arguments to delete one TESTCASERESULT.
     * @example
     * // Delete one TESTCASERESULT
     * const TESTCASERESULT = await prisma.tESTCASERESULT.delete({
     *   where: {
     *     // ... filter to delete one TESTCASERESULT
     *   }
     * })
     * 
     */
    delete<T extends TESTCASERESULTDeleteArgs>(args: SelectSubset<T, TESTCASERESULTDeleteArgs<ExtArgs>>): Prisma__TESTCASERESULTClient<$Result.GetResult<Prisma.$TESTCASERESULTPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TESTCASERESULT.
     * @param {TESTCASERESULTUpdateArgs} args - Arguments to update one TESTCASERESULT.
     * @example
     * // Update one TESTCASERESULT
     * const tESTCASERESULT = await prisma.tESTCASERESULT.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TESTCASERESULTUpdateArgs>(args: SelectSubset<T, TESTCASERESULTUpdateArgs<ExtArgs>>): Prisma__TESTCASERESULTClient<$Result.GetResult<Prisma.$TESTCASERESULTPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TESTCASERESULTS.
     * @param {TESTCASERESULTDeleteManyArgs} args - Arguments to filter TESTCASERESULTS to delete.
     * @example
     * // Delete a few TESTCASERESULTS
     * const { count } = await prisma.tESTCASERESULT.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TESTCASERESULTDeleteManyArgs>(args?: SelectSubset<T, TESTCASERESULTDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TESTCASERESULTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TESTCASERESULTUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TESTCASERESULTS
     * const tESTCASERESULT = await prisma.tESTCASERESULT.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TESTCASERESULTUpdateManyArgs>(args: SelectSubset<T, TESTCASERESULTUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TESTCASERESULTS and returns the data updated in the database.
     * @param {TESTCASERESULTUpdateManyAndReturnArgs} args - Arguments to update many TESTCASERESULTS.
     * @example
     * // Update many TESTCASERESULTS
     * const tESTCASERESULT = await prisma.tESTCASERESULT.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TESTCASERESULTS and only return the `id`
     * const tESTCASERESULTWithIdOnly = await prisma.tESTCASERESULT.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TESTCASERESULTUpdateManyAndReturnArgs>(args: SelectSubset<T, TESTCASERESULTUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TESTCASERESULTPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TESTCASERESULT.
     * @param {TESTCASERESULTUpsertArgs} args - Arguments to update or create a TESTCASERESULT.
     * @example
     * // Update or create a TESTCASERESULT
     * const tESTCASERESULT = await prisma.tESTCASERESULT.upsert({
     *   create: {
     *     // ... data to create a TESTCASERESULT
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TESTCASERESULT we want to update
     *   }
     * })
     */
    upsert<T extends TESTCASERESULTUpsertArgs>(args: SelectSubset<T, TESTCASERESULTUpsertArgs<ExtArgs>>): Prisma__TESTCASERESULTClient<$Result.GetResult<Prisma.$TESTCASERESULTPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TESTCASERESULTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TESTCASERESULTCountArgs} args - Arguments to filter TESTCASERESULTS to count.
     * @example
     * // Count the number of TESTCASERESULTS
     * const count = await prisma.tESTCASERESULT.count({
     *   where: {
     *     // ... the filter for the TESTCASERESULTS we want to count
     *   }
     * })
    **/
    count<T extends TESTCASERESULTCountArgs>(
      args?: Subset<T, TESTCASERESULTCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TESTCASERESULTCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TESTCASERESULT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TESTCASERESULTAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TESTCASERESULTAggregateArgs>(args: Subset<T, TESTCASERESULTAggregateArgs>): Prisma.PrismaPromise<GetTESTCASERESULTAggregateType<T>>

    /**
     * Group by TESTCASERESULT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TESTCASERESULTGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TESTCASERESULTGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TESTCASERESULTGroupByArgs['orderBy'] }
        : { orderBy?: TESTCASERESULTGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TESTCASERESULTGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTESTCASERESULTGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TESTCASERESULT model
   */
  readonly fields: TESTCASERESULTFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TESTCASERESULT.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TESTCASERESULTClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends SUBMISSIONDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SUBMISSIONDefaultArgs<ExtArgs>>): Prisma__SUBMISSIONClient<$Result.GetResult<Prisma.$SUBMISSIONPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TESTCASERESULT model
   */
  interface TESTCASERESULTFieldRefs {
    readonly id: FieldRef<"TESTCASERESULT", 'String'>
    readonly submissionID: FieldRef<"TESTCASERESULT", 'String'>
    readonly testCase: FieldRef<"TESTCASERESULT", 'Int'>
    readonly passed: FieldRef<"TESTCASERESULT", 'Boolean'>
    readonly stdin: FieldRef<"TESTCASERESULT", 'String'>
    readonly stdout: FieldRef<"TESTCASERESULT", 'String'>
    readonly stderr: FieldRef<"TESTCASERESULT", 'String'>
    readonly expoectedOutput: FieldRef<"TESTCASERESULT", 'String'>
    readonly compileOutput: FieldRef<"TESTCASERESULT", 'String'>
    readonly status: FieldRef<"TESTCASERESULT", 'String'>
    readonly memory: FieldRef<"TESTCASERESULT", 'String'>
    readonly time: FieldRef<"TESTCASERESULT", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TESTCASERESULT findUnique
   */
  export type TESTCASERESULTFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTCASERESULT
     */
    select?: TESTCASERESULTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TESTCASERESULT
     */
    omit?: TESTCASERESULTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTCASERESULTInclude<ExtArgs> | null
    /**
     * Filter, which TESTCASERESULT to fetch.
     */
    where: TESTCASERESULTWhereUniqueInput
  }

  /**
   * TESTCASERESULT findUniqueOrThrow
   */
  export type TESTCASERESULTFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTCASERESULT
     */
    select?: TESTCASERESULTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TESTCASERESULT
     */
    omit?: TESTCASERESULTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTCASERESULTInclude<ExtArgs> | null
    /**
     * Filter, which TESTCASERESULT to fetch.
     */
    where: TESTCASERESULTWhereUniqueInput
  }

  /**
   * TESTCASERESULT findFirst
   */
  export type TESTCASERESULTFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTCASERESULT
     */
    select?: TESTCASERESULTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TESTCASERESULT
     */
    omit?: TESTCASERESULTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTCASERESULTInclude<ExtArgs> | null
    /**
     * Filter, which TESTCASERESULT to fetch.
     */
    where?: TESTCASERESULTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TESTCASERESULTS to fetch.
     */
    orderBy?: TESTCASERESULTOrderByWithRelationInput | TESTCASERESULTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TESTCASERESULTS.
     */
    cursor?: TESTCASERESULTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TESTCASERESULTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TESTCASERESULTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TESTCASERESULTS.
     */
    distinct?: TESTCASERESULTScalarFieldEnum | TESTCASERESULTScalarFieldEnum[]
  }

  /**
   * TESTCASERESULT findFirstOrThrow
   */
  export type TESTCASERESULTFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTCASERESULT
     */
    select?: TESTCASERESULTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TESTCASERESULT
     */
    omit?: TESTCASERESULTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTCASERESULTInclude<ExtArgs> | null
    /**
     * Filter, which TESTCASERESULT to fetch.
     */
    where?: TESTCASERESULTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TESTCASERESULTS to fetch.
     */
    orderBy?: TESTCASERESULTOrderByWithRelationInput | TESTCASERESULTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TESTCASERESULTS.
     */
    cursor?: TESTCASERESULTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TESTCASERESULTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TESTCASERESULTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TESTCASERESULTS.
     */
    distinct?: TESTCASERESULTScalarFieldEnum | TESTCASERESULTScalarFieldEnum[]
  }

  /**
   * TESTCASERESULT findMany
   */
  export type TESTCASERESULTFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTCASERESULT
     */
    select?: TESTCASERESULTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TESTCASERESULT
     */
    omit?: TESTCASERESULTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTCASERESULTInclude<ExtArgs> | null
    /**
     * Filter, which TESTCASERESULTS to fetch.
     */
    where?: TESTCASERESULTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TESTCASERESULTS to fetch.
     */
    orderBy?: TESTCASERESULTOrderByWithRelationInput | TESTCASERESULTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TESTCASERESULTS.
     */
    cursor?: TESTCASERESULTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TESTCASERESULTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TESTCASERESULTS.
     */
    skip?: number
    distinct?: TESTCASERESULTScalarFieldEnum | TESTCASERESULTScalarFieldEnum[]
  }

  /**
   * TESTCASERESULT create
   */
  export type TESTCASERESULTCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTCASERESULT
     */
    select?: TESTCASERESULTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TESTCASERESULT
     */
    omit?: TESTCASERESULTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTCASERESULTInclude<ExtArgs> | null
    /**
     * The data needed to create a TESTCASERESULT.
     */
    data: XOR<TESTCASERESULTCreateInput, TESTCASERESULTUncheckedCreateInput>
  }

  /**
   * TESTCASERESULT createMany
   */
  export type TESTCASERESULTCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TESTCASERESULTS.
     */
    data: TESTCASERESULTCreateManyInput | TESTCASERESULTCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TESTCASERESULT createManyAndReturn
   */
  export type TESTCASERESULTCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTCASERESULT
     */
    select?: TESTCASERESULTSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TESTCASERESULT
     */
    omit?: TESTCASERESULTOmit<ExtArgs> | null
    /**
     * The data used to create many TESTCASERESULTS.
     */
    data: TESTCASERESULTCreateManyInput | TESTCASERESULTCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTCASERESULTIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TESTCASERESULT update
   */
  export type TESTCASERESULTUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTCASERESULT
     */
    select?: TESTCASERESULTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TESTCASERESULT
     */
    omit?: TESTCASERESULTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTCASERESULTInclude<ExtArgs> | null
    /**
     * The data needed to update a TESTCASERESULT.
     */
    data: XOR<TESTCASERESULTUpdateInput, TESTCASERESULTUncheckedUpdateInput>
    /**
     * Choose, which TESTCASERESULT to update.
     */
    where: TESTCASERESULTWhereUniqueInput
  }

  /**
   * TESTCASERESULT updateMany
   */
  export type TESTCASERESULTUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TESTCASERESULTS.
     */
    data: XOR<TESTCASERESULTUpdateManyMutationInput, TESTCASERESULTUncheckedUpdateManyInput>
    /**
     * Filter which TESTCASERESULTS to update
     */
    where?: TESTCASERESULTWhereInput
    /**
     * Limit how many TESTCASERESULTS to update.
     */
    limit?: number
  }

  /**
   * TESTCASERESULT updateManyAndReturn
   */
  export type TESTCASERESULTUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTCASERESULT
     */
    select?: TESTCASERESULTSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TESTCASERESULT
     */
    omit?: TESTCASERESULTOmit<ExtArgs> | null
    /**
     * The data used to update TESTCASERESULTS.
     */
    data: XOR<TESTCASERESULTUpdateManyMutationInput, TESTCASERESULTUncheckedUpdateManyInput>
    /**
     * Filter which TESTCASERESULTS to update
     */
    where?: TESTCASERESULTWhereInput
    /**
     * Limit how many TESTCASERESULTS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTCASERESULTIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TESTCASERESULT upsert
   */
  export type TESTCASERESULTUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTCASERESULT
     */
    select?: TESTCASERESULTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TESTCASERESULT
     */
    omit?: TESTCASERESULTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTCASERESULTInclude<ExtArgs> | null
    /**
     * The filter to search for the TESTCASERESULT to update in case it exists.
     */
    where: TESTCASERESULTWhereUniqueInput
    /**
     * In case the TESTCASERESULT found by the `where` argument doesn't exist, create a new TESTCASERESULT with this data.
     */
    create: XOR<TESTCASERESULTCreateInput, TESTCASERESULTUncheckedCreateInput>
    /**
     * In case the TESTCASERESULT was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TESTCASERESULTUpdateInput, TESTCASERESULTUncheckedUpdateInput>
  }

  /**
   * TESTCASERESULT delete
   */
  export type TESTCASERESULTDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTCASERESULT
     */
    select?: TESTCASERESULTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TESTCASERESULT
     */
    omit?: TESTCASERESULTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTCASERESULTInclude<ExtArgs> | null
    /**
     * Filter which TESTCASERESULT to delete.
     */
    where: TESTCASERESULTWhereUniqueInput
  }

  /**
   * TESTCASERESULT deleteMany
   */
  export type TESTCASERESULTDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TESTCASERESULTS to delete
     */
    where?: TESTCASERESULTWhereInput
    /**
     * Limit how many TESTCASERESULTS to delete.
     */
    limit?: number
  }

  /**
   * TESTCASERESULT without action
   */
  export type TESTCASERESULTDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TESTCASERESULT
     */
    select?: TESTCASERESULTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TESTCASERESULT
     */
    omit?: TESTCASERESULTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TESTCASERESULTInclude<ExtArgs> | null
  }


  /**
   * Model PROBLEMSOLVED
   */

  export type AggregatePROBLEMSOLVED = {
    _count: PROBLEMSOLVEDCountAggregateOutputType | null
    _min: PROBLEMSOLVEDMinAggregateOutputType | null
    _max: PROBLEMSOLVEDMaxAggregateOutputType | null
  }

  export type PROBLEMSOLVEDMinAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PROBLEMSOLVEDMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PROBLEMSOLVEDCountAggregateOutputType = {
    id: number
    userId: number
    problemId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PROBLEMSOLVEDMinAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PROBLEMSOLVEDMaxAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PROBLEMSOLVEDCountAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PROBLEMSOLVEDAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PROBLEMSOLVED to aggregate.
     */
    where?: PROBLEMSOLVEDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PROBLEMSOLVEDS to fetch.
     */
    orderBy?: PROBLEMSOLVEDOrderByWithRelationInput | PROBLEMSOLVEDOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PROBLEMSOLVEDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PROBLEMSOLVEDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PROBLEMSOLVEDS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PROBLEMSOLVEDS
    **/
    _count?: true | PROBLEMSOLVEDCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PROBLEMSOLVEDMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PROBLEMSOLVEDMaxAggregateInputType
  }

  export type GetPROBLEMSOLVEDAggregateType<T extends PROBLEMSOLVEDAggregateArgs> = {
        [P in keyof T & keyof AggregatePROBLEMSOLVED]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePROBLEMSOLVED[P]>
      : GetScalarType<T[P], AggregatePROBLEMSOLVED[P]>
  }




  export type PROBLEMSOLVEDGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PROBLEMSOLVEDWhereInput
    orderBy?: PROBLEMSOLVEDOrderByWithAggregationInput | PROBLEMSOLVEDOrderByWithAggregationInput[]
    by: PROBLEMSOLVEDScalarFieldEnum[] | PROBLEMSOLVEDScalarFieldEnum
    having?: PROBLEMSOLVEDScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PROBLEMSOLVEDCountAggregateInputType | true
    _min?: PROBLEMSOLVEDMinAggregateInputType
    _max?: PROBLEMSOLVEDMaxAggregateInputType
  }

  export type PROBLEMSOLVEDGroupByOutputType = {
    id: string
    userId: string
    problemId: string
    createdAt: Date
    updatedAt: Date
    _count: PROBLEMSOLVEDCountAggregateOutputType | null
    _min: PROBLEMSOLVEDMinAggregateOutputType | null
    _max: PROBLEMSOLVEDMaxAggregateOutputType | null
  }

  type GetPROBLEMSOLVEDGroupByPayload<T extends PROBLEMSOLVEDGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PROBLEMSOLVEDGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PROBLEMSOLVEDGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PROBLEMSOLVEDGroupByOutputType[P]>
            : GetScalarType<T[P], PROBLEMSOLVEDGroupByOutputType[P]>
        }
      >
    >


  export type PROBLEMSOLVEDSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | USERDefaultArgs<ExtArgs>
    problem?: boolean | PROBLEMDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pROBLEMSOLVED"]>

  export type PROBLEMSOLVEDSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | USERDefaultArgs<ExtArgs>
    problem?: boolean | PROBLEMDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pROBLEMSOLVED"]>

  export type PROBLEMSOLVEDSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | USERDefaultArgs<ExtArgs>
    problem?: boolean | PROBLEMDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pROBLEMSOLVED"]>

  export type PROBLEMSOLVEDSelectScalar = {
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PROBLEMSOLVEDOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "problemId" | "createdAt" | "updatedAt", ExtArgs["result"]["pROBLEMSOLVED"]>
  export type PROBLEMSOLVEDInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | USERDefaultArgs<ExtArgs>
    problem?: boolean | PROBLEMDefaultArgs<ExtArgs>
  }
  export type PROBLEMSOLVEDIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | USERDefaultArgs<ExtArgs>
    problem?: boolean | PROBLEMDefaultArgs<ExtArgs>
  }
  export type PROBLEMSOLVEDIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | USERDefaultArgs<ExtArgs>
    problem?: boolean | PROBLEMDefaultArgs<ExtArgs>
  }

  export type $PROBLEMSOLVEDPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PROBLEMSOLVED"
    objects: {
      user: Prisma.$USERPayload<ExtArgs>
      problem: Prisma.$PROBLEMPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      problemId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pROBLEMSOLVED"]>
    composites: {}
  }

  type PROBLEMSOLVEDGetPayload<S extends boolean | null | undefined | PROBLEMSOLVEDDefaultArgs> = $Result.GetResult<Prisma.$PROBLEMSOLVEDPayload, S>

  type PROBLEMSOLVEDCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PROBLEMSOLVEDFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PROBLEMSOLVEDCountAggregateInputType | true
    }

  export interface PROBLEMSOLVEDDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PROBLEMSOLVED'], meta: { name: 'PROBLEMSOLVED' } }
    /**
     * Find zero or one PROBLEMSOLVED that matches the filter.
     * @param {PROBLEMSOLVEDFindUniqueArgs} args - Arguments to find a PROBLEMSOLVED
     * @example
     * // Get one PROBLEMSOLVED
     * const pROBLEMSOLVED = await prisma.pROBLEMSOLVED.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PROBLEMSOLVEDFindUniqueArgs>(args: SelectSubset<T, PROBLEMSOLVEDFindUniqueArgs<ExtArgs>>): Prisma__PROBLEMSOLVEDClient<$Result.GetResult<Prisma.$PROBLEMSOLVEDPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PROBLEMSOLVED that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PROBLEMSOLVEDFindUniqueOrThrowArgs} args - Arguments to find a PROBLEMSOLVED
     * @example
     * // Get one PROBLEMSOLVED
     * const pROBLEMSOLVED = await prisma.pROBLEMSOLVED.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PROBLEMSOLVEDFindUniqueOrThrowArgs>(args: SelectSubset<T, PROBLEMSOLVEDFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PROBLEMSOLVEDClient<$Result.GetResult<Prisma.$PROBLEMSOLVEDPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PROBLEMSOLVED that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROBLEMSOLVEDFindFirstArgs} args - Arguments to find a PROBLEMSOLVED
     * @example
     * // Get one PROBLEMSOLVED
     * const pROBLEMSOLVED = await prisma.pROBLEMSOLVED.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PROBLEMSOLVEDFindFirstArgs>(args?: SelectSubset<T, PROBLEMSOLVEDFindFirstArgs<ExtArgs>>): Prisma__PROBLEMSOLVEDClient<$Result.GetResult<Prisma.$PROBLEMSOLVEDPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PROBLEMSOLVED that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROBLEMSOLVEDFindFirstOrThrowArgs} args - Arguments to find a PROBLEMSOLVED
     * @example
     * // Get one PROBLEMSOLVED
     * const pROBLEMSOLVED = await prisma.pROBLEMSOLVED.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PROBLEMSOLVEDFindFirstOrThrowArgs>(args?: SelectSubset<T, PROBLEMSOLVEDFindFirstOrThrowArgs<ExtArgs>>): Prisma__PROBLEMSOLVEDClient<$Result.GetResult<Prisma.$PROBLEMSOLVEDPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PROBLEMSOLVEDS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROBLEMSOLVEDFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PROBLEMSOLVEDS
     * const pROBLEMSOLVEDS = await prisma.pROBLEMSOLVED.findMany()
     * 
     * // Get first 10 PROBLEMSOLVEDS
     * const pROBLEMSOLVEDS = await prisma.pROBLEMSOLVED.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pROBLEMSOLVEDWithIdOnly = await prisma.pROBLEMSOLVED.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PROBLEMSOLVEDFindManyArgs>(args?: SelectSubset<T, PROBLEMSOLVEDFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PROBLEMSOLVEDPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PROBLEMSOLVED.
     * @param {PROBLEMSOLVEDCreateArgs} args - Arguments to create a PROBLEMSOLVED.
     * @example
     * // Create one PROBLEMSOLVED
     * const PROBLEMSOLVED = await prisma.pROBLEMSOLVED.create({
     *   data: {
     *     // ... data to create a PROBLEMSOLVED
     *   }
     * })
     * 
     */
    create<T extends PROBLEMSOLVEDCreateArgs>(args: SelectSubset<T, PROBLEMSOLVEDCreateArgs<ExtArgs>>): Prisma__PROBLEMSOLVEDClient<$Result.GetResult<Prisma.$PROBLEMSOLVEDPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PROBLEMSOLVEDS.
     * @param {PROBLEMSOLVEDCreateManyArgs} args - Arguments to create many PROBLEMSOLVEDS.
     * @example
     * // Create many PROBLEMSOLVEDS
     * const pROBLEMSOLVED = await prisma.pROBLEMSOLVED.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PROBLEMSOLVEDCreateManyArgs>(args?: SelectSubset<T, PROBLEMSOLVEDCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PROBLEMSOLVEDS and returns the data saved in the database.
     * @param {PROBLEMSOLVEDCreateManyAndReturnArgs} args - Arguments to create many PROBLEMSOLVEDS.
     * @example
     * // Create many PROBLEMSOLVEDS
     * const pROBLEMSOLVED = await prisma.pROBLEMSOLVED.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PROBLEMSOLVEDS and only return the `id`
     * const pROBLEMSOLVEDWithIdOnly = await prisma.pROBLEMSOLVED.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PROBLEMSOLVEDCreateManyAndReturnArgs>(args?: SelectSubset<T, PROBLEMSOLVEDCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PROBLEMSOLVEDPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PROBLEMSOLVED.
     * @param {PROBLEMSOLVEDDeleteArgs} args - Arguments to delete one PROBLEMSOLVED.
     * @example
     * // Delete one PROBLEMSOLVED
     * const PROBLEMSOLVED = await prisma.pROBLEMSOLVED.delete({
     *   where: {
     *     // ... filter to delete one PROBLEMSOLVED
     *   }
     * })
     * 
     */
    delete<T extends PROBLEMSOLVEDDeleteArgs>(args: SelectSubset<T, PROBLEMSOLVEDDeleteArgs<ExtArgs>>): Prisma__PROBLEMSOLVEDClient<$Result.GetResult<Prisma.$PROBLEMSOLVEDPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PROBLEMSOLVED.
     * @param {PROBLEMSOLVEDUpdateArgs} args - Arguments to update one PROBLEMSOLVED.
     * @example
     * // Update one PROBLEMSOLVED
     * const pROBLEMSOLVED = await prisma.pROBLEMSOLVED.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PROBLEMSOLVEDUpdateArgs>(args: SelectSubset<T, PROBLEMSOLVEDUpdateArgs<ExtArgs>>): Prisma__PROBLEMSOLVEDClient<$Result.GetResult<Prisma.$PROBLEMSOLVEDPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PROBLEMSOLVEDS.
     * @param {PROBLEMSOLVEDDeleteManyArgs} args - Arguments to filter PROBLEMSOLVEDS to delete.
     * @example
     * // Delete a few PROBLEMSOLVEDS
     * const { count } = await prisma.pROBLEMSOLVED.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PROBLEMSOLVEDDeleteManyArgs>(args?: SelectSubset<T, PROBLEMSOLVEDDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PROBLEMSOLVEDS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROBLEMSOLVEDUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PROBLEMSOLVEDS
     * const pROBLEMSOLVED = await prisma.pROBLEMSOLVED.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PROBLEMSOLVEDUpdateManyArgs>(args: SelectSubset<T, PROBLEMSOLVEDUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PROBLEMSOLVEDS and returns the data updated in the database.
     * @param {PROBLEMSOLVEDUpdateManyAndReturnArgs} args - Arguments to update many PROBLEMSOLVEDS.
     * @example
     * // Update many PROBLEMSOLVEDS
     * const pROBLEMSOLVED = await prisma.pROBLEMSOLVED.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PROBLEMSOLVEDS and only return the `id`
     * const pROBLEMSOLVEDWithIdOnly = await prisma.pROBLEMSOLVED.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PROBLEMSOLVEDUpdateManyAndReturnArgs>(args: SelectSubset<T, PROBLEMSOLVEDUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PROBLEMSOLVEDPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PROBLEMSOLVED.
     * @param {PROBLEMSOLVEDUpsertArgs} args - Arguments to update or create a PROBLEMSOLVED.
     * @example
     * // Update or create a PROBLEMSOLVED
     * const pROBLEMSOLVED = await prisma.pROBLEMSOLVED.upsert({
     *   create: {
     *     // ... data to create a PROBLEMSOLVED
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PROBLEMSOLVED we want to update
     *   }
     * })
     */
    upsert<T extends PROBLEMSOLVEDUpsertArgs>(args: SelectSubset<T, PROBLEMSOLVEDUpsertArgs<ExtArgs>>): Prisma__PROBLEMSOLVEDClient<$Result.GetResult<Prisma.$PROBLEMSOLVEDPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PROBLEMSOLVEDS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROBLEMSOLVEDCountArgs} args - Arguments to filter PROBLEMSOLVEDS to count.
     * @example
     * // Count the number of PROBLEMSOLVEDS
     * const count = await prisma.pROBLEMSOLVED.count({
     *   where: {
     *     // ... the filter for the PROBLEMSOLVEDS we want to count
     *   }
     * })
    **/
    count<T extends PROBLEMSOLVEDCountArgs>(
      args?: Subset<T, PROBLEMSOLVEDCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PROBLEMSOLVEDCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PROBLEMSOLVED.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROBLEMSOLVEDAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PROBLEMSOLVEDAggregateArgs>(args: Subset<T, PROBLEMSOLVEDAggregateArgs>): Prisma.PrismaPromise<GetPROBLEMSOLVEDAggregateType<T>>

    /**
     * Group by PROBLEMSOLVED.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROBLEMSOLVEDGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PROBLEMSOLVEDGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PROBLEMSOLVEDGroupByArgs['orderBy'] }
        : { orderBy?: PROBLEMSOLVEDGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PROBLEMSOLVEDGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPROBLEMSOLVEDGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PROBLEMSOLVED model
   */
  readonly fields: PROBLEMSOLVEDFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PROBLEMSOLVED.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PROBLEMSOLVEDClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends USERDefaultArgs<ExtArgs> = {}>(args?: Subset<T, USERDefaultArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends PROBLEMDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PROBLEMDefaultArgs<ExtArgs>>): Prisma__PROBLEMClient<$Result.GetResult<Prisma.$PROBLEMPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PROBLEMSOLVED model
   */
  interface PROBLEMSOLVEDFieldRefs {
    readonly id: FieldRef<"PROBLEMSOLVED", 'String'>
    readonly userId: FieldRef<"PROBLEMSOLVED", 'String'>
    readonly problemId: FieldRef<"PROBLEMSOLVED", 'String'>
    readonly createdAt: FieldRef<"PROBLEMSOLVED", 'DateTime'>
    readonly updatedAt: FieldRef<"PROBLEMSOLVED", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PROBLEMSOLVED findUnique
   */
  export type PROBLEMSOLVEDFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEMSOLVED
     */
    select?: PROBLEMSOLVEDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEMSOLVED
     */
    omit?: PROBLEMSOLVEDOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMSOLVEDInclude<ExtArgs> | null
    /**
     * Filter, which PROBLEMSOLVED to fetch.
     */
    where: PROBLEMSOLVEDWhereUniqueInput
  }

  /**
   * PROBLEMSOLVED findUniqueOrThrow
   */
  export type PROBLEMSOLVEDFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEMSOLVED
     */
    select?: PROBLEMSOLVEDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEMSOLVED
     */
    omit?: PROBLEMSOLVEDOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMSOLVEDInclude<ExtArgs> | null
    /**
     * Filter, which PROBLEMSOLVED to fetch.
     */
    where: PROBLEMSOLVEDWhereUniqueInput
  }

  /**
   * PROBLEMSOLVED findFirst
   */
  export type PROBLEMSOLVEDFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEMSOLVED
     */
    select?: PROBLEMSOLVEDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEMSOLVED
     */
    omit?: PROBLEMSOLVEDOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMSOLVEDInclude<ExtArgs> | null
    /**
     * Filter, which PROBLEMSOLVED to fetch.
     */
    where?: PROBLEMSOLVEDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PROBLEMSOLVEDS to fetch.
     */
    orderBy?: PROBLEMSOLVEDOrderByWithRelationInput | PROBLEMSOLVEDOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PROBLEMSOLVEDS.
     */
    cursor?: PROBLEMSOLVEDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PROBLEMSOLVEDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PROBLEMSOLVEDS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PROBLEMSOLVEDS.
     */
    distinct?: PROBLEMSOLVEDScalarFieldEnum | PROBLEMSOLVEDScalarFieldEnum[]
  }

  /**
   * PROBLEMSOLVED findFirstOrThrow
   */
  export type PROBLEMSOLVEDFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEMSOLVED
     */
    select?: PROBLEMSOLVEDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEMSOLVED
     */
    omit?: PROBLEMSOLVEDOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMSOLVEDInclude<ExtArgs> | null
    /**
     * Filter, which PROBLEMSOLVED to fetch.
     */
    where?: PROBLEMSOLVEDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PROBLEMSOLVEDS to fetch.
     */
    orderBy?: PROBLEMSOLVEDOrderByWithRelationInput | PROBLEMSOLVEDOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PROBLEMSOLVEDS.
     */
    cursor?: PROBLEMSOLVEDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PROBLEMSOLVEDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PROBLEMSOLVEDS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PROBLEMSOLVEDS.
     */
    distinct?: PROBLEMSOLVEDScalarFieldEnum | PROBLEMSOLVEDScalarFieldEnum[]
  }

  /**
   * PROBLEMSOLVED findMany
   */
  export type PROBLEMSOLVEDFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEMSOLVED
     */
    select?: PROBLEMSOLVEDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEMSOLVED
     */
    omit?: PROBLEMSOLVEDOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMSOLVEDInclude<ExtArgs> | null
    /**
     * Filter, which PROBLEMSOLVEDS to fetch.
     */
    where?: PROBLEMSOLVEDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PROBLEMSOLVEDS to fetch.
     */
    orderBy?: PROBLEMSOLVEDOrderByWithRelationInput | PROBLEMSOLVEDOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PROBLEMSOLVEDS.
     */
    cursor?: PROBLEMSOLVEDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PROBLEMSOLVEDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PROBLEMSOLVEDS.
     */
    skip?: number
    distinct?: PROBLEMSOLVEDScalarFieldEnum | PROBLEMSOLVEDScalarFieldEnum[]
  }

  /**
   * PROBLEMSOLVED create
   */
  export type PROBLEMSOLVEDCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEMSOLVED
     */
    select?: PROBLEMSOLVEDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEMSOLVED
     */
    omit?: PROBLEMSOLVEDOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMSOLVEDInclude<ExtArgs> | null
    /**
     * The data needed to create a PROBLEMSOLVED.
     */
    data: XOR<PROBLEMSOLVEDCreateInput, PROBLEMSOLVEDUncheckedCreateInput>
  }

  /**
   * PROBLEMSOLVED createMany
   */
  export type PROBLEMSOLVEDCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PROBLEMSOLVEDS.
     */
    data: PROBLEMSOLVEDCreateManyInput | PROBLEMSOLVEDCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PROBLEMSOLVED createManyAndReturn
   */
  export type PROBLEMSOLVEDCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEMSOLVED
     */
    select?: PROBLEMSOLVEDSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEMSOLVED
     */
    omit?: PROBLEMSOLVEDOmit<ExtArgs> | null
    /**
     * The data used to create many PROBLEMSOLVEDS.
     */
    data: PROBLEMSOLVEDCreateManyInput | PROBLEMSOLVEDCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMSOLVEDIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PROBLEMSOLVED update
   */
  export type PROBLEMSOLVEDUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEMSOLVED
     */
    select?: PROBLEMSOLVEDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEMSOLVED
     */
    omit?: PROBLEMSOLVEDOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMSOLVEDInclude<ExtArgs> | null
    /**
     * The data needed to update a PROBLEMSOLVED.
     */
    data: XOR<PROBLEMSOLVEDUpdateInput, PROBLEMSOLVEDUncheckedUpdateInput>
    /**
     * Choose, which PROBLEMSOLVED to update.
     */
    where: PROBLEMSOLVEDWhereUniqueInput
  }

  /**
   * PROBLEMSOLVED updateMany
   */
  export type PROBLEMSOLVEDUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PROBLEMSOLVEDS.
     */
    data: XOR<PROBLEMSOLVEDUpdateManyMutationInput, PROBLEMSOLVEDUncheckedUpdateManyInput>
    /**
     * Filter which PROBLEMSOLVEDS to update
     */
    where?: PROBLEMSOLVEDWhereInput
    /**
     * Limit how many PROBLEMSOLVEDS to update.
     */
    limit?: number
  }

  /**
   * PROBLEMSOLVED updateManyAndReturn
   */
  export type PROBLEMSOLVEDUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEMSOLVED
     */
    select?: PROBLEMSOLVEDSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEMSOLVED
     */
    omit?: PROBLEMSOLVEDOmit<ExtArgs> | null
    /**
     * The data used to update PROBLEMSOLVEDS.
     */
    data: XOR<PROBLEMSOLVEDUpdateManyMutationInput, PROBLEMSOLVEDUncheckedUpdateManyInput>
    /**
     * Filter which PROBLEMSOLVEDS to update
     */
    where?: PROBLEMSOLVEDWhereInput
    /**
     * Limit how many PROBLEMSOLVEDS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMSOLVEDIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PROBLEMSOLVED upsert
   */
  export type PROBLEMSOLVEDUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEMSOLVED
     */
    select?: PROBLEMSOLVEDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEMSOLVED
     */
    omit?: PROBLEMSOLVEDOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMSOLVEDInclude<ExtArgs> | null
    /**
     * The filter to search for the PROBLEMSOLVED to update in case it exists.
     */
    where: PROBLEMSOLVEDWhereUniqueInput
    /**
     * In case the PROBLEMSOLVED found by the `where` argument doesn't exist, create a new PROBLEMSOLVED with this data.
     */
    create: XOR<PROBLEMSOLVEDCreateInput, PROBLEMSOLVEDUncheckedCreateInput>
    /**
     * In case the PROBLEMSOLVED was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PROBLEMSOLVEDUpdateInput, PROBLEMSOLVEDUncheckedUpdateInput>
  }

  /**
   * PROBLEMSOLVED delete
   */
  export type PROBLEMSOLVEDDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEMSOLVED
     */
    select?: PROBLEMSOLVEDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEMSOLVED
     */
    omit?: PROBLEMSOLVEDOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMSOLVEDInclude<ExtArgs> | null
    /**
     * Filter which PROBLEMSOLVED to delete.
     */
    where: PROBLEMSOLVEDWhereUniqueInput
  }

  /**
   * PROBLEMSOLVED deleteMany
   */
  export type PROBLEMSOLVEDDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PROBLEMSOLVEDS to delete
     */
    where?: PROBLEMSOLVEDWhereInput
    /**
     * Limit how many PROBLEMSOLVEDS to delete.
     */
    limit?: number
  }

  /**
   * PROBLEMSOLVED without action
   */
  export type PROBLEMSOLVEDDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROBLEMSOLVED
     */
    select?: PROBLEMSOLVEDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROBLEMSOLVED
     */
    omit?: PROBLEMSOLVEDOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROBLEMSOLVEDInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const USERScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password',
    email: 'email',
    image: 'image',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type USERScalarFieldEnum = (typeof USERScalarFieldEnum)[keyof typeof USERScalarFieldEnum]


  export const PROBLEMScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    difficulty: 'difficulty',
    tags: 'tags',
    userId: 'userId',
    examples: 'examples',
    constraints: 'constraints',
    hints: 'hints',
    editorial: 'editorial',
    testCases: 'testCases',
    codeSnippet: 'codeSnippet',
    refrenceSolutions: 'refrenceSolutions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PROBLEMScalarFieldEnum = (typeof PROBLEMScalarFieldEnum)[keyof typeof PROBLEMScalarFieldEnum]


  export const SUBMISSIONScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    problemId: 'problemId',
    sourceCode: 'sourceCode',
    laguage: 'laguage',
    stdin: 'stdin',
    stdout: 'stdout',
    stderr: 'stderr',
    compileOutput: 'compileOutput',
    status: 'status',
    memory: 'memory',
    time: 'time',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SUBMISSIONScalarFieldEnum = (typeof SUBMISSIONScalarFieldEnum)[keyof typeof SUBMISSIONScalarFieldEnum]


  export const TESTCASERESULTScalarFieldEnum: {
    id: 'id',
    submissionID: 'submissionID',
    testCase: 'testCase',
    passed: 'passed',
    stdin: 'stdin',
    stdout: 'stdout',
    stderr: 'stderr',
    expoectedOutput: 'expoectedOutput',
    compileOutput: 'compileOutput',
    status: 'status',
    memory: 'memory',
    time: 'time'
  };

  export type TESTCASERESULTScalarFieldEnum = (typeof TESTCASERESULTScalarFieldEnum)[keyof typeof TESTCASERESULTScalarFieldEnum]


  export const PROBLEMSOLVEDScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    problemId: 'problemId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PROBLEMSOLVEDScalarFieldEnum = (typeof PROBLEMSOLVEDScalarFieldEnum)[keyof typeof PROBLEMSOLVEDScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Difficulty[]'
   */
  export type ListEnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type USERWhereInput = {
    AND?: USERWhereInput | USERWhereInput[]
    OR?: USERWhereInput[]
    NOT?: USERWhereInput | USERWhereInput[]
    id?: StringFilter<"USER"> | string
    name?: StringFilter<"USER"> | string
    password?: StringFilter<"USER"> | string
    email?: StringFilter<"USER"> | string
    image?: StringNullableFilter<"USER"> | string | null
    role?: EnumUserRoleFilter<"USER"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"USER"> | Date | string
    updatedAt?: DateTimeFilter<"USER"> | Date | string
    problems?: PROBLEMListRelationFilter
    submission?: SUBMISSIONListRelationFilter
    solvedProblems?: PROBLEMSOLVEDListRelationFilter
  }

  export type USEROrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    problems?: PROBLEMOrderByRelationAggregateInput
    submission?: SUBMISSIONOrderByRelationAggregateInput
    solvedProblems?: PROBLEMSOLVEDOrderByRelationAggregateInput
  }

  export type USERWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: USERWhereInput | USERWhereInput[]
    OR?: USERWhereInput[]
    NOT?: USERWhereInput | USERWhereInput[]
    name?: StringFilter<"USER"> | string
    password?: StringFilter<"USER"> | string
    image?: StringNullableFilter<"USER"> | string | null
    role?: EnumUserRoleFilter<"USER"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"USER"> | Date | string
    updatedAt?: DateTimeFilter<"USER"> | Date | string
    problems?: PROBLEMListRelationFilter
    submission?: SUBMISSIONListRelationFilter
    solvedProblems?: PROBLEMSOLVEDListRelationFilter
  }, "id" | "email">

  export type USEROrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: USERCountOrderByAggregateInput
    _max?: USERMaxOrderByAggregateInput
    _min?: USERMinOrderByAggregateInput
  }

  export type USERScalarWhereWithAggregatesInput = {
    AND?: USERScalarWhereWithAggregatesInput | USERScalarWhereWithAggregatesInput[]
    OR?: USERScalarWhereWithAggregatesInput[]
    NOT?: USERScalarWhereWithAggregatesInput | USERScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"USER"> | string
    name?: StringWithAggregatesFilter<"USER"> | string
    password?: StringWithAggregatesFilter<"USER"> | string
    email?: StringWithAggregatesFilter<"USER"> | string
    image?: StringNullableWithAggregatesFilter<"USER"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"USER"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"USER"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"USER"> | Date | string
  }

  export type PROBLEMWhereInput = {
    AND?: PROBLEMWhereInput | PROBLEMWhereInput[]
    OR?: PROBLEMWhereInput[]
    NOT?: PROBLEMWhereInput | PROBLEMWhereInput[]
    id?: StringFilter<"PROBLEM"> | string
    title?: StringFilter<"PROBLEM"> | string
    description?: StringFilter<"PROBLEM"> | string
    difficulty?: EnumDifficultyFilter<"PROBLEM"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"PROBLEM">
    userId?: StringFilter<"PROBLEM"> | string
    examples?: JsonFilter<"PROBLEM">
    constraints?: StringFilter<"PROBLEM"> | string
    hints?: StringNullableFilter<"PROBLEM"> | string | null
    editorial?: StringNullableFilter<"PROBLEM"> | string | null
    testCases?: JsonFilter<"PROBLEM">
    codeSnippet?: JsonFilter<"PROBLEM">
    refrenceSolutions?: JsonFilter<"PROBLEM">
    createdAt?: DateTimeFilter<"PROBLEM"> | Date | string
    updatedAt?: DateTimeFilter<"PROBLEM"> | Date | string
    user?: XOR<USERScalarRelationFilter, USERWhereInput>
    submission?: SUBMISSIONListRelationFilter
    solvedBy?: PROBLEMSOLVEDListRelationFilter
  }

  export type PROBLEMOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrderInput | SortOrder
    editorial?: SortOrderInput | SortOrder
    testCases?: SortOrder
    codeSnippet?: SortOrder
    refrenceSolutions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: USEROrderByWithRelationInput
    submission?: SUBMISSIONOrderByRelationAggregateInput
    solvedBy?: PROBLEMSOLVEDOrderByRelationAggregateInput
  }

  export type PROBLEMWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PROBLEMWhereInput | PROBLEMWhereInput[]
    OR?: PROBLEMWhereInput[]
    NOT?: PROBLEMWhereInput | PROBLEMWhereInput[]
    title?: StringFilter<"PROBLEM"> | string
    description?: StringFilter<"PROBLEM"> | string
    difficulty?: EnumDifficultyFilter<"PROBLEM"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"PROBLEM">
    userId?: StringFilter<"PROBLEM"> | string
    examples?: JsonFilter<"PROBLEM">
    constraints?: StringFilter<"PROBLEM"> | string
    hints?: StringNullableFilter<"PROBLEM"> | string | null
    editorial?: StringNullableFilter<"PROBLEM"> | string | null
    testCases?: JsonFilter<"PROBLEM">
    codeSnippet?: JsonFilter<"PROBLEM">
    refrenceSolutions?: JsonFilter<"PROBLEM">
    createdAt?: DateTimeFilter<"PROBLEM"> | Date | string
    updatedAt?: DateTimeFilter<"PROBLEM"> | Date | string
    user?: XOR<USERScalarRelationFilter, USERWhereInput>
    submission?: SUBMISSIONListRelationFilter
    solvedBy?: PROBLEMSOLVEDListRelationFilter
  }, "id">

  export type PROBLEMOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrderInput | SortOrder
    editorial?: SortOrderInput | SortOrder
    testCases?: SortOrder
    codeSnippet?: SortOrder
    refrenceSolutions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PROBLEMCountOrderByAggregateInput
    _max?: PROBLEMMaxOrderByAggregateInput
    _min?: PROBLEMMinOrderByAggregateInput
  }

  export type PROBLEMScalarWhereWithAggregatesInput = {
    AND?: PROBLEMScalarWhereWithAggregatesInput | PROBLEMScalarWhereWithAggregatesInput[]
    OR?: PROBLEMScalarWhereWithAggregatesInput[]
    NOT?: PROBLEMScalarWhereWithAggregatesInput | PROBLEMScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PROBLEM"> | string
    title?: StringWithAggregatesFilter<"PROBLEM"> | string
    description?: StringWithAggregatesFilter<"PROBLEM"> | string
    difficulty?: EnumDifficultyWithAggregatesFilter<"PROBLEM"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"PROBLEM">
    userId?: StringWithAggregatesFilter<"PROBLEM"> | string
    examples?: JsonWithAggregatesFilter<"PROBLEM">
    constraints?: StringWithAggregatesFilter<"PROBLEM"> | string
    hints?: StringNullableWithAggregatesFilter<"PROBLEM"> | string | null
    editorial?: StringNullableWithAggregatesFilter<"PROBLEM"> | string | null
    testCases?: JsonWithAggregatesFilter<"PROBLEM">
    codeSnippet?: JsonWithAggregatesFilter<"PROBLEM">
    refrenceSolutions?: JsonWithAggregatesFilter<"PROBLEM">
    createdAt?: DateTimeWithAggregatesFilter<"PROBLEM"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PROBLEM"> | Date | string
  }

  export type SUBMISSIONWhereInput = {
    AND?: SUBMISSIONWhereInput | SUBMISSIONWhereInput[]
    OR?: SUBMISSIONWhereInput[]
    NOT?: SUBMISSIONWhereInput | SUBMISSIONWhereInput[]
    id?: StringFilter<"SUBMISSION"> | string
    userId?: StringFilter<"SUBMISSION"> | string
    problemId?: StringFilter<"SUBMISSION"> | string
    sourceCode?: JsonFilter<"SUBMISSION">
    laguage?: StringFilter<"SUBMISSION"> | string
    stdin?: StringNullableFilter<"SUBMISSION"> | string | null
    stdout?: StringNullableFilter<"SUBMISSION"> | string | null
    stderr?: StringNullableFilter<"SUBMISSION"> | string | null
    compileOutput?: StringNullableFilter<"SUBMISSION"> | string | null
    status?: StringFilter<"SUBMISSION"> | string
    memory?: StringFilter<"SUBMISSION"> | string
    time?: StringFilter<"SUBMISSION"> | string
    createdAt?: DateTimeFilter<"SUBMISSION"> | Date | string
    updatedAt?: DateTimeFilter<"SUBMISSION"> | Date | string
    user?: XOR<USERScalarRelationFilter, USERWhereInput>
    problem?: XOR<PROBLEMScalarRelationFilter, PROBLEMWhereInput>
    testCases?: TESTCASERESULTListRelationFilter
  }

  export type SUBMISSIONOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    sourceCode?: SortOrder
    laguage?: SortOrder
    stdin?: SortOrderInput | SortOrder
    stdout?: SortOrderInput | SortOrder
    stderr?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: USEROrderByWithRelationInput
    problem?: PROBLEMOrderByWithRelationInput
    testCases?: TESTCASERESULTOrderByRelationAggregateInput
  }

  export type SUBMISSIONWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SUBMISSIONWhereInput | SUBMISSIONWhereInput[]
    OR?: SUBMISSIONWhereInput[]
    NOT?: SUBMISSIONWhereInput | SUBMISSIONWhereInput[]
    userId?: StringFilter<"SUBMISSION"> | string
    problemId?: StringFilter<"SUBMISSION"> | string
    sourceCode?: JsonFilter<"SUBMISSION">
    laguage?: StringFilter<"SUBMISSION"> | string
    stdin?: StringNullableFilter<"SUBMISSION"> | string | null
    stdout?: StringNullableFilter<"SUBMISSION"> | string | null
    stderr?: StringNullableFilter<"SUBMISSION"> | string | null
    compileOutput?: StringNullableFilter<"SUBMISSION"> | string | null
    status?: StringFilter<"SUBMISSION"> | string
    memory?: StringFilter<"SUBMISSION"> | string
    time?: StringFilter<"SUBMISSION"> | string
    createdAt?: DateTimeFilter<"SUBMISSION"> | Date | string
    updatedAt?: DateTimeFilter<"SUBMISSION"> | Date | string
    user?: XOR<USERScalarRelationFilter, USERWhereInput>
    problem?: XOR<PROBLEMScalarRelationFilter, PROBLEMWhereInput>
    testCases?: TESTCASERESULTListRelationFilter
  }, "id">

  export type SUBMISSIONOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    sourceCode?: SortOrder
    laguage?: SortOrder
    stdin?: SortOrderInput | SortOrder
    stdout?: SortOrderInput | SortOrder
    stderr?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SUBMISSIONCountOrderByAggregateInput
    _max?: SUBMISSIONMaxOrderByAggregateInput
    _min?: SUBMISSIONMinOrderByAggregateInput
  }

  export type SUBMISSIONScalarWhereWithAggregatesInput = {
    AND?: SUBMISSIONScalarWhereWithAggregatesInput | SUBMISSIONScalarWhereWithAggregatesInput[]
    OR?: SUBMISSIONScalarWhereWithAggregatesInput[]
    NOT?: SUBMISSIONScalarWhereWithAggregatesInput | SUBMISSIONScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SUBMISSION"> | string
    userId?: StringWithAggregatesFilter<"SUBMISSION"> | string
    problemId?: StringWithAggregatesFilter<"SUBMISSION"> | string
    sourceCode?: JsonWithAggregatesFilter<"SUBMISSION">
    laguage?: StringWithAggregatesFilter<"SUBMISSION"> | string
    stdin?: StringNullableWithAggregatesFilter<"SUBMISSION"> | string | null
    stdout?: StringNullableWithAggregatesFilter<"SUBMISSION"> | string | null
    stderr?: StringNullableWithAggregatesFilter<"SUBMISSION"> | string | null
    compileOutput?: StringNullableWithAggregatesFilter<"SUBMISSION"> | string | null
    status?: StringWithAggregatesFilter<"SUBMISSION"> | string
    memory?: StringWithAggregatesFilter<"SUBMISSION"> | string
    time?: StringWithAggregatesFilter<"SUBMISSION"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SUBMISSION"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SUBMISSION"> | Date | string
  }

  export type TESTCASERESULTWhereInput = {
    AND?: TESTCASERESULTWhereInput | TESTCASERESULTWhereInput[]
    OR?: TESTCASERESULTWhereInput[]
    NOT?: TESTCASERESULTWhereInput | TESTCASERESULTWhereInput[]
    id?: StringFilter<"TESTCASERESULT"> | string
    submissionID?: StringFilter<"TESTCASERESULT"> | string
    testCase?: IntFilter<"TESTCASERESULT"> | number
    passed?: BoolFilter<"TESTCASERESULT"> | boolean
    stdin?: StringNullableFilter<"TESTCASERESULT"> | string | null
    stdout?: StringNullableFilter<"TESTCASERESULT"> | string | null
    stderr?: StringNullableFilter<"TESTCASERESULT"> | string | null
    expoectedOutput?: StringNullableFilter<"TESTCASERESULT"> | string | null
    compileOutput?: StringNullableFilter<"TESTCASERESULT"> | string | null
    status?: StringFilter<"TESTCASERESULT"> | string
    memory?: StringNullableFilter<"TESTCASERESULT"> | string | null
    time?: StringNullableFilter<"TESTCASERESULT"> | string | null
    submission?: XOR<SUBMISSIONScalarRelationFilter, SUBMISSIONWhereInput>
  }

  export type TESTCASERESULTOrderByWithRelationInput = {
    id?: SortOrder
    submissionID?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdin?: SortOrderInput | SortOrder
    stdout?: SortOrderInput | SortOrder
    stderr?: SortOrderInput | SortOrder
    expoectedOutput?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    submission?: SUBMISSIONOrderByWithRelationInput
  }

  export type TESTCASERESULTWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TESTCASERESULTWhereInput | TESTCASERESULTWhereInput[]
    OR?: TESTCASERESULTWhereInput[]
    NOT?: TESTCASERESULTWhereInput | TESTCASERESULTWhereInput[]
    submissionID?: StringFilter<"TESTCASERESULT"> | string
    testCase?: IntFilter<"TESTCASERESULT"> | number
    passed?: BoolFilter<"TESTCASERESULT"> | boolean
    stdin?: StringNullableFilter<"TESTCASERESULT"> | string | null
    stdout?: StringNullableFilter<"TESTCASERESULT"> | string | null
    stderr?: StringNullableFilter<"TESTCASERESULT"> | string | null
    expoectedOutput?: StringNullableFilter<"TESTCASERESULT"> | string | null
    compileOutput?: StringNullableFilter<"TESTCASERESULT"> | string | null
    status?: StringFilter<"TESTCASERESULT"> | string
    memory?: StringNullableFilter<"TESTCASERESULT"> | string | null
    time?: StringNullableFilter<"TESTCASERESULT"> | string | null
    submission?: XOR<SUBMISSIONScalarRelationFilter, SUBMISSIONWhereInput>
  }, "id">

  export type TESTCASERESULTOrderByWithAggregationInput = {
    id?: SortOrder
    submissionID?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdin?: SortOrderInput | SortOrder
    stdout?: SortOrderInput | SortOrder
    stderr?: SortOrderInput | SortOrder
    expoectedOutput?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    _count?: TESTCASERESULTCountOrderByAggregateInput
    _avg?: TESTCASERESULTAvgOrderByAggregateInput
    _max?: TESTCASERESULTMaxOrderByAggregateInput
    _min?: TESTCASERESULTMinOrderByAggregateInput
    _sum?: TESTCASERESULTSumOrderByAggregateInput
  }

  export type TESTCASERESULTScalarWhereWithAggregatesInput = {
    AND?: TESTCASERESULTScalarWhereWithAggregatesInput | TESTCASERESULTScalarWhereWithAggregatesInput[]
    OR?: TESTCASERESULTScalarWhereWithAggregatesInput[]
    NOT?: TESTCASERESULTScalarWhereWithAggregatesInput | TESTCASERESULTScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TESTCASERESULT"> | string
    submissionID?: StringWithAggregatesFilter<"TESTCASERESULT"> | string
    testCase?: IntWithAggregatesFilter<"TESTCASERESULT"> | number
    passed?: BoolWithAggregatesFilter<"TESTCASERESULT"> | boolean
    stdin?: StringNullableWithAggregatesFilter<"TESTCASERESULT"> | string | null
    stdout?: StringNullableWithAggregatesFilter<"TESTCASERESULT"> | string | null
    stderr?: StringNullableWithAggregatesFilter<"TESTCASERESULT"> | string | null
    expoectedOutput?: StringNullableWithAggregatesFilter<"TESTCASERESULT"> | string | null
    compileOutput?: StringNullableWithAggregatesFilter<"TESTCASERESULT"> | string | null
    status?: StringWithAggregatesFilter<"TESTCASERESULT"> | string
    memory?: StringNullableWithAggregatesFilter<"TESTCASERESULT"> | string | null
    time?: StringNullableWithAggregatesFilter<"TESTCASERESULT"> | string | null
  }

  export type PROBLEMSOLVEDWhereInput = {
    AND?: PROBLEMSOLVEDWhereInput | PROBLEMSOLVEDWhereInput[]
    OR?: PROBLEMSOLVEDWhereInput[]
    NOT?: PROBLEMSOLVEDWhereInput | PROBLEMSOLVEDWhereInput[]
    id?: StringFilter<"PROBLEMSOLVED"> | string
    userId?: StringFilter<"PROBLEMSOLVED"> | string
    problemId?: StringFilter<"PROBLEMSOLVED"> | string
    createdAt?: DateTimeFilter<"PROBLEMSOLVED"> | Date | string
    updatedAt?: DateTimeFilter<"PROBLEMSOLVED"> | Date | string
    user?: XOR<USERScalarRelationFilter, USERWhereInput>
    problem?: XOR<PROBLEMScalarRelationFilter, PROBLEMWhereInput>
  }

  export type PROBLEMSOLVEDOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: USEROrderByWithRelationInput
    problem?: PROBLEMOrderByWithRelationInput
  }

  export type PROBLEMSOLVEDWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_problemId?: PROBLEMSOLVEDUserIdProblemIdCompoundUniqueInput
    AND?: PROBLEMSOLVEDWhereInput | PROBLEMSOLVEDWhereInput[]
    OR?: PROBLEMSOLVEDWhereInput[]
    NOT?: PROBLEMSOLVEDWhereInput | PROBLEMSOLVEDWhereInput[]
    userId?: StringFilter<"PROBLEMSOLVED"> | string
    problemId?: StringFilter<"PROBLEMSOLVED"> | string
    createdAt?: DateTimeFilter<"PROBLEMSOLVED"> | Date | string
    updatedAt?: DateTimeFilter<"PROBLEMSOLVED"> | Date | string
    user?: XOR<USERScalarRelationFilter, USERWhereInput>
    problem?: XOR<PROBLEMScalarRelationFilter, PROBLEMWhereInput>
  }, "id" | "userId_problemId">

  export type PROBLEMSOLVEDOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PROBLEMSOLVEDCountOrderByAggregateInput
    _max?: PROBLEMSOLVEDMaxOrderByAggregateInput
    _min?: PROBLEMSOLVEDMinOrderByAggregateInput
  }

  export type PROBLEMSOLVEDScalarWhereWithAggregatesInput = {
    AND?: PROBLEMSOLVEDScalarWhereWithAggregatesInput | PROBLEMSOLVEDScalarWhereWithAggregatesInput[]
    OR?: PROBLEMSOLVEDScalarWhereWithAggregatesInput[]
    NOT?: PROBLEMSOLVEDScalarWhereWithAggregatesInput | PROBLEMSOLVEDScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PROBLEMSOLVED"> | string
    userId?: StringWithAggregatesFilter<"PROBLEMSOLVED"> | string
    problemId?: StringWithAggregatesFilter<"PROBLEMSOLVED"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PROBLEMSOLVED"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PROBLEMSOLVED"> | Date | string
  }

  export type USERCreateInput = {
    id?: string
    name: string
    password: string
    email: string
    image?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: PROBLEMCreateNestedManyWithoutUserInput
    submission?: SUBMISSIONCreateNestedManyWithoutUserInput
    solvedProblems?: PROBLEMSOLVEDCreateNestedManyWithoutUserInput
  }

  export type USERUncheckedCreateInput = {
    id?: string
    name: string
    password: string
    email: string
    image?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: PROBLEMUncheckedCreateNestedManyWithoutUserInput
    submission?: SUBMISSIONUncheckedCreateNestedManyWithoutUserInput
    solvedProblems?: PROBLEMSOLVEDUncheckedCreateNestedManyWithoutUserInput
  }

  export type USERUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: PROBLEMUpdateManyWithoutUserNestedInput
    submission?: SUBMISSIONUpdateManyWithoutUserNestedInput
    solvedProblems?: PROBLEMSOLVEDUpdateManyWithoutUserNestedInput
  }

  export type USERUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: PROBLEMUncheckedUpdateManyWithoutUserNestedInput
    submission?: SUBMISSIONUncheckedUpdateManyWithoutUserNestedInput
    solvedProblems?: PROBLEMSOLVEDUncheckedUpdateManyWithoutUserNestedInput
  }

  export type USERCreateManyInput = {
    id?: string
    name: string
    password: string
    email: string
    image?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type USERUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type USERUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PROBLEMCreateInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: PROBLEMCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippet: JsonNullValueInput | InputJsonValue
    refrenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: USERCreateNestedOneWithoutProblemsInput
    submission?: SUBMISSIONCreateNestedManyWithoutProblemInput
    solvedBy?: PROBLEMSOLVEDCreateNestedManyWithoutProblemInput
  }

  export type PROBLEMUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: PROBLEMCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippet: JsonNullValueInput | InputJsonValue
    refrenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SUBMISSIONUncheckedCreateNestedManyWithoutProblemInput
    solvedBy?: PROBLEMSOLVEDUncheckedCreateNestedManyWithoutProblemInput
  }

  export type PROBLEMUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: PROBLEMUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippet?: JsonNullValueInput | InputJsonValue
    refrenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: USERUpdateOneRequiredWithoutProblemsNestedInput
    submission?: SUBMISSIONUpdateManyWithoutProblemNestedInput
    solvedBy?: PROBLEMSOLVEDUpdateManyWithoutProblemNestedInput
  }

  export type PROBLEMUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: PROBLEMUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippet?: JsonNullValueInput | InputJsonValue
    refrenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SUBMISSIONUncheckedUpdateManyWithoutProblemNestedInput
    solvedBy?: PROBLEMSOLVEDUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type PROBLEMCreateManyInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: PROBLEMCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippet: JsonNullValueInput | InputJsonValue
    refrenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PROBLEMUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: PROBLEMUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippet?: JsonNullValueInput | InputJsonValue
    refrenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PROBLEMUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: PROBLEMUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippet?: JsonNullValueInput | InputJsonValue
    refrenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SUBMISSIONCreateInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    laguage: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory: string
    time: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: USERCreateNestedOneWithoutSubmissionInput
    problem: PROBLEMCreateNestedOneWithoutSubmissionInput
    testCases?: TESTCASERESULTCreateNestedManyWithoutSubmissionInput
  }

  export type SUBMISSIONUncheckedCreateInput = {
    id?: string
    userId: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    laguage: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory: string
    time: string
    createdAt?: Date | string
    updatedAt?: Date | string
    testCases?: TESTCASERESULTUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SUBMISSIONUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    laguage?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: USERUpdateOneRequiredWithoutSubmissionNestedInput
    problem?: PROBLEMUpdateOneRequiredWithoutSubmissionNestedInput
    testCases?: TESTCASERESULTUpdateManyWithoutSubmissionNestedInput
  }

  export type SUBMISSIONUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    laguage?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCases?: TESTCASERESULTUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SUBMISSIONCreateManyInput = {
    id?: string
    userId: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    laguage: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory: string
    time: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SUBMISSIONUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    laguage?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SUBMISSIONUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    laguage?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TESTCASERESULTCreateInput = {
    id?: string
    testCase: number
    passed: boolean
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    expoectedOutput?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    submission: SUBMISSIONCreateNestedOneWithoutTestCasesInput
  }

  export type TESTCASERESULTUncheckedCreateInput = {
    id?: string
    submissionID: string
    testCase: number
    passed: boolean
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    expoectedOutput?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
  }

  export type TESTCASERESULTUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    expoectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    submission?: SUBMISSIONUpdateOneRequiredWithoutTestCasesNestedInput
  }

  export type TESTCASERESULTUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionID?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    expoectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TESTCASERESULTCreateManyInput = {
    id?: string
    submissionID: string
    testCase: number
    passed: boolean
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    expoectedOutput?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
  }

  export type TESTCASERESULTUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    expoectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TESTCASERESULTUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionID?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    expoectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PROBLEMSOLVEDCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: USERCreateNestedOneWithoutSolvedProblemsInput
    problem: PROBLEMCreateNestedOneWithoutSolvedByInput
  }

  export type PROBLEMSOLVEDUncheckedCreateInput = {
    id?: string
    userId: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PROBLEMSOLVEDUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: USERUpdateOneRequiredWithoutSolvedProblemsNestedInput
    problem?: PROBLEMUpdateOneRequiredWithoutSolvedByNestedInput
  }

  export type PROBLEMSOLVEDUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PROBLEMSOLVEDCreateManyInput = {
    id?: string
    userId: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PROBLEMSOLVEDUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PROBLEMSOLVEDUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PROBLEMListRelationFilter = {
    every?: PROBLEMWhereInput
    some?: PROBLEMWhereInput
    none?: PROBLEMWhereInput
  }

  export type SUBMISSIONListRelationFilter = {
    every?: SUBMISSIONWhereInput
    some?: SUBMISSIONWhereInput
    none?: SUBMISSIONWhereInput
  }

  export type PROBLEMSOLVEDListRelationFilter = {
    every?: PROBLEMSOLVEDWhereInput
    some?: PROBLEMSOLVEDWhereInput
    none?: PROBLEMSOLVEDWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PROBLEMOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SUBMISSIONOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PROBLEMSOLVEDOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type USERCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type USERMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type USERMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type USERScalarRelationFilter = {
    is?: USERWhereInput
    isNot?: USERWhereInput
  }

  export type PROBLEMCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    editorial?: SortOrder
    testCases?: SortOrder
    codeSnippet?: SortOrder
    refrenceSolutions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PROBLEMMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    userId?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    editorial?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PROBLEMMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    userId?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    editorial?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type PROBLEMScalarRelationFilter = {
    is?: PROBLEMWhereInput
    isNot?: PROBLEMWhereInput
  }

  export type TESTCASERESULTListRelationFilter = {
    every?: TESTCASERESULTWhereInput
    some?: TESTCASERESULTWhereInput
    none?: TESTCASERESULTWhereInput
  }

  export type TESTCASERESULTOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SUBMISSIONCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    sourceCode?: SortOrder
    laguage?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SUBMISSIONMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    laguage?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SUBMISSIONMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    laguage?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SUBMISSIONScalarRelationFilter = {
    is?: SUBMISSIONWhereInput
    isNot?: SUBMISSIONWhereInput
  }

  export type TESTCASERESULTCountOrderByAggregateInput = {
    id?: SortOrder
    submissionID?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    expoectedOutput?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
  }

  export type TESTCASERESULTAvgOrderByAggregateInput = {
    testCase?: SortOrder
  }

  export type TESTCASERESULTMaxOrderByAggregateInput = {
    id?: SortOrder
    submissionID?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    expoectedOutput?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
  }

  export type TESTCASERESULTMinOrderByAggregateInput = {
    id?: SortOrder
    submissionID?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    expoectedOutput?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
  }

  export type TESTCASERESULTSumOrderByAggregateInput = {
    testCase?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PROBLEMSOLVEDUserIdProblemIdCompoundUniqueInput = {
    userId: string
    problemId: string
  }

  export type PROBLEMSOLVEDCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PROBLEMSOLVEDMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PROBLEMSOLVEDMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PROBLEMCreateNestedManyWithoutUserInput = {
    create?: XOR<PROBLEMCreateWithoutUserInput, PROBLEMUncheckedCreateWithoutUserInput> | PROBLEMCreateWithoutUserInput[] | PROBLEMUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PROBLEMCreateOrConnectWithoutUserInput | PROBLEMCreateOrConnectWithoutUserInput[]
    createMany?: PROBLEMCreateManyUserInputEnvelope
    connect?: PROBLEMWhereUniqueInput | PROBLEMWhereUniqueInput[]
  }

  export type SUBMISSIONCreateNestedManyWithoutUserInput = {
    create?: XOR<SUBMISSIONCreateWithoutUserInput, SUBMISSIONUncheckedCreateWithoutUserInput> | SUBMISSIONCreateWithoutUserInput[] | SUBMISSIONUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SUBMISSIONCreateOrConnectWithoutUserInput | SUBMISSIONCreateOrConnectWithoutUserInput[]
    createMany?: SUBMISSIONCreateManyUserInputEnvelope
    connect?: SUBMISSIONWhereUniqueInput | SUBMISSIONWhereUniqueInput[]
  }

  export type PROBLEMSOLVEDCreateNestedManyWithoutUserInput = {
    create?: XOR<PROBLEMSOLVEDCreateWithoutUserInput, PROBLEMSOLVEDUncheckedCreateWithoutUserInput> | PROBLEMSOLVEDCreateWithoutUserInput[] | PROBLEMSOLVEDUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PROBLEMSOLVEDCreateOrConnectWithoutUserInput | PROBLEMSOLVEDCreateOrConnectWithoutUserInput[]
    createMany?: PROBLEMSOLVEDCreateManyUserInputEnvelope
    connect?: PROBLEMSOLVEDWhereUniqueInput | PROBLEMSOLVEDWhereUniqueInput[]
  }

  export type PROBLEMUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PROBLEMCreateWithoutUserInput, PROBLEMUncheckedCreateWithoutUserInput> | PROBLEMCreateWithoutUserInput[] | PROBLEMUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PROBLEMCreateOrConnectWithoutUserInput | PROBLEMCreateOrConnectWithoutUserInput[]
    createMany?: PROBLEMCreateManyUserInputEnvelope
    connect?: PROBLEMWhereUniqueInput | PROBLEMWhereUniqueInput[]
  }

  export type SUBMISSIONUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SUBMISSIONCreateWithoutUserInput, SUBMISSIONUncheckedCreateWithoutUserInput> | SUBMISSIONCreateWithoutUserInput[] | SUBMISSIONUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SUBMISSIONCreateOrConnectWithoutUserInput | SUBMISSIONCreateOrConnectWithoutUserInput[]
    createMany?: SUBMISSIONCreateManyUserInputEnvelope
    connect?: SUBMISSIONWhereUniqueInput | SUBMISSIONWhereUniqueInput[]
  }

  export type PROBLEMSOLVEDUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PROBLEMSOLVEDCreateWithoutUserInput, PROBLEMSOLVEDUncheckedCreateWithoutUserInput> | PROBLEMSOLVEDCreateWithoutUserInput[] | PROBLEMSOLVEDUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PROBLEMSOLVEDCreateOrConnectWithoutUserInput | PROBLEMSOLVEDCreateOrConnectWithoutUserInput[]
    createMany?: PROBLEMSOLVEDCreateManyUserInputEnvelope
    connect?: PROBLEMSOLVEDWhereUniqueInput | PROBLEMSOLVEDWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PROBLEMUpdateManyWithoutUserNestedInput = {
    create?: XOR<PROBLEMCreateWithoutUserInput, PROBLEMUncheckedCreateWithoutUserInput> | PROBLEMCreateWithoutUserInput[] | PROBLEMUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PROBLEMCreateOrConnectWithoutUserInput | PROBLEMCreateOrConnectWithoutUserInput[]
    upsert?: PROBLEMUpsertWithWhereUniqueWithoutUserInput | PROBLEMUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PROBLEMCreateManyUserInputEnvelope
    set?: PROBLEMWhereUniqueInput | PROBLEMWhereUniqueInput[]
    disconnect?: PROBLEMWhereUniqueInput | PROBLEMWhereUniqueInput[]
    delete?: PROBLEMWhereUniqueInput | PROBLEMWhereUniqueInput[]
    connect?: PROBLEMWhereUniqueInput | PROBLEMWhereUniqueInput[]
    update?: PROBLEMUpdateWithWhereUniqueWithoutUserInput | PROBLEMUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PROBLEMUpdateManyWithWhereWithoutUserInput | PROBLEMUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PROBLEMScalarWhereInput | PROBLEMScalarWhereInput[]
  }

  export type SUBMISSIONUpdateManyWithoutUserNestedInput = {
    create?: XOR<SUBMISSIONCreateWithoutUserInput, SUBMISSIONUncheckedCreateWithoutUserInput> | SUBMISSIONCreateWithoutUserInput[] | SUBMISSIONUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SUBMISSIONCreateOrConnectWithoutUserInput | SUBMISSIONCreateOrConnectWithoutUserInput[]
    upsert?: SUBMISSIONUpsertWithWhereUniqueWithoutUserInput | SUBMISSIONUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SUBMISSIONCreateManyUserInputEnvelope
    set?: SUBMISSIONWhereUniqueInput | SUBMISSIONWhereUniqueInput[]
    disconnect?: SUBMISSIONWhereUniqueInput | SUBMISSIONWhereUniqueInput[]
    delete?: SUBMISSIONWhereUniqueInput | SUBMISSIONWhereUniqueInput[]
    connect?: SUBMISSIONWhereUniqueInput | SUBMISSIONWhereUniqueInput[]
    update?: SUBMISSIONUpdateWithWhereUniqueWithoutUserInput | SUBMISSIONUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SUBMISSIONUpdateManyWithWhereWithoutUserInput | SUBMISSIONUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SUBMISSIONScalarWhereInput | SUBMISSIONScalarWhereInput[]
  }

  export type PROBLEMSOLVEDUpdateManyWithoutUserNestedInput = {
    create?: XOR<PROBLEMSOLVEDCreateWithoutUserInput, PROBLEMSOLVEDUncheckedCreateWithoutUserInput> | PROBLEMSOLVEDCreateWithoutUserInput[] | PROBLEMSOLVEDUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PROBLEMSOLVEDCreateOrConnectWithoutUserInput | PROBLEMSOLVEDCreateOrConnectWithoutUserInput[]
    upsert?: PROBLEMSOLVEDUpsertWithWhereUniqueWithoutUserInput | PROBLEMSOLVEDUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PROBLEMSOLVEDCreateManyUserInputEnvelope
    set?: PROBLEMSOLVEDWhereUniqueInput | PROBLEMSOLVEDWhereUniqueInput[]
    disconnect?: PROBLEMSOLVEDWhereUniqueInput | PROBLEMSOLVEDWhereUniqueInput[]
    delete?: PROBLEMSOLVEDWhereUniqueInput | PROBLEMSOLVEDWhereUniqueInput[]
    connect?: PROBLEMSOLVEDWhereUniqueInput | PROBLEMSOLVEDWhereUniqueInput[]
    update?: PROBLEMSOLVEDUpdateWithWhereUniqueWithoutUserInput | PROBLEMSOLVEDUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PROBLEMSOLVEDUpdateManyWithWhereWithoutUserInput | PROBLEMSOLVEDUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PROBLEMSOLVEDScalarWhereInput | PROBLEMSOLVEDScalarWhereInput[]
  }

  export type PROBLEMUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PROBLEMCreateWithoutUserInput, PROBLEMUncheckedCreateWithoutUserInput> | PROBLEMCreateWithoutUserInput[] | PROBLEMUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PROBLEMCreateOrConnectWithoutUserInput | PROBLEMCreateOrConnectWithoutUserInput[]
    upsert?: PROBLEMUpsertWithWhereUniqueWithoutUserInput | PROBLEMUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PROBLEMCreateManyUserInputEnvelope
    set?: PROBLEMWhereUniqueInput | PROBLEMWhereUniqueInput[]
    disconnect?: PROBLEMWhereUniqueInput | PROBLEMWhereUniqueInput[]
    delete?: PROBLEMWhereUniqueInput | PROBLEMWhereUniqueInput[]
    connect?: PROBLEMWhereUniqueInput | PROBLEMWhereUniqueInput[]
    update?: PROBLEMUpdateWithWhereUniqueWithoutUserInput | PROBLEMUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PROBLEMUpdateManyWithWhereWithoutUserInput | PROBLEMUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PROBLEMScalarWhereInput | PROBLEMScalarWhereInput[]
  }

  export type SUBMISSIONUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SUBMISSIONCreateWithoutUserInput, SUBMISSIONUncheckedCreateWithoutUserInput> | SUBMISSIONCreateWithoutUserInput[] | SUBMISSIONUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SUBMISSIONCreateOrConnectWithoutUserInput | SUBMISSIONCreateOrConnectWithoutUserInput[]
    upsert?: SUBMISSIONUpsertWithWhereUniqueWithoutUserInput | SUBMISSIONUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SUBMISSIONCreateManyUserInputEnvelope
    set?: SUBMISSIONWhereUniqueInput | SUBMISSIONWhereUniqueInput[]
    disconnect?: SUBMISSIONWhereUniqueInput | SUBMISSIONWhereUniqueInput[]
    delete?: SUBMISSIONWhereUniqueInput | SUBMISSIONWhereUniqueInput[]
    connect?: SUBMISSIONWhereUniqueInput | SUBMISSIONWhereUniqueInput[]
    update?: SUBMISSIONUpdateWithWhereUniqueWithoutUserInput | SUBMISSIONUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SUBMISSIONUpdateManyWithWhereWithoutUserInput | SUBMISSIONUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SUBMISSIONScalarWhereInput | SUBMISSIONScalarWhereInput[]
  }

  export type PROBLEMSOLVEDUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PROBLEMSOLVEDCreateWithoutUserInput, PROBLEMSOLVEDUncheckedCreateWithoutUserInput> | PROBLEMSOLVEDCreateWithoutUserInput[] | PROBLEMSOLVEDUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PROBLEMSOLVEDCreateOrConnectWithoutUserInput | PROBLEMSOLVEDCreateOrConnectWithoutUserInput[]
    upsert?: PROBLEMSOLVEDUpsertWithWhereUniqueWithoutUserInput | PROBLEMSOLVEDUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PROBLEMSOLVEDCreateManyUserInputEnvelope
    set?: PROBLEMSOLVEDWhereUniqueInput | PROBLEMSOLVEDWhereUniqueInput[]
    disconnect?: PROBLEMSOLVEDWhereUniqueInput | PROBLEMSOLVEDWhereUniqueInput[]
    delete?: PROBLEMSOLVEDWhereUniqueInput | PROBLEMSOLVEDWhereUniqueInput[]
    connect?: PROBLEMSOLVEDWhereUniqueInput | PROBLEMSOLVEDWhereUniqueInput[]
    update?: PROBLEMSOLVEDUpdateWithWhereUniqueWithoutUserInput | PROBLEMSOLVEDUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PROBLEMSOLVEDUpdateManyWithWhereWithoutUserInput | PROBLEMSOLVEDUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PROBLEMSOLVEDScalarWhereInput | PROBLEMSOLVEDScalarWhereInput[]
  }

  export type PROBLEMCreatetagsInput = {
    set: string[]
  }

  export type USERCreateNestedOneWithoutProblemsInput = {
    create?: XOR<USERCreateWithoutProblemsInput, USERUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: USERCreateOrConnectWithoutProblemsInput
    connect?: USERWhereUniqueInput
  }

  export type SUBMISSIONCreateNestedManyWithoutProblemInput = {
    create?: XOR<SUBMISSIONCreateWithoutProblemInput, SUBMISSIONUncheckedCreateWithoutProblemInput> | SUBMISSIONCreateWithoutProblemInput[] | SUBMISSIONUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SUBMISSIONCreateOrConnectWithoutProblemInput | SUBMISSIONCreateOrConnectWithoutProblemInput[]
    createMany?: SUBMISSIONCreateManyProblemInputEnvelope
    connect?: SUBMISSIONWhereUniqueInput | SUBMISSIONWhereUniqueInput[]
  }

  export type PROBLEMSOLVEDCreateNestedManyWithoutProblemInput = {
    create?: XOR<PROBLEMSOLVEDCreateWithoutProblemInput, PROBLEMSOLVEDUncheckedCreateWithoutProblemInput> | PROBLEMSOLVEDCreateWithoutProblemInput[] | PROBLEMSOLVEDUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: PROBLEMSOLVEDCreateOrConnectWithoutProblemInput | PROBLEMSOLVEDCreateOrConnectWithoutProblemInput[]
    createMany?: PROBLEMSOLVEDCreateManyProblemInputEnvelope
    connect?: PROBLEMSOLVEDWhereUniqueInput | PROBLEMSOLVEDWhereUniqueInput[]
  }

  export type SUBMISSIONUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<SUBMISSIONCreateWithoutProblemInput, SUBMISSIONUncheckedCreateWithoutProblemInput> | SUBMISSIONCreateWithoutProblemInput[] | SUBMISSIONUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SUBMISSIONCreateOrConnectWithoutProblemInput | SUBMISSIONCreateOrConnectWithoutProblemInput[]
    createMany?: SUBMISSIONCreateManyProblemInputEnvelope
    connect?: SUBMISSIONWhereUniqueInput | SUBMISSIONWhereUniqueInput[]
  }

  export type PROBLEMSOLVEDUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<PROBLEMSOLVEDCreateWithoutProblemInput, PROBLEMSOLVEDUncheckedCreateWithoutProblemInput> | PROBLEMSOLVEDCreateWithoutProblemInput[] | PROBLEMSOLVEDUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: PROBLEMSOLVEDCreateOrConnectWithoutProblemInput | PROBLEMSOLVEDCreateOrConnectWithoutProblemInput[]
    createMany?: PROBLEMSOLVEDCreateManyProblemInputEnvelope
    connect?: PROBLEMSOLVEDWhereUniqueInput | PROBLEMSOLVEDWhereUniqueInput[]
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type PROBLEMUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type USERUpdateOneRequiredWithoutProblemsNestedInput = {
    create?: XOR<USERCreateWithoutProblemsInput, USERUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: USERCreateOrConnectWithoutProblemsInput
    upsert?: USERUpsertWithoutProblemsInput
    connect?: USERWhereUniqueInput
    update?: XOR<XOR<USERUpdateToOneWithWhereWithoutProblemsInput, USERUpdateWithoutProblemsInput>, USERUncheckedUpdateWithoutProblemsInput>
  }

  export type SUBMISSIONUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SUBMISSIONCreateWithoutProblemInput, SUBMISSIONUncheckedCreateWithoutProblemInput> | SUBMISSIONCreateWithoutProblemInput[] | SUBMISSIONUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SUBMISSIONCreateOrConnectWithoutProblemInput | SUBMISSIONCreateOrConnectWithoutProblemInput[]
    upsert?: SUBMISSIONUpsertWithWhereUniqueWithoutProblemInput | SUBMISSIONUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SUBMISSIONCreateManyProblemInputEnvelope
    set?: SUBMISSIONWhereUniqueInput | SUBMISSIONWhereUniqueInput[]
    disconnect?: SUBMISSIONWhereUniqueInput | SUBMISSIONWhereUniqueInput[]
    delete?: SUBMISSIONWhereUniqueInput | SUBMISSIONWhereUniqueInput[]
    connect?: SUBMISSIONWhereUniqueInput | SUBMISSIONWhereUniqueInput[]
    update?: SUBMISSIONUpdateWithWhereUniqueWithoutProblemInput | SUBMISSIONUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SUBMISSIONUpdateManyWithWhereWithoutProblemInput | SUBMISSIONUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SUBMISSIONScalarWhereInput | SUBMISSIONScalarWhereInput[]
  }

  export type PROBLEMSOLVEDUpdateManyWithoutProblemNestedInput = {
    create?: XOR<PROBLEMSOLVEDCreateWithoutProblemInput, PROBLEMSOLVEDUncheckedCreateWithoutProblemInput> | PROBLEMSOLVEDCreateWithoutProblemInput[] | PROBLEMSOLVEDUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: PROBLEMSOLVEDCreateOrConnectWithoutProblemInput | PROBLEMSOLVEDCreateOrConnectWithoutProblemInput[]
    upsert?: PROBLEMSOLVEDUpsertWithWhereUniqueWithoutProblemInput | PROBLEMSOLVEDUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: PROBLEMSOLVEDCreateManyProblemInputEnvelope
    set?: PROBLEMSOLVEDWhereUniqueInput | PROBLEMSOLVEDWhereUniqueInput[]
    disconnect?: PROBLEMSOLVEDWhereUniqueInput | PROBLEMSOLVEDWhereUniqueInput[]
    delete?: PROBLEMSOLVEDWhereUniqueInput | PROBLEMSOLVEDWhereUniqueInput[]
    connect?: PROBLEMSOLVEDWhereUniqueInput | PROBLEMSOLVEDWhereUniqueInput[]
    update?: PROBLEMSOLVEDUpdateWithWhereUniqueWithoutProblemInput | PROBLEMSOLVEDUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: PROBLEMSOLVEDUpdateManyWithWhereWithoutProblemInput | PROBLEMSOLVEDUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: PROBLEMSOLVEDScalarWhereInput | PROBLEMSOLVEDScalarWhereInput[]
  }

  export type SUBMISSIONUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SUBMISSIONCreateWithoutProblemInput, SUBMISSIONUncheckedCreateWithoutProblemInput> | SUBMISSIONCreateWithoutProblemInput[] | SUBMISSIONUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SUBMISSIONCreateOrConnectWithoutProblemInput | SUBMISSIONCreateOrConnectWithoutProblemInput[]
    upsert?: SUBMISSIONUpsertWithWhereUniqueWithoutProblemInput | SUBMISSIONUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SUBMISSIONCreateManyProblemInputEnvelope
    set?: SUBMISSIONWhereUniqueInput | SUBMISSIONWhereUniqueInput[]
    disconnect?: SUBMISSIONWhereUniqueInput | SUBMISSIONWhereUniqueInput[]
    delete?: SUBMISSIONWhereUniqueInput | SUBMISSIONWhereUniqueInput[]
    connect?: SUBMISSIONWhereUniqueInput | SUBMISSIONWhereUniqueInput[]
    update?: SUBMISSIONUpdateWithWhereUniqueWithoutProblemInput | SUBMISSIONUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SUBMISSIONUpdateManyWithWhereWithoutProblemInput | SUBMISSIONUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SUBMISSIONScalarWhereInput | SUBMISSIONScalarWhereInput[]
  }

  export type PROBLEMSOLVEDUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<PROBLEMSOLVEDCreateWithoutProblemInput, PROBLEMSOLVEDUncheckedCreateWithoutProblemInput> | PROBLEMSOLVEDCreateWithoutProblemInput[] | PROBLEMSOLVEDUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: PROBLEMSOLVEDCreateOrConnectWithoutProblemInput | PROBLEMSOLVEDCreateOrConnectWithoutProblemInput[]
    upsert?: PROBLEMSOLVEDUpsertWithWhereUniqueWithoutProblemInput | PROBLEMSOLVEDUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: PROBLEMSOLVEDCreateManyProblemInputEnvelope
    set?: PROBLEMSOLVEDWhereUniqueInput | PROBLEMSOLVEDWhereUniqueInput[]
    disconnect?: PROBLEMSOLVEDWhereUniqueInput | PROBLEMSOLVEDWhereUniqueInput[]
    delete?: PROBLEMSOLVEDWhereUniqueInput | PROBLEMSOLVEDWhereUniqueInput[]
    connect?: PROBLEMSOLVEDWhereUniqueInput | PROBLEMSOLVEDWhereUniqueInput[]
    update?: PROBLEMSOLVEDUpdateWithWhereUniqueWithoutProblemInput | PROBLEMSOLVEDUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: PROBLEMSOLVEDUpdateManyWithWhereWithoutProblemInput | PROBLEMSOLVEDUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: PROBLEMSOLVEDScalarWhereInput | PROBLEMSOLVEDScalarWhereInput[]
  }

  export type USERCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<USERCreateWithoutSubmissionInput, USERUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: USERCreateOrConnectWithoutSubmissionInput
    connect?: USERWhereUniqueInput
  }

  export type PROBLEMCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<PROBLEMCreateWithoutSubmissionInput, PROBLEMUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: PROBLEMCreateOrConnectWithoutSubmissionInput
    connect?: PROBLEMWhereUniqueInput
  }

  export type TESTCASERESULTCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<TESTCASERESULTCreateWithoutSubmissionInput, TESTCASERESULTUncheckedCreateWithoutSubmissionInput> | TESTCASERESULTCreateWithoutSubmissionInput[] | TESTCASERESULTUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TESTCASERESULTCreateOrConnectWithoutSubmissionInput | TESTCASERESULTCreateOrConnectWithoutSubmissionInput[]
    createMany?: TESTCASERESULTCreateManySubmissionInputEnvelope
    connect?: TESTCASERESULTWhereUniqueInput | TESTCASERESULTWhereUniqueInput[]
  }

  export type TESTCASERESULTUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<TESTCASERESULTCreateWithoutSubmissionInput, TESTCASERESULTUncheckedCreateWithoutSubmissionInput> | TESTCASERESULTCreateWithoutSubmissionInput[] | TESTCASERESULTUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TESTCASERESULTCreateOrConnectWithoutSubmissionInput | TESTCASERESULTCreateOrConnectWithoutSubmissionInput[]
    createMany?: TESTCASERESULTCreateManySubmissionInputEnvelope
    connect?: TESTCASERESULTWhereUniqueInput | TESTCASERESULTWhereUniqueInput[]
  }

  export type USERUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<USERCreateWithoutSubmissionInput, USERUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: USERCreateOrConnectWithoutSubmissionInput
    upsert?: USERUpsertWithoutSubmissionInput
    connect?: USERWhereUniqueInput
    update?: XOR<XOR<USERUpdateToOneWithWhereWithoutSubmissionInput, USERUpdateWithoutSubmissionInput>, USERUncheckedUpdateWithoutSubmissionInput>
  }

  export type PROBLEMUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<PROBLEMCreateWithoutSubmissionInput, PROBLEMUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: PROBLEMCreateOrConnectWithoutSubmissionInput
    upsert?: PROBLEMUpsertWithoutSubmissionInput
    connect?: PROBLEMWhereUniqueInput
    update?: XOR<XOR<PROBLEMUpdateToOneWithWhereWithoutSubmissionInput, PROBLEMUpdateWithoutSubmissionInput>, PROBLEMUncheckedUpdateWithoutSubmissionInput>
  }

  export type TESTCASERESULTUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<TESTCASERESULTCreateWithoutSubmissionInput, TESTCASERESULTUncheckedCreateWithoutSubmissionInput> | TESTCASERESULTCreateWithoutSubmissionInput[] | TESTCASERESULTUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TESTCASERESULTCreateOrConnectWithoutSubmissionInput | TESTCASERESULTCreateOrConnectWithoutSubmissionInput[]
    upsert?: TESTCASERESULTUpsertWithWhereUniqueWithoutSubmissionInput | TESTCASERESULTUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: TESTCASERESULTCreateManySubmissionInputEnvelope
    set?: TESTCASERESULTWhereUniqueInput | TESTCASERESULTWhereUniqueInput[]
    disconnect?: TESTCASERESULTWhereUniqueInput | TESTCASERESULTWhereUniqueInput[]
    delete?: TESTCASERESULTWhereUniqueInput | TESTCASERESULTWhereUniqueInput[]
    connect?: TESTCASERESULTWhereUniqueInput | TESTCASERESULTWhereUniqueInput[]
    update?: TESTCASERESULTUpdateWithWhereUniqueWithoutSubmissionInput | TESTCASERESULTUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: TESTCASERESULTUpdateManyWithWhereWithoutSubmissionInput | TESTCASERESULTUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: TESTCASERESULTScalarWhereInput | TESTCASERESULTScalarWhereInput[]
  }

  export type TESTCASERESULTUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<TESTCASERESULTCreateWithoutSubmissionInput, TESTCASERESULTUncheckedCreateWithoutSubmissionInput> | TESTCASERESULTCreateWithoutSubmissionInput[] | TESTCASERESULTUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TESTCASERESULTCreateOrConnectWithoutSubmissionInput | TESTCASERESULTCreateOrConnectWithoutSubmissionInput[]
    upsert?: TESTCASERESULTUpsertWithWhereUniqueWithoutSubmissionInput | TESTCASERESULTUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: TESTCASERESULTCreateManySubmissionInputEnvelope
    set?: TESTCASERESULTWhereUniqueInput | TESTCASERESULTWhereUniqueInput[]
    disconnect?: TESTCASERESULTWhereUniqueInput | TESTCASERESULTWhereUniqueInput[]
    delete?: TESTCASERESULTWhereUniqueInput | TESTCASERESULTWhereUniqueInput[]
    connect?: TESTCASERESULTWhereUniqueInput | TESTCASERESULTWhereUniqueInput[]
    update?: TESTCASERESULTUpdateWithWhereUniqueWithoutSubmissionInput | TESTCASERESULTUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: TESTCASERESULTUpdateManyWithWhereWithoutSubmissionInput | TESTCASERESULTUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: TESTCASERESULTScalarWhereInput | TESTCASERESULTScalarWhereInput[]
  }

  export type SUBMISSIONCreateNestedOneWithoutTestCasesInput = {
    create?: XOR<SUBMISSIONCreateWithoutTestCasesInput, SUBMISSIONUncheckedCreateWithoutTestCasesInput>
    connectOrCreate?: SUBMISSIONCreateOrConnectWithoutTestCasesInput
    connect?: SUBMISSIONWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SUBMISSIONUpdateOneRequiredWithoutTestCasesNestedInput = {
    create?: XOR<SUBMISSIONCreateWithoutTestCasesInput, SUBMISSIONUncheckedCreateWithoutTestCasesInput>
    connectOrCreate?: SUBMISSIONCreateOrConnectWithoutTestCasesInput
    upsert?: SUBMISSIONUpsertWithoutTestCasesInput
    connect?: SUBMISSIONWhereUniqueInput
    update?: XOR<XOR<SUBMISSIONUpdateToOneWithWhereWithoutTestCasesInput, SUBMISSIONUpdateWithoutTestCasesInput>, SUBMISSIONUncheckedUpdateWithoutTestCasesInput>
  }

  export type USERCreateNestedOneWithoutSolvedProblemsInput = {
    create?: XOR<USERCreateWithoutSolvedProblemsInput, USERUncheckedCreateWithoutSolvedProblemsInput>
    connectOrCreate?: USERCreateOrConnectWithoutSolvedProblemsInput
    connect?: USERWhereUniqueInput
  }

  export type PROBLEMCreateNestedOneWithoutSolvedByInput = {
    create?: XOR<PROBLEMCreateWithoutSolvedByInput, PROBLEMUncheckedCreateWithoutSolvedByInput>
    connectOrCreate?: PROBLEMCreateOrConnectWithoutSolvedByInput
    connect?: PROBLEMWhereUniqueInput
  }

  export type USERUpdateOneRequiredWithoutSolvedProblemsNestedInput = {
    create?: XOR<USERCreateWithoutSolvedProblemsInput, USERUncheckedCreateWithoutSolvedProblemsInput>
    connectOrCreate?: USERCreateOrConnectWithoutSolvedProblemsInput
    upsert?: USERUpsertWithoutSolvedProblemsInput
    connect?: USERWhereUniqueInput
    update?: XOR<XOR<USERUpdateToOneWithWhereWithoutSolvedProblemsInput, USERUpdateWithoutSolvedProblemsInput>, USERUncheckedUpdateWithoutSolvedProblemsInput>
  }

  export type PROBLEMUpdateOneRequiredWithoutSolvedByNestedInput = {
    create?: XOR<PROBLEMCreateWithoutSolvedByInput, PROBLEMUncheckedCreateWithoutSolvedByInput>
    connectOrCreate?: PROBLEMCreateOrConnectWithoutSolvedByInput
    upsert?: PROBLEMUpsertWithoutSolvedByInput
    connect?: PROBLEMWhereUniqueInput
    update?: XOR<XOR<PROBLEMUpdateToOneWithWhereWithoutSolvedByInput, PROBLEMUpdateWithoutSolvedByInput>, PROBLEMUncheckedUpdateWithoutSolvedByInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PROBLEMCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: PROBLEMCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippet: JsonNullValueInput | InputJsonValue
    refrenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SUBMISSIONCreateNestedManyWithoutProblemInput
    solvedBy?: PROBLEMSOLVEDCreateNestedManyWithoutProblemInput
  }

  export type PROBLEMUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: PROBLEMCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippet: JsonNullValueInput | InputJsonValue
    refrenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SUBMISSIONUncheckedCreateNestedManyWithoutProblemInput
    solvedBy?: PROBLEMSOLVEDUncheckedCreateNestedManyWithoutProblemInput
  }

  export type PROBLEMCreateOrConnectWithoutUserInput = {
    where: PROBLEMWhereUniqueInput
    create: XOR<PROBLEMCreateWithoutUserInput, PROBLEMUncheckedCreateWithoutUserInput>
  }

  export type PROBLEMCreateManyUserInputEnvelope = {
    data: PROBLEMCreateManyUserInput | PROBLEMCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SUBMISSIONCreateWithoutUserInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    laguage: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory: string
    time: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: PROBLEMCreateNestedOneWithoutSubmissionInput
    testCases?: TESTCASERESULTCreateNestedManyWithoutSubmissionInput
  }

  export type SUBMISSIONUncheckedCreateWithoutUserInput = {
    id?: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    laguage: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory: string
    time: string
    createdAt?: Date | string
    updatedAt?: Date | string
    testCases?: TESTCASERESULTUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SUBMISSIONCreateOrConnectWithoutUserInput = {
    where: SUBMISSIONWhereUniqueInput
    create: XOR<SUBMISSIONCreateWithoutUserInput, SUBMISSIONUncheckedCreateWithoutUserInput>
  }

  export type SUBMISSIONCreateManyUserInputEnvelope = {
    data: SUBMISSIONCreateManyUserInput | SUBMISSIONCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PROBLEMSOLVEDCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: PROBLEMCreateNestedOneWithoutSolvedByInput
  }

  export type PROBLEMSOLVEDUncheckedCreateWithoutUserInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PROBLEMSOLVEDCreateOrConnectWithoutUserInput = {
    where: PROBLEMSOLVEDWhereUniqueInput
    create: XOR<PROBLEMSOLVEDCreateWithoutUserInput, PROBLEMSOLVEDUncheckedCreateWithoutUserInput>
  }

  export type PROBLEMSOLVEDCreateManyUserInputEnvelope = {
    data: PROBLEMSOLVEDCreateManyUserInput | PROBLEMSOLVEDCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PROBLEMUpsertWithWhereUniqueWithoutUserInput = {
    where: PROBLEMWhereUniqueInput
    update: XOR<PROBLEMUpdateWithoutUserInput, PROBLEMUncheckedUpdateWithoutUserInput>
    create: XOR<PROBLEMCreateWithoutUserInput, PROBLEMUncheckedCreateWithoutUserInput>
  }

  export type PROBLEMUpdateWithWhereUniqueWithoutUserInput = {
    where: PROBLEMWhereUniqueInput
    data: XOR<PROBLEMUpdateWithoutUserInput, PROBLEMUncheckedUpdateWithoutUserInput>
  }

  export type PROBLEMUpdateManyWithWhereWithoutUserInput = {
    where: PROBLEMScalarWhereInput
    data: XOR<PROBLEMUpdateManyMutationInput, PROBLEMUncheckedUpdateManyWithoutUserInput>
  }

  export type PROBLEMScalarWhereInput = {
    AND?: PROBLEMScalarWhereInput | PROBLEMScalarWhereInput[]
    OR?: PROBLEMScalarWhereInput[]
    NOT?: PROBLEMScalarWhereInput | PROBLEMScalarWhereInput[]
    id?: StringFilter<"PROBLEM"> | string
    title?: StringFilter<"PROBLEM"> | string
    description?: StringFilter<"PROBLEM"> | string
    difficulty?: EnumDifficultyFilter<"PROBLEM"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"PROBLEM">
    userId?: StringFilter<"PROBLEM"> | string
    examples?: JsonFilter<"PROBLEM">
    constraints?: StringFilter<"PROBLEM"> | string
    hints?: StringNullableFilter<"PROBLEM"> | string | null
    editorial?: StringNullableFilter<"PROBLEM"> | string | null
    testCases?: JsonFilter<"PROBLEM">
    codeSnippet?: JsonFilter<"PROBLEM">
    refrenceSolutions?: JsonFilter<"PROBLEM">
    createdAt?: DateTimeFilter<"PROBLEM"> | Date | string
    updatedAt?: DateTimeFilter<"PROBLEM"> | Date | string
  }

  export type SUBMISSIONUpsertWithWhereUniqueWithoutUserInput = {
    where: SUBMISSIONWhereUniqueInput
    update: XOR<SUBMISSIONUpdateWithoutUserInput, SUBMISSIONUncheckedUpdateWithoutUserInput>
    create: XOR<SUBMISSIONCreateWithoutUserInput, SUBMISSIONUncheckedCreateWithoutUserInput>
  }

  export type SUBMISSIONUpdateWithWhereUniqueWithoutUserInput = {
    where: SUBMISSIONWhereUniqueInput
    data: XOR<SUBMISSIONUpdateWithoutUserInput, SUBMISSIONUncheckedUpdateWithoutUserInput>
  }

  export type SUBMISSIONUpdateManyWithWhereWithoutUserInput = {
    where: SUBMISSIONScalarWhereInput
    data: XOR<SUBMISSIONUpdateManyMutationInput, SUBMISSIONUncheckedUpdateManyWithoutUserInput>
  }

  export type SUBMISSIONScalarWhereInput = {
    AND?: SUBMISSIONScalarWhereInput | SUBMISSIONScalarWhereInput[]
    OR?: SUBMISSIONScalarWhereInput[]
    NOT?: SUBMISSIONScalarWhereInput | SUBMISSIONScalarWhereInput[]
    id?: StringFilter<"SUBMISSION"> | string
    userId?: StringFilter<"SUBMISSION"> | string
    problemId?: StringFilter<"SUBMISSION"> | string
    sourceCode?: JsonFilter<"SUBMISSION">
    laguage?: StringFilter<"SUBMISSION"> | string
    stdin?: StringNullableFilter<"SUBMISSION"> | string | null
    stdout?: StringNullableFilter<"SUBMISSION"> | string | null
    stderr?: StringNullableFilter<"SUBMISSION"> | string | null
    compileOutput?: StringNullableFilter<"SUBMISSION"> | string | null
    status?: StringFilter<"SUBMISSION"> | string
    memory?: StringFilter<"SUBMISSION"> | string
    time?: StringFilter<"SUBMISSION"> | string
    createdAt?: DateTimeFilter<"SUBMISSION"> | Date | string
    updatedAt?: DateTimeFilter<"SUBMISSION"> | Date | string
  }

  export type PROBLEMSOLVEDUpsertWithWhereUniqueWithoutUserInput = {
    where: PROBLEMSOLVEDWhereUniqueInput
    update: XOR<PROBLEMSOLVEDUpdateWithoutUserInput, PROBLEMSOLVEDUncheckedUpdateWithoutUserInput>
    create: XOR<PROBLEMSOLVEDCreateWithoutUserInput, PROBLEMSOLVEDUncheckedCreateWithoutUserInput>
  }

  export type PROBLEMSOLVEDUpdateWithWhereUniqueWithoutUserInput = {
    where: PROBLEMSOLVEDWhereUniqueInput
    data: XOR<PROBLEMSOLVEDUpdateWithoutUserInput, PROBLEMSOLVEDUncheckedUpdateWithoutUserInput>
  }

  export type PROBLEMSOLVEDUpdateManyWithWhereWithoutUserInput = {
    where: PROBLEMSOLVEDScalarWhereInput
    data: XOR<PROBLEMSOLVEDUpdateManyMutationInput, PROBLEMSOLVEDUncheckedUpdateManyWithoutUserInput>
  }

  export type PROBLEMSOLVEDScalarWhereInput = {
    AND?: PROBLEMSOLVEDScalarWhereInput | PROBLEMSOLVEDScalarWhereInput[]
    OR?: PROBLEMSOLVEDScalarWhereInput[]
    NOT?: PROBLEMSOLVEDScalarWhereInput | PROBLEMSOLVEDScalarWhereInput[]
    id?: StringFilter<"PROBLEMSOLVED"> | string
    userId?: StringFilter<"PROBLEMSOLVED"> | string
    problemId?: StringFilter<"PROBLEMSOLVED"> | string
    createdAt?: DateTimeFilter<"PROBLEMSOLVED"> | Date | string
    updatedAt?: DateTimeFilter<"PROBLEMSOLVED"> | Date | string
  }

  export type USERCreateWithoutProblemsInput = {
    id?: string
    name: string
    password: string
    email: string
    image?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SUBMISSIONCreateNestedManyWithoutUserInput
    solvedProblems?: PROBLEMSOLVEDCreateNestedManyWithoutUserInput
  }

  export type USERUncheckedCreateWithoutProblemsInput = {
    id?: string
    name: string
    password: string
    email: string
    image?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SUBMISSIONUncheckedCreateNestedManyWithoutUserInput
    solvedProblems?: PROBLEMSOLVEDUncheckedCreateNestedManyWithoutUserInput
  }

  export type USERCreateOrConnectWithoutProblemsInput = {
    where: USERWhereUniqueInput
    create: XOR<USERCreateWithoutProblemsInput, USERUncheckedCreateWithoutProblemsInput>
  }

  export type SUBMISSIONCreateWithoutProblemInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    laguage: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory: string
    time: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: USERCreateNestedOneWithoutSubmissionInput
    testCases?: TESTCASERESULTCreateNestedManyWithoutSubmissionInput
  }

  export type SUBMISSIONUncheckedCreateWithoutProblemInput = {
    id?: string
    userId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    laguage: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory: string
    time: string
    createdAt?: Date | string
    updatedAt?: Date | string
    testCases?: TESTCASERESULTUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SUBMISSIONCreateOrConnectWithoutProblemInput = {
    where: SUBMISSIONWhereUniqueInput
    create: XOR<SUBMISSIONCreateWithoutProblemInput, SUBMISSIONUncheckedCreateWithoutProblemInput>
  }

  export type SUBMISSIONCreateManyProblemInputEnvelope = {
    data: SUBMISSIONCreateManyProblemInput | SUBMISSIONCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type PROBLEMSOLVEDCreateWithoutProblemInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: USERCreateNestedOneWithoutSolvedProblemsInput
  }

  export type PROBLEMSOLVEDUncheckedCreateWithoutProblemInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PROBLEMSOLVEDCreateOrConnectWithoutProblemInput = {
    where: PROBLEMSOLVEDWhereUniqueInput
    create: XOR<PROBLEMSOLVEDCreateWithoutProblemInput, PROBLEMSOLVEDUncheckedCreateWithoutProblemInput>
  }

  export type PROBLEMSOLVEDCreateManyProblemInputEnvelope = {
    data: PROBLEMSOLVEDCreateManyProblemInput | PROBLEMSOLVEDCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type USERUpsertWithoutProblemsInput = {
    update: XOR<USERUpdateWithoutProblemsInput, USERUncheckedUpdateWithoutProblemsInput>
    create: XOR<USERCreateWithoutProblemsInput, USERUncheckedCreateWithoutProblemsInput>
    where?: USERWhereInput
  }

  export type USERUpdateToOneWithWhereWithoutProblemsInput = {
    where?: USERWhereInput
    data: XOR<USERUpdateWithoutProblemsInput, USERUncheckedUpdateWithoutProblemsInput>
  }

  export type USERUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SUBMISSIONUpdateManyWithoutUserNestedInput
    solvedProblems?: PROBLEMSOLVEDUpdateManyWithoutUserNestedInput
  }

  export type USERUncheckedUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SUBMISSIONUncheckedUpdateManyWithoutUserNestedInput
    solvedProblems?: PROBLEMSOLVEDUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SUBMISSIONUpsertWithWhereUniqueWithoutProblemInput = {
    where: SUBMISSIONWhereUniqueInput
    update: XOR<SUBMISSIONUpdateWithoutProblemInput, SUBMISSIONUncheckedUpdateWithoutProblemInput>
    create: XOR<SUBMISSIONCreateWithoutProblemInput, SUBMISSIONUncheckedCreateWithoutProblemInput>
  }

  export type SUBMISSIONUpdateWithWhereUniqueWithoutProblemInput = {
    where: SUBMISSIONWhereUniqueInput
    data: XOR<SUBMISSIONUpdateWithoutProblemInput, SUBMISSIONUncheckedUpdateWithoutProblemInput>
  }

  export type SUBMISSIONUpdateManyWithWhereWithoutProblemInput = {
    where: SUBMISSIONScalarWhereInput
    data: XOR<SUBMISSIONUpdateManyMutationInput, SUBMISSIONUncheckedUpdateManyWithoutProblemInput>
  }

  export type PROBLEMSOLVEDUpsertWithWhereUniqueWithoutProblemInput = {
    where: PROBLEMSOLVEDWhereUniqueInput
    update: XOR<PROBLEMSOLVEDUpdateWithoutProblemInput, PROBLEMSOLVEDUncheckedUpdateWithoutProblemInput>
    create: XOR<PROBLEMSOLVEDCreateWithoutProblemInput, PROBLEMSOLVEDUncheckedCreateWithoutProblemInput>
  }

  export type PROBLEMSOLVEDUpdateWithWhereUniqueWithoutProblemInput = {
    where: PROBLEMSOLVEDWhereUniqueInput
    data: XOR<PROBLEMSOLVEDUpdateWithoutProblemInput, PROBLEMSOLVEDUncheckedUpdateWithoutProblemInput>
  }

  export type PROBLEMSOLVEDUpdateManyWithWhereWithoutProblemInput = {
    where: PROBLEMSOLVEDScalarWhereInput
    data: XOR<PROBLEMSOLVEDUpdateManyMutationInput, PROBLEMSOLVEDUncheckedUpdateManyWithoutProblemInput>
  }

  export type USERCreateWithoutSubmissionInput = {
    id?: string
    name: string
    password: string
    email: string
    image?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: PROBLEMCreateNestedManyWithoutUserInput
    solvedProblems?: PROBLEMSOLVEDCreateNestedManyWithoutUserInput
  }

  export type USERUncheckedCreateWithoutSubmissionInput = {
    id?: string
    name: string
    password: string
    email: string
    image?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: PROBLEMUncheckedCreateNestedManyWithoutUserInput
    solvedProblems?: PROBLEMSOLVEDUncheckedCreateNestedManyWithoutUserInput
  }

  export type USERCreateOrConnectWithoutSubmissionInput = {
    where: USERWhereUniqueInput
    create: XOR<USERCreateWithoutSubmissionInput, USERUncheckedCreateWithoutSubmissionInput>
  }

  export type PROBLEMCreateWithoutSubmissionInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: PROBLEMCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippet: JsonNullValueInput | InputJsonValue
    refrenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: USERCreateNestedOneWithoutProblemsInput
    solvedBy?: PROBLEMSOLVEDCreateNestedManyWithoutProblemInput
  }

  export type PROBLEMUncheckedCreateWithoutSubmissionInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: PROBLEMCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippet: JsonNullValueInput | InputJsonValue
    refrenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    solvedBy?: PROBLEMSOLVEDUncheckedCreateNestedManyWithoutProblemInput
  }

  export type PROBLEMCreateOrConnectWithoutSubmissionInput = {
    where: PROBLEMWhereUniqueInput
    create: XOR<PROBLEMCreateWithoutSubmissionInput, PROBLEMUncheckedCreateWithoutSubmissionInput>
  }

  export type TESTCASERESULTCreateWithoutSubmissionInput = {
    id?: string
    testCase: number
    passed: boolean
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    expoectedOutput?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
  }

  export type TESTCASERESULTUncheckedCreateWithoutSubmissionInput = {
    id?: string
    testCase: number
    passed: boolean
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    expoectedOutput?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
  }

  export type TESTCASERESULTCreateOrConnectWithoutSubmissionInput = {
    where: TESTCASERESULTWhereUniqueInput
    create: XOR<TESTCASERESULTCreateWithoutSubmissionInput, TESTCASERESULTUncheckedCreateWithoutSubmissionInput>
  }

  export type TESTCASERESULTCreateManySubmissionInputEnvelope = {
    data: TESTCASERESULTCreateManySubmissionInput | TESTCASERESULTCreateManySubmissionInput[]
    skipDuplicates?: boolean
  }

  export type USERUpsertWithoutSubmissionInput = {
    update: XOR<USERUpdateWithoutSubmissionInput, USERUncheckedUpdateWithoutSubmissionInput>
    create: XOR<USERCreateWithoutSubmissionInput, USERUncheckedCreateWithoutSubmissionInput>
    where?: USERWhereInput
  }

  export type USERUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: USERWhereInput
    data: XOR<USERUpdateWithoutSubmissionInput, USERUncheckedUpdateWithoutSubmissionInput>
  }

  export type USERUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: PROBLEMUpdateManyWithoutUserNestedInput
    solvedProblems?: PROBLEMSOLVEDUpdateManyWithoutUserNestedInput
  }

  export type USERUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: PROBLEMUncheckedUpdateManyWithoutUserNestedInput
    solvedProblems?: PROBLEMSOLVEDUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PROBLEMUpsertWithoutSubmissionInput = {
    update: XOR<PROBLEMUpdateWithoutSubmissionInput, PROBLEMUncheckedUpdateWithoutSubmissionInput>
    create: XOR<PROBLEMCreateWithoutSubmissionInput, PROBLEMUncheckedCreateWithoutSubmissionInput>
    where?: PROBLEMWhereInput
  }

  export type PROBLEMUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: PROBLEMWhereInput
    data: XOR<PROBLEMUpdateWithoutSubmissionInput, PROBLEMUncheckedUpdateWithoutSubmissionInput>
  }

  export type PROBLEMUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: PROBLEMUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippet?: JsonNullValueInput | InputJsonValue
    refrenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: USERUpdateOneRequiredWithoutProblemsNestedInput
    solvedBy?: PROBLEMSOLVEDUpdateManyWithoutProblemNestedInput
  }

  export type PROBLEMUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: PROBLEMUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippet?: JsonNullValueInput | InputJsonValue
    refrenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solvedBy?: PROBLEMSOLVEDUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type TESTCASERESULTUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: TESTCASERESULTWhereUniqueInput
    update: XOR<TESTCASERESULTUpdateWithoutSubmissionInput, TESTCASERESULTUncheckedUpdateWithoutSubmissionInput>
    create: XOR<TESTCASERESULTCreateWithoutSubmissionInput, TESTCASERESULTUncheckedCreateWithoutSubmissionInput>
  }

  export type TESTCASERESULTUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: TESTCASERESULTWhereUniqueInput
    data: XOR<TESTCASERESULTUpdateWithoutSubmissionInput, TESTCASERESULTUncheckedUpdateWithoutSubmissionInput>
  }

  export type TESTCASERESULTUpdateManyWithWhereWithoutSubmissionInput = {
    where: TESTCASERESULTScalarWhereInput
    data: XOR<TESTCASERESULTUpdateManyMutationInput, TESTCASERESULTUncheckedUpdateManyWithoutSubmissionInput>
  }

  export type TESTCASERESULTScalarWhereInput = {
    AND?: TESTCASERESULTScalarWhereInput | TESTCASERESULTScalarWhereInput[]
    OR?: TESTCASERESULTScalarWhereInput[]
    NOT?: TESTCASERESULTScalarWhereInput | TESTCASERESULTScalarWhereInput[]
    id?: StringFilter<"TESTCASERESULT"> | string
    submissionID?: StringFilter<"TESTCASERESULT"> | string
    testCase?: IntFilter<"TESTCASERESULT"> | number
    passed?: BoolFilter<"TESTCASERESULT"> | boolean
    stdin?: StringNullableFilter<"TESTCASERESULT"> | string | null
    stdout?: StringNullableFilter<"TESTCASERESULT"> | string | null
    stderr?: StringNullableFilter<"TESTCASERESULT"> | string | null
    expoectedOutput?: StringNullableFilter<"TESTCASERESULT"> | string | null
    compileOutput?: StringNullableFilter<"TESTCASERESULT"> | string | null
    status?: StringFilter<"TESTCASERESULT"> | string
    memory?: StringNullableFilter<"TESTCASERESULT"> | string | null
    time?: StringNullableFilter<"TESTCASERESULT"> | string | null
  }

  export type SUBMISSIONCreateWithoutTestCasesInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    laguage: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory: string
    time: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: USERCreateNestedOneWithoutSubmissionInput
    problem: PROBLEMCreateNestedOneWithoutSubmissionInput
  }

  export type SUBMISSIONUncheckedCreateWithoutTestCasesInput = {
    id?: string
    userId: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    laguage: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory: string
    time: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SUBMISSIONCreateOrConnectWithoutTestCasesInput = {
    where: SUBMISSIONWhereUniqueInput
    create: XOR<SUBMISSIONCreateWithoutTestCasesInput, SUBMISSIONUncheckedCreateWithoutTestCasesInput>
  }

  export type SUBMISSIONUpsertWithoutTestCasesInput = {
    update: XOR<SUBMISSIONUpdateWithoutTestCasesInput, SUBMISSIONUncheckedUpdateWithoutTestCasesInput>
    create: XOR<SUBMISSIONCreateWithoutTestCasesInput, SUBMISSIONUncheckedCreateWithoutTestCasesInput>
    where?: SUBMISSIONWhereInput
  }

  export type SUBMISSIONUpdateToOneWithWhereWithoutTestCasesInput = {
    where?: SUBMISSIONWhereInput
    data: XOR<SUBMISSIONUpdateWithoutTestCasesInput, SUBMISSIONUncheckedUpdateWithoutTestCasesInput>
  }

  export type SUBMISSIONUpdateWithoutTestCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    laguage?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: USERUpdateOneRequiredWithoutSubmissionNestedInput
    problem?: PROBLEMUpdateOneRequiredWithoutSubmissionNestedInput
  }

  export type SUBMISSIONUncheckedUpdateWithoutTestCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    laguage?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type USERCreateWithoutSolvedProblemsInput = {
    id?: string
    name: string
    password: string
    email: string
    image?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: PROBLEMCreateNestedManyWithoutUserInput
    submission?: SUBMISSIONCreateNestedManyWithoutUserInput
  }

  export type USERUncheckedCreateWithoutSolvedProblemsInput = {
    id?: string
    name: string
    password: string
    email: string
    image?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: PROBLEMUncheckedCreateNestedManyWithoutUserInput
    submission?: SUBMISSIONUncheckedCreateNestedManyWithoutUserInput
  }

  export type USERCreateOrConnectWithoutSolvedProblemsInput = {
    where: USERWhereUniqueInput
    create: XOR<USERCreateWithoutSolvedProblemsInput, USERUncheckedCreateWithoutSolvedProblemsInput>
  }

  export type PROBLEMCreateWithoutSolvedByInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: PROBLEMCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippet: JsonNullValueInput | InputJsonValue
    refrenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: USERCreateNestedOneWithoutProblemsInput
    submission?: SUBMISSIONCreateNestedManyWithoutProblemInput
  }

  export type PROBLEMUncheckedCreateWithoutSolvedByInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: PROBLEMCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippet: JsonNullValueInput | InputJsonValue
    refrenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SUBMISSIONUncheckedCreateNestedManyWithoutProblemInput
  }

  export type PROBLEMCreateOrConnectWithoutSolvedByInput = {
    where: PROBLEMWhereUniqueInput
    create: XOR<PROBLEMCreateWithoutSolvedByInput, PROBLEMUncheckedCreateWithoutSolvedByInput>
  }

  export type USERUpsertWithoutSolvedProblemsInput = {
    update: XOR<USERUpdateWithoutSolvedProblemsInput, USERUncheckedUpdateWithoutSolvedProblemsInput>
    create: XOR<USERCreateWithoutSolvedProblemsInput, USERUncheckedCreateWithoutSolvedProblemsInput>
    where?: USERWhereInput
  }

  export type USERUpdateToOneWithWhereWithoutSolvedProblemsInput = {
    where?: USERWhereInput
    data: XOR<USERUpdateWithoutSolvedProblemsInput, USERUncheckedUpdateWithoutSolvedProblemsInput>
  }

  export type USERUpdateWithoutSolvedProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: PROBLEMUpdateManyWithoutUserNestedInput
    submission?: SUBMISSIONUpdateManyWithoutUserNestedInput
  }

  export type USERUncheckedUpdateWithoutSolvedProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: PROBLEMUncheckedUpdateManyWithoutUserNestedInput
    submission?: SUBMISSIONUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PROBLEMUpsertWithoutSolvedByInput = {
    update: XOR<PROBLEMUpdateWithoutSolvedByInput, PROBLEMUncheckedUpdateWithoutSolvedByInput>
    create: XOR<PROBLEMCreateWithoutSolvedByInput, PROBLEMUncheckedCreateWithoutSolvedByInput>
    where?: PROBLEMWhereInput
  }

  export type PROBLEMUpdateToOneWithWhereWithoutSolvedByInput = {
    where?: PROBLEMWhereInput
    data: XOR<PROBLEMUpdateWithoutSolvedByInput, PROBLEMUncheckedUpdateWithoutSolvedByInput>
  }

  export type PROBLEMUpdateWithoutSolvedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: PROBLEMUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippet?: JsonNullValueInput | InputJsonValue
    refrenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: USERUpdateOneRequiredWithoutProblemsNestedInput
    submission?: SUBMISSIONUpdateManyWithoutProblemNestedInput
  }

  export type PROBLEMUncheckedUpdateWithoutSolvedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: PROBLEMUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippet?: JsonNullValueInput | InputJsonValue
    refrenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SUBMISSIONUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type PROBLEMCreateManyUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: PROBLEMCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippet: JsonNullValueInput | InputJsonValue
    refrenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SUBMISSIONCreateManyUserInput = {
    id?: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    laguage: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory: string
    time: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PROBLEMSOLVEDCreateManyUserInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PROBLEMUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: PROBLEMUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippet?: JsonNullValueInput | InputJsonValue
    refrenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SUBMISSIONUpdateManyWithoutProblemNestedInput
    solvedBy?: PROBLEMSOLVEDUpdateManyWithoutProblemNestedInput
  }

  export type PROBLEMUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: PROBLEMUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippet?: JsonNullValueInput | InputJsonValue
    refrenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SUBMISSIONUncheckedUpdateManyWithoutProblemNestedInput
    solvedBy?: PROBLEMSOLVEDUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type PROBLEMUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: PROBLEMUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippet?: JsonNullValueInput | InputJsonValue
    refrenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SUBMISSIONUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    laguage?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: PROBLEMUpdateOneRequiredWithoutSubmissionNestedInput
    testCases?: TESTCASERESULTUpdateManyWithoutSubmissionNestedInput
  }

  export type SUBMISSIONUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    laguage?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCases?: TESTCASERESULTUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SUBMISSIONUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    laguage?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PROBLEMSOLVEDUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: PROBLEMUpdateOneRequiredWithoutSolvedByNestedInput
  }

  export type PROBLEMSOLVEDUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PROBLEMSOLVEDUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SUBMISSIONCreateManyProblemInput = {
    id?: string
    userId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    laguage: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory: string
    time: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PROBLEMSOLVEDCreateManyProblemInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SUBMISSIONUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    laguage?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: USERUpdateOneRequiredWithoutSubmissionNestedInput
    testCases?: TESTCASERESULTUpdateManyWithoutSubmissionNestedInput
  }

  export type SUBMISSIONUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    laguage?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCases?: TESTCASERESULTUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SUBMISSIONUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    laguage?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PROBLEMSOLVEDUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: USERUpdateOneRequiredWithoutSolvedProblemsNestedInput
  }

  export type PROBLEMSOLVEDUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PROBLEMSOLVEDUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TESTCASERESULTCreateManySubmissionInput = {
    id?: string
    testCase: number
    passed: boolean
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    expoectedOutput?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
  }

  export type TESTCASERESULTUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    expoectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TESTCASERESULTUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    expoectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TESTCASERESULTUncheckedUpdateManyWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    expoectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}