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
        <title>Health - NextJS News App</title>
      </Head>
      {/* <nav>
        <Link href="/">Home</Link>
      </nav> */}
      <main className="flex min-h-screen max-w-5xl mx-auto flex-col items-center justify-between py-5 px-4">
        <NewsGrid articles={articles} />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<CategoryNewsPageProps> = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${process.env.NEWS_API_KEY}`
  );
  const newsResponse: INewsArticlesResponse = await response.json();
  return {
    props: { articles: newsResponse.articles },
    revalidate: 600, // 10 minutes
  };
};

export default CategoryNewsPage;
