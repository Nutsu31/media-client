import React, { useState } from "react";
import { Row, Card, Divider } from "antd";
import { Statistic, StatisticCard } from "@ant-design/pro-components";
// import RcResizeObserver from "rc-resize-observer";
import cube from '../../../../assets/images/cube.png'

const StatisticNumbers = () => {
  const [responsive] = useState(false);

  return (
    <div>
      <Card className="card-content">
        <Row style={{ padding: "16px" }} className="statistic-row">
          <div style={{ marginTop: "10px" }}>
            <Statistic
              title="Backlinks"
              value={"12.6K"}
              layout="vertical"
              description={
                <Statistic
                  title={
                    <div>
                      <div>Recent 15.4k</div>
                      <div>Historical 48.9k</div>
                    </div>
                  }
                  value="+263"
                  trend="down"
                  layout="horizontal"
                />
              }
            />
          </div>

          <div style={{ marginLeft: "20px", marginTop: "10px" }}>
            <Statistic
              title="Domain"
              value={1982312}
              layout="vertical"
              description={
                <Statistic
                  title={
                    <div>
                      <div>Recent 28.4k</div>
                      <div>Historical 17.9k</div>
                    </div>
                  }
                  value="+17k"
                  trend="down"
                  layout="horizontal"
                />
              }
            />
          </div>

          <div style={{ marginLeft: "20px", marginTop: "10px" }}>
            <Statistic
              title="Organic Keywords"
              value={1982312}
              layout="vertical"
              description={
                <Statistic
                  title={
                    <div>
                      <div>PPC 0</div>
                    </div>
                  }
                  value="+Xsoft"
                  trend="up"
                  layout="horizontal"
                />
              }
            />
          </div>
        </Row>
        <Divider type={responsive ? "vertical" : null} />

        <Row>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: "20px",
            }}
          >
            <StatisticCard
              statistic={{
                title: "Organic traffic",
                value: "99.6K",
              }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Statistic
              title="Traffic value"
              value="$29.5K"
              layout="vertical"
              description={
                <Statistic title="PPC" value="Xsoft team" trend="up" />
              }
            />
          </div>
          <img className="cube-statistic" src={cube} alt='cube-statistic' />
        </Row>
      </Card>
    </div>
  );
};

export default StatisticNumbers;
