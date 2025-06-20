import Layout from "@/components/comman/Layout";
import Markdown from "./Markdown";
import { Article as ArticleType } from "@/types/article";
import Hero from "./Hero";

type PostPageProps = {
  article: ArticleType;
};

const PostPage = ({ article }: PostPageProps) => {
  return (
    <Layout>
      <Hero article={article} />
      <Markdown article={article} />
    </Layout>
  );
};

export default PostPage;
