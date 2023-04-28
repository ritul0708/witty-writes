import { IArticle } from '@/types';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/utils';

interface IPropType {
  article: IArticle;
}

const Blogcard = ({article}: IPropType) => {

  return (
    <div>
      <Link href={`/article/${article.attributes.Slug}`}>
        <h1 className='text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary'>
          {article.attributes.Title}
        </h1>
      </Link>
      <div className="flex items-center my-4">
        <div className="rounded-lg overflow-hidden flex items-center justify-center mr-2">
        <Image
          src={`http://localhost:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
          height={40}
          width={40}
          alt=''
        />
        </div>
        <span className="text-sm font-bold text-gray-600">
          {article.attributes.author.data.attributes.username} on
          &nbsp;
          <span className="text-gray-400">
            {formatDate(article.attributes.Publish_Date)}
          </span>
        </span>
      </div>
      <div className="text-gray-500">
        {article.attributes.Description.slice(0, 150)}{' '}
        {article.attributes.Description.length > 150 ? '...' : ''}
      </div>
    </div>
  )
}

export default Blogcard