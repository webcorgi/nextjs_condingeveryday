'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { redirect } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

// 연결 및 탐색
// https://nextjs.org/docs/app/building-your-application/routing
export function RoutingLinkingAndNavigating() {
    /* Link */
    const linkid = 3
    const pathname = usePathname()
    const router = useRouter()

    {/* redirect 기능 */}
    //  redirect('/login')

    /* window.history.pushState (페이지를 리로드하지 않고 페이지 주소만 변경) */
    const searchParams = useSearchParams()
    function updateSorting(sortOrder) {
        const params = new URLSearchParams(searchParams.toString())
        params.set('sort', sortOrder)
        window.history.pushState(null, '', `?${params.toString()}`)
    }

    /*
    window.history.replaceState (브라우저 기록 스택의 현재 항목을 바꾸는 데 사용)
    pushState는 스택이 쌓여서 뒤로가기를 눌러보면 pushState로 적용한 주소가 다 쌓여있다.
    replaceState는 현재 항목만 주소변경하기 때문에 뒤로가기해도 쌓여있지 않음.
    */
    function switchLocale(locale) {
        // e.g. '/en/about' or '/fr/contact'
        const newPath = `/${locale}${pathname}`
        window.history.replaceState(null, '', newPath)
    }

    return (
        <>
            <h2>Routing</h2>

            {/* Link */}
            <Link href="/read">기본 이동</Link>
            <br />

            {/* 동적 세그먼트에 연결 */}
            <Link href={`/read/${linkid}`}>동적 세그먼트 {linkid}</Link>
            <br />

            {/* 활성 링크 확인 (현재 페이지에 class="active" 넣기) */}
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
                활성 링크 확인
            </Link>
            <br />

            {/* 특정 ID에 스크롤 */}
            <Link href="/learning#container">특정 ID에 스크롤 (Link태그 O)</Link><br />
            <a href="/learning#container">특정 ID에 스크롤 (a태그 X)</a>
            <br />

            {/* 스크롤 위치 복원 비활성화 (페이지 이동 시 스크롤 위치를 초기화하지 않겠다는 의미입니다.) 
                - 스크롤 위치를 그대로 유지하고 싶을 때 = false
                - 스크롤 위치를 초기화할때 = true
            */}
            <Link href="/" scroll={false}>
                스크롤 위치 복원 비활성화
            </Link><br />
            <button onClick={() => router.push('/', { scroll: false })}>
                스크롤 위치 복원 비활성화 (router사용)
            </button><br />
            <button onClick={() => router.push('/', { scroll: true })}>
                스크롤 위치 복원 활성화 (router사용)
            </button>
            <br />

            {/* useRouter() Hook */}
            <button type="button" onClick={() => router.push('/')}>
                useRouter() Hook 써서 페이지 이동
            </button>
            <br/>

            {/* window.history.pushState (페이지를 리로드하지 않고 페이지 주소만 변경) */}
            <button onClick={() => updateSorting('asc')}>history.pushState,  Sort Ascending</button>
            <button onClick={() => updateSorting('desc')}>history.pushState,  Sort Descending</button>
            <br />

            {/* window.history.replaceState (브라우저 기록 스택의 현재 항목을 바꾸는 데 사용)
                pushState는 스택이 쌓여서 뒤로가기를 눌러보면 pushState로 적용한 주소가 다 쌓여있다.
                replaceState는 현재 항목만 주소변경하기 때문에 뒤로가기해도 쌓여있지않음.
            */}
            <button onClick={() => switchLocale('en')}>history.replaceState, English</button>
            <button onClick={() => switchLocale('fr')}>history.replaceState, French</button>

            <div style={{height:1000}}></div>
            <div id="conatiner" style={{height:'800px', background:'#000'}}></div>
        </>
    )
}