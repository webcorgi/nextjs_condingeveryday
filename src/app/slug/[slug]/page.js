export default function Page({ params }) {
    return <div>slug My Post: {params.slug}</div>
}

/*
노선	                      예시 URL	  params
app/blog/[slug]/page.js	    /blog/a	   { slug: 'a' }
app/blog/[slug]/page.js	    /blog/b	   { slug: 'b' }
app/blog/[slug]/page.js	    /blog/c	   { slug: 'c' }
*/