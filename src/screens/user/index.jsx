import React from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../common/table";
import PageLayout from "../../Layout/pageLayout";
import { PRIVATE_ROUTE } from "../../utils/route";

const User = () => {
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
      title: "Mobile",
      dataIndex: "mob",
      key: "mob",
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
      mob: 283474839,
      plan: "2 months",
      exp: "11-02-23",
    },
    {
      name: "Jack",
      place: "Pune",
      mob: 283474839,
      plan: "2 months",
      exp: "11-02-23",
    },
    {
      name: "Jack",
      place: "Pune",
      mob: 283474839,
      plan: "2 months",
      exp: "11-02-23",
    },
    {
      name: "Jack",
      place: "Pune",
      mob: 283474839,
      plan: "2 months",
      exp: "11-02-23",
    },
    {
      name: "Jack",
      place: "Pune",
      mob: 283474839,
      plan: "2 months",
      exp: "11-02-23",
    },
  ];
  const handleDetails = (value, index) => {
    navigate(`${PRIVATE_ROUTE.users}/${index}`, { state: { record: value } });
  };
  return (
    <PageLayout>
      <Table data={clientData} columns={columns} rowOnClick={handleDetails} />
    </PageLayout>
  );
};

export default User;
