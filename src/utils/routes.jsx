import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/layout/home/Home";
import Layout from "../pages/layout/layout";
import ContactMe from "../pages/layout/contact-me/ContactMe";
import About from "../pages/layout/about/About";
import Projects from "../pages/layout/projects/Projects";
import Resume from "../pages/layout/resume/Resume";

export const router=createBrowserRouter([
{
    path:"/",element: <Layout />,children:[
        {index:true,element:<Home/>},
        {path:"About",element:<About/>},
        {path:"Projects",element:<Projects/>},
        {path:"Resume",element:<Resume/>},
        {path:"Contact-me",element:<ContactMe/>},
    ]}
])