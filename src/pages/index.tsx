import ArticleList from "@/components/ArticleList";
import CategoryTab from "@/components/CategoryTab";
import { fetchArticles, fetchCategories } from "@/http";
import { IArticle, ICategory, ICollectionResponse } from "@/types";
import { AxiosResponse } from "axios";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

interface IPropTypes {
  categories: {
    items: ICategory[]
  },
  articles: {
    items: IArticle[]
  }
}

const Home: NextPage<IPropTypes> = ({ categories, articles }) => {
  // console.log(categories);
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
  // categories
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories();
  // console.log(categories.data);

  // articles
  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchArticles();
  console.log(articles.data);
  return {
    props: {
      categories: {
        items: categories.data,
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination,
      }
    }
  }
}

export default Home;