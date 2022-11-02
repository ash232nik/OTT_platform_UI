import React, { useEffect, useState } from "react";

const findModule = (arr, value) => {
  if (arr && arr.access_data) {
    const access = arr.access_data.find((item) => item.module === value);
    return access.permission;
  }
  return null;
};

export const FetchPermissionData = () => {
  const [permissionObj, setPermissionObj] = useState([]);
  let result = {
    permissionObj,
    setPermissionObj,
    vcoPermission: findModule(permissionObj, "vco"),
    vcoApprovalPermission: findModule(permissionObj, "vco-approval"),
    vcvPermission: findModule(permissionObj, "vcv"),
    paymentPermission: findModule(permissionObj, "payment"),
    settingsPermission: findModule(permissionObj, "settings"),
  };
  useEffect(() => {
    result.vcoPermission = findModule(permissionObj, "vco");
    result.vcoApprovalPermission = findModule(permissionObj, "vco-approval");
    result.vcvPermission = findModule(permissionObj, "vcv");
    result.paymentPermission = findModule(permissionObj, "payment");
    result.settingsPermission = findModule(permissionObj, "settings");
    console.log("result", result);
  }, [permissionObj]);
  return result;
};
