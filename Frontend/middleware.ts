import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/platform/:path*',
    '/catalogue/:path*',
    // ... other protected routes
  ]
}

// Option 1: Named export
export function middleware(request: NextRequest) {
  return NextResponse.next()
}

// OR Option 2: Default export
// export default function middleware(request: NextRequest) {
//   return NextResponse.next()
// } 