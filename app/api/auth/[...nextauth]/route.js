import NextAuth, {NextAuthOptions} from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {PrismaClient} from "@prisma/client";
import {Session} from "inspector";

const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET_ID,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_ID,
    }),
  ],
  callbacks: {
    session({user, session}) {
      if (session.user) {
        session.user.id = user.id;
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
