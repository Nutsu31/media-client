import "./HomePage.scss";
import HomePageSection from "../component/HomePageSection";
import Layout from "../Layout/Layout";
import { lazy, Suspense } from "react";

const LazyHomePageSection = lazy(() => import("../component/HomePageSection"));

const HomePage = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyHomePageSection />
      </Suspense>
    </Layout>
  );
};

export default HomePage;
