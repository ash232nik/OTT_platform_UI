import Dashboard from "../../assets/images/dashboard.png";
import Client from "../../assets/images/customer.png";
import UserImage from "../../assets/images/userImage.png";
import Approval from "../../assets/images/approval.png";
import Payment from "../../assets/images/credit-card.png";
import Profile from "../../assets/images/profileImage.png";
import SettingsImage from "../../assets/images/settingsImage.png";
import Upload from "../../assets/images/cloud-computing.png";
import Subscription from "../../assets/images/add-user.png";

export const UserData = {
  user: [
    {
      username: "admin@mail.com",
      password: "Admin@123",
      role: "admin",
      tabs: [
        {
          content: "Dashboard",
          icon: Dashboard,
          path: "/",
        },
        {
          content: "Clients",
          icon: Client,
          path: "/clients",
        },
        {
          content: "Users",
          icon: UserImage,
          path: "/users",
        },
        {
          content: "Approvals",
          icon: Approval,
          path: "/approvals",
        },
        {
          content: "Payment",
          icon: Payment,
          path: "/payment",
        },
        {
          content: "Profile",
          icon: Profile,
          path: "/profile",
        },
        {
          content: "Settings",
          icon: SettingsImage,
          path: "/settings",
        },
      ],
    },
    {
      username: "clientone@mail.com",
      password: "ClientOne@123",
      role: "client_1",
      tabs: [
        {
          content: "Dashboard",
          icon: Dashboard,
          path: "/",
        },
        {
          content: "Upload",
          icon: Upload,
          path: "/upload",
        },
        {
          content: "Subscription",
          icon: Subscription,
          path: "/subscription",
        },
        {
          content: "Profile",
          icon: Profile,
          path: "/profile",
        },
        {
          content: "Settings",
          icon: SettingsImage,
          path: "/settings",
        },
      ],
    },
    {
      username: "clienttwo@mail.com",
      password: "ClientTwo@123",
      role: "client_1_1",
      tabs: [
        {
          content: "Dashboard",
          icon: Dashboard,
          path: "/",
        },
        {
          content: "Upload",
          icon: Upload,
          path: "/upload",
        },
        {
          content: "Subscription",
          icon: Subscription,
          path: "/subscription",
        },

        {
          content: "Profile",
          icon: Profile,
          path: "/profile",
        },
        {
          content: "Settings",
          icon: SettingsImage,
          path: "/settings",
        },
      ],
    },
  ],
};
