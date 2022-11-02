import React from "react";
import role_permissions from "../../data/permission";

const AssingPermission = ({ context, user }) => {
  console.log("context", context);
  const { setPermissionObj } = context;
  console.log("user", user);
  const role = user;
  const permission = role_permissions.find((item) => item.role === role);
  console.log("permission", permission);
  setPermissionObj(permission);
};

export default AssingPermission;
