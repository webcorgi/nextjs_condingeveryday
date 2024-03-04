import "./globals.css";
import Link from 'next/link'
import { Control } from "@/app/Control";
import { createFile } from "./api/create-file";
import { mysqlConnection } from "./api/mysql-connection";
import { WebVitals } from "./web-vitals";

export const metadata = {
  title: 'WEB tutorial',
  description: 'Generated by egoing',
}

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'de' }]
}

export default async function RootLayout({ children, topics, params }) {
  // nextjs는 fetch시 모두 캐시되므로, 글 생성후 새로운 목록을 가져오려면 캐시하지 않아야한다. 그래서 'no-cache'를 넣어줌.
  // const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/`, {cache:'no-cache'})
  // const topics = await resp.json();

  /* mysql 연결 */
  // const rows = await mysqlConnection()


  return (
    <html lang={params.lang}>
      <body>
        <WebVitals />
        <h3><Link href="/learning">Go To Learning</Link></h3>

        <h1><Link href="/">WEB</Link></h1>
        {/* <ol>
          {
            topics.map(topic=> {
              return <li key={topic.id}>
                <Link href={`/read/${topic.id}`}>{topic.title}</Link>
              </li>
            })
          }
        </ol> */}
        <ol>
          {/* {
            rows.map(topic=> {
              return <li key={topic.id}>
                <Link href={`/read/${topic.id}`}>{topic.title}</Link>
              </li>
            })
          } */}
        </ol>
        {children}
        <Control />
      </body>
    </html>
  )
}