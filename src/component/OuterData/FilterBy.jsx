import { useDispatch, useSelector } from "react-redux";
import "./FilterBy.scss";
import FilterByWords from "./FilterByWords";
import { Typography } from "@mui/material";
import { ACTION } from "../../redux/filterActions";
import { useMemo } from "react";
const FilterBy = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const SORT_ACTIONS = useMemo(() => {
    return {
      NAME_A_Z: "name-a-z",
      NAME_Z_A: "name-z-a",
      DOMAIN_A_Z: "domain-a-z",
      DOMAIN_Z_A: "domain-z-a",
      LANGUAGE_A_Z: "language-a-z",
      LANGUAGE_Z_A: "language-z-a",
    };
  }, []);

  const alphabeticalSort_Az = (a, b) => {
    if (a?.toLowerCase() < b?.toLowerCase()) return -1;
    if (a?.toLowerCase() > b?.toLowerCase()) return 1;
    return 0;
  };
  const alphabeticalSort_Za = (a, b) => {
    if (a?.toLowerCase() < b?.toLowerCase()) return 1;
    if (a?.toLowerCase() > b?.toLowerCase()) return -1;
    return 0;
  };

  function sortBy(value) {
    switch (value) {
      case SORT_ACTIONS.NAME_A_Z:
        return dispatch({
          type: ACTION.UPDATE_DATA,
          payload: [...data].sort((a, b) =>
            alphabeticalSort_Az(a.Name, b.Name)
          ),
        });

      case SORT_ACTIONS.DOMAIN_Z_A:
        return dispatch({
          type: ACTION.UPDATE_DATA,
          payload: [...data].sort((a, b) =>
            alphabeticalSort_Za(a.Name, b.Name)
          ),
        });

      case SORT_ACTIONS.NAME_Z_A:
        return dispatch({
          type: ACTION.UPDATE_DATA,
          payload: [...data].sort((a, b) =>
            alphabeticalSort_Za(a.Name, b.Name)
          ),
        });

      case SORT_ACTIONS.LANGUAGE_A_Z:
        return dispatch({
          type: ACTION.UPDATE_DATA,
          payload: [...data].sort((a, b) =>
            alphabeticalSort_Az(a.Language, b.Language)
          ),
        });

      case SORT_ACTIONS.LANGUAGE_Z_A:
        return dispatch({
          type: ACTION.UPDATE_DATA,
          payload: [...data].sort((a, b) =>
            alphabeticalSort_Za(a.Language, b.Language)
          ),
        });
      case SORT_ACTIONS.DOMAIN_A_Z:
        return dispatch({
          type: ACTION.UPDATE_DATA,
          payload: [...data].sort((a, b) =>
            alphabeticalSort_Az(a.Domain, b.Domain)
          ),
        });

      default:
        return dispatch({ type: ACTION.UPDATE_DATA, payload: data });
    }
  }

  const handleSelect = (e) => {
    sortBy(e.target.value);
  };

  return (
    <div className="Output_divider">
      <div className="filter_Output">
        <h3>Filtering by:</h3>
        <div className="wrap">
          <FilterByWords />
        </div>
        <div className="sort_filter">
          <select
            name="cars"
            id="types"
            placeholder="Sort by"
            onChange={handleSelect}
          >
            <option>Sort by...</option>
            <option value="name-a-z">Name: A-Z...</option>
            <option value="domain-a-z">Domain: A-Z...</option>
            <option value="language-a-z">Language: A-Z...</option>
            <option value="name-z-a">Name: Z-A...</option>
            <option value="domain-z-a">Domain: Z-A...</option>
            <option value="language-z-a">Language: Z-A...</option>
          </select>
        </div>
        <div className="clear_all">
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => {
              dispatch({ type: ACTION.CLEAR_ALL });
            }}
          >
            Clear All
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default FilterBy;
