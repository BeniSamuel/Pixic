import React from "react";

type UserInform = {
  name: string;
  email: string;
};

const DashProfile: React.FC = () => {
  const user: UserInform = {
    name: "John Doe",
    email: "johndoe@gmail.com",
  };

  return (
    <div className=" flex flex-row bg-[#0F0F0F] rounded-xl">
      <div className=" flex flex-col justify-center items-start w-1/2 p-4 gap-4">
        <div>
          <div className=" font-poppins text-white">
            Hello, <span className=" font-semibold">{user.name}</span>
          </div>
        </div>
        <div>
          <p className=" font-poppins text-white text-sm">
            Customize your calendar to remember <br />
            your appointment with Clients
          </p>
        </div>
        <div className=" font-poppins text-white underline cursor-pointer">
          Customize here!
        </div>
      </div>
      <div>
        <img />
      </div>
    </div>
  );
};

export default DashProfile;
