import React, {useEffect, useState} from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IoMdArrowDropright } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [UserData, setUserData] = useState({
    email: "",
    password: "",
  });

   const handleuserchange = (e) => {
    const { value, name } = e.target;

    console.log(value, name);
    setUserData({
      ...UserData,
      [name]: value,
    });
  };
  return (
    <div className="w-[80%] md:w-[30vw] bg-[#1c1e2c] h-fit text-white font-sans px-3 md:px-14 py-6 rounded-lg">
      <div className="flex justify-center items-center font-bold text-xl gap-[2px] mb-6">
        <span>
          {" "}
          <img
            src="src/assets/zoomlogo.png"
            alt="zoom"
            className="h-[23px] w-[23px] "
          />
        </span>{" "}
        YOOM
      </div>
      <h2 className=" text-xl md:text-lg font-extrabold text-center mb-3">
        Login Your Account
      </h2>

      <div className="flex justify-between w-full gap-3 mb-4">
        <div className="w-full bg-[#1c1e2c] border border-[#1e1e1e] drop-shadow-xl rounded-lg  flex items-center justify-center py-3 cursor-pointer">
          <FaGithub />
        </div>
        <div className="w-full bg-[#1c1e2c] border border-[#1e1e1e] drop-shadow-xl rounded-lg flex items-center justify-center py-3 cursor-pointer">
          <FcGoogle />
        </div>{" "}
        <div className="w-full bg-[#1c1e2c] border border-[#1e1e1e] drop-shadow-xl rounded-lg flex items-center justify-center py-3 cursor-pointer">
          <FaLinkedin className="fill-blue-700" />
        </div>
      </div>

      <div className="flex mt-10">
        <div className="bg-gray-200 h-[2px] w-full"></div>{" "}
        <span className="relative top-[-13px] mx-1">Or</span>{" "}
        <div className="bg-gray-200 h-[2px] w-full"></div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="font-mono text-sm  font-semibold">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            className="font-sans text-sm bg-[#252a41] border-none px-2 h-fit  py-[6px]"
            onChange={handleuserchange}
            value={UserData.email}


          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="font-mono text-sm font-semibold">
            Password
          </Label>
          <Input
            type="password"
            id="password"
            className="font-sans text-sm bg-[#252a41] border-none px-2 h-fit  py-[6px] "
            onChange={handleuserchange}
            value={UserData.password}


          />
        </div>
        <Button className="w-full flex items-center justify-center gap-2">
          Continue <IoMdArrowDropright className="h-fit w-fit p-0 m-0" />
        </Button>
      </div>

      <h2 className="text-center text-sm my-5 font-mono">
        Dont have a Account?{" "}
        <Link to={"/sign-up"} className="text-blue-600">
          Sign Up{" "}
        </Link>
      </h2>
    </div>
  );
};

export default SignIn;
