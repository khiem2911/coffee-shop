import "./App.css";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Root from "./root";
import Home from "./components/home/Home";
import Menu,{loader as getMenu} from "./components/menu/Menu";
import Detail from "./components/menu/Detail";
import MenuRoot from "./root/MenuRoot";
import Login from "./components/Auth/Login";
import Auth from "./components/Auth";
import Register from "./components/Auth/Register";
import Cart from "./components/home/Cart";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import { firebaseConfig } from "./firebase";

function App() {

  firebase.initializeApp(firebaseConfig)

  const router = createBrowserRouter([
    {path:'cart',element:<Cart/>},
    {path:'/',element : <Root/>,children:[
      {index:true,element:<Home/>},
      {path:'menu',element:<MenuRoot/>,loader:getMenu,id:'getMenu',children:[
        {index:true,element:<Menu/>},
        {path:'detail/:name',element:<Detail/>}
      ]}
    ]},
    {path:'/auth',element:<Auth/>,children:[
      {path:'login',element:<Login/>},
      {path:'register',element:<Register/>}
    ]}
  ])

  return <RouterProvider router={router}/>
}

export default App;
