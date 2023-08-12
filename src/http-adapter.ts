import type { Adapter } from "next-auth/adapters";

import { HttpAdpaterManager } from "./manager";
import type { AdapterManagerConfig } from "./types";

export function httpAdpater(opts: AdapterManagerConfig): Adapter {
  const manager = new HttpAdpaterManager(opts);
  return {
    async createUser(user) {
      return await manager.createUser(user);
    },
    async getUser(id) {
      try {
        return await manager.getUserById(id);
      } catch (error) {
        return null;
      }
    },
    async getUserByEmail(email) {
      try {
        return await manager.getUserByEmail(email);
      } catch (error) {
        return null;
      }
    },
    async getUserByAccount(payload) {
      try {
        return await manager.getUserByAccount(payload);
      } catch (error) {
        return null;
      }
    },
    async updateUser(user) {
      return await manager.updateUser(user);
    },
    async deleteUser(userId) {
      try {
        return await manager.deleteUser(userId);
      } catch (error) {
        return null;
      }
    },
    async linkAccount(account) {
      try {
        return await manager.linkAccount(account);
      } catch (error) {
        return null;
      }
    },
    async unlinkAccount(args) {
      await manager.unlinkAccount(args);
      return undefined;
    },
    async createSession(session) {
      return await manager.createSession(session);
    },
    async getSessionAndUser(sessionToken) {
      try {
        return await manager.getSessionAndUser(sessionToken);
      } catch (error) {
        return null;
      }
    },
    async updateSession(session) {
      try {
        return await manager.updateSession(session);
      } catch (error) {
        return null;
      }
    },
    async deleteSession(sessionToken) {
      await manager.deleteSession(sessionToken);
      return null;
    },
    async createVerificationToken(verificationToken) {
      try {
        return await manager.createVerificationToken(verificationToken);
      } catch (error) {
        return null;
      }
    },
    async useVerificationToken(params) {
      try {
        return await manager.useVerificationToken(params);
      } catch (error) {
        return null;
      }
    },
  };
}
