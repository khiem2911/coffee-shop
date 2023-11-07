import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import {useState} from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import {useNavigate} from 'react-router-dom'
const Root = () => {

  const [user,setUser] = useState({})
  const navigate = useNavigate()


  const onSetUser = (value:{}) =>{
      setUser(value)
  }

  const onLogOut = () =>{
    firebase.auth().signOut().then(() => {
      setUser(null!)
      navigate('/auth/login')
    }).catch((error) => {
      alert(error.message)
    });
  }

  return (
    <div className='relative m'>
      <header>
        <MainNavigation logOut={onLogOut} user={user} />
      </header>
      <main>
        <Outlet context={{onSetUser}} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Root;
