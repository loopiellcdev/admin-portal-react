// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import Users from "views/Users/Users.jsx";
import Customers from "views/Customers/Customers.jsx";
import Washers from "views/Washers/Washers.jsx";
import Drivers from "views/Drivers/Drivers.jsx";
import Orders from "views/Orders/Orders.jsx";
import Loads from "views/Loads/Loads.jsx";
import Payment from "views/Payment/Payment.jsx";
import Statistics from "views/Statistics/Statistics.jsx";
import Settings from "views/Settings/Settings.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/users",
    sidebarName: "Users",
    navbarName: "Users",
    icon: "people",
    component: Users
  },

  {
    path: "/customer",
    sidebarName: "Customers",
    navbarName: "Profile",
    icon: Person,
    component: Customers
  },

  {
    path: "/washer",
    sidebarName: "Washers",
    navbarName: "Profile",
    icon: "local_laundry_service",
    component: Washers
  },

  {
    path: "/driver",
    sidebarName: "Drivers",
    navbarName: "Profile",
    icon: "airport_shuttle",
    component: Drivers
  },

  {
    path: "/order",
    sidebarName: "Orders",
    navbarName: "Table List",
    icon: "content_paste",
    component: Orders
  },

  {
    path: "/load",
    sidebarName: "Loads",
    navbarName: "Table List",
    icon: "all_inbox",
    component: Loads
  },

  {
    path: "/payment",
    sidebarName: "Payment",
    navbarName: "Typography",
    icon: "account_balance",
    component: Payment
  },
  {
    path: "/statistics",
    sidebarName: "Statistics",
    navbarName: "Icons",
    icon: "bar_chart",
    component: Statistics
  },
  {
    path: "/maps",
    sidebarName: "Maps",
    navbarName: "Map",
    icon: LocationOn,
    component: Maps
  },
  {
    path: "/settings",
    sidebarName: "Settings",
    navbarName: "Notifications",
    icon: "settings",
    component: Settings
  },

  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
