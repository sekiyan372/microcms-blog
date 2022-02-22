import type { NextPage } from 'next'
import styled from 'styled-components'
import { client } from '~/libs/client'
import Head from '~/components/Head'

const Section = styled.section`
  text-align: center;
`

type Article = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  body: string
}

type Contents = {
  contents: Article[]
}

type Props = {
  blog: Article
}

const ShowBlog: NextPage<Props> = ({ blog }) => {
  return (
    <>
      <Head title={blog.title} />

      <Section>
        <h1>{blog.title}</h1>
        <p>{blog.publishedAt}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`
          }}
        />
      </Section>
    </>
  )
}

export const getStaticPaths = async () => {
  const data: Contents = await client.get({ endpoint: 'blog' })
  const paths = data.contents.map((content) => `/blog/${content.id}`)

  return { paths, fallback: false }
}

export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id
  const data: Article = await client.get({ endpoint: 'blog', contentId: id })

  return {
    props: {
      blog: data,
    },
  }
}

export default ShowBlog
