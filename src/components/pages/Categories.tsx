import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Plus } from "tabler-icons-react";
import { Edit } from "tabler-icons-react";
import { Trash } from "tabler-icons-react";
import { Search } from "tabler-icons-react";
// import img1 from "../../assets/images/img1.png";
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

  useEffect(() => {
    axios
      .get("http://localhost:3003/category")
      .then((res) => {
        console.log("Response data:", res.data.data);
        setCategoryData(res.data.data);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

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
    <div className="p-md border border-red-300 border-solid bg-gray-100">
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
        <table className="w-full p-sm even:bg-gray-100">
          <tr className="text-lg font-semibold">
            <td>Name</td>
            <td>Created At</td>
            <td>Action</td>
          </tr>

          {categoryData.map((category) => {
            const { id, categoryName, createdAt } = category;
            return (
              <tr className="text-md">
                <td className="flex items-center gap-sm">
                  <p>
                    <img src={`http://localhost:3003/image/get-image/${category.image}`} alt="" height={64} width={64} />
                  </p>
                  <p>{categoryName}</p>
                </td>
                <td>{createdAt}</td>
                <td className="flex items-center gap-xs">
                  <p onClick={() => navigate("/edit-categoy")}>
                    <Edit size={28} strokeWidth={2} />
                  </p>
                  <p>
                    <Trash size={28} strokeWidth={2} />
                  </p>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Categories;
