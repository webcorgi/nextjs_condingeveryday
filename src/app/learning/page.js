import Link from 'next/link'
import { RoutingLinkingAndNavigating } from './routing/routing_linkingAndNavigating'
import react, {Suspense} from 'react'
import Loading from './routing/routing_loading'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import Error from './routing/routing_errorHandling'
import { permanentRedirect } from 'next/navigation'
import GlobalError from './routing/routing_globalErrorHandling'
import RoutingRedirect from './routing/routing_redirect'
import RoutingRouteGroup from './routing/routing_routegroups'
import RoutingColocation from './routing/routing_colocation'
import RoutingDynamicRoutes from './routing/routing_dynamicRoutes'
import RoutingParallelRoutes from './routing/routing_parallelRoutes'
import RoutingInterceptingRoutes from './routing/routing_interceptingRoutes'
import RoutingRouteHandlers from './routing/routing_routeHandlers'
import RoutingMiddleware from './routing/routing_middleware'
import RoutingInternation from './routing/routing_internation'
import DataFetchingCaching from './datafetching/dataFetching_cahing'
import DataFetchingServerAction from './datafetching/dataFetching_serveraction'
import Rendering from './rendering/rendering'
import Optimizing from './optimizing/optimizing'
import { Testing } from './testing/testing'

/* nextjs 공식문서 학습 */
// https://nextjs.org/docs/

export default async function Learning() {

    return (
        <>
            <h2>Learning</h2>
            {/* <ErrorBoundary fallback={<Error />}> */}{/* 컴포넌트 에러 대응 */}
            <ErrorBoundary fallback={<GlobalError />}>{/* 글로벌 에러 대응 */}
                <Suspense fallback={<Loading />}>{/* UI 로딩 대응 */}
                    {/* START - Routing */}
                    <RoutingLinkingAndNavigating />{/* 연결 및 탐색 */}
                    <RoutingRedirect />{/* 리디렉션  */}
                    <RoutingRouteGroup />{/* 경로 그룹 */}
                    <RoutingColocation />{/* 프로젝트 파일 구성 */}
                    <RoutingDynamicRoutes />{/* 동적 경로 */}
                    <RoutingParallelRoutes />{/* 병렬 경로 */}
                    <RoutingInterceptingRoutes />{/* 경로 차단 */}
                    <RoutingRouteHandlers />{/* 경로 처리기 (api/route.js) */}
                    <RoutingMiddleware />{/* 미들웨어 */}
                    <RoutingInternation />{/* 국제화 */}
                    {/* // END - Routing */}

                    {/* START - data fetching */}
                    <DataFetchingCaching />{/* 가져오기, 캐싱 및 재검증 */}
                    <DataFetchingServerAction />{/* 서버 작업 및 변형 */}
                    {/* END - data fetching */}

                    <Rendering />
                    <Optimizing />
                    <Testing />
                </Suspense>
            </ErrorBoundary>
        </>
    )
}