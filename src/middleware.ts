import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/dashboard(.*)',
  '/(.*)',
]);

export default clerkMiddleware(async (auth, request) => {
  const userId = (auth as any).userId;
  if (request.nextUrl.pathname === '/' && userId) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
