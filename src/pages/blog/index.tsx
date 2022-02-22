import type { NextPage } from 'next'
import Link from 'next/link'
import { client } from '~/libs/client'
import Head from '~/components/Head'
import { Article, Contents } from '~/types'

type Props = {
  articles: Article[]
}

const IndexBlog: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <Head title="Blog Top" />

      <section>
        <h1>記事一覧</h1>
        <ul>
          {articles.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export const getStaticProps = async () => {
  const data: Contents = await client.get({ endpoint: 'blog' })

  return {
    props: {
      articles: data.contents,
    },
  }
}

export default IndexBlog
