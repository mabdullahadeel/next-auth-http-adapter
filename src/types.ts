import type { Adapter } from "next-auth/adapters";
import type { FetchOptions } from "ofetch";

export type ProcedureConfig<TRes = unknown> = {
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  select?: (res: TRes) => any;
} & FetchOptions;

export type NoOptionalAdapter = Required<Adapter>;
export type AdapterArg_0<T extends keyof NoOptionalAdapter> = Parameters<
  NoOptionalAdapter[T]
>[0];

export type DefaultAdapterProcedures = {
  createUser: <TRes = unknown>(
    user: AdapterArg_0<"createUser">
  ) => ProcedureConfig<TRes>;
  getUserById: <TRes = unknown>(
    id: AdapterArg_0<"getUser">
  ) => ProcedureConfig<TRes>;
  getUserByEmail: <TRes = unknown>(
    email: AdapterArg_0<"getUserByEmail">
  ) => ProcedureConfig<TRes>;
  getUserByAccount: <TRes = unknown>(
    account: AdapterArg_0<"getUserByAccount">
  ) => ProcedureConfig<TRes>;
  updateUser: <TRes = unknown>(
    user: AdapterArg_0<"updateUser">
  ) => ProcedureConfig<TRes>;
  linkAccount: <TRes = unknown>(
    account: AdapterArg_0<"linkAccount">
  ) => ProcedureConfig<TRes>;
  deleteUser?: <TRes = unknown>(
    id: AdapterArg_0<"deleteUser">
  ) => ProcedureConfig<TRes>;
  unlinkAccount?: <TRes = unknown>(
    account: AdapterArg_0<"unlinkAccount">
  ) => ProcedureConfig<TRes>;
  createSession: <TRes = unknown>(
    session: AdapterArg_0<"createSession">
  ) => ProcedureConfig<TRes>;
  getSessionAndUser: <TRes = unknown>(
    sessionToken: AdapterArg_0<"getSessionAndUser">
  ) => ProcedureConfig<TRes>;
  updateSession: <TRes = unknown>(
    session: AdapterArg_0<"updateSession">
  ) => ProcedureConfig<TRes>;
  deleteSession: <TRes = unknown>(
    sessionToken: AdapterArg_0<"deleteSession">
  ) => ProcedureConfig<TRes>;
  createVerificationToken?: <TRes = unknown>(
    verificationToken: AdapterArg_0<"createVerificationToken">
  ) => ProcedureConfig<TRes>;
  useVerificationToken?: <TRes = unknown>(
    params: AdapterArg_0<"useVerificationToken">
  ) => ProcedureConfig<TRes>;
};

export type AdapterProcedures<WithVerificationToken = boolean> =
  DefaultAdapterProcedures &
    (WithVerificationToken extends true
      ? {
          createVerificationToken: <TRes = unknown>(
            verificationToken: AdapterArg_0<"createVerificationToken">
          ) => ProcedureConfig<TRes>;
          useVerificationToken: <TRes = unknown>(
            params: AdapterArg_0<"useVerificationToken">
          ) => ProcedureConfig<TRes>;
        }
      : // eslint-disable-next-line @typescript-eslint/ban-types
        {});

export type AdapterManagerConfig<WithVerificationToken = boolean> = {
  adapterProcedures: AdapterProcedures<WithVerificationToken>;
} & FetchOptions;
