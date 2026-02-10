import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "bs"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip internal paths and static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a locale
  const firstSegment = pathname.split("/")[1];
  if (locales.includes(firstSegment)) {
    return NextResponse.next();
  }

  // Rewrite to default locale (URL stays the same, internally routes to /en/...)
  return NextResponse.rewrite(
    new URL(`/${defaultLocale}${pathname}`, request.url)
  );
}
