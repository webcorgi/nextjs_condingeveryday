import Link from 'next/link'
import { RoutingLinkingAndNavigating } from './routing_linkingAndNavigating'
import react, {Suspense} from 'react'
import Loading from './routing_loading'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import Error from './routing_errorHandling'
import GlobalError from './routing_globalErrorHandling'

/* nextjs 공식문서 학습 */
// https://nextjs.org/docs/
export default function Learning() {
    return (
        <>
            <h2>Learning</h2>
            {/* <ErrorBoundary fallback={<Error />}> */}
            <ErrorBoundary fallback={<GlobalError />}>
                <Suspense fallback={<Loading />}>
                    <RoutingLinkingAndNavigating />
                </Suspense>
            </ErrorBoundary>
        </>
    )
}