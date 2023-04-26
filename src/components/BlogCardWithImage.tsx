import { IArticle } from '@/types'
import React from 'react'

interface IPropType {
  article: IArticle;
}

const BlogCardWithImage = ({article}: IPropType) => {
  return (
    <div>BlogCardWithImage</div>
  )
}

export default BlogCardWithImage