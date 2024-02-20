import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./connect";
import { getServerSession } from "next-auth";
import { hash, verify } from "argon2";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      authorize: async (credentials) => {
        // Fetch user by email from your database
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          // User not found
          return null;
        }

        const isMatchingPassword = await verify(
          user.password,
          credentials.password
        );

        if (!isMatchingPassword) {
          // Incorrect password
          return null;
        }

        // If credential validation is successful, return the user object
        return user;
      },
      session: async (user) => {
        return { user };
      },
    }),
  ],
  session: {
    strategy: "jwt", // Ensure it's set to "jwt" or your desired strategy
  },
};

export const getAuthSession = () => getServerSession(authOptions);
