# next-auth-http-adapter

`next-auth-http-adapter` is an adapter for [next-auth](https://next-auth.js.org/) that allows you to use any HTTP API as a database. It is useful for when you want to use a database that is not supported by next-auth, or when you want your server to be the source of truth for authentication but still want to take advantage of next-auth's session management and providers in your next applications.

## Installation

```bash
# npm
npm install next-auth-http-adapter

# yarn
yarn add next-auth-http-adapter

# pnpm
pnpm add next-auth-http-adapter

```

## Usage

Under the hood `next-auth-http-adapter` use [ofetch](https://github.com/unjs/ofetch) for making requests to your backend. Responses from your backend are validated using [zod](https://github.com/colinhacks/zod). Take a loog at the [validation schemas](src/validation.ts) If the response is not in the expected format, an error is thrown. Check out [Converting the response](#converting-the-response-from-your-backend-to-the-expected-format) to convert responses from your backend to desired format.

You can almost configure anything about the each request being made to your backend. The only thing you need to do is to configure the adapter providing all configurations for all the callbacks. An example of how to do this is shown below:

```ts
import { httpAdapter } from "next-auth-http-adapter";

const myHttpAdapter = httpAdapter({
  baseURL: "http://localhost:8000", // or any other base url
  headers: {
    Authorization: process.env.REMOTE_AUTH_RPC_TOKEN!,
    // or set any global headers to be able to authenticate your requests to your backend
  },
  // you can provide any other
  adapterProcedures: {
    createUser(user) {
      return {
        path: "auth/signup/",
        method: "POST",
        body: user,
      };
    },
    getUserById: (id) => ({
      path: `auth/get-user/${id}/`,
    }),
    getUserByEmail: (email) => ({
      path: `auth/get-user-by-email/${encodeURIComponent(email)}/`,
    }),
    getUserByAccount: ({ providerAccountId, provider }) => ({
      path: `auth/get-user-by-account/${encodeURIComponent(
        provider
      )}/${encodeURIComponent(providerAccountId)}/`,
    }),
    updateUser: (user) => ({
      path: "auth/update-user/",
      method: "PATCH",
    }),
    deleteUser: (id) => ({
      path: `auth/delete-user/${id}/`,
      method: "DELETE",
    }),
    linkAccount: (account) => ({
      path: "auth/link-account/",
      method: "POST",
      body: account,
    }),
    unlinkAccount: ({ provider, providerAccountId }) => ({
      path: `auth/unlink-account/${encodeURIComponent(
        provider
      )}/${encodeURIComponent(providerAccountId)}/`,
      method: "DELETE",
    }),
    createSession: (session) => ({
      path: "auth/create-session/",
      method: "POST",
      body: session,
    }),
    getSessionAndUser: (sessionToken) => ({
      path: `auth/get-session/${sessionToken}/`,
    }),
    updateSession: (session) => ({
      path: "auth/update-session/",
      method: "PATCH",
      body: session,
    }),
    deleteSession: (sessionToken) => ({
      path: `auth/delete-session/${sessionToken}/`,
      method: "DELETE",
    }),
    createVerificationToken: (verificationToken) => ({
      path: "auth/create-verification-token/",
      method: "POST",
      body: verificationToken,
    }),
    useVerificationToken: (params) => ({
      path: "auth/use-verification-token/",
      method: "POST",
      body: params,
    }),
  },
});
```

Passing adpater to next-auth is as simple as:

```ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH2_KEY!,
      clientSecret: process.env.GOOGLE_OAUTH2_SECRET!,
    }),
  ],
  adapter: myHttpAdapter,
  // other next-auth options
});
```

## Converting the response from your backend to the expected format

You can provide `select` functions that are used to convert the response from your backend to the expected format before being validated. You can provide serializers for each of the callbacks.

```ts
/**
 * Assuming that your backend returns the following response for the `createUser` callback of the adapter:
 *
 * {
 *    id: 1,
 *    user_email: "johndoe@email.com"
 *    full_name: "John Doe",
 *    email_verified: true,
 *    image: "https://example.com/john-doe.png"
 * }
 */

function createUserSerializer(response) {
  return {
    id: response.id,
    name: response.full_name,
    email: response.user_email,
    image: response.image,
    emailVerified: response.email_verified,
  };
}

const myHttpAdapter = httpAdapter({
  adapterProcedures: {
    createUser(user) {
      return {
        path: "auth/signup/",
        method: "POST",
        body: user,
        select: createUserSerializer,
      };
    },
    // ......
  },
});
```

```

```

## License

MIT
