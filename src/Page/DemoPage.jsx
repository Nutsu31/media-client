import React, { useEffect } from "react";
import "./DemoPage.scss";
import Search from "../component/Search/Search";
import FilterBy from "../component/OuterData/FilterBy";
import DataTable from "../component/DataTable";
import dataArr from "../db/fetchData";
import { useDispatch, useSelector } from "react-redux";
import { ACTION } from "../redux/filterActions";
import { filterWithCheckbox } from "../utils/utilFunctions";
import Layout from "../Layout/Layout";

const DemoPage = () => {
  const dispatch = useDispatch();

  const reduxData = useSelector((state) => state.data);
  const domain = useSelector((state) => state.filter.domain);
  const niche = useSelector((state) => state.filter.niche);
  const adNetworks = useSelector((state) => state.filter.adNetwork);
  const language = useSelector((state) => state.filter.language);
  const FirstName = useSelector((state) => state.filter.FirstName);

  useEffect(() => {
    const keyList = ["domain", "niche", "adNetwork", "language"];

    const filteredData = [...dataArr].filter((item) => {
      const domainMatch = item.domain
        .toLowerCase()
        .includes(domain.toLowerCase());

      const categoryMatch = keyList.some((key) =>
        item[key].toLowerCase().includes(niche.trim().toLowerCase())
      );

      const firstNameMatch = item.FirstName.toLowerCase().includes(
        FirstName.toLowerCase()
      );

      return domainMatch && categoryMatch && firstNameMatch;
    });

    const filteredWithCheckbox = filterWithCheckbox(
      filteredData,
      adNetworks,
      language
    );

    if (filteredWithCheckbox.length > 0) {
      dispatch({
        type: ACTION.FILTER_DATA_WITH_DOMAIN,
        payload: filteredWithCheckbox.slice(0, dataArr.length),
      }); // Limiting the displayed items to 10 or create Pagination
    } else {
      dispatch({
        type: ACTION.FILTER_DATA_WITH_DOMAIN,
        payload: filteredData.slice(0, dataArr.length),
      }); // Limiting the displayed items to 10 or create Pagination
    }
  }, [domain, niche, adNetworks, FirstName, language]); // eslint-disable-line

  return (
    <Layout>
      <div className="demo_page">
        <div className="filter_divider">
          <Search />
          <FilterBy />
          <DataTable data={reduxData} />
        </div>
      </div>
    </Layout>
  );
};

export default DemoPage;
