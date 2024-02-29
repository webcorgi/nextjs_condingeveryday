
// 포괄 세그먼트
export default function Page({ params }) {
    return <div>[slug catch-all] My Post: {params.slug}</div>
}

/*
노선	                        예시 URL	    params
app/shop/[...slug]/page.js	    /shop/a	        { slug: ['a'] }
app/shop/[...slug]/page.js	    /shop/a/b	    { slug: ['a', 'b'] }
app/shop/[...slug]/page.js	    /shop/a/b/c	    { slug: ['a', 'b', 'c'] }
*/