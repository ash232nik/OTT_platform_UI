import React from "react";
import TextInput from "../../common/textInput";
import "./index.scss";
import DetailsCard from "../../Layout/detailsCard";
import closeIcon from "../../assets/images/close.png";
import Button from "../../common/button";

const DetailBox = ({ title, value }) => {
  return (
    <div className="flexClass">
      <div style={{ width: "10rem" }} className="flexLeftClass">
        {title}
      </div>
      <div className="BoxContainer">{value}</div>
    </div>
  );
};
const ProfilePage = ({ photo, close }) => {
  return (
    <div className="profileContainer">
      <img
        className="close-icon"
        src={closeIcon}
        alt="close-icon"
        onClick={close}
        role="presentation"
        style={{ width: "15px" }}
      />
      <div className="photoContainer">
        <div className="photoBox">
          <img src={photo} />
        </div>
        <div className="headingContainer">
          <div className="profileHeading">Profile</div>
          <div className="profileSubHeading">
            Update your photo and personal details
          </div>
        </div>
      </div>
      <div className="detailsContainer">
        <div>
          <TextInput
            placeholder="Enter your First Name"
            label="First Name"
            className="fullWidth"
          />
        </div>
        <div>
          <TextInput
            placeholder="Enter your Last Name"
            label="Last Name"
            className="fullWidth"
          />
        </div>
        <div>
          <div className="Heading">Address</div>
          <TextInput
            placeholder="Enter your Address"
            label=""
            className="fullWidth"
          />
          <div className="addressBox">
            <TextInput
              placeholder="City"
              label="City"
              className="fullWidth"
              width="48%"
            />
            <TextInput
              placeholder="State"
              label="State"
              className="fullWidth"
              width="48%"
            />
            {/* <input placeholder="City" type={"text"} />
            <input placeholder="State" type={"text"} /> */}
          </div>
          <div className="addressBox">
            <TextInput
              placeholder="Pincode"
              label="Pincode"
              className="fullWidth"
              width="48%"
            />
            <TextInput
              placeholder="Country"
              label="Country"
              className="fullWidth"
              width="48%"
            />
            {/* <input placeholder="Pincode" type={"text"} /> */}
          </div>
        </div>
        <div className="subscriptionContainer">
          <div className="Heading">Subscription Plan</div>
          {/* <div className="flexClass">
            <div style={{ width: "10rem" }} className="flexLeftClass">
              Pack Expires on
            </div>
            <div className="BoxContainer">12/08/2022</div>
          </div> */}
          <DetailBox title={"Subscription Pack"} value={"3 month"} />
          <DetailBox title={"Subscription Amount"} value={"3000"} />
          <DetailBox title={"Daily Limit"} value={"12/08/2022"} />
          <DetailBox title={"Pack Expires on"} value={"15GB"} />
          {/* <div className="flexClass">
            <div style={{ width: "10rem" }} className="flexLeftClass">
              Daily Limit
            </div>
            <div className="BoxContainer">15GB</div>
          </div> */}
        </div>
        <div className="passwordContainer">
          <div className="Heading">Password</div>
          <div>
            <TextInput
              placeholder="Current Password"
              label="Current Password"
              type="password"
              className="fullWidth"
            />
          </div>
          <div>
            <TextInput
              placeholder="New Password"
              label="New Password"
              type="password"
              className="fullWidth"
            />
          </div>
          <div>
            <TextInput
              placeholder="Confirm Password"
              label="Confirm Password"
              type="password"
              className="fullWidth"
            />
          </div>
        </div>
        <div className="legalContainer">
          <div className="Heading">Legal Agreement</div>
          <div className="legalCheckBoxContainer">
            <div className="checkBoxContainer">
              <input type={"checkbox"} disabled value={true} />
            </div>
            <div>
              <a href="https://www.google.com/" target={"_blank"}>
                I agree to the terms and conditions
              </a>
            </div>
          </div>

          <DetailsCard className="legalBox">
            When we purchase large ticket items, such as a set of appliances, we
            generally enter into a contract with the store to deliver and
            install such appliances. These agreements are legally binding on
            both parties. Furthermore, if you have ever written a will, this is
            actually a legally binding agreement. Similarly, healthcare and
            other insurance-related documents are legal agreements between the
            insurance provider and you identifying your rights under the
            agreement, along with yours and the company’s responsibilities in
            terms of coverage and fees. Driver’s licenses are also legal
            agreements entered into between you and the state where the DMV is
            providing the license. Essentially it states that you can legally
            operate a motor vehicle. Professional licenses also include legal
            agreements that will indicate if a professional is licensed in a
            particular area, which might be medicine, law, engineering, etc.
          </DetailsCard>
        </div>
      </div>
      <div className="updateButtonContainer">
        <Button
          title={"Update"}
          backgroundColor=" #377dff"
          color="white"
          onClick={close}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
