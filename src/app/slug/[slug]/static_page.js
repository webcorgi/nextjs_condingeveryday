/* 
이 기능을 동적 경로 세그먼트generateStaticParams 와 함께 사용하여 요청 시
주문형이 아닌 빌드 시 경로를 정적으로 생성 할 수 있습니다.

정확히 이해 안됨... 필요할때 사용해보자
*/
export async function generateStaticParams() {
    const posts = await fetch('https://localhost:3000/posts').then((res) => res.json())
    return posts.map((post) => ({slug: post.slug}))
}