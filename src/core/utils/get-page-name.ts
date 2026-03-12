const pageNames: { [key: string]: string } = {
  "/dashboard": "Dashboard",
  "/dashboard/orders": "Orders",
  "/dashboard/customers": "Customers",
  "/dashboard/analytics": "Analytics",
  "/dashboard/account": "Account",
  "/dashboard/staffs": "Staffs",
};

export const getPageName = (path: string) => {
  return pageNames[path];
};
