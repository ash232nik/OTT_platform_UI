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
      title: "Email Id",
      dataIndex: "email",
      key: "email",
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
      name: "Ann",
      place: "Bangalore",
      mob: 986474839,
      plan: "2 months",
      email: "ann@gmail.com",
      exp: "08-12-22",
    },
    {
      name: "Stuart",
      place: "Mumbai",
      mob: 7833474839,
      plan: "4 months",
      email: "stuart@gmail.com",
      exp: "11-12-22",
    },
    {
      name: "Manish",
      place: "Pune",
      mob: 8102474839,
      plan: "5 months",
      email: "manish@gmail.com",
      exp: "28-05-23",
    },
    {
      name: "Jack",
      place: "Delhi",
      mob: 7683474839,
      plan: "2 months",
      email: "jack@gmail.com",
      exp: "11-02-22",
    },
    {
      name: "Max",
      place: "Pune",
      mob: 7773474839,
      plan: "3 months",
      email: "max@gmail.com",
      exp: "08-12-22",
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
