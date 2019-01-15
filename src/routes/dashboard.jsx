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
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "Users",
    navbarName: "Profile",
    icon: "people",
    component: UserProfile
  },

  {
    path: "/customer",
    sidebarName: "Customers",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },

  {
    path: "/washer",
    sidebarName: "Washers",
    navbarName: "Profile",
    icon: "local_laundry_service",
    component: UserProfile
  },

  {
    path: "/driver",
    sidebarName: "Drivers",
    navbarName: "Profile",
    icon: "airport_shuttle",
    component: UserProfile
  },

  {
    path: "/order",
    sidebarName: "Orders",
    navbarName: "Table List",
    icon: "content_paste",
    component: TableList
  },

  {
    path: "/load",
    sidebarName: "Loads",
    navbarName: "Table List",
    icon: "all_inbox",
    component: TableList
  },

  {
    path: "/payment",
    sidebarName: "Payment",
    navbarName: "Typography",
    icon: "account_balance",
    component: Typography
  },
  {
    path: "/statistics",
    sidebarName: "Statistics",
    navbarName: "Icons",
    icon: "bar_chart",
    component: DashboardPage
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
    component: NotificationsPage
  },

  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
