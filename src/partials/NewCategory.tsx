import React, { useRef, useState } from 'react';
import { CloudUpload } from 'tabler-icons-react';

const NewCategory: React.FC = () => {
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
    <div className="flex md:gap-xl flex-col lg:flex-row p-xl h-screen">
      <div className="mb-lg">
        <div className="text-xl font-medium mb-sm">Add an image</div>
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={handleClick}
          className="border-2 border-dashed border-gray-500 rounded-md p-4 text-center cursor-pointer grid place-items-center h-[400px] w-[400px]"
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
            style={{ display: 'none' }}
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
        <div className="border border-solid">
          <input
            type="text"
            placeholder="Enter Category Name"
            className="w-full p-xs text-lg outline-none border-none"
          />
        </div>
      </div>
      <div className='flex justify-end items-end gap-sm'>
        <button className='border border-solid py-xs px-lg text-blue-900 bg-white'>Cancel</button>
        <button className='border border-solid py-xs px-lg bg-blue-900 text-white'>Create</button>
      </div>
    </div>
  );
};

export default NewCategory;
