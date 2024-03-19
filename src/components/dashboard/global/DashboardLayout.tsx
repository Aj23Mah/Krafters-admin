import { useState } from "react";
import { AppShell, Box, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "../../../assets/react.svg";
import { NavLink, To } from "react-router-dom";
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
import { MessageReport } from 'tabler-icons-react';
import { Headset } from 'tabler-icons-react';

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
    // path: "/help",
    icon: <Headset size={24} />,
    dropdownItems: [
      { 
        label: "FAQ", 
        path: "/faq", 
        icon: <QuestionMark size={24} /> 
      },
      { 
        label: "User Messages", 
        path: "/message", 
        icon: <MessageReport size={24} /> 
      },
    ],
  },
];

export function BasicAppShell() {
  
  const [opened, { toggle }] = useDisclosure();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [helpSupportDropdownVisible, setHelpSupportDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const toggleHelpSupportDropdown = () => {
    setHelpSupportDropdownVisible(!helpSupportDropdownVisible);
  };

  const closeHelpSupportDropdown = () => {
    setHelpSupportDropdownVisible(false);
  };

  return (
    <AppShell
      header={{ height: 65 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
    >
      <AppShell.Header>
        <Box className="h-xxl w-full flex items-center p-sm">
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            className="mr-xs"
          />
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
              <div>
                <Bell size={30} strokeWidth={2} />
              </div>
              <div
                onClick={toggleDropdown}
                onBlur={closeDropdown}
                className="relative"
              >
                <img src={Logo} alt="logo" className="pl-xs" />

                {/* Dropdown content */}
                {dropdownVisible && (
                  <div className="flex flex-col absolute top-[51px] right-none bg-white p-sm w-[120px] rounded-br-lg rounded-bl-lg">
                    <a
                      href="/profile"
                      className="no-underline text-black font-semibold text-base hover:bg-slate-100 py-xs text-center"
                    >
                      Profile
                    </a>
                    <a
                      href="#"
                      className="no-underline text-black font-semibold text-base hover:bg-slate-100 py-xs text-center"
                    >
                      Setting
                    </a>
                    <a
                      href="#"
                      className="no-underline text-black font-semibold text-base hover:bg-slate-100 py-xs text-center"
                    >
                      Log Out
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Box>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        {navItem.map((item, key) => (
          <div key={key} className="relative">
            {item.path ? (
              <NavLink
                key={key}
                to={item.path as To}
                className={({
                  isActive,
                }) => `no-underline font-medium flex items-center p-xs mb-xs rounded-md gap-xs ${
                  item.dropdownItems ? "cursor-pointer" : "text-black"
                } ${(isActive) ? "bg-orange-500 text-white" : "text-black"}
                `}
                onClick={() => {
                  if (item.dropdownItems) {
                    toggleHelpSupportDropdown(); // Toggle the dropdown
                  }
                }}
              >
                <div className="flex items-center justify-center duration-500">
                  <div className="pr-xs">{item.icon}</div>
                  <div className="text-lg">{item.label}</div>
                </div>
              </NavLink>
             ) : ( 
              <div
                className={`
                  no-underline font-medium flex items-center p-xs mb-xs rounded-md gap-xs 
                  ${item.dropdownItems ? "cursor-pointer" : "text-black"}
                `}
                // ${helpSupportDropdownVisible ? "bg-orange-500 text-white" : "text-black"}
                onClick={() => {
                  if (item.dropdownItems) {
                    toggleHelpSupportDropdown(); // Toggle the dropdown
                  }
                }}
              >
                <div className="flex items-center justify-center duration-500">
                  <div className="pr-xs">{item.icon}</div>
                  <div className="text-lg">{item.label}</div>
                </div>
              </div> 
             )} 

            {/* Dropdown content */}
            {item.dropdownItems && (
              <div
                className={`absolute top-0 right-0 w-full rounded-md ${
                  helpSupportDropdownVisible ? "block" : "hidden"
                }`}
              >
                {item.dropdownItems.map((subItem, index) => (
                  <NavLink
                    key={index}
                    to={subItem.path as To}
                    onClick={closeHelpSupportDropdown}
                    className="no-underline font-medium text-black bg-white hover:text-white hover:bg-orange-500 flex items-center rounded-md ml-xs px-xs"
                  >
                    <div className="pr-xs">{subItem.icon}</div>
                    <div className="py-xs text-lg">{subItem.label}</div>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <DashboardRoutes />
      </AppShell.Main>
    </AppShell>
  );
}
