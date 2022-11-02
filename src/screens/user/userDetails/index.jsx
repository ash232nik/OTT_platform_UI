import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import TextInput from "../../../common/textInput";
import PageLayout from "../../../Layout/pageLayout";
import Row from "../../../Layout/row/input";
import "./index.scss";

const UserDetails = () => {
  const location = useLocation();
  const result = location?.state?.record;
  const obj = {
    name: "",
    place: "",
    mob: 0,
    plan: "",
    exp: "",
  };
  const [clientData, setClientData] = useState(result);

  //   console.log(location?.state?.record, "location");
  const handleChange = (e, value) => {
    setClientData((prev) => ({ ...prev, [value]: e.target.value }));
  };
  return (
    <PageLayout>
      <div className="clientDetailContainer">
        <div className="clientHeading">User Details</div>
        <div className="clientProfileHead">Profile</div>
        <Row className="inputRowContainer">
          <TextInput
            label={"Name"}
            value={clientData.name}
            className="inputWidth"
            onChange={(e) => handleChange(e, "name")}
          />
          <TextInput
            label={"Place"}
            value={clientData.place}
            className="inputWidth"
            onChange={(e) => handleChange(e, "place")}
          />
        </Row>
        <Row className="inputRowContainer">
          <TextInput
            label={"Mobile"}
            value={clientData.mob}
            className="inputWidth"
            onChange={(e) => handleChange(e, "mob")}
          />
          <TextInput
            label={"Plan"}
            value={clientData.plan}
            className="inputWidth"
            onChange={(e) => handleChange(e, "plan")}
          />
        </Row>
        <div className="clientProfileHead">Plans</div>
        <Row className="inputRowContainer">
          <TextInput
            label={"Name"}
            value={clientData.name}
            className="inputWidth"
            onChange={(e) => handleChange(e, "name")}
          />
          <TextInput
            label={"Place"}
            value={clientData.place}
            className="inputWidth"
            onChange={(e) => handleChange(e, "place")}
          />
        </Row>
        <Row className="inputRowContainer">
          <TextInput
            label={"Mobile"}
            value={clientData.mob}
            className="inputWidth"
            onChange={(e) => handleChange(e, "mob")}
          />
          <TextInput
            label={"Plan"}
            value={clientData.plan}
            className="inputWidth"
            onChange={(e) => handleChange(e, "plan")}
          />
        </Row>
      </div>
    </PageLayout>
  );
};

export default UserDetails;
