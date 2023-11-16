import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useNavigate } from "react-router-dom";
const Root = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [backDrop,setBackDrop] = useState(false)

  const onSetUser = (value: {}) => {
    setUser(value);
  };

  useEffect(()=>{
    const checkUser = firebase.auth().currentUser
    setUser(checkUser!)
  })

  const onLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null!);
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const onBackDrop = (value:boolean) =>{
      setBackDrop(value)
  }


  return (
    <>
    {backDrop && <div className=' fixed block h-screen z-40 w-9/12 bg-black opacity-50   top-0 left-0' />}
      <header className='relative'>
        <MainNavigation backDrop={onBackDrop} logOut={onLogOut} user={user} />
      </header>
      <main>
        <Outlet context={{ onSetUser }} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default Root;
