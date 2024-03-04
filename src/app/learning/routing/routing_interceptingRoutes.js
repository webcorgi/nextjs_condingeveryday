// 경로 차단
// https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes


export default function RoutingInterceptingRoutes(){
    // [1] 경로차단
    /*
        /feed/(..)photo/[id] 의 경로를 아래 경로에서 가로채기 가능하다.
        /photo/[id]

        이거 쓰는 이유 ?
        1. URL을 통해 팝업 콘텐츠를 공유 가능하게 만듦.
        2. 모달 닫는 대신 페이지 새로 고칠 때 컨텍스트 유지
        3. 뒤로가기 시 모달 닫기
        4. 앞으로가기 시 모달 열기
    */

    return (
        <>
        </>
    )
}