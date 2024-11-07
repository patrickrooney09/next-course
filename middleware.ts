export { default } from "next-auth/middleware";

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/new-page", request.url));
// }

//*: zero or more
// + one or more
// ?: zero or more
export const config = { matcher: ["/users/:id*"] };
