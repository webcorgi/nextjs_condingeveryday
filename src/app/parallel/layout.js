'use client'
import React from 'react';
import { useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation'

export default function Layout({team, anal}){
    const segment = useSelectedLayoutSegment()
    const segments = useSelectedLayoutSegments()

    /* 조건부 경로 렌더링 */
    const path = 'team'

    return (
        <>
            {/* {team}<br /> */}
            {/* {anal}<br /> */}
            내 위치: {segment}<br />
            내 위치s: {segments}<br />

            조건부 경로 테스트:
            {
                path == 'team' ? team : anal
            }
        </>
    )
}