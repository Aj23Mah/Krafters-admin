import { useState } from "react";

import { Plus } from "tabler-icons-react";
import { useNavigate } from "react-router";
import { Edit } from "tabler-icons-react";
import { Trash } from "tabler-icons-react";
import { Search } from "tabler-icons-react";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import user4 from "../../assets/images/user4.png";

const Student = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Options"); // Initial button text

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const StudentData = [
    {
      imgURL: user1,
      name: "Leslie Alexander",
      course: "	Vuejs Courses",
      batch: "1:00 p.m.",
      phone: "0283-555-0029",
    },
    {
      imgURL: user2,
      name: "Leslie Alexander",
      course: "	Vuejs Courses",
      batch: "1:00 p.m.",
      phone: "0283-555-0029",
    },
    {
      imgURL: user3,
      name: "Leslie Alexander",
      course: "	Vuejs Courses",
      batch: "1:00 p.m.",
      phone: "0283-555-0029",
    },
    {
      imgURL: user4,
      name: "Leslie Alexander",
      course: "	Vuejs Courses",
      batch: "1:00 p.m.",
      phone: "0283-555-0029",
    },
  ]

  return (
    <div className="p-md border border-red-300 border-solid bg-gray-100">
      <div className="flex sm:flex-row flex-col justify-between items-center mb-sm">
        <div className="font-semibold lg:text-4xl md:text-xl text-md">
          Student
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
            onClick={() => navigate("/add-student")}
            className="flex items-center md:gap-xs gap-[2px] border border-solid md:p-xs p-[2px] cursor-pointer bg-blue-900 text-white rounded-sm"
          >
            <div className="md:text-base text-xs font-semibold sm:block hidden">
              Add New Student
            </div>
            <div className="">
              <Plus size={26} strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-solid border p-sm">
        <table className="w-full p-sm even:bg-gray-100">
          <tr className="text-lg font-semibold">
            <td>Name</td>
            <td>Course</td>
            <td>Batch</td>
            <td>Contact Number</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
            {StudentData.map((v, key) => (
          <tr key={key} className="text-md">
              <td className="flex items-center gap-sm">
              <p>
                <img src={v.imgURL} alt="" height={64} width={64} />
              </p>
              <p>{v.name}</p>
            </td>
            <td>{v.course}</td>
            <td>{v.batch}</td>
            <td>{v.phone}</td>
            <td>
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    onClick={toggleDropdown}
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-sm py-xs bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-gray-200"
                  >
                    {selectedOption}
                    <svg
                      className="-mr-[4px] ml-xs h-[20px] w-[20px]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {isOpen && (
                  <div className="origin-top-right absolute right-none mt-xs w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-[4px]"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <a
                        href="#"
                        className="block no-underline px-sm py-xs text-base text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => handleOptionClick("Active")}
                      >
                        Active
                      </a>
                      <a
                        href="#"
                        className="block no-underline px-sm py-xs text-base text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => handleOptionClick("In Active")}
                      >
                        In Active
                      </a>
                      <a
                        href="#"
                        className="block no-underline px-sm py-xs text-base text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => handleOptionClick("Blocked")}
                      >
                        Blocked
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </td>
            <td className="flex items-center gap-xs">
              <p onClick={() => navigate("/edit-student")}>
                <Edit size={28} strokeWidth={2} />
              </p>
              <p>
                <Trash size={28} strokeWidth={2} />
              </p>
            </td>
          </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default Student;
