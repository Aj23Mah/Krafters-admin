import React, { useRef, useState } from "react";
import { CloudUpload } from "tabler-icons-react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";
// import axios from "axios";

const EditCategory: React.FC = () => {
  const navigate = useNavigate();

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

  // const formData = useState({
  //   categoryName: "",
  //   categoryImg: "",
  // });
  // const handleSubmit = async () => {
  //   try {
  //     const request = await axios.get(
  //       "http://localhost:3330/category",
  //       formData
  //     );
  //     console.log(request.data);
  //     console.log("Category request Sucessfully");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="p-xl h-screen">
      <div className="flex items-center gap-sm">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => navigate("/categories")}
        >
          <IoIosArrowBack />
        </div>
        <div className="text-xl font-medium mb-sm">Edit Categories</div>
      </div>

      <div className="flex flex-col lg:flex-row md:gap-xl">
        <div className="mb-lg">
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={handleClick}
            className="border-2 border-dashed border-gray-500 rounded-md p-xs text-center cursor-pointer grid place-items-center md:h-[400px] md:w-[400px] max-h-[400px] max-w-[400px]"
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

        <div className="w-full">
          <div className="mb-xs text-lg font-medium">Category Name</div>
          <div className="border border-solid lg:w-3/5 w-full rounded overflow-hidden">
            <input
              type="text"
              placeholder="Enter Category Name"
              // value={categoryName}
              className="w-full p-xs text-lg outline-none border-none"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end items-end gap-sm mt-sm">
        <button className="border border-solid py-xs px-lg text-blue-900 bg-white rounded-md">
          Cancel
        </button>
        <button
          // onClick={handleSubmit}
          className="border border-solid py-xs px-lg bg-blue-900 text-white rounded-md"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditCategory;
