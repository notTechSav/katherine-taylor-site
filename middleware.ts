import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  
  // Force HTTPS redirect in production
  if (process.env.NODE_ENV === 'production' && request.headers.get('x-forwarded-proto') !== 'https') {
    return NextResponse.redirect(`https://${url.host}${url.pathname}${url.search}`, 301)
  }

  // Check if preview auth is enabled
  const previewAuth = process.env.NEXT_PUBLIC_PREVIEW_AUTH
  const previewUser = process.env.PREVIEW_USER
  const previewPass = process.env.PREVIEW_PASS

  // If preview auth is not enabled or credentials are missing, allow access
  if (previewAuth !== 'on' || !previewUser || !previewPass) {
    return NextResponse.next()
  }

  // Check for existing auth
  const basicAuth = request.headers.get('authorization')

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    if (user === previewUser && pwd === previewPass) {
      return NextResponse.next()
    }
  }

  // Return 401 with basic auth challenge
  url.pathname = '/api/auth'

  return NextResponse.rewrite(url)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

