import React from "react";
import { Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { ACTION } from "../../redux/filterActions";
import { v4 as uuid4 } from "uuid";
const FilterByWords = () => {
  const wordState = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleFilter = (ad, arr) => {
    return dispatch({
      type: ACTION.FILTER_BY_ADNETWORK,
      payload: arr.filter((i) => i !== ad),
    });
  };
  const handleLangFilter = (lang, arr) => {
    return dispatch({
      type: ACTION.FILTER_BY_LANGUAGE,
      payload: arr.filter((i) => i !== lang),
    });
  };
  return (
    <>
      {wordState.category && (
        <Typography
          sx={{
            color: "white",
            background: "#0e243a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
          }}
        >
          {wordState.category}{" "}
          <Close
            onClick={() =>
              dispatch({
                type: ACTION.CLEAR_SINGLE,
                payload: { ...wordState, category: "" },
              })
            }
          />
        </Typography>
      )}
      {wordState.name && (
        <Typography
          sx={{
            color: "white",
            background: "#0e243a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
          }}
        >
          {wordState.name}
          <Close
            onClick={() =>
              dispatch({
                type: ACTION.CLEAR_SINGLE,
                payload: { ...wordState, name: "" },
              })
            }
          />
        </Typography>
      )}
      {wordState.website && (
        <Typography
          sx={{
            color: "white",
            background: "#0e243a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
          }}
        >
          {wordState.website}{" "}
          <Close
            onClick={() =>
              dispatch({
                type: ACTION.CLEAR_SINGLE,
                payload: { ...wordState, website: "" },
              })
            }
          />
        </Typography>
      )}
      {wordState.adNetwork.map((ad) => (
        <Typography
          key={uuid4()}
          sx={{
            color: "white",
            background: "#0e243a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
          }}
        >
          {ad} <Close onClick={() => handleFilter(ad, wordState.adNetwork)} />
        </Typography>
      ))}
      {wordState.language.map((lang) => (
        <Typography
          key={uuid4()}
          sx={{
            color: "white",
            background: "#0e243a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
          }}
        >
          {lang}{" "}
          <Close onClick={() => handleLangFilter(lang, wordState.language)} />
        </Typography>
      ))}
    </>
  );
};

export default FilterByWords;
