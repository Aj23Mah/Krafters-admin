import { AppShell, Box, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "../../../assets/react.svg";
import { NavLink } from "react-router-dom";
import { Search } from "tabler-icons-react";
import { Bell } from "tabler-icons-react";
import { LayoutDashboard } from "tabler-icons-react";
import { Book } from "tabler-icons-react";
import { Category } from "tabler-icons-react";
import { Settings } from "tabler-icons-react";
import { QuestionMark } from "tabler-icons-react";
import { DashboardRoutes } from "../dashboard-routes";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { PiStudent } from "react-icons/pi";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";


const navItem = [
  {
    label: "Dashboard",
    path: "/",
    icon: <LayoutDashboard size={24} />,
  },

  {
    label: "Batch",
    path: "/batch",
    icon: <RiGraduationCapFill size={24} />,
  },
  {
    label: "Categories",
    path: "/categories",
    icon: <Category size={24} strokeWidth={2} />,
  },
  {
    label: "Courses",
    path: "/courses",
    icon: <Book size={24} />,
  },
  {
    label: "Teachers",
    path: "/teachers",
    icon: <PiChalkboardTeacherLight size={24} />,
  },
  {
    label: "Students Directory",
    path: "/student",
    icon: <PiStudent size={24} />,
  },
  {
    label: "Accounting",
    path: "/accounting",
    icon: <MdOutlineAccountBalanceWallet size={24} />,
  },
  {
    label: "Application Settings",
    path: "/setting",
    icon: <Settings size={24} />,
  },
  {
    label: "Help & Support",
    path: "/help",
    icon: <QuestionMark size={24} />,
  },
];

export function BasicAppShell() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 65 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
    >
      <AppShell.Header>
        <Box className="h-xxl w-full flex items-center p-sm">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" className="mr-xs" />
          <div className="font-black text-xl md:text-3xl mr-xs">Krafters</div>
          <div className="flex justify-between h-xl w-full">
            <div className="flex items-center bg-gray-100 w-1/2 rounded-lg p-xs">
              <Search size={30} strokeWidth={2} />
              <input
                type="text"
                placeholder="Search here...."
                className="outline-none cursor-pointer border-none p-xs w-full bg-transparent"
              />
            </div>
            <div className="flex items-center text-gray-900 gap-sm">
              <Bell size={30} strokeWidth={2} />
              <img src={Logo} alt="logo" className="pl-xs" />
            </div>
          </div>
        </Box>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        {navItem.map((v, key) => (
          <NavLink
            key={key}
            to={v.path}
            className={({ isActive }) =>
              `no-underline font-medium flex items-center p-xs mb-xs rounded-md gap-xs ${
                isActive ? "bg-orange-500 text-white" : "text-black"
              }`
            }
          >
            <div>{v.icon}</div>
            <div className="text-lg">{v.label}</div>
          </NavLink>
        ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <DashboardRoutes />
      </AppShell.Main>
    </AppShell>
  );
}
