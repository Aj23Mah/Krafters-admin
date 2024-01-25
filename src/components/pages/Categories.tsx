import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Plus } from "tabler-icons-react";
import { Edit } from "tabler-icons-react";
import { Trash } from "tabler-icons-react";
import { Search } from "tabler-icons-react";
// import { Pagination } from "@mantine/core";
// import axios from "axios";

import { APICategory } from "../../API/category.js";
// import { APIGetImage } from "../../API/category.js";
import { getImageUrl } from "../../utils/image.helper.js";
import axios from "axios";

const Categories = () => {
  const navigate = useNavigate();

  //   // Make the request
  // async function fetchData() {
  //   try {
  //     const response = await axios.get('http://localhost:3330/category');
  //     console.log(response.data);
  //     // Handle the data as needed
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     // Handle the error
  //   }
  // }

  // // Call the function when needed
  // fetchData();

  const [categoryData, setCategoryData] = useState([]);
  // const [imageUrls, setImageUrls] = useState({});

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3003/category")
  //     .then((res) => {
  //       console.log("Response data:", res.data.data);
  //       setCategoryData(res.data.data);
  //     })
  //     .catch((error) => console.log("Error fetching data:", error));
  // }, []);

  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0); // You'll need to determine this from your data

  const loadCategory = async () => {
    const res = await APICategory(); // currentPage //  this to accept page number
    setCategoryData(res.data.data);
    // setTotalPages(res.data.totalPages); // Set total pages based on response
  };

  useEffect(() => {
    loadCategory();
  }, []); // currentPage

  const deleteCategory = async (id: string | number) => {
    console.log("Deleting category with ID:", id); // Add this line for debugging

    await axios.delete(`http://localhost:3003/category/${id}`);
    try {
      console.log(`Deleted post with ID ${id}`);
      // Optionally, you can refresh the category list after deletion
      loadCategory();
    } catch (error) {
      console.error(error);
    }
  };

  // const handlePageChange = (page: any) => {
  //   setCurrentPage(page);
  // };

  // const fetchImage = async (image, categoryId) => {
  //   try {
  //     const response = await axios.get(
  //       ``
  //     );
  //     setImageUrls((prevUrls) => ({
  //       ...prevUrls,
  //       [categoryId]: response.data.data,
  //     }));
  //   } catch (error) {
  //     console.error(`Error fetching image for id ${categoryId}:`, error);
  //   }
  // };

  return (
    <div className="p-md bg-gray-100">
      <div className="flex sm:flex-row flex-col justify-between items-center mb-sm">
        <div className="font-semibold lg:text-4xl md:text-xl text-md">
          Category
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
            onClick={() => navigate("/new-category")}
            className="flex items-center md:gap-xs gap-[2px] border border-solid md:p-xs p-[2px] cursor-pointer bg-blue-900 text-white rounded-sm"
          >
            <div className="md:text-base text-xs font-semibold sm:block hidden">
              Add New Category
            </div>
            <div className="">
              <Plus size={26} strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-solid border p-sm">
        <table className="w-full p-xs">
          <tr className="text-lg font-semibold">
            <td>Name</td>
            <td>Created At</td>
            <td>Action</td>
          </tr>

          {categoryData.map((category) => {
            const { id, categoryName, image, createdAt } = category;
            const formattedDate = createdAt.split("T")[0]; // Using string manipulation method

            return (
              <tr className="text-md even:bg-gray-100 odd:bg-white">
                <td className="flex items-center gap-sm pl-sm">
                  <p>
                    <img
                      src={getImageUrl(category.image)}
                      // src={`http://localhost:3003/image/get-image/${category.image}`}
                      // src={`${APIGetImage()}/${category.image}`}
                      alt=""
                      height={64}
                      width={64}
                    />
                  </p>
                  <p>{categoryName}</p>
                </td>
                {/* <td>{createdAt}</td> */}
                <td>{formattedDate}</td>

                <td className="flex items-center gap-xs">
                  <p onClick={() => navigate("/edit-categoy")}>
                    <Edit size={28} strokeWidth={2} />
                  </p>
                  <p onClick={() => deleteCategory(id)}>
                    <Trash size={28} strokeWidth={2} />
                  </p>
                </td>
              </tr>
            );
          })}
        </table>
      </div>

      {/* <div className="flex justify-end pt-md">
       // {items}
        <Pagination
           total={5} siblings={2}
          page={currentPage}
          onChange={handlePageChange}
          total={totalPages}
        />
        // onChange={setPage} value={activePage}
      </div> */}
    </div>
  );
};

export default Categories;
