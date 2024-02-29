import { NextResponse } from 'next/server'
import { authenticate } from 'auth-provider'

/* 공식문서에 있는 소스인데 활용 안해봤음. 실제 사용할 때 잘 되는지 동작 확인 필요 */
// https://nextjs.org/docs/app/building-your-application/routing/redirecting#managing-redirects-at-scale-advanced
export function middlewareRedirection(request) {
    const isAuthenticated = authenticate(request)

    if (isAuthenticated) {
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher: '/dashboard/:path*'
}