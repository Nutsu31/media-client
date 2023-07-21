import {
  PageContainer,
  ProCard,
  StatisticCard,
} from "@ant-design/pro-components";
import { Row, Card, Col, Descriptions } from "antd";
import ProfileImg from "../../../assets/images/nich.png";
import "./Banner.scss";
import { Divider, Typography } from "antd";
import Cube from "../../../assets/images/cube.png";
import StatisticCardComponent from "../Card/StatisticCard/StatisticCard";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const { Paragraph, Text } = Typography;

const { Statistic } = StatisticCard;

const Banner = () => {
  const { domain } = useParams();
  console.log(domain);

  const dataState = useSelector((state) => state.data);
  const finddomain = dataState.find((site) => site.domain === domain);
  return (
    <>
      <div style={{ background: "#ECF8F9" }}>
        <PageContainer
          ghost
          header={{
            title: `${finddomain.domain}`,
            breadcrumb: {},
            style: { textAlign: "center" }, // Center the title
          }}
          content={
            <Descriptions
              column={{ xs: 1, sm: 2, md: 3, lg: 6, xl: 6 }}
              style={{ marginBlockEnd: -16 }}
            >
              <Descriptions.Item label="Name">
                {finddomain.FirstName}
              </Descriptions.Item>
              <Descriptions.Item label="Domain">
                <a href="http://google.com">{finddomain.domain}</a>
              </Descriptions.Item>
              <Descriptions.Item label="Niche">
                {finddomain.niche}
              </Descriptions.Item>
              <Descriptions.Item label="Language">
                {finddomain.language}
              </Descriptions.Item>
              <Descriptions.Item label="Ad Network">
                {finddomain.adNetwork}
              </Descriptions.Item>
            </Descriptions>
          }
        >
          <ProCard direction="column" ghost gutter={[0, 16]}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "16px",
              }}
            >
              <StatisticCardComponent />
            </div>
          </ProCard>
        </PageContainer>

        <img src={ProfileImg} alt="profile-image1" className="profile-img" />
      </div>

      <Row className="card-container">
        <Row className="xsoft-heading">
          <Typography.Title level={1}>
            <Text code>Xsoft.io </Text>Your domain Link
            <Text code>Xsoft.io </Text>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              qui distinctio reiciendis. Tempora architecto esse consequuntur,
              deleniti quam sapiente praesentium.（<Text code>Sketch</Text>{" "}
              Xsoft
              <Text code>Axure</Text>），Lorem ipsum dolor sit amet consectetur
            </Paragraph>
          </Typography.Title>
        </Row>
      </Row>

      <Card className="col-container">
        <Row justify="center" align="middle">
          <Col xs={{ span: 18, offset: 3 }} lg={{ span: 20, offset: 4 }}>
            <Typography.Title level={4}>Your domain Link</Typography.Title>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              qui distinctio reiciendis. Tempora architecto esse consequuntur.
            </Paragraph>
            <Row style={{ padding: "16px" }}>
              <div style={{ marginTop: "10px" }}>
                <Statistic
                  title="Xsoft"
                  value={1982312}
                  layout="vertical"
                  description={
                    <Statistic title="domain" value="6.15%" trend="down" />
                  }
                />
              </div>

              <div style={{ marginLeft: "50px", marginTop: "10px" }}>
                <Statistic
                  title="Domain"
                  value={1982312}
                  layout="vertical"
                  description={
                    <Statistic title="Age" value="6.15%" trend="down" />
                  }
                />
              </div>
              <div style={{ marginLeft: "50px", marginTop: "10px" }}>
                <Statistic
                  title="Name"
                  value={1982312}
                  layout="vertical"
                  description={
                    <Statistic title="Xsoft" value="6.15%" trend="down" />
                  }
                />
              </div>
            </Row>
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 12 }}>
            <img className="cube" src={Cube} alt="Cube" />
          </Col>
        </Row>
        <Row justify="center">
          <div className="corner-box">
            <p className="paragraph-text">#1</p>
          </div>
        </Row>
      </Card>

      <div className="space">
        <Divider type={"vertical"} />
      </div>
      <Card className="col-container">
        <Row justify="center" align="middle">
          <Col xs={{ span: 18, offset: 3 }} lg={{ span: 20, offset: 4 }}>
            <Typography.Title level={4}>Your domain Link</Typography.Title>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              qui distinctio reiciendis. Tempora architecto esse consequuntur.
            </Paragraph>
            <Row style={{ padding: "16px" }}>
              <div style={{ marginTop: "10px" }}>
                <Statistic
                  title="Xsoft"
                  value={1982312}
                  layout="vertical"
                  description={
                    <Statistic title="domain" value="6.15%" trend="down" />
                  }
                />
              </div>

              <div style={{ marginLeft: "50px", marginTop: "10px" }}>
                <Statistic
                  title="Domain"
                  value={1982312}
                  layout="vertical"
                  description={
                    <Statistic title="Age" value="6.15%" trend="down" />
                  }
                />
              </div>
              <div style={{ marginLeft: "50px", marginTop: "10px" }}>
                <Statistic
                  title="Name"
                  value={1982312}
                  layout="vertical"
                  description={
                    <Statistic title="Xsoft" value="6.15%" trend="down" />
                  }
                />
              </div>
            </Row>
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 12 }}>
            <img className="cube" src={Cube} alt="Cube" />
          </Col>
        </Row>
        <Row justify="center">
          <div className="corner-box">
            <p className="paragraph-text">#1</p>
          </div>
        </Row>
      </Card>
    </>
  );
};

export default Banner;
