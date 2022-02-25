import { VFC } from 'react'
import NextHead from 'next/head'

type Props = {
  title?: string
}

const BASE_TITLE = 'microCMS Blog'
const DESCRIPTION =
  '4プロジェクト合同 React 勉強会の最終課題で作成したブログです。'

const Head: VFC<Props> = (props) => {
  const title = props.title ? `${props.title} | ${BASE_TITLE}` : BASE_TITLE

  return (
    <NextHead>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta name="description" content={DESCRIPTION} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  )
}

export default Head
