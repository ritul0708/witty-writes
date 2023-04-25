import { ICategory } from '@/types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface IPropType {
  categories: ICategory[];
}

const CategoryTab = ({ categories }: IPropType) => {
  const router = useRouter();

  const isActiveLink = (category: ICategory) => {
    return category.attributes.Slug === router.query.category;
  }
  
  return (
    <div className='my-8 flex items-center justify-between border-b-2 border-gray-200'>
      <ul className='flex items-center'>
        <li
          className={
            'mr-6 pb-6 border-b-4 rounded-sm ' +
            `${
              router.pathname === '/'
                ? 'border-primary text-primary'
                : 'border-white text-gray-400'
            }`
          }
        >
          <Link href='/'>Recent</Link>
        </li>
        {
          categories.map(category => {
            return (
              <li 
                key={category.id}
                className={'mr-6 pb-4 border-b-4 rounded-sm' + `${
                  isActiveLink(category) 
                    ? 'border-primary text-primary'
                    : 'border-white text-gray-400'
                }`}
              >
                <Link href={`/category/${category.attributes.Slug}`}>{category.attributes.Title}</Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default CategoryTab