import NextAuth from "next-auth";
import { authOptions } from "../authOptions";

// export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. "Sign in with...")
//       name: "Credentials",
//       // `credentials` is used to generate a form on the sign in page.
//       // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//       // e.g. domain, username, password, 2FA token, etc.
//       // You can pass any HTML attribute to the <input> tag through the object.
//       credentials: {
//         email: { label: "Email", type: "email", placeholder: "Email" },
//         password: {
//           label: "Password",
//           type: "password",
//           placeholder: "Password",
//         },
//       },
//       async authorize(credentials, req) {
//         // Add logic here to look up the user from the credentials supplied
//         if (!credentials?.email || !credentials.password) {
//           return null;
//         }
//         const user = await prisma.user.findUnique({
//           where: { email: credentials.email },
//         });
//         if (!user) {
//           return null;
//         }

//         const passwordsMatch = await bcrypt.compare(
//           credentials.password,
//           user.hashedPassword!
//         );
//         return passwordsMatch ? user : null;
//       },
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   },
// };

const handler = NextAuth(authOptions);

// any get or post request sent to this route will be handled with by the handler function
export { handler as GET, handler as POST };