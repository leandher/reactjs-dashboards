import { DashboardResult } from "./views/Dashboard/DashboardResult";
import { Home } from "./Home";

const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/dashboard', name: 'Dashboard', component: DashboardResult }
];

export default routes;
