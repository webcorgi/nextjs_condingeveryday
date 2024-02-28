'use client'
// 이 코드를 사용하면 client component로 전환됩니다.
// 클라이언트 컴포넌트가 되면 useEffect, useState, onSubmit과 같은 코드를 사용할 수 있게 됩니다.

import { useRouter } from "next/navigation";

export default  function Create() {
    const router = useRouter()
    return <form onSubmit={async evt=>{
        evt.preventDefault()
        const title = evt.target.title.value;
        const body = evt.target.body.value;
        const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/`, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({title,body})
        })

        const topic = await resp.json()
        router.push(`read/${topic.id}`)
        router.refresh()
    }}>
        <h2>Create</h2>
        <p><input type="text" name="title" placeholder="title" /></p>
        <p><textarea name="body" placeholder="body"></textarea></p>
        <p><input type="submit" value="create" /></p>
    </form>
}