import { Plus } from 'tabler-icons-react';

const FAQ = () => {
  return (
    <div className="m-md">
      <div className="text-4xl font-bold mb-lg">
        Frequently Asked Questions
      </div>
      <div className="p-sm border border-solid border-slate-200 mb-md">
        <span className="text-lg font-bold">Where is your office located?</span>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
      </div>
      <button className="py-xs px-sm border-none cursor-pointer flex items-center">
        <Plus size={28} className='pr-xs'/>
        Add
      </button>
    </div>
  );
};

export default FAQ;
