import Layout from "@/components/comman/Layout";
import Hero from "./Hero";
import Faqs from "../HomePage/Faqs";
import { faqs } from "@/components/mocks/faqs";

const FaqsPage = () => {
  return (
    <Layout>
      <Hero />
      {faqs.slice(1).map((section, index) => (
        <Faqs
          key={index}
          section={section}
          className={index % 2 === 0 ? "bg-white" : ""}
        />
      ))}
    </Layout>
  );
};

export default FaqsPage;
