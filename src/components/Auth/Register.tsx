import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import Auththen from "./Auth";

const Register = () => {
    const [visiblePass, setVisible] = useState(false);

    const onVisible = () => {
        setVisible(!visiblePass);
    };

    return (
        <Auththen secondTitle='Create an account to easily shopping' title='Create Your Account'>
            <div className="mt-12">
                <label htmlFor="name" className="block mb-4">
                    Name
                </label>
                <input
                    className="border p-2 border-border-auth w-full"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter name"
                />
                <label htmlFor="email" className="block mb-4 mt-7">
                    Email
                </label>
                <input
                    className="border p-2 border-border-auth w-full"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter mail"
                />
                <label htmlFor="password" className="block mt-7 mb-4">
                    Password
                </label>
                <div className=" relative">
                    <input
                        className="border relative p-2  border-border-auth w-full"
                        type={visiblePass ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Enter password"
                    />
                    {visiblePass && (
                        <BsEye
                            onClick={onVisible}
                            size={20}
                            className="absolute right-4 cursor-pointer top-2/4 -translate-y-1/2"
                        />
                    )}
                    {!visiblePass && (
                        <BsEyeSlash
                            onClick={onVisible}
                            size={20}
                            className="absolute right-4 top-2/4 cursor-pointer -translate-y-1/2"
                        />
                    )}
                </div>
                <div className="flex flex-col items-center gap-8">
                    <button className="text-white mt-7 w-full text-center p-3 bg-title hover:bg-hover-bg">
                        Sign Up
                    </button>
                    <span className="flex gap-2">
                        <p>Already have an account</p>
                        <Link to='/auth/login' className=" font-bold underline" >
                            Sign In
                        </Link>
                    </span>
                </div>
            </div>
        </Auththen>
    )
}
export default Register