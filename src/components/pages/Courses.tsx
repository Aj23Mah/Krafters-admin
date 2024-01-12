import { useState } from "react";
import { Plus } from "tabler-icons-react";
import { useNavigate } from "react-router";
import { Search } from "tabler-icons-react";
import { Tabs } from "@mantine/core";
import { Card, Text, Button, Group } from "@mantine/core";
import userImg from "../../assets/images/user-icon.png";
import cardImg from "../../assets/images/img5.png";
import { Dots } from "tabler-icons-react";
import { Edit } from "tabler-icons-react";
import { Trash } from "tabler-icons-react";

const Courses = () => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null); // Close dropdown
    } else {
      setOpenDropdown(index); // Open dropdown
    }
  };

  const CoursesData = [
    {
      name: "GuyHawkins",
      label: "Cybersecurity Unveiled: Safeguarding the Digital Frontier",
      userURL: userImg,
      coursesURL: userImg,
    },
    {
      name: "Thresa Webbr",
      label: "Objective C Courses",
      userURL: userImg,
      coursesURL: userImg,
    },
    {
      name: "Darrell Steward",
      label: "Vuejs Courses",
      userURL: userImg,
      coursesURL: userImg,
    },
    {
      name: "Jane Copper",
      label: "janecopper10@gmail.com",
      userURL: userImg,
      coursesURL: userImg,
    },
  ];
  return (
    <div className="p-md border border-red-300 border-solid bg-gray-100">
      <div className="flex sm:flex-row flex-col justify-between items-center mb-sm">
        <div className="font-semibold lg:text-4xl md:text-xl text-md">
          Courses
        </div>
        <div className="flex items-center gap-xs">
          <div className="flex items-center max-w-[300px] border border-solid rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="w-full md:px-sm md:py-xs px-[4px] py-[2px] outline-none border-none"
            />
            <div className="cursor-pointer font-medium md:p-xs p-[2px] bg-white">
              <Search size={26} strokeWidth={2} />
            </div>
          </div>

          <div
            onClick={() => navigate("/add-courses")}
            className="flex items-center md:gap-xs gap-[2px] border border-solid md:p-xs p-[2px] cursor-pointer bg-blue-900 text-white rounded-sm"
          >
            <div className="md:text-base text-xs font-semibold sm:block hidden">
              Add New Courses
            </div>
            <div className="">
              <Plus size={26} strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-solid border p-sm">
        <Tabs defaultValue="gallery">
          <Tabs.List mb="sm">
            <Tabs.Tab fw={500} value="active" size="xl" mb="md">
              Active Courses
            </Tabs.Tab>
            <Tabs.Tab fw={500} value="pending" size="xl" mb="md">
              Pending Courses
            </Tabs.Tab>
            <Tabs.Tab fw={500} value="inactive" size="xl" mb="md">
              Inactive Courses
            </Tabs.Tab>
            <Tabs.Tab fw={500} value="blocked" size="xl" mb="md">
              Blocked Courses
            </Tabs.Tab>
            <Tabs.Tab fw={500} value="all" size="xl" mb="md">
              All Courses
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="active">Active tab content</Tabs.Panel>

          <Tabs.Panel value="pending">Pending tab content</Tabs.Panel>

          <Tabs.Panel value="inactive">Inactive tab content</Tabs.Panel>

          <Tabs.Panel value="blocked">Blocked tab content</Tabs.Panel>

          <Tabs.Panel
            value="all"
            className="flex gap-sm flex-wrap flex-auto p-sm"
          >
            {CoursesData.map((v, key) => (
              <Card
                key={key}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                className="w-full md:w-1/2 lg:w-1/5 md:flex-none flex-auto"
              >
                <div className="h-[180px]">
                  <img src={cardImg} alt="" height='100%' width="100%" />
                </div>

                <Group mb={14}>
                  <Text fw={700} size="xl">
                    {v.label}
                  </Text>
                </Group>

                <Group mb="md" justify="space-between">
                  <div className="flex items-center gap-xs">
                    <img src={userImg} alt="" className="h-lg" />
                    <Text fw={500} color="gray">
                      {v.name}
                    </Text>
                  </div>

                  <div className="relative inline-block">
                    <button
                      onClick={() => toggleDropdown(key)}
                      className="text-black bg-white px-sm py-[4px] rounded focus:outline-none border-none"
                    >
                      <Dots size={24} strokeWidth={2} />
                    </button>
                    {openDropdown === key && (
                      <div className="absolute bg-slate-100 border rounded mt-[4px] right-xl top-none pr-xl z-10">
                        <ul className="list-none">
                          <li className="hover:bg-gray-300 flex items-center gap-xs">
                            <Trash size={24} strokeWidth={2} /> <p>Delete</p>
                          </li>
                          <li className="hover:bg-gray-300 flex items-center gap-xs">
                            <Edit size={24} strokeWidth={2} /> <p>Edit</p>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </Group>

                <Button color="blue" fullWidth radius="md" py={8}>
                  View Details
                </Button>
              </Card>
            ))}
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default Courses;
