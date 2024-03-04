'use client'
import { middlewareRedirection } from "./middlewareRedirection"

// Part. 리디렉션
// https://nextjs.org/docs/app/building-your-application/routing/redirecting
export default function RoutingRedirect() {
    /* [1] redirect (임시 리디렉션) */
    //  redirect('/login')

    /* [2] permanentRedirect (영구 리디렉션) */
    // permanentRedirect(`/profile/1`)
/*
    영구적 리디렉션(308)은 URL이 영구적으로 변경되었을 때 사용하며, SEO에 유리하고 브라우저 캐싱을 통해 효율적으로 작동합니다.
    임시 리디렉션(307)은 임시적인 변경이나 A/B 테스트, 유지 보수 작업 등 일시적 상황에 적합하며, 원래 URL에 대한 검색 엔진의 평가를 유지하려고 할 때 사용합니다.
*/

    // [3] next.config.js에서 리디렉션 설정 가능함. 해당파일 내용 참고

    // [4] 미들웨어 리디렉션 처리
    /* const request = {
        url: 'https://example.com/dashboard/settings',
        headers: {
            'Authorization': 'Bearer 여기에는유효한JWT토큰이들어갈것입니다',
            'Cookie': 'sessionId=여기에는세션ID가들어갈수있습니다',
        },
        method: 'GET'
    };
    middlewareRedirection(request) */

    // [5] 많은 수의 리디렉션(1000개 이상)을 관리하려면 미들웨어를 사용하여 사용자 정의 솔루션을 만드는 것을 고려할 수 있습니다.
    // ↑ 이럴일 없을것 같아서 공부안함..있다는 것만 파악해놓자.

    // [6] 들어오는 요청에 따라 사용자를 리디렉션..
    // const statusCode = redirectEntry.permanent ? 308 : 307

    return (
        <></>
    )
}