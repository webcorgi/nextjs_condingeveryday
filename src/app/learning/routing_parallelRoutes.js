// 병렬 경로
// https://nextjs.org/docs/app/building-your-application/routing/parallel-routes


export default function RoutingParallelRoutes(){
    // [1] parallel 폴더 참고. @을 붙인 폴더는 병렬 경로가 가능해서, 하나의 컴포넌트에 두개의 레이아웃을 삽입할 수 있다

    // [2] 병렬 경로엔 default.js가 필수다.
    // [2] @을 붙인 두 경로의 하위경로에, 똑같은 폴더가 존재하지 않을 경우. default.js를 등록해두면 이 문제를 해결할 수 있다
    // ex) /parallel/settings로 접속한다고 쳤을때, @anal/settings, @team/default.js 처럼 default를 넣어두면 @team안에 settings 파일이 없는 경우 default.js 파일을 읽는다.

    // [3] useSelectedLayoutSegment
    // 현재있는 페이지의 도메인 path 주소를 알 수 있다.
    // 참고자료: https://mariais.tistory.com/entry/Nextjs-useSelectedLayoutSegment-%ED%98%84%EC%9E%AC-%EC%9E%88%EB%8A%94-%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9D%98-%EC%A3%BC%EC%86%8C%EB%A5%BC-%EC%95%8C%EA%B3%A0-%EC%8B%B6%EC%9D%80-%EA%B2%BD%EC%9A%B0
    // useSelectedLayoutSegment => 현재 도메인 경로
    // useSelectedLayoutSegments => 현재 도메인 포함한 하위 모든 경로

    // [4] 조건부 경로 렌더링
    // 병렬 경로중 조건에 따라 유동적으로 경로를 가져올 수 있다. (parallel/layout 참고)

    // [5] 로딩 및 오류 UI
    // 같은 경로에 error.js, loading.js 삽입하면 됨. 대충 문서 참고

    return (
        <>
        </>
    )
}