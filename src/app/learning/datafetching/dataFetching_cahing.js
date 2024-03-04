// 가져오기, 캐싱 및 재검증
// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
export default function DataFetchingCaching(){
/*
[1] 가져오기
async function getData() {
    const res = await fetch('https://api.example.com/...')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export default async function Page() {
    const data = await getData()
    return <main></main>
}

[2] 데이터 캐싱 ( force-cache )
fetch('https://...', { cache: 'force-cache' })
일반적으로 브라우저는 캐시를 사용하여 네트워크 요청을 줄이고 페이지 로딩 속도를 향상시킵니다.
그러나 때때로 새로운 데이터가 필요한 경우에는 캐시를 무시하고 새로운 요청을 보내야 할 수 있습니다.
cache: 'force-cache' 옵션은 이런 경우에 사용됩니다.
요청을 보낼 때 브라우저는 캐시된 데이터를 먼저 확인하고,
만약 캐시가 존재하면 캐시된 데이터를 사용하여 응답을 받습니다.
만약 캐시가 없는 경우에만 서버에 요청을 보냅니다.

[3] 데이터 재검증
재검증은 데이터 캐시를 제거하고 최신 데이터를 다시 가져오는 프로세스입니다.
이는 데이터가 변경되어 최신 정보를 표시하려는 경우에 유용합니다.
    1. 시간 기반 재검증 (일정 간격으로 데이터를 재검증)
    - fetch('https://...', { next: { revalidate: 3600 } })
    - export const revalidate = 3600
    2. 주문형 재검증 (요청시 태그 추가 > 태그 호출해 다시 검증)
    - 태그 추가: fetch('https://...', { next: { tags: ['collection'] } })
    - revalidateTag('collection')

[4] 데이터 캐싱 선택해제
문서참고

[5] 타사 라이브러리를 사용하여 서버에서 데이터 가져오기
문서참고

*/

    return (
        <>

        </>
    )
}