'use client' // Error components must be Client Components

import {useEffect} from 'react'

/*
    error.jsReact Error Boundary를 자동으로 생성합니다.
    파일에서 내보낸 React 구성 요소가 대체 error.js 구성 요소로 사용됩니다.
*/
export default function Error({error, reset}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button
                onClick={() => reset()}>
                Try again
            </button>
        </div>
    )
}