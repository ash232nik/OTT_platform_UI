const role_permissions = [
  {
    role: "admin",
    access_data: [
      {
        module: "vco",
        permission: {
          can_create: true, //upload button
          can_read: true, ///to view the list
          can_update: true, // can edit the item
          can_delete: false, // remove the item
        },
      },
      {
        module: "vco-approval",
        permission: {
          can_create: true,
          can_read: true,
          can_update: true,
          can_delete: true,
        },
      },
      {
        module: "vcv",
        permission: {
          can_create: true,
          can_read: true,
          can_update: true,
          can_delete: true,
        },
      },
      {
        module: "payment",
        permission: {
          can_create: true,
          can_read: true,
          can_update: true,
          can_delete: true,
        },
      },
      {
        module: "settings",
        permission: {
          can_create: true, //can edit
          can_read: true,
          can_update: true, //can edit
          can_delete: true, //can edit
        },
      },
    ],
  },
  {
    role: "client_1",
    access_data: [
      {
        module: "vco",
        permission: {
          can_create: true,
          can_read: true,
          can_update: true,
          can_delete: true,
        },
      },
      {
        module: "vco-approval",
        permission: {
          can_create: false,
          can_read: true,
          can_update: true,
          can_delete: false,
        },
      },
      {
        module: "vcv",
        permission: {
          can_create: false,
          can_read: true,
          can_update: false,
          can_delete: false,
        },
      },
      {
        module: "payment",
        permission: {
          can_create: false,
          can_read: true,
          can_update: false,
          can_delete: false,
        },
      },
      {
        module: "settings",
        permission: {
          can_create: false,
          can_read: true,
          can_update: false,
          can_delete: false,
        },
      },
    ],
  },
  {
    role: "client_1_1",
    access_data: [
      {
        module: "vco",
        permission: {
          can_create: true,
          can_read: true,
          can_update: true,
          can_delete: true,
        },
      },
      {
        module: "vco-approval",
        permission: {
          can_create: false,
          can_read: true,
          can_update: false,
          can_delete: false,
        },
      },
      {
        module: "vcv",
        permission: {
          can_create: false,
          can_read: true,
          can_update: false,
          can_delete: false,
        },
      },
      {
        module: "payment",
        permission: {
          can_create: false,
          can_read: true,
          can_update: false,
          can_delete: false,
        },
      },
      {
        module: "settings",
        permission: {
          can_create: false,
          can_read: true,
          can_update: false,
          can_delete: false,
        },
      },
    ],
  },
];
export default role_permissions;
