import Layout from "@/components/comman/Layout";
import Hero from "./Hero";
import Articles from "./Articles";
import { getSortedArticles } from "@/components/lib/posts";

const NewsPage = () => {
  const news = getSortedArticles();

  return (
    <Layout>
      <Hero />
      <Articles news={news} />
    </Layout>
  );
};

export default NewsPage;
