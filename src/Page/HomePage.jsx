import "./HomePage.scss";
import Layout from "../Layout/Layout";
import { lazy, Suspense } from "react";
import { useState, useEffect } from "react";
const LazyHomePageSection = lazy(() => import("../component/HomePageSection"));

const HomePage = () => {
  // eslint-disable-next-line
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("user"))
  );
  const [jwt, setJwt] = useState(() => JSON.parse(localStorage.getItem("jwt"))); //eslint-disable-line
  //eslint-disable-next-line
  const [data, setData] = useState(() =>
    JSON.parse(localStorage.getItem("data"))
  ); //eslint-disable-line

  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyHomePageSection />
      </Suspense>
    </Layout>
  );
};

export default HomePage;
