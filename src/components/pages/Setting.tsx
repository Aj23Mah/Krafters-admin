import React, { useRef, useState } from "react";
import { CloudUpload } from "tabler-icons-react";

const Setting = () => {
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
      <div className="font-semibold lg:text-4xl md:text-xl text-md">
        Application Setting
      </div>
      <div className="flex lg:flex-row flex-col">
        <div className="h-auto w-full mb-xxl">
          {/* <Website_details /> */}
          <div className="p-sm">
            <div className="font-semibold text-3xl mb-md">Website Details</div>
            <form action="" className="flex flex-col">
              <label htmlFor="" className="text-lg font-medium">
                Website Name
              </label>
              <input
                type="text"
                placeholder="Enter Website Name"
                className="p-sm border-gray-400 text-md border-solid text-gray-400 outline-none rounded-lg mb-sm"
              />
              <label htmlFor="" className="text-lg font-medium">
                Logo
              </label>
              <div className="mb-lg">
                <div
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={handleClick}
                  className="border-2 border-dashed border-gray-500 rounded-md p-xs text-center cursor-pointer grid place-items-center max-h-[140px] max-w-[400px]"
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
            </form>
          </div>
        </div>
        <div className="h-auto w-full mb-xxl">
          {/* <Address_details /> */}
          <div className="p-sm">
            <div className="font-semibold text-3xl mb-md">Address Details</div>
            <form action="">
              <div className="mb-sm">
                <div>
                  <label htmlFor="" className="text-lg font-medium">
                    Address
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    className="w-full p-sm border-gray-400 text-md border-solid text-gray-400 outline-none rounded-lg"
                  />
                </div>
              </div>
              <div className="flex mb-sm lg:flex-row flex-col">
                <div className="w-full lg:mr-sm mb-sm">
                  <div>
                    <label htmlFor="" className="text-lg font-medium">
                      City
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter City"
                      className="p-sm border-gray-400 text-md border-solid text-gray-400 outline-none rounded-lg w-full"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div>
                    <label htmlFor="" className="text-lg font-medium">
                      State
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter State"
                      className="w-full p-sm border-gray-400 text-md border-solid text-gray-400 outline-none rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col">
                <div className="w-full lg:mr-sm mb-sm">
                  <div>
                    <label htmlFor="" className="text-lg font-medium">
                      City
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter City"
                      className="w-full p-sm border-gray-400 text-md border-solid text-gray-400 outline-none rounded-lg"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div>
                    <label htmlFor="" className="text-lg font-medium">
                      Country
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Country"
                      className="w-full p-sm border-gray-400 text-md border-solid text-gray-400 outline-none rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col">
        <div className="h-auto w-full">
          {/* <Contact_details /> */}
          <div className="p-sm">
            <div className="font-semibold text-3xl mb-md">Contact Details</div>
            <form action="" className="flex flex-col">
              <label htmlFor="" className="text-lg font-medium">
                Mobile Number
              </label>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="p-sm border-gray-400 text-md border-solid text-gray-400 outline-none rounded-lg mb-sm"
              />
              <label htmlFor="" className="text-lg font-medium">
                Telephone Number
              </label>
              <input
                type="text"
                placeholder="Enter Telephone Number"
                className="p-sm border-gray-400 text-md border-solid text-gray-400 outline-none rounded-lg mb-sm"
              />
              <label htmlFor="" className="text-lg font-medium">
                Email Address
              </label>
              <input
                type="text"
                placeholder="Enter Email Address"
                className="p-sm border-gray-400 text-md border-solid text-gray-400 outline-none rounded-lg"
              />
            </form>
          </div>
        </div>
        <div className="h-auto w-full">
          {/* <Socialmedia_details /> */}
          <div className="p-sm">
            <div className="font-semibold text-3xl mb-md">Social Media Links</div>
            <form action="" className="flex flex-col">
              <label htmlFor="" className="text-lg font-medium">
                Mobile Number
              </label>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="p-sm border-gray-400 text-md border-solid text-gray-400 outline-none rounded-lg mb-sm"
              />
              <label htmlFor="" className="text-lg font-medium">
                Telephone Number
              </label>
              <input
                type="text"
                placeholder="Enter Telephone Number"
                className="p-sm border-gray-400 text-md border-solid text-gray-400 outline-none rounded-lg mb-sm"
              />
              <label htmlFor="" className="text-lg font-medium">
                Email Address
              </label>
              <input
                type="text"
                placeholder="Enter Email Address"
                className="p-sm border-gray-400 text-md border-solid text-gray-400 outline-none rounded-lg"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="py-xl">
        <button className="text-blue-900 bg-white cursor-pointer rounded-lg mr-md px-lg py-xs hover:text-white hover:bg-blue-900 border border-solid border-blue-900 font-bold text-md">
          Update
        </button>
        <button className="text-blue-900 bg-white cursor-pointer rounded-lg mr-md px-lg py-xs hover:text-white hover:bg-blue-900 border border-solid border-blue-900 font-bold text-md">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Setting;
