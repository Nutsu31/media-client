import "./HomePage.scss";
import HomePageSection from "../component/HomePageSection";
import Layout from "../Layout/Layout";
import { lazy, Suspense } from "react";
import { useState, useEffect } from "react";
const LazyHomePageSection = lazy(() => import("../component/HomePageSection"));

const HomePage = () => {
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("user"))
  );
  const [jwt, setJwt] = useState(() => JSON.parse(localStorage.getItem("jwt"))); //eslint-disable-line
  //eslint-disable-next-line
  const [data, setData] = useState(() =>
    JSON.parse(localStorage.getItem("data"))
  ); //eslint-disable-line
  useEffect(() => {
    console.log(jwt, data, user);
  }, [jwt, data, user]);
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyHomePageSection />
      </Suspense>
    </Layout>
  );
};

export default HomePage;
