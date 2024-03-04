// 미들웨어
// https://nextjs.org/docs/app/building-your-application/routing/middleware


export default function routing_middleware(){
    /*
        [1] 미들웨어란?
        미들웨어를 사용하면 '요청이 완료되기 전에' 코드를 실행할 수 있습니다.
        그런 다음 들어오는 요청에 따라 요청 또는 응답 헤더를
        다시 작성, 리디렉션, 수정하거나 직접 응답하여 응답을 수정할 수 있습니다.
        미들웨어는 캐시된 콘텐츠와 경로가 일치하기 전에 실행됩니다.
        프로젝트의 모든 경로 에 대해 미들웨어가 호출됩니다 .

        [2] 파일위치:  .js와 동일한 경로이거나, pages/app/src/

        [3] 어떤 경우에 쓸까
            redirect 다른 URL로 들어오는 요청
            rewrite주어진 URL을 표시하여 응답
            API 경로, 대상에 대한 요청 getServerSideProps헤더 rewrite설정
            응답 '쿠키' 설정
            응답 '헤더' 설정 (CORS)
    */


    return (
        <>
        </>
    )
}