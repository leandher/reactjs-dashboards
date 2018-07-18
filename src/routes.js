import { DashboardResult } from "./views/DashboardResult";
import { Home } from "./Home";

const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/dashboard', name: 'Dashboard', component: DashboardResult }
];

export default routes;
