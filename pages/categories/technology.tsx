import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import NewsGrid from "@/components/NewsGrid";

interface INewsArticlesResponse {
  status: string;
  totalResults: number;
  articles: INewsArticle[];
}

interface INewsArticle {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content: string;
}

type CategoryNewsPageProps = {
  articles: INewsArticle[];
};

const CategoryNewsPage = ({ articles }: CategoryNewsPageProps) => {
  return (
    <>
      <Head>
        <title>Technology - NextJS News App</title>
      </Head>
      {/* <nav className="backtohome">
        <Link href="/">Home</Link>
      </nav> */}
      <main className="mt-[-50]">
        <NewsGrid articles={articles} />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<CategoryNewsPageProps> = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${process.env.NEWS_API_KEY}`
  );
  const newsResponse: INewsArticlesResponse = await response.json();
  return {
    props: { articles: newsResponse.articles },
    revalidate: 600, // 10 minutes
  };
};

export default CategoryNewsPage;
