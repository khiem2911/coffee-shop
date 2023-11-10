import UpCommingEvents from "./UpCommingEvents";
import EventsClosed from "./EventsClosed";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import {useEffect} from 'react'
import { useOutletContext } from "react-router-dom";

const Home = () => {

 

  const {onSetUser} = useOutletContext<{ onSetUser: (value:{}) => {} }>();
  
  


  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        onSetUser(user)
      }else{
        onSetUser(null!)
      }
    });
    return () => unsubscribe();
  }, [onSetUser]);

  return (
    <div className="px-20">
      <UpCommingEvents/>
      <EventsClosed/>
    </div>
  );
};
export default Home;
