import React, { useEffect } from "react";
import "./DemoPage.scss";
import Search from "../component/Search/Search";
import FilterBy from "../component/OuterData/FilterBy";
import DataTable from "../component/DataTable";
import data from "../db/index";
import { useDispatch, useSelector } from "react-redux";
import { ACTION } from "../redux/filterActions";
import { filterWithCheckbox, getAdNetworks } from "../utils/utilFunctions";
import Layout from "../Layout/Layout";

const DemoPage = () => {
  const dispatch = useDispatch();

  const reduxData = useSelector((state) => state.data);
  const website = useSelector((state) => state.filter.website);
  const category = useSelector((state) => state.filter.category);
  const adNetworks = useSelector((state) => state.filter.adNetwork);
  const language = useSelector((state) => state.filter.language);
  const name = useSelector((state) => state.filter.name);

  useEffect(() => {
    const keyList = ["website", "category", "adNetwork", "language"];

    const filteredData = [...data].filter((item) => {
      const websiteMatch = item.website
        .toLowerCase()
        .includes(website.toLowerCase());

      const categoryMatch = keyList.some((key) =>
        item[key].toLowerCase().includes(name.trim().toLowerCase())
      );

      const nicheMatch = item.category
        .toLowerCase()
        .includes(category.toLowerCase());

      return websiteMatch && categoryMatch && nicheMatch;
    });

    const filteredWithCheckbox = filterWithCheckbox(
      filteredData,
      adNetworks,
      language
    );

    if (filteredWithCheckbox.length > 0) {
      dispatch({
        type: ACTION.FILTER_DATA_WITH_DOMAIN,
        payload: filteredWithCheckbox.slice(0, data.length),
      }); // Limiting the displayed items to 10 or create Pagination
    } else {
      dispatch({
        type: ACTION.FILTER_DATA_WITH_DOMAIN,
        payload: filteredData.slice(0, data.length),
      }); // Limiting the displayed items to 10 or create Pagination
    }
  }, [website, category, adNetworks, name, language]); // eslint-disable-line

  return (
    <Layout>
    <div className="demo_page">
      <div className="filter_divider">
        <Search filteredAdData={getAdNetworks(data)} />
        <FilterBy />
        <DataTable data={reduxData} />
      </div>
    </div>
    </Layout>
  );
};

export default DemoPage;
