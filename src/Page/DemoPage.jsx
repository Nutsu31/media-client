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
import { useMemo } from "react";
const DemoPage = () => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const reduxData = useSelector((state) => state.data);
  const domain = useSelector((state) => state.filter?.Domain);
  const niche = useSelector((state) => state.filter?.Niche);
  const adNetworks = useSelector((state) => state.filter?.AdNetwork);
  const language = useSelector((state) => state.filter?.Language);
  const FirstName = useSelector((state) => state.filter?.Name);

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
  }, []); //eslint-disable-line

  const filteredData = useMemo(() => {
    const keyList = ["Domain", "Niche", "AdNetwork", "Language", "Email"];
    return data.filter((item) => {
      const domainMatch = item?.Domain.toLowerCase().includes(
        domain.toLowerCase()
      );
      const categoryMatch = keyList.some((key) =>
        item[key]?.toLowerCase().includes(niche?.trim().toLowerCase())
      );
      const firstNameMatch = item?.Name.toLowerCase().includes(
        FirstName.toLowerCase()
      );
      return domainMatch && categoryMatch && firstNameMatch;
    });
  }, [data, domain, niche, adNetworks, FirstName, language]); //eslint-disable-line



  
  useEffect(() => {
    const filteredWithCheckbox = filterWithCheckbox(
      filteredData,
      adNetworks,
      language
    );

    const filteredDataLength = filteredWithCheckbox.length;
    const displayedData =
      filteredDataLength > 0 ? filteredWithCheckbox : filteredData;

    dispatch({
      type: ACTION.FILTER_DATA_WITH_DOMAIN,
      payload: displayedData.slice(0, data.length),
    });
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
