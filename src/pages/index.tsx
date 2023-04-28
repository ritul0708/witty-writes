import ArticleList from "@/components/ArticleList";
import CategoryTab from "@/components/CategoryTab";
import { fetchArticles, fetchCategories } from "@/http";
import { IArticle, ICategory, ICollectionResponse } from "@/types";
import { AxiosResponse } from "axios";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import qs from 'qs';

interface IPropTypes {
  categories: {
    items: ICategory[]
  },
  articles: {
    items: IArticle[]
  },
}

const Home: NextPage<IPropTypes> = ({ categories, articles }) => {
  // console.log(categories);
  // console.log('***********************');
  console.log(articles);
  // console.log('*****************************');
  // console.log(authors);
  return (
    <div>
      <Head>
        <title>Witty Writes</title>
        <meta name="description" content="generated by nextjs and typescript" />
        {/* <link rel="icon" href="/" /> */}
      </Head>
      <CategoryTab categories = {categories.items} />
      <ArticleList articles = {articles.items} />
    </div>
  )
};

export const getServerSideProps: GetServerSideProps = async () => {
  const options = {
    populate: ['author.avatar'],
    sort: ['id:desc'],
  };

  const queryString = qs.stringify(options);
  console.log(queryString);

  // categories
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories();
  // console.log(categories.data);

  // articles
  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchArticles(queryString);
  // console.log(articles.data);


  return {
    props: {
      categories: {
        items: categories.data,
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination,
      },
    }
  }
}

export default Home;