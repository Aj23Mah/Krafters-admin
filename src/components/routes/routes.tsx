import { BasicAppShell } from "../dashboard/global/DashboardLayout";


export const PRIMARY_ROUTES = [
  { path: "/", element:  <BasicAppShell/> },
  { path: "/*", element:  <BasicAppShell/> },
]