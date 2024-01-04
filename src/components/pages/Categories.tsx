import { Plus } from 'tabler-icons-react';
import { useNavigate } from 'react-router';
import { Edit } from 'tabler-icons-react';
import { Trash } from 'tabler-icons-react';
import { Search } from 'tabler-icons-react';
import img1 from '../../assets/images/img1.png'

const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className="p-md border border-red-300 border-solid bg-gray-100">
      <div className="flex justify-between items-center mb-sm">
        <div className="font-semibold text-xl">Category</div>
        <div className="flex items-center gap-xs">
           
        <div className="flex items-center border border-solid rounded-lg overflow-hidden">
            <input
                type="text"
                placeholder="Search"
                className="w-[300px] px-sm py-xs outline-none border-none"
            />
            <div className="cursor-pointer font-medium p-xs bg-white">
            <Search size={26} strokeWidth={2} />
            </div>
        </div>

          <div
            onClick={() => navigate('/new-category')}
            className="flex items-center border border-solid p-xs cursor-pointer bg-blue-900 text-white"
          >
            <div className="mr-xs text-base font-semibold">Add New Category</div>
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
          <tr className='text-md'>
            <td className='flex items-center gap-sm'><p><img src={img1} alt="" height={64} width={64} /></p> <p>Development</p></td>
            <td>Jan 2, 2024</td>
            <td className='flex items-center gap-xs'>
              <p><Edit size={28} strokeWidth={2} /></p>
              <p><Trash size={28} strokeWidth={2} /></p>
            </td>
          </tr>
        </table>

        {/* <div className='flex justify-between font-semibold text-lg mb-xs'>
          <div>Name</div>
          <div>Created At</div>
          <div>Action</div>
        </div>

        <div className='flex justify-between font-medium text-md mb-xs'>
          <div className='flex'><img src={img1} alt="" height={64} width={64} /> <p className='ml-sm'>Development</p></div>
          <div>Jan 2, 2024</div>
          <div className='flex items-center gap-xs'>
              <p><Edit size={28} strokeWidth={2} /></p>
              <p><Trash size={28} strokeWidth={2} /></p>
            </div>
        </div> */}

      </div>
    </div>
  );
};

export default Categories;
