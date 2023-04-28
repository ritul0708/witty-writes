import { IArticle } from '@/types';
import React from 'react';
import Blogcard from './Blogcard';

interface IPropType {
  articles: IArticle[];
}

const ArticleList = ({articles}: IPropType) => {
  return (
    <div className="grid lg:grid-cols-2 grid-gap gap-16 mt-16">
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <Blogcard article={article} />
          </div>
        );
      })}
    </div>
  )
}

export default ArticleList