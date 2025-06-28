import RoleDashboard from "./RoleDashboard";
import RoleSettings from "./RoleSettings";

export default [
  {
    index: true,
    element: <RoleDashboard />,
  },
  {
    path: "settings",
    element: <RoleSettings />,
  },
];
