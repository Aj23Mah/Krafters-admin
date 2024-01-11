import React, { useRef, useState } from "react";
import { NativeSelect, rem } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { CloudUpload } from "tabler-icons-react";

const NewCourse = () => {
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
    <div className="p-lg">
      <div className="font-bold text-xl">Add New Course</div>
      <div className="">
        <input
          type="text"
          placeholder="Your course title....."
          className="w-[90%] p-sm outline-none border border-solid mb-md rounded-md"
        />
      </div>
      <div className="flex gap-xxl w-[90%] mb-lg">
        <div className="w-[30%]">
          <NativeSelect
            rightSection={
              <IconChevronDown style={{ width: rem(16), height: rem(16) }} />
            }
          >
            <optgroup label="Frontend libraries">
              <option value="react">React</option>
              <option value="figma">Figma</option>
              <option value="flutter">Flutter</option>
              <option value="vue" disabled>
                Vue
              </option>
            </optgroup>

            <optgroup label="Backend libraries">
              <option value="express">Express</option>
              <option value="node">Node</option>
              <option value="nest">Nest</option>
              <option value="mongodb">MongoDB</option>
              <option value="django">Django</option>
            </optgroup>
          </NativeSelect>
        </div>
        <div className="w-[30%]">
          <input
            type="text"
            placeholder="Instructor Name"
            className="w-full p-xs outline-none border border-solid rounded-md"
          />
        </div>
        <div className="w-[30%]">
          <input
            type="text"
            placeholder="Price"
            className="w-full p-xs outline-none border border-solid rounded-md"
          />
        </div>
      </div>
      <div className="flex gap-xxl w-[90%] mb-lg">
        <div className="w-[30%]">
          <input
            type="number"
            placeholder="No. of students"
            className="w-full p-xs outline-none border border-solid rounded-md"
          />
        </div>
        <div className="w-[30%]">
          <input
            type="date"
            className="w-full p-xs outline-none border border-solid rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col w-[90%] mb-lg">
        <span className="text-lg font-semibold mb-sm">Description</span>
        <div>
          <textarea
            name=""
            id=""
            rows="10"
            className="w-full p-xs outline-none border border-solid rounded-md"
          ></textarea>
        </div>
      </div>

      <div className="mb-lg">
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={handleClick}
          className="border-2 border-dashed border-gray-500 rounded-md p-xs text-center cursor-pointer grid place-items-center h-[300px] w-[300px]"
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Uploaded File"
              className="max-w-full h-auto mx-auto"
            />
          ) : (
            <div className="font-medium text-gray-500 text-md">
              <CloudUpload size={48} strokeWidth={2} />
              <p>Drag and drop files here or click to select</p>
            </div>
          )}
          <input
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
      <div className="flex gap-lg">
        <button className="py-xs px-md text-lg font-medium rounded-md bg-blue-600 text-white cursor-pointer border-none">
          Create Course
        </button>
        <button className="py-xs px-md text-lg font-medium rounded-md bg-white text-black cursor-pointer">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default NewCourse;
