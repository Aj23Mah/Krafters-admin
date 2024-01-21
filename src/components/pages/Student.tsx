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
import { Dots } from "tabler-icons-react";
import { Eye } from "tabler-icons-react";

const Student = () => {
  const navigate = useNavigate();

  const [openDropdown, setOpenDropdown] = useState(null);

  const dropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null); // Close dropdown
    } else {
      setOpenDropdown(index); // Open dropdown
    }
  };

  const StudentData = [
    {
      imgURL: user1,
      name: "Leslie Alexander",
      course: "	Vuejs Courses",
      batch: "1:00 p.m.", // {new Date().toLocaleString() + ""}
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
  ];

  const [rowStates, setRowStates] = useState(
    StudentData.map(() => ({ isOpen: false, selectedOption: "Status..." }))
  );

  const toggleDropdown = (index) => {
    setRowStates((prevStates) =>
      prevStates.map((state, i) =>
        i === index ? { ...state, isOpen: !state.isOpen } : state
      )
    );
  };

  const handleOptionClick = (index, option) => {
    setRowStates((prevStates) =>
      prevStates.map((state, i) =>
        i === index
          ? { ...state, selectedOption: option, isOpen: false }
          : state
      )
    );
  };

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
        <table className="w-full border-collapse">
          <tr className="text-lg font-semibold even:bg-gray-100 odd:bg-white">
            <td>Name</td>
            <td>Course</td>
            <td>Batch</td>
            <td>Contact Number</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
          {StudentData.map((v, index) => (
            <tr key={index} className="text-md even:bg-gray-100 odd:bg-white">
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
                      onClick={() => toggleDropdown(index)}
                      className="inline-flex justify-center w-[120px] rounded-md border-none shadow-sm px-sm py-xs bg-slate-200 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-gray-200"
                    >
                      {rowStates[index].selectedOption}
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

                  {rowStates[index].isOpen && (
                    <div className="origin-top-right absolute right-none w-full z-10 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div
                        className="py-[4px]"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        {["Active", "In Active", "Pending", "Blocked"].map(
                          (option) => (
                            <a
                              key={option}
                              href="#"
                              className="block no-underline px-sm py-xs text-base text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                              onClick={() => handleOptionClick(index, option)}
                            >
                              {option}
                            </a>
                          )
                        )}
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
                  <div className="relative inline-block">
                    <button
                      onClick={() => dropdown(index)}
                      className="text-black px-sm bg-transparent py-[4px] rounded focus:outline-none border-none"
                    >
                      <Dots size={24} strokeWidth={2} />
                    </button>
                    {openDropdown === index && (
                      <div className="absolute bg-slate-50 border rounded right-none pr-xl z-10 w-[240px]">
                        <ul className="list-none">
                          <li className="hover:bg-gray-300 flex items-center gap-xs">
                            <Trash size={24} strokeWidth={2} /> <p>Delete</p>
                          </li>
                          <li className="hover:bg-gray-300 flex items-center gap-xs">
                            <Eye size={24} strokeWidth={2} />{" "}
                            <p>View Details</p>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
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
