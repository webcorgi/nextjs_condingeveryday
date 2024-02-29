
// 동적경로
// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
export default function RoutingDynamicRoutes(){
    // [1] 다이나믹 경로 => blog/[slug]/page.js 참고

    // [2] 정적 경로 => blog/[slug]/static_page.js

    // [3] 포괄 경로 [...slug]
/*
Catch-all Segments를 사용하면 페이지가 다수의 하위 경로를 가질 수 있습니다.
이는 파일 이름에 [...param] 형식을 사용하여 구현됩니다.
예를 들어, pages/posts/[...slug].js 파일은
/posts/a, /posts/a/b, /posts/a/b/c 등과 같은 모든 경로를 처리할 수 있습니다.

- 주 사용 사례: 다양한 중첩된 경로를 단일 페이지 컴포넌트로 처리할 때 사용합니다.
- 동작 방식: URL의 모든 세그먼트를 배열로 캡처하여 query 객체의 지정된 키(slug 등)에 할당합니다.
- 필수성: Catch-all Segments는 최소 한 개 이상의 세그먼트를 URL에 포함해야 합니다.
*/

    // [4] 선택적 포괄 경로 [[...slug]]
/*
Optional Catch-all Segments도 페이지가 여러 하위 경로를 처리할 수 있도록 하지만,
URL에 아무런 추가 경로도 없는 경우에도 해당 페이지를 처리할 수 있습니다.
이는 파일 이름에 [[...param]] 형식을 사용하여 구현됩니다.
예를 들어, pages/posts/[[...slug]].js 파일은 /posts, /posts/a, /posts/a/b, /posts/a/b/c 등을 처리할 수 있습니다.

주 사용 사례: 하나의 페이지 컴포넌트로 다양한 중첩 경로를 처리하되, 경로가 전혀 없는 경우도 포함해야 할 때 사용합니다.
동작 방식: URL의 모든 세그먼트를 배열로 캡처하여 query 객체의 지정된 키(slug 등)에 할당합니다. 추가 경로가 없는 경우에도 페이지가 정상적으로 렌더링됩니다.
필수성: Optional Catch-all Segments는 URL에 추가 경로가 없어도 됩니다. 즉, 경로가 있거나 없거나 해당 페이지가 처리됩니다.
*/

    // [3 + 4] 포괄과 선택적 포괄의 차이
/*
차이점 요약
- Catch-all Segments ([...param]): 하나 이상의 경로 세그먼트가 반드시 필요합니다. 그렇지 않으면 페이지가 매칭되지 않습니다.
- Optional Catch-all Segments ([[...param]]): 경로 세그먼트가 없어도 페이지가 매칭됩니다. 이는 더욱 유연한 라우팅을 가능하게 하며, 동일한 페이지에서 경로가 있는 경우와 없는 경우를 모두 처리할 수 있습니다.
*/


    return (
        <></>
    )
}