import React, { useMemo } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import { useDispatch } from "react-redux";
import { ACTION } from "../../redux/filterActions";
import { useMediaQuery } from "@mui/material";

const SelectDropDown = ({ data, dispatchTo }) => {
  const size767 = useMediaQuery("(max-width:767px)");
  const size480 = useMediaQuery("(max-width:767px)");

  const addKeyToData = useMemo(() => {
    const mydata = [...data];
    const newData = mydata.map((item) => {
      return { key: item };
    });
    return newData;
  }, [data]);

  const dispatch = useDispatch();

  const handleSelect = (e) => {
    const desctructingArr = e.map((item) => item.key);

    dispatch({
      type:
        dispatchTo === "adNetwork"
          ? ACTION.FILTER_BY_ADNETWORK
          : ACTION.FILTER_BY_LANGUAGE,
      payload: desctructingArr,
    });
  };

  const handleDelete = (e) => {
    const desctructingArr = e.map((item) => item.key);
    dispatch({
      type:
        dispatchTo === "adNetwork"
          ? ACTION.FILTER_BY_ADNETWORK
          : ACTION.FILTER_BY_LANGUAGE,
      payload: desctructingArr,
    });
  };

  return (
    <Multiselect
      displayValue="key"
      options={addKeyToData}
      onRemove={handleDelete}
      onSelect={handleSelect}
      showCheckbox
      style={{
        chips: {
          background: "#0e243a",
          fontFamily: "sans-serif",
        },
        multiselectContainer: {
          color: "black",
          fontFamily: "sans-serif",
          fontSize: size767 && "14px",
        },
        searchBox: {
          width: size767 ? "120px" : size480 ? "100%" : "200px",
          height: "40px",
          display: "inline-flex",
          overflow: "hidden",
        },
      }}
    />
  );
};

export default SelectDropDown;
