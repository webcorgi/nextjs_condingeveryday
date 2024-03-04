// 서버 작업 및 변형
// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
// https://nextjs.org/docs/app/building-your-application/data-fetching/patterns
export default function DataFetchingServerAction(){
// [1] 서버 구성 요소 "use server"
// [2] form 양식
// 추가 인수 전달, 보류상태Hook,서버측 유효성 검사, 오류처리

// [3] 낙관적인 업데이트 (useOptimistic)
// 서버 작업이 완료되기전에 유저를 위해서 미리 화면에 표시

// [4] 폼 서버에 전달 시 중첩요소,비형식요소, 이벤트헨들러

// [5] 오류처리 => 가장 가까운 error.js를 호출함.

// [6] 데이터 재검증 중

/*
    revalidatePath =>
    - 캐시를 다시 유효성 검사(revalidation)
    - 이 용어는 보통 웹 애플리케이션에서 동적으로 생성되는 콘텐츠에 대한 캐시 업데이트를 수행하는 데 사용

    revalidateTag =>
    이 용어는 보통 캐시된 객체나 리소스를 식별하는 태그에 관련된 작업에서 사용됩니다.
    "revalidateTag"를 사용하면 새로운 데이터가 생성되거나 변경될 때마다 해당 태그를 갖는 캐시된 데이터를 업데이트하거나 재검사할 수 있습니다.
*/

// [7] 보안 => 사용자에게 작업을 수행할 권한이 있는지 확인해야 한다.
/*
const { user } = auth()
if (!user) {
    throw new Error('You must be signed in to perform this action')
}
*/

// [8] 폐쇄 및 암호화
/*
    함수 내부 서버작업을 정의하면 클로저 생성하여 내부 암호화 작업 가능함.
*/
/*
"use server"
<form>
useFormStatus => const { pending, data, method, action } = useFormStatus();
useFormState => const [state, formAction] = useFormState(fn, initialState, permalink?);
useOptimistic =>  const [optimisticState, addOptimistic] = useOptimistic(state, updateFn);
*/

    return (
        <>

        </>
    )
}