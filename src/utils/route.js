export const PUBLIC_ROUTE = {
  login: "/login",
};
const SIDEBAR_ROUTE = {
  homePage: "/home",
  clients: "/clients",
  users: "/users",
  payment: "/payment",
  profile: "/profile",
  settings: "/settings",
  approvals: "/approvals",
  upload: "/upload",
  subscription: "/subscription",
};
export const PRIVATE_ROUTE = {
  homePage: SIDEBAR_ROUTE.homePage,
  clients: SIDEBAR_ROUTE.clients,
  users: SIDEBAR_ROUTE.users,
  payment: SIDEBAR_ROUTE.payment,
  profile: SIDEBAR_ROUTE.profile,
  settings: SIDEBAR_ROUTE.settings,
  approvals: SIDEBAR_ROUTE.approvals,
  upload: SIDEBAR_ROUTE.upload,
  subscription: SIDEBAR_ROUTE.subscription,
};
