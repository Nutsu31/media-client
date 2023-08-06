import React, { useEffect, useState } from "react";
import "./DemoPage.scss";
import Search from "../component/Search/Search";
import FilterBy from "../component/OuterData/FilterBy";
import DataTable from "../component/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { ACTION } from "../redux/filterActions";
import { filterWithCheckbox } from "../utils/utilFunctions";
import Layout from "../Layout/Layout";
import axios from "axios";
import { baseUrl } from "../utils/utilFunctions";

const DemoPage = () => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const reduxData = useSelector((state) => state.data);
  const domain = useSelector((state) => state.filter.domain);
  const niche = useSelector((state) => state.filter.niche);
  const adNetworks = useSelector((state) => state.filter.adNetwork);
  const language = useSelector((state) => state.filter.language);
  const FirstName = useSelector((state) => state.filter.FirstName);
  

  useEffect(() => {
    async function getData() {
      axios({
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        url: `${baseUrl}get-data`,
      })
        .then((res) => setData([...res.data.data]))
        .catch((err) => console.log(err.response.message));
    }

    getData();
  }, []);

  useEffect(() => {
    const keyList = ["domain", "niche", "adNetwork", "language"];
    const filteredData = [...data].filter((item) => {
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
      console.log(filteredData);
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
