import "./App.css";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Root from "./root";
import Home from "./components/home/Home";
import Menu,{loader as getMenu} from "./components/menu/Menu";
import Detail from "./components/menu/Detail";
import MenuRoot from "./root/MenuRoot";
import Login from "./components/Auth/Login";
import Auth from "./components/Auth";

function App() {

  const router = createBrowserRouter([
    {path:'/',element : <Root/>,children:[
      {index:true,element:<Home/>},
      {path:'menu',element:<MenuRoot/>,loader:getMenu,id:'getMenu',children:[
        {index:true,element:<Menu/>},
        {path:'detail/:name',element:<Detail/>}
      ]}
    ]},
    {path:'/auth',element:<Auth/>,children:[
      {path:'login',element:<Login/>}
    ]}
  ])

  return <RouterProvider router={router}/>
}

export default App;
