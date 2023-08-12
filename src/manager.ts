import { ofetch, type FetchOptions } from "ofetch";

import { mergeJSON } from "./json";
import * as schemas from "./validation";
import type { AdapterArg_0, AdapterManagerConfig } from "./types";

const mergeFetchOptions = mergeJSON<FetchOptions>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const defaultSerializer = (data: any) => data;

export class HttpAdpaterManager<WithVerificationToken = boolean> {
  public constructor(
    private defaultFetchOptions: AdapterManagerConfig<WithVerificationToken>
  ) {}

  public async createUser(user: AdapterArg_0<"createUser">) {
    const {
      path,
      select: serialize = defaultSerializer,
      ...fetchOptions
    } = this.defaultFetchOptions.adapterProcedures.createUser(user);
    const res = await ofetch(
      path,
      mergeFetchOptions(fetchOptions, this.defaultFetchOptions)
    );
    return await schemas.createUserSchema.parseAsync(serialize(res));
  }

  public async getUserById(id: AdapterArg_0<"getUser">) {
    const {
      path,
      select: serialize = defaultSerializer,
      ...fetchOptions
    } = this.defaultFetchOptions.adapterProcedures.getUserById(id);
    const res = await ofetch(
      path,
      mergeFetchOptions(fetchOptions, this.defaultFetchOptions)
    );
    return await schemas.getUserSchema.parseAsync(serialize(res));
  }

  public async getUserByEmail(email: AdapterArg_0<"getUserByEmail">) {
    const {
      path,
      select: serialize = defaultSerializer,
      ...fetchOptions
    } = this.defaultFetchOptions.adapterProcedures.getUserByEmail(email);
    const res = await ofetch(
      path,
      mergeFetchOptions(fetchOptions, this.defaultFetchOptions)
    );
    return await schemas.getUserByEmailSchema.parseAsync(serialize(res));
  }

  public async getUserByAccount(
    providerAccountId: AdapterArg_0<"getUserByAccount">
  ) {
    const {
      path,
      select: serialize = defaultSerializer,
      ...fetchOptions
    } = this.defaultFetchOptions.adapterProcedures.getUserByAccount(
      providerAccountId
    );
    const res = await ofetch(
      path,
      mergeFetchOptions(fetchOptions, this.defaultFetchOptions)
    );
    return await schemas.getUserByAccountSchema.parseAsync(serialize(res));
  }

  public async deleteUser(providerAccountId: AdapterArg_0<"deleteUser">) {
    if (!this.defaultFetchOptions.adapterProcedures.deleteUser) {
      throw new Error("deleteUser is not defined in procedures");
    }
    const {
      path,
      select: serialize = defaultSerializer,
      ...fetchOptions
    } = this.defaultFetchOptions.adapterProcedures.deleteUser(
      providerAccountId
    );
    const res = await ofetch(
      path,
      mergeFetchOptions(fetchOptions, this.defaultFetchOptions)
    );
    return await schemas.deleteUserSchema.parseAsync(serialize(res));
  }

  public async linkAccount(account: AdapterArg_0<"linkAccount">) {
    const {
      path,
      select: serialize = defaultSerializer,
      ...fetchOptions
    } = this.defaultFetchOptions.adapterProcedures.linkAccount(account);
    const res = await ofetch(
      path,
      mergeFetchOptions(fetchOptions, this.defaultFetchOptions)
    );
    return await schemas.linkAccountSchema.parseAsync(serialize(res));
  }

  public async unlinkAccount(providerAccountId: AdapterArg_0<"unlinkAccount">) {
    if (!this.defaultFetchOptions.adapterProcedures.unlinkAccount) {
      throw new Error("unlinkAccount is not defined in procedures");
    }
    const {
      path,
      select: serialize = defaultSerializer,
      ...fetchOptions
    } = this.defaultFetchOptions.adapterProcedures.unlinkAccount(
      providerAccountId
    );
    const res = await ofetch(
      path,
      mergeFetchOptions(fetchOptions, this.defaultFetchOptions)
    );
    return await schemas.unlinkAccountSchema.parseAsync(serialize(res));
  }

  public async createSession(account: AdapterArg_0<"createSession">) {
    const {
      path,
      select: serialize = defaultSerializer,
      ...fetchOptions
    } = this.defaultFetchOptions.adapterProcedures.createSession(account);
    const res = await ofetch(
      path,
      mergeFetchOptions(fetchOptions, this.defaultFetchOptions)
    );
    return await schemas.createSessionSchema.parseAsync(serialize(res));
  }

  public async getSessionAndUser(account: AdapterArg_0<"getSessionAndUser">) {
    const {
      path,
      select: serialize = defaultSerializer,
      ...fetchOptions
    } = this.defaultFetchOptions.adapterProcedures.getSessionAndUser(account);

    const res = ofetch(
      path,
      mergeFetchOptions(fetchOptions, this.defaultFetchOptions)
    );
    return await schemas.getSessionAndUserSchema.parseAsync(serialize(res));
  }

  public async updateSession(account: AdapterArg_0<"updateSession">) {
    const {
      path,
      select: serialize = defaultSerializer,
      ...fetchOptions
    } = this.defaultFetchOptions.adapterProcedures.updateSession(account);
    const res = await ofetch(
      path,
      mergeFetchOptions(fetchOptions, this.defaultFetchOptions)
    );
    return await schemas.updateSessionSchema.parseAsync(serialize(res));
  }

  public async deleteSession(account: AdapterArg_0<"deleteSession">) {
    const {
      path,
      select: serialize = defaultSerializer,
      ...fetchOptions
    } = this.defaultFetchOptions.adapterProcedures.deleteSession(account);
    const res = ofetch(
      path,
      mergeFetchOptions(fetchOptions, this.defaultFetchOptions)
    );
    return await schemas.deleteSessionSchema.parseAsync(serialize(res));
  }

  public async createVerificationToken(
    providerAccountId: AdapterArg_0<"createVerificationToken">
  ) {
    if (!this.defaultFetchOptions.adapterProcedures.createVerificationToken) {
      throw new Error("createVerificationToken is not defined in procedures");
    }

    const {
      path,
      select: serialize = defaultSerializer,
      ...fetchOptions
    } = this.defaultFetchOptions.adapterProcedures.createVerificationToken(
      providerAccountId
    );

    const res = await ofetch(
      path,
      mergeFetchOptions(fetchOptions, this.defaultFetchOptions)
    );
    return await schemas.createVerificationTokenSchema.parseAsync(
      serialize(res)
    );
  }

  public async useVerificationToken(
    providerAccountId: AdapterArg_0<"useVerificationToken">
  ) {
    if (!this.defaultFetchOptions.adapterProcedures.useVerificationToken) {
      throw new Error("useVerificationToken is not defined in procedures");
    }
    const {
      path,
      select: serialize = defaultSerializer,
      ...fetchOptions
    } = this.defaultFetchOptions.adapterProcedures.useVerificationToken(
      providerAccountId
    );
    const res = await ofetch(
      path,
      mergeFetchOptions(fetchOptions, this.defaultFetchOptions)
    );
    return await schemas.useVerificationRequestSchema.parseAsync(
      serialize(res)
    );
  }

  public async updateUser(user: AdapterArg_0<"updateUser">) {
    const {
      path,
      select: serialize = defaultSerializer,
      ...fetchOptions
    } = this.defaultFetchOptions.adapterProcedures.updateUser(user);
    const res = await ofetch(
      path,
      mergeFetchOptions(fetchOptions, this.defaultFetchOptions)
    );
    return await schemas.updateUserSchema.parseAsync(serialize(res));
  }
}
