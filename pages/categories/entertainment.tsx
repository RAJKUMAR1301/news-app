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
        <title>Entertainment - NextJS News App</title>
      </Head>
      {/* <nav>
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
    `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${process.env.NEWS_API_KEY}`
  );
  const newsResponse: INewsArticlesResponse = await response.json();
  return {
    props: { articles: newsResponse.articles },
    revalidate: 20, // 10 minutes
  };
};

export default CategoryNewsPage;


// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import BlogGrid from '@/components/BlogGrid';
// import { GetServerSideProps } from "next";

// type INewsArticlesResponse = {
//   status: string;
//   totalResults: number;
//   articles: INewsArticle[];
// }
// type INewsArticle = {
//   author: string;
//   title: string;
//   description: string;
//   url: string;
//   urlToImage?: string;
//   publishedAt: string;
//   content: string;
// }
// type BreakingNewsPageProps = {
//   articles?: INewsArticle[]; // Change newsArticles to articles
// };

// export default function Home({ articles }: BreakingNewsPageProps) {
//   return (
//     <main className="flex min-h-screen max-w-5xl mx-auto flex-col items-center justify-between py-2 px-1">
//      <BlogGrid articles={articles}/>
//     </main>
//   )
// }
// export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> = async () => {
// 	const response = await fetch(
// 		`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEWS_API_KEY}`
// 	);
// 	const newsResponse: INewsArticlesResponse = await response.json();
// 	return {
// 		props: {
// 			articles: newsResponse.articles,
//       revalidate: 600,
// 		},
// 	};
// };


// import Head from "next/head";
// import Link from "next/link"; // Import Link component
// import { useRouter } from "next/router";
// import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
// import NewsGrid from "@/components/NewsGrid";


// interface INewsArticlesResponse {
//   status: string;
//   totalResults: number;
//   articles: INewsArticle[];
// }

// interface INewsArticle {
//   author: string;
//   title: string;
//   description: string;
//   url: string;
//   urlToImage?: string;
//   publishedAt: string;
//   content: string;
// }

// type CategoryNewsPageProps = {
//   articles: INewsArticle[];
// };

// const CategoryNewsPage = ({ articles }: CategoryNewsPageProps) => {
//   const router = useRouter();
//   const {push} = useRouter();
//   const categoryName = router.query.category?.toString();
//   const title = `Category: ${categoryName}`;
//   return (
//     <>
//       <Head>
//         <title key={"title"}>{`${title} - NextJS News App`}</title>
//       </Head>
// 	  <nav>
// 		<Link href="/"></Link>
// 	  </nav>
     
//       <main>
//         <NewsGrid articles={articles} />
//       </main>
//     </>
//   );
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const categorySlugs = [
//     "business",
//     "entertainment",
//     "general",
//     "health",
//     "science",
//     "sports",
//     "technology",
//   ];

//   const paths = categorySlugs.map((slug) => ({
//     params: { category: slug },
//   }));
//   console.log(paths);
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps<CategoryNewsPageProps> = async ({
//   params,
// }: GetStaticPropsContext) => {
//   const category = params?.category?.toString();
//   const response = await fetch(
//     `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}`
//   );
//   const newsResponse: INewsArticlesResponse = await response.json();
//   return {
//     props: { articles: newsResponse.articles },
	
//     revalidate: 2,
//   };
// };

// export default CategoryNewsPage;
