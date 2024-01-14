import { Plus } from 'tabler-icons-react';
import { useNavigate } from 'react-router';
import { Edit } from 'tabler-icons-react';
import { Trash } from 'tabler-icons-react';
import { Search } from 'tabler-icons-react';
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import img4 from '../../assets/images/img4.png'
import img5 from '../../assets/images/img5.png'

const Categories = () => {
  const navigate = useNavigate();
  const CategoryData = [
    {
      imgURL: img1,
      name: "Development",
      date: "Jan 02, 2024",
    },
    {
      imgURL: img2,
      name: "Design",
      date: "Dec 15, 2023",
    },
    {
      imgURL: img3,
      name: "Finance",
      date: "oct 01, 2024",
    },
    {
      imgURL: img4,
      name: "Business",
      date: "Nov 01, 2023",
    },
    {
      imgURL: img5,
      name: "Marketing",
      date: "Jan 01, 2023",
    },
  ]
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
            <div className="md:text-base text-xs font-semibold sm:block hidden">Add New Category</div>
            <div className="">
              <Plus size={26} strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white border-solid border p-sm">
        <table className="w-full p-sm border-collapse">
          <tr className="text-lg font-semibold border-slate-200">
            <td>Name</td>
            <td>Created At</td>
            <td>Action</td>
          </tr>
          {CategoryData.map((v, key) => (
            <tr key={key} className='text-md even:bg-gray-100 odd:bg-white border-slate-200'>
            <td className='flex items-center gap-sm'><p><img src={v.imgURL} alt="" height={64} width={64} /></p> <p>{v.name}</p></td>
            <td>{v.date}</td>
            <td className='flex items-center gap-xs'>
              <p onClick={()=>navigate('/edit-categoy')}><Edit size={28} strokeWidth={2} /></p>
              <p><Trash size={28} strokeWidth={2} /></p>
            </td>
          </tr>
          ))}
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
