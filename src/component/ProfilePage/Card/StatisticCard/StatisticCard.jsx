import React, { useState } from "react";
import { StatisticCard } from "@ant-design/pro-components";
import RcResizeObserver from "rc-resize-observer";
import { Divider, Statistic, Row } from "antd";
import "./StatisticCard.scss";
import StatisticNumbers from "./StatisticNumbers";

const StatisticCardComponent = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <div className="custom-container">
      <Row className="statistic-div">
        <RcResizeObserver
          key="resize-observer"
          onResize={(offset) => {
            setResponsive(offset.width < 596);
          }}
        >
          <div
            className={`statistic-card-container ${
              responsive ? "column" : "row"
            }`}
          >
            <StatisticCard
              statistic={{
                title: "Ahrefs Rank",
                value: 601986875,
              }}
            />
            <Divider type={responsive ? "horizontal" : "vertical"} />
            <StatisticCard
              statistic={{
                title: "UR",
                value: 3701928,
                description: <Statistic title="Xsoft Company" value="61.5%" />,
              }}
              chart={
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/ShNDpDTik/huan.svg"
                  alt="pie-chart"
                  width="100%"
                />
              }
              chartPlacement="left"
            />
            <Divider type={responsive ? "horizontal" : "vertical"} />

            <StatisticCard
              statistic={{
                title: "DR",
                value: 1806062,
                description: <Statistic title="Xsoft Company" value="38.5%" />,
              }}
              chart={
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/6YR18tCxJ/huanlv.svg"
                  alt="百分比"
                  width="100%"
                />
              }
              chartPlacement="left"
            />
          </div>
          <StatisticNumbers />
        </RcResizeObserver>
      </Row>
    </div>
  );
};

export default StatisticCardComponent;
