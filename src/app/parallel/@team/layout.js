import Link from 'next/link'
export default function Layout({ children }) {
    const divider = 'login'

    return (
        <>
            <h1>login, signup</h1>
            <nav>
                {
                    divider == 'login'
                    ? <Link href="/parallel/login">login button</Link>
                    : <Link href="/parallel/signup">signup button</Link>
                }
            </nav>
            <div>{children}</div>
        </>
    )
}