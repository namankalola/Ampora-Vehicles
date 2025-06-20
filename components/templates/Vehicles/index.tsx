import Layout from "@/components/comman/Layout";
import Hero from "./Hero";
import Inventory from "./Inventory";
import Features from "../HomePage/Features";
import Showcase from "../HomePage/Showcase";

const VehiclesPage = () => {
  return (
    <Layout>
      <Hero />
      <Inventory />
      <Features />
      <Showcase />
    </Layout>
  );
};

export default VehiclesPage;
