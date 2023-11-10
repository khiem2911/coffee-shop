import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState,useRef } from "react";
import Auththen from "./Auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [visiblePass, setVisible] = useState(false);
    const inputEmail =  useRef<HTMLInputElement>(null);
    const inputPass =  useRef<HTMLInputElement>(null);
    const [validEmail,setValidEmail] = useState(true)
    const [validName,setValidName] = useState(true)
    const inputName = useRef<HTMLInputElement>(null);
    const [validPassword,setValidPassword] = useState(true)
    const navigate = useNavigate()



    const onVisible = () => {
        setVisible(!visiblePass);
    };

    const onHandlerSignUp = async () =>{
        if(!validEmail || !validPassword || inputEmail.current?.value === '' || inputPass.current?.value === '' || inputName.current?.value === '' ){
            return alert('Vui lòng điền đầy đủ vào các input')
        }
        try {
            const userCredential  =  await firebase.auth().createUserWithEmailAndPassword(inputEmail.current!.value, inputPass.current!.value);
            await userCredential.user?.updateProfile({
                displayName: inputName.current!.value, 
              });
            alert('Đăng ký thành công!');
            navigate('/')
          } catch (error:any) {
            alert('Đăng ký thất bại: ' + error.message);
          }
    }

    const onCheckInputEmail = () =>{
            const checked = inputEmail.current?.value.includes('@')
            setValidEmail(checked!)
    }

    const oncheckInputPass = () =>{
            const checked = inputPass.current!.value.length>8
            setValidPassword(checked)
    }

    const onCheckInputName = () =>{
            const checked = inputName.current!.value.length>8
            setValidName(checked)
    }

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
                    onBlur={onCheckInputName}
                    id="name"
                    placeholder="Enter name"
                    ref={inputName}
                />
                {!validName && <p className='text-red-500'>Name length at least 8</p>}
                <label  htmlFor="email" className="block mb-4 mt-7">
                    Email
                </label>
                <input
                    onBlur={onCheckInputEmail}
                    className="border p-2 border-border-auth w-full"
                    type="email"
                    name="email"
                    ref={inputEmail}
                    id="email"
                    placeholder="Enter mail"
                />
                {!validEmail && <p className='text-red-500'>Email should contain @</p>}
                <label htmlFor="password" className="block mt-7 mb-4">
                    Password
                </label>
                <div className=" relative">
                    <input
                        onBlur={oncheckInputPass}
                        className="border relative p-2  border-border-auth w-full"
                        type={visiblePass ? "text" : "password"}
                        ref={inputPass}
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
                {!validPassword && <p className='text-red-500'>Password length at least 8</p>}
                <div className="flex flex-col items-center gap-8">
                    <button onClick={onHandlerSignUp} className="text-white mt-7 w-full text-center p-3 bg-title hover:bg-hover-bg">
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