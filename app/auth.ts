import {NextAuthOptions} from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";

if (
  !process.env.GITHUB_CLIENT_ID ||
  !process.env.GITHUB_SECRET_ID ||
  !process.env.GOOGLE_CLIENT_ID ||
  !process.env.GOOGLE_SECRET_ID ||
  !process.env.NEXTAUTH_SECRET
) {
  throw new Error("Auth required env variables are not set");
}

export const authOptions: NextAuthOptions = {
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
