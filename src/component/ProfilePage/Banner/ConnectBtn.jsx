import React from "react";
import "./ConnectBtn.scss";
import { FcComboChart } from "react-icons/fc";

const ConnectBtn = () => {
  return (
    <div className="btn-connect">
      <p>
        <FcComboChart />
        Connect this website
      </p>
    </div>
  );
};

export default ConnectBtn;
