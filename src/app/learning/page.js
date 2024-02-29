import Link from 'next/link'
import { RoutingLinkingAndNavigating } from './routing_linkingAndNavigating'
import react, {Suspense} from 'react'
import Loading from './routing_loading'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import Error from './routing_errorHandling'
import { permanentRedirect } from 'next/navigation'
import GlobalError from './routing_globalErrorHandling'
import RoutingRedirect from './routing_redirect'
import RoutingRouteGroup from './routing_routegroups'
import RoutingColocation from './routing_colocation'
import RoutingDynamicRoutes from './routing_dynamicRoutes'
import RoutingParallelRoutes from './routing_parallelRoutes'

/* nextjs 공식문서 학습 */
// https://nextjs.org/docs/
export default async function Learning() {

    return (
        <>
            <h2>Learning</h2>
            {/* START - Routing */}
            {/* <ErrorBoundary fallback={<Error />}> */}{/* 컴포넌트 에러 대응 */}
            <ErrorBoundary fallback={<GlobalError />}>{/* 글로벌 에러 대응 */}
                <Suspense fallback={<Loading />}>{/* UI 로딩 대응 */}
                    <RoutingLinkingAndNavigating />{/* 연결 및 탐색 */}
                    <RoutingRedirect />{/* 리디렉션  */}
                    <RoutingRouteGroup />{/* 경로 그룹 */}
                    <RoutingColocation />{/* 프로젝트 파일 구성 */}
                    <RoutingDynamicRoutes />{/* 동적 경로 */}
                    <RoutingParallelRoutes />{/* 병렬 경로 */}
                </Suspense>
            </ErrorBoundary>
            {/* // END - Routing */}
        </>
    )
}