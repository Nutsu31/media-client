import React from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Domain",
    width: 100,
    dataIndex: "website",
    key: "name",
    // fixed: "left",
  },
  {
    title: "Age",
    width: 50,
    dataIndex: "age",
    key: "age",
  },
  {
    title: "category",
    dataIndex: "category",
    key: "1",
    width: 70,
  },
  {
    title: "subcategory",
    dataIndex: "subcategory",
    key: "2",
    width: 102,
  },
  {
    title: "domainAuthority",
    dataIndex: "domainAuthority",
    key: "3",
    width: 102,
  },
  {
    title: "indexedPages",
    dataIndex: "indexedPages",
    key: "4",
    width: 80,
  },
  {
    title: "searchTraffic",
    dataIndex: "searchTraffic",
    key: "5",
    width: 80,
  },
  {
    title: "adNetwork",
    dataIndex: "adNetwork",
    key: "6",
    width: 80,
  },

  {
    title: "Profile",
    key: "operation",
    fixed: "right",
    width: 40,
    render: () => <Link to="/profile">Profile</Link>,
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const TableData = ({ data }) => (
  <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
);

export default TableData;
