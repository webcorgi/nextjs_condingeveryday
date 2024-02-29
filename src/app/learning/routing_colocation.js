export default function RoutingColocation() {
// [1] 폴더안의 page.js가 아닌 다른 이름의 파일은 도메인 경로가 될 수 없다 !!

// [2] @ 사용해서 import 모듈 경로 절대경로
/*
// before
import { Button } from '../../../app/button'
// after
import { Button } from '@/app/button'
*/

// [3] app 안에는 경로용 파일만 저장하고, lib, components 폴더 등으로 용도 분리

    return (
        <></>
    )
}