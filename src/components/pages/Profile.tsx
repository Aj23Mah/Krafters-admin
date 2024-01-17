
const Profile = () => {
  return (
    <div className="p-md">
        <div className="flex items-center justify-between mb-md">
            <div className="font-semibold lg:text-4xl md:text-xl text-md">
                Profile
            </div>
            <a href="/edit" className="text-blue-900 bg-gray-300 hover:text-white hover:bg-blue-900 border-none text-md font-bold py-xs px-sm  cursor-pointer rounded-lg no-underline">
                Edit Profile
            </a>
        </div>
        <div className="flex items-center justify-between w-1/3 mb-md">
            <div className="rounded-full overflow-hidden">
                <img src="https://cdn.vectorstock.com/i/preview-1x/17/61/male-avatar-profile-picture-vector-10211761.jpg" alt="profile" />
            </div>
            <div>
                <div className="font-bold text-3xl mb-xs">Kylee Danford</div>
                <button className="text-red-600 bg-red-300 hover:text-white hover:bg-red-300 border-none text-md font-bold py-xs px-sm  cursor-pointer rounded-3xl">ADMIN</button>
            </div>
        </div>
            <div className="flex flex-col">
            <div className="text-gray-400 mb-sm">BASIC DETAILS</div>
            <div>
                <div className="flex mb-sm">
                    <div className="text-md font-bold w-[200px]">Email:</div>
                    <div className="text-md font-bold">kyleedanfrod11@gmail.com</div>
                </div>
                <div className="flex mb-sm">
                    <div className="text-md font-bold w-[200px]">Mobile Number:</div>
                    <div className="text-md font-bold">9865684564</div>
                </div>
                <div className="flex mb-sm">
                    <div className="text-md font-bold w-[200px]">Date of Birth:</div>
                    <div className="text-md font-bold">January 12, 1998</div>
                </div>
                <div className="flex mb-sm">
                    <div className="text-md font-bold w-[200px]">Gender:</div>
                    <div className="text-md font-bold">Female</div>
                </div>
                <div className="flex mb-sm">
                    <div className="text-md font-bold w-[200px]">Joining Date:</div>
                    <div className="text-md font-bold">February 14, 2024</div>
                </div>
                <div className="flex mb-sm">
                    <div className="text-md font-bold w-[200px]">Address:</div>
                    <div className="text-md font-bold">Chyasal Chowk Lalitpur, Bagmati</div>
                </div>
                <div className="flex mb-sm">
                    <div className="text-md font-bold w-[200px]">Qualification:</div>
                    <div className="text-md font-bold">Bachelors</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Profile;
