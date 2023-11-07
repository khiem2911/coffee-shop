
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState,useRef } from "react";
import Auththen from "./Auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [visiblePass, setVisible] = useState(false);
  const inputEmail =  useRef<HTMLInputElement>(null);
  const inputPass =  useRef<HTMLInputElement>(null);
  const navigate = useNavigate()

  const onVisible = () => {
    setVisible(!visiblePass);
  };

  const onHandlerLogIn = async () =>{
    try {
      await firebase.auth().signInWithEmailAndPassword(inputEmail.current!.value, inputPass.current!.value);
      alert('Login successful!');
      navigate('/')
    } catch (error:any) {
      alert('Login failed: ' + error.message);
    }
  }

  return (
    <Auththen secondTitle='Enter your credentials to access your account' title='Welcome Back'>
      <div className="mt-12">
        <label htmlFor="email" className="block mb-4">
          Email
        </label>
        <input
          ref={inputEmail}
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
            ref={inputPass}
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
        <div className="flex mt-6 justify-between items-center">
          <span className="flex gap-2">
            <input className="w-5" type="checkbox" />
            <p>Remember Me</p>
          </span>
          <a className=" font-bold underline text-blue-500" href="#">
            Forgot Password?
          </a>
        </div>
        <div className="flex flex-col items-center gap-8">
          <button onClick={onHandlerLogIn} className="text-white mt-7 w-full text-center p-3 bg-title hover:bg-hover-bg">
            Sign in
          </button>
          <span className="flex gap-2">
            <p>Don't have an account?</p>
            <Link to='/auth/register' className=" font-bold underline" >
              Create a acccount
            </Link>
          </span>
        </div>
      </div>
    </Auththen>

  );
};
export default Login;
