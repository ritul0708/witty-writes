import CategoryTab from "@/components/CategoryTab";
import { fetchCategories } from "@/http";
import { ICategory, ICollectionResponse } from "@/types";
import { AxiosResponse } from "axios";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

interface IPropTypes {
  categories: {
    items: ICategory[]
  }
}

const Home: NextPage<IPropTypes> = ({ categories }) => {
  console.log(categories);
  return (
    <div>
      <Head>
        <title>Witty Writes</title>
        <meta name="description" content="generated by nextjs and typescript" />
        {/* <link rel="icon" href="/" /> */}
      </Head>
      <CategoryTab categories = {categories.items} />
      <main>
        <h1>Blogging...</h1>
      </main>
    </div>
  )
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories();
  console.log(categories.data);
  return {
    props: {
      categories: {
        items: categories.data
      }
    }
  }
}

export default Home;