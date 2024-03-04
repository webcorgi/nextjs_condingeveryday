// 경로 처리기
// https://nextjs.org/docs/app/building-your-application/routing/route-handlers


export default function RoutingRouteHandlers(){
    // [1] 경로 처리기 (api/route.js)
    /*
        1. 지원되는 HTTP 메서드
        - GET POST PUT PATCH DELETE HEAD
        - 지원 안되는 메서드 쓰면 405 Method Not Allowed 에러 발생함

        2. NextRequest, NextResponse API
        - NextRequest: cookies set get getAll delete has nextUrl ip geo
        - NextResponse: cookies set get getAll delete json redirect rewrite next

        3. 캐싱
        - default값은 캐싱 되게 되어있음
        - 캐싱 선택 해제 가능함. 문서참고

        4. 라우팅 경로
        페이지	             노선	            결과
        app/page.js	        app/route.js	    X
        app/page.js     	app/api/route.js	O
        app/[user]/page.js	app/api/route.js	O

        5. 위의 내용을 어떻게 쓰는가에 대한 예시가 잘되어 있으니 참고

        6. formData queryParam 동적경로 CORS헤더설정  타사서비스 웹훅설정  비UI전달(XML)
    */


    return (
        <>
        </>
    )
}