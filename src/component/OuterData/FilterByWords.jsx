import React from "react";
import { Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { ACTION } from "../../redux/filterActions";
import { v4 as uuid4 } from "uuid";
const FilterByWords = () => {
  const wordState = useSelector((state) => state.filter);
  const Name = useSelector((state) => state.filter?.Name);
  const Niche = useSelector((state) => state.filter?.Niche);
  const domain = useSelector((state) => state.filter?.Domain);
  const language = useSelector((state) => state.filter?.Language);
  const adNetwork = useSelector((state) => state.filter?.AdNetwork);
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
      {Niche && (
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
          {Niche}{" "}
          <Close
            onClick={() =>
              dispatch({
                type: ACTION.CLEAR_SINGLE,
                payload: { ...wordState, niche: "" },
              })
            }
          />
        </Typography>
      )}
      {Name && (
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
          {Name}
          <Close
            onClick={() =>
              dispatch({
                type: ACTION.CLEAR_SINGLE,
                payload: { ...wordState, Name: "" },
              })
            }
          />
        </Typography>
      )}
      {domain && (
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
          {domain}{" "}
          <Close
            onClick={() =>
              dispatch({
                type: ACTION.CLEAR_SINGLE,
                payload: { ...wordState, domain: "" },
              })
            }
          />
        </Typography>
      )}
      {adNetwork?.map((ad) => (
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
          {ad} <Close onClick={() => handleFilter(ad, adNetwork)} />
        </Typography>
      ))}
      {language?.map((lang) => (
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
          {lang} <Close onClick={() => handleLangFilter(lang, language)} />
        </Typography>
      ))}
    </>
  );
};

export default FilterByWords;
