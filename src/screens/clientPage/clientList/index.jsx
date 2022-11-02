import React from "react";
import Table from "../../../common/table";
import PageLayout from "../../../Layout/pageLayout";
import { useNavigate } from "react-router-dom";
import { PRIVATE_ROUTE } from "../../../utils/route";

const ClientListPage = () => {
  const navigate = useNavigate();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Place",
      dataIndex: "place",
      key: "place",
    },
    {
      title: "Daily Limit",
      dataIndex: "limit",
      key: "limit",
    },
    {
      title: "Plan",
      dataIndex: "plan",
      key: "plan",
    },
    {
      title: "Expiry Date",
      dataIndex: "exp",
      key: "exp",
    },
  ];
  const clientData = [
    {
      name: "Jack",
      place: "Pune",
      limit: "15GB",
      plan: "2 months",
      exp: "11-02-23",
    },
    {
      name: "John",
      place: "Pune",
      limit: "20GB",
      plan: "6 months",
      exp: "12-02-23",
    },
    {
      name: "Daniel",
      place: "Pune",
      limit: "25GB",
      plan: "5 months",
      exp: "10-05-23",
    },
    {
      name: "Mickie",
      place: "Pune",
      limit: "15GB",
      plan: "3 months",
      exp: "11-12-22",
    },
    {
      name: "Joe",
      place: "Pune",
      limit: "20GB",
      plan: "2 months",
      exp: "08-12-22",
    },
  ];
  const handleDetails = (value, index) => {
    navigate(`${PRIVATE_ROUTE.clients}/${index}`, { state: { record: value } });
  };
  return (
    <PageLayout>
      <Table data={clientData} columns={columns} rowOnClick={handleDetails} />
    </PageLayout>
  );
};

export default ClientListPage;
