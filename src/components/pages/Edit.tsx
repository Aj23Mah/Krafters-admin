
import React, { useRef, useState } from "react";
import { CloudUpload } from "tabler-icons-react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";
import { SegmentedControl } from "@mantine/core";

const Edit: React.FC = () => {
  const navigate = useNavigate();
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
    <div className="p-xl h-auto">
      <div className="flex items-center gap-sm">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => navigate("/student")}
        >
          <IoIosArrowBack />
        </div>
        <div className="text-xl font-medium mb-sm">Edit Profile</div>
      </div>

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
            <input required
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
          <div className="md:text-2xl textx-lg font-semibold">Personnal Details</div>
          <div className="w-full">
            <div className="flex md:flex-row flex-col gap-md mb-sm">
              <div className="md:w-1/2 w-full">
                <label className="text-lg mb-sm">First Name</label>
                <input required
                  type="text"
                  placeholder="First Name"
                  className="w-full p-xs text-lg outline-none border-solid"
                />
              </div>

              <div className="md:w-1/2 w-full">
                <label className="text-lg mb-sm">Last Name</label>
                <input required
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-xs text-lg outline-none border-solid"
                />
              </div>
            </div>

            <div className="flex gap-md mb-sm md:flex-row flex-col">
              <div className="w-full md:w-1/2">
                <label className="text-lg mb-sm">Email</label>
                <input required
                  type="text"
                  placeholder="e.g janecopper10@gmail.com"
                  className="w-full p-xs text-lg outline-none border-solid"
                />
              </div>

              <div className="w-full md:w-1/2">
                <label className="text-lg mb-sm">Mobile Number</label>
                <input required
                  type="text"
                  placeholder="Mobile Number"
                  className="w-full p-xs text-lg outline-none border-solid"
                />
              </div>
            </div>

            <div className="flex gap-md mb-sm md:flex-row flex-col">
              <div className="w-full md:w-1/2">
                <label className="text-lg mb-sm">Date of Birth</label>
                <input required
                  type="date"
                  className="w-full p-xs text-lg outline-none border-solid"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg">Gender</label>
                <SegmentedControl
                  value={value}
                  onChange={setValue}
                  p={8}
                  color="orange"
                  data={[
                    { label: "Male", value: "male" },
                    { label: "Female", value: "female" },
                    { label: "Other", value: "other" },
                  ]}
                  className="flex border border-solid rounded-md gap-xs"
                />
              </div>
            </div>

            <div className="flex gap-md mb-sm md:flex-row flex-col">
            </div>
          </div>
        <div>
            <div className="md:text-2xl textx-lg font-semibold">Address Details</div>

            <div className="w-full mb-sm">
                <label className="text-lg mb-sm">Address</label>
                <input required
                  type="text"
                  placeholder="Address"
                  className="w-full p-xs text-lg outline-none border-solid"
                />
            </div>

            <div className="flex gap-md mb-sm md:flex-row flex-col">
              <div className="w-full md:w-1/2">
                <label className="text-lg mb-sm">City</label>
                <input required
                  type="text"
                  placeholder="City"
                  className="w-full p-xs text-lg outline-none border-solid"
                />
              </div>

              <div className="w-full md:w-1/2">
                <label className="text-lg mb-sm">Course</label>
                <input required
                  type="text"
                  placeholder="State"
                  className="w-full p-xs text-lg outline-none border-solid"
                />
              </div>
            </div>
        </div>

        </div>
      </div>

      <div className="flex justify-end items-end gap-sm">
        <button className="border border-solid py-xs px-lg text-blue-900 bg-white rounded-md">
          Cancel
        </button>
        <button className="border border-solid py-xs px-lg bg-blue-900 text-white rounded-md">
          Save
        </button>
      </div>
    </div>
  );
};

export default Edit;
