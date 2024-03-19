import { Tabs } from "@mantine/core";
import { Edit } from "tabler-icons-react";
import { Trash } from "tabler-icons-react";
import React, { useRef, useState } from "react";
import { CloudUpload } from "tabler-icons-react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";
import { SegmentedControl } from "@mantine/core";

const Setting = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Options"); // Initial button text
  const AdminData = [
    {
      name: "Leslie Alexander",
      email: "admin@gmail.com",
      phone: "0283-555-0029",
    },
    {
      name: "Leslie Alexander",
      email: "admin@gmail.com",
      phone: "0283-555-0029",
    },
    {
      name: "Leslie Alexander",
      email: "admin@gmail.com",
      phone: "0283-555-0029",
    },
    {
      name: "Leslie Alexander",
      email: "admin@gmail.com",
      phone: "0283-555-0029",
    },
  ];
  const [rowStates, setRowStates] = useState(
    AdminData.map(() => ({ isOpen: false, selectedOption: "Status..." }))
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

  // general setting
  const [value, setValue] = useState("react");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    processFile(event.target.files?.[0]);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    processFile(event.dataTransfer.files[0]);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const processFile = (file: File | undefined) => {
    if (file) {
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <div className="p-md">
      <div className="flex flex-row justify-between items-center">
        <div className="font-semibold lg:text-4xl md:text-xl text-md">
          Application Setting
        </div>
        <div>
          <a
            href="/add-admin"
            className="p-sm rounded-lg no-underline text-md font-bold text-blue-900 bg-gray-400 hover:text-white hover:bg-blue-900"
          >
            Add New Admin
          </a>
        </div>
      </div>
      <div>
        <Tabs variant="outline" defaultValue="admin">
          <Tabs.List mb="sm">
            <Tabs.Tab fw={500} value="admin" size="xl">
              Admin Users
            </Tabs.Tab>
            <Tabs.Tab fw={500} value="general" size="xl">
              General Settings
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="admin">
            <div>
              <table className="w-full p-sm even:bg-gray-100">
                <tr className="text-lg font-semibold">
                  <td>Name</td>
                  <td>Email</td>
                  <td>Contact Number</td>
                  <td>Status</td>
                  <td>Action</td>
                </tr>
                {AdminData.map((v, index) => (
                  <tr key={index} className="text-md">
                    <td>{v.name}</td>
                    <td>{v.email}</td>
                    <td>{v.phone}</td>
                    <td>
                      <div className="relative inline-block text-left">
                        <div>
                          <button
                            type="button"
                            onClick={() => toggleDropdown(index)}
                            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-sm py-xs bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-gray-200"
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
                          <div className="origin-top-right absolute right-none mt-xs w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                            <div
                              className="py-[4px]"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="options-menu"
                            >
                              {[
                                "Active",
                                "In Active",
                                "Pending",
                                "Blocked",
                              ].map((option) => (
                                <a
                                  key={option}
                                  href="#"
                                  className="block no-underline px-sm py-xs text-base text-gray-700 hover:bg-gray-100"
                                  role="menuitem"
                                  onClick={() =>
                                    handleOptionClick(index, option)
                                  }
                                >
                                  {option}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="flex items-center gap-xs">
                      <p onClick={() => navigate("/edit-admin")}>
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
          </Tabs.Panel>

          <Tabs.Panel value="general">
            <div className="p-xl h-auto">
              <div className="flex flex-col lg:flex-row md:gap-xl">
                <div className="mb-lg m-auto md:m-none">
                  <div
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={handleClick}
                    className="border-2 border-dashed border-gray-500 p-xs text-center cursor-pointer grid place-items-center h-[360px] w-[360px] rounded-full"
                  >
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt="Uploaded File"
                        className="max-w-full h-auto mx-auto rounded-full object-contain"
                      />
                    ) : (
                      <div className="font-medium text-gray-500 text-md">
                        <CloudUpload size={48} strokeWidth={2} />
                        <p>Drag and drop files here or click to select</p>
                      </div>
                    )}
                    <input
                      required
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                  </div>
                  {selectedFile && (
                    <p className="text-md my-2">
                      Selected File Name: {selectedFile.name}
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <div className="flex gap-md mb-sm md:flex-row flex-col">
                    <div className="w-full">
                      <label className="text-lg mb-sm">Website Name</label>
                      <input
                        required
                        type="text"
                        placeholder="Street Name"
                        className="w-full p-xs text-lg outline-none border-solid rounded-lg border border-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="md:text-2xl textx-lg font-semibold">
                      Address Details
                    </div>

                    <div className="w-full mb-sm">
                      <label className="text-lg mb-sm">Address</label>
                      <input
                        required
                        type="text"
                        placeholder="Street Name"
                        className="w-full p-xs text-lg outline-none border-solid rounded-lg border border-gray-400"
                      />
                    </div>

                    <div className="flex gap-md mb-sm md:flex-row flex-col">
                      <div className="w-full md:w-1/2">
                        <label className="text-lg mb-sm">City</label>
                        <input
                          required
                          type="text"
                          placeholder="City"
                          className="w-full p-xs text-lg outline-none border-solid rounded-lg border border-gray-400"
                        />
                      </div>

                      <div className="w-full md:w-1/2">
                        <label className="text-lg mb-sm">State</label>
                        <input
                          required
                          type="text"
                          placeholder="State, Province"
                          className="w-full p-xs text-lg outline-none border-solid rounded-lg border border-gray-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="md:text-2xl textx-lg font-semibold">
                      Contact Details
                    </div>

                    <div className="flex gap-md mb-sm md:flex-row flex-col">
                      <div className="w-full md:w-1/2">
                        <label className="text-lg mb-sm">Email Address</label>
                        <input
                          required
                          type="text"
                          placeholder="Email Address"
                          className="w-full p-xs text-lg outline-none border-solid rounded-lg border border-gray-400"
                        />
                      </div>

                      <div className="w-full md:w-1/2">
                        <label className="text-lg mb-sm">Mobile Number</label>
                        <input
                          required
                          type="text"
                          placeholder="Mobile Number"
                          className="w-full p-xs text-lg outline-none border-solid rounded-lg border border-gray-400"
                        />
                      </div>
                    </div>

                    <div className="w-full mb-sm">
                      <label className="text-lg mb-sm">Telephone Number</label>
                      <input
                        required
                        type="text"
                        placeholder="Telephone Number"
                        className="w-full p-xs text-lg outline-none border-solid rounded-lg border border-gray-400"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="md:text-2xl textx-lg font-semibold">
                      Social Media Links
                    </div>

                    <div className="w-full mb-sm">
                      <input
                        required
                        type="text"
                        placeholder="Social Media Links"
                        className="w-full p-xs text-lg outline-none border-solid rounded-lg border border-gray-400"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end items-end gap-sm">
                <button className="border border-solid border-gray-400 py-xs px-lg text-blue-900 bg-white rounded-md">
                  Cancel
                </button>
                <button className="border border-solid border-gray-400 py-xs px-lg bg-blue-900 text-white rounded-md">
                  Save
                </button>
              </div>
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default Setting;
