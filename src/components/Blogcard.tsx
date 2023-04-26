import { IArticle } from '@/types'
import React from 'react'

interface IPropType {
  article: IArticle
}

const Blogcard = ({article}: IPropType) => {
  return (
    <div>Blogcard</div>
  )
}

export default Blogcard