import "./DataTable.scss";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SkipNextTwoToneIcon from "@mui/icons-material/SkipNextTwoTone";
import SkipPreviousTwoToneIcon from "@mui/icons-material/SkipPreviousTwoTone";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import KeyboardDoubleArrowLeftRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
import BuySubsc from "./subscription/BuySubsc";
import axios from "axios";
import { baseUrl } from "../utils/utilFunctions";
import { useDispatch } from "react-redux";
import { ACTION } from "../redux/filterActions";

const DataTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(15);
  // const [data, setData] = useState([]);
  const npage = Math.ceil(data.length / recordsPerPage);
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const user = JSON.parse(localStorage.getItem("user"));
  const [buySubs, setBuySubs] = useState(false);
  const dispatch = useDispatch();
  // Loads as many pages as the user selects
  const handleRecords = (val) => {
    const userVal = parseInt(val.target.value);
    setCurrentPage(1);
    if (user !== null && user.isActivated) {
      setRecordsPerPage(userVal);
    }
  };

  useEffect(() => {
    async function getDatas() {
      const res = await axios.get(`${baseUrl}get-data`);
      const data = res.data.data;
      dispatch({ type: ACTION.UPDATE_DATA, payload: data });
    }
    getDatas();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Go to the previous page of the table
  const prePage = () => {
    if (user !== null && user.isActivated) {
      if (currentPage !== 1) {
        setCurrentPage(currentPage - 1);
      } else if (user.isActivated) {
        setCurrentPage(npage);
      }
    }
  };

  // Change table pages with click to pagination boxes
  const changeCPage = (id) => {
    if (user !== null && user.isActivated) {
      setCurrentPage(id);
    }
  };

  // Move to the next page of the table
  const nextPage = () => {
    if (user !== null && user.isActivated) {
      if (currentPage !== npage) {
        setCurrentPage(currentPage + 1);
      } else {
        setCurrentPage(1);
      }
    }
  };

  // Skip back 3 pages with one click
  const skipPageBack = () => {
    if (user !== null && user.isActivated) {
      if (currentPage !== 1 && currentPage > 3) {
        setCurrentPage(currentPage - 3);
      } else if (currentPage === 1) {
        setCurrentPage(npage);
      } else if (currentPage < 3) {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  const handleCheckSubscription = (callback) => {
    if (user !== null && user.isActivated) {
      return callback;
    } else {
      return setBuySubs(true);
    }
  };

  // Skip forward 3 pages with one click
  const skipPageNext = () => {
    if (user !== null && user.isActivated) {
      if (currentPage !== npage && currentPage <= npage - 3) {
        setCurrentPage(currentPage + 3);
      } else if (currentPage === npage) {
        setCurrentPage(1);
      } else if (currentPage < 3) {
        setCurrentPage(currentPage + 1);
      }
    }
  };
  return (
    <div className="table-wrapper">
      <table className="fl-table" id="table">
        <thead>
          <tr className="order_column">
            <th></th>
            <th>A</th>
            <th>B</th>
            <th>C</th>
            <th>D</th>
            <th>E</th>
            <th>F</th>
          </tr>
          <tr className="data_name_column">
            <th></th>
            <th>Name</th>
            <th>Domain</th>
            <th>Niche</th>
            <th>Language</th>
            <th>Add Network</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {records.map((i) => (
            <tr key={uuidv4()}>
              <td>{}</td>
              <td>{i.FirstName}</td>
              <td>{i.domain}</td>
              <td>{i.niche}</td>
              <td>{i.language}</td>
              <td>{i.adNetwork}</td>
              <td className="lastTd">
                <Link to={`/profile/${i.domain}`}>
                  <NavigateNextIcon
                    fontSize="medium"
                    sx={{
                      background: "#0e243a",
                      width: "80%",
                      height: "30px",
                      color: "#fff",
                      borderRadius: "4px",
                      border: "none",
                    }}
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {buySubs ? <BuySubsc setBuySubs={setBuySubs} /> : null}
      <ul className="pagination">
        <div>
          <li
            className="moveBtn skipBtn"
            onClick={() => handleCheckSubscription(skipPageBack())}
          >
            <KeyboardDoubleArrowLeftRoundedIcon
              sx={{ borderRadius: "inherit" }}
            />
          </li>
          <li
            className="moveBtn"
            onClick={() => handleCheckSubscription(prePage())}
          >
            <SkipPreviousTwoToneIcon sx={{ borderRadius: "inherit" }} />
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? "active" : ""}`}
              key={i}
            >
              <div onClick={() => handleCheckSubscription(changeCPage(n))}>
                {n}
              </div>
            </li>
          ))}
          <li
            className="moveBtn"
            style={{ marginLeft: ".2rem" }}
            onClick={() => handleCheckSubscription(nextPage())}
          >
            <SkipNextTwoToneIcon />
          </li>
          <li
            className="moveBtn forwardSkipIcon"
            onClick={() => handleCheckSubscription(skipPageNext())}
          >
            <KeyboardDoubleArrowRightRoundedIcon
              sx={{ borderRadius: "inherit" }}
            />
          </li>
        </div>
        <select
          name=""
          id="recordsPerPage"
          className="select"
          onChange={(val) => handleCheckSubscription(handleRecords(val))}
        >
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="50">50</option>
        </select>
      </ul>
    </div>
  );
};

export default DataTable;