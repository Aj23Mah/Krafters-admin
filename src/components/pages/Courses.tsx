import { Plus } from 'tabler-icons-react';
import { useNavigate } from 'react-router';
// import { RiDownload2Line } from "react-icons/ri";

const Courses = () => {
  const navigate = useNavigate();
  return (
    <div className="p-md border border-red-300 border-solid bg-gray-100">
      <div className="flex justify-between items-center">
        <div className="font-semibold text-xl">Courses</div>
        <div className="flex items-center gap-xs">
          {/* <div>
            <div className="flex items-center border border-solid py-xs px-sm"><RiDownload2Line size={26} /><div>Download</div></div>
          </div> */}
          <div
            onClick={() => navigate('/new-course')}
            className="flex items-center border border-solid p-xs cursor-pointer bg-blue-900 text-white"
          >
            <div className="mr-xs text-base font-semibold">Add New Courses</div>
            <div className="">
              <Plus size={26} strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-lg">
        <div className="border border-solid rounded overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="w-[300px] px-sm py-xs outline-none border-none"
          />
        </div>
        <div className="py-xs px-lg cursor-pointer bg-blue-900 text-white font-medium">
          SEARCH
        </div>
      </div>
      <div className="bg-white border-solid border">
        <table className="w-full">
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Instructor</th>
            <th>No. of students</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>Name</td>
            <td>Category</td>
            <td>Instructor</td>
            <td>No. of students</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Courses;
