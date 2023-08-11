import "./Search.scss";
import { useDispatch, useSelector } from "react-redux";
import { ACTION } from "../../redux/filterActions";
import SelectDropDown from "../OuterData/SelectDropDown";
import { useMemo } from "react";
import { filterDuplicates } from "../../utils/utilFunctions";
import { Box } from "@mui/material";

const Search = () => {
  const domain = useSelector((state) => state.filter.Domain);
  const FirstName = useSelector((state) => state.filter.Name);
  const niche = useSelector((state) => state.filter.Niche);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const getLanguage = useMemo(() => {
    const newDataLanguage = data.map((i) => i.Language);
    return filterDuplicates(newDataLanguage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAdNetworks = useMemo(() => {
    const newDataAdNetwork = data.map((i) => i.AdNetwork);
    return filterDuplicates(newDataAdNetwork);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNicheFilter = (event) => {
    dispatch({ type: ACTION.FILTER_BY_NICHE, payload: event.target.value });
  };

  const handleNameFilter = (event) => {
    dispatch({ type: ACTION.FILTER_BY_NAME, payload: event.target.value });
  };

  const handleWebsiteFilter = (event) => {
    dispatch({ type: ACTION.FILTER_BY_DOMAIN, payload: event.target.value });
  };

  return (
    <div className="search_divider">
      <form className="search_form">
        <div className="search_input">
          <div className="input_title">
            <img
              src="https://global-uploads.webflow.com/633de71a3409b29c9e1653a8/63b8336a53bbac2b878c0f4f_Keywords.png"
              alt=""
            />
            <h4>Name</h4>
          </div>
          <input
            type="text"
            placeholder="Search"
            value={FirstName}
            onChange={handleNameFilter}
          />
        </div>
        <div className="search_input middle_input">
          <div className="input_title">
            <img
              src="https://global-uploads.webflow.com/633de71a3409b29c9e1653a8/634c48e037a6530f188e02a9_Niche%20Serch%20Icon.png"
              alt=""
            />
            <h4>Niche</h4>
          </div>
          <input
            type="text"
            placeholder="Search"
            value={niche}
            onChange={handleNicheFilter}
          />
        </div>
        <div className="search_input middle_input">
          <div className="input_title">
            <img
              src="https://global-uploads.webflow.com/633de71a3409b29c9e1653a8/634c48e037a6530f188e02a9_Niche%20Serch%20Icon.png"
              alt=""
            />
            <h4>Domains</h4>
          </div>
          <input
            type="text"
            placeholder="Search"
            value={domain}
            onChange={handleWebsiteFilter}
          />
        </div>
        <div className="checkbox_divider">
          <div className="checkbox_title">
            <Box>
              <h4 style={{ marginBottom: 4 }}>
                <img
                  src="https://global-uploads.webflow.com/633de71a3409b29c9e1653a8/634c64d3a7ad04e17c7a5101_Ad%20Management%20Icon.png"
                  alt=""
                  width="20px"
                  height="20px"
                />
                Ad Management
              </h4>
              <SelectDropDown data={getAdNetworks} dispatchTo="adNetwork" />
            </Box>
            <Box>
              <h4 style={{ marginBottom: 4 }}>
                <img
                  src="https://global-uploads.webflow.com/633de71a3409b29c9e1653a8/634c64d3a7ad04e17c7a5101_Ad%20Management%20Icon.png"
                  alt=""
                  width="20px"
                  height="20px"
                />
                Language
              </h4>
              <SelectDropDown data={getLanguage} dispatchTo="language" />
            </Box>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
