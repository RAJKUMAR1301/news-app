import Image from 'next/image'
import { Inter } from 'next/font/google'
import NewsGrid from '@/components/NewsGrid';
import { GetServerSideProps } from "next";

type INewsArticlesResponse = {
  status: string;
  totalResults: number;
  articles: INewsArticle[];
}
type INewsArticle = {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content: string;
}
type BreakingNewsPageProps = {
  articles?: INewsArticle[]; // Change newsArticles to articles
};

export default function Home({ articles }: BreakingNewsPageProps) {
  return (
    <main className="flex min-h-screen max-w-5xl mx-auto flex-col items-center justify-between py-2 px-1">
     <NewsGrid articles={articles}/>
    </main>
  )
}
export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> = async () => {
	const response = await fetch(
		`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEWS_API_KEY}`
	);
	const newsResponse: INewsArticlesResponse = await response.json();
	return {
		props: {
			articles: newsResponse.articles,
      revalidate: 600,
		},
	};
};
