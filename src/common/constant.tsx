import { SidebarList } from "../type/type";
import InboxIcon from "@mui/icons-material/Inbox";

export const sidebarList: SidebarList[] = [
  {
    id: "dashboard",
    text: "Dashboard",
    href: "/dashboard",
    icon: <InboxIcon />,
  },
  {
    id: "allCategories",
    text: "All Categories",
    href: "/all-categories",
    icon: <InboxIcon />,
  },
];
