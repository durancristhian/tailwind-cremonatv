import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import React from 'react'
import ReactMarkdown from 'react-markdown'

type Props = {
  content: string
}

export default function Article({ content }: Props) {
  return (
    <div className="w-full md:w-2/3 mx-auto my-16">
      <article className="mx-auto prose prose-lg">
        <ReactMarkdown source={content} />
      </article>
    </div>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'article.md')
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { content } = matter(fileContent)

  return {
    props: {
      content,
    },
  }
}
