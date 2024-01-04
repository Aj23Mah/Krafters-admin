import { Route, Routes } from "react-router"
import Dashboard from "../pages/Dashboard"
import Courses from "../pages/Courses"
import Help from "../pages/Help"
import Users from "../pages/Users"
import Contact from "../pages/Contact"
import NewCourse from "../../partials/NewCourse"
import Categories from "../pages/Categories"
import NewCategory from "../../partials/NewCategory"

export const DashboardRoutes  =()=>{
    return <Routes>
        <Route path="/categories" element={<Categories/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/user" element={<Users/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/help" element={<Help />} />
        <Route path="/new-course" element={<NewCourse />} />
        <Route path="/new-category" element={<NewCategory />} />
        <Route path="*" element={<Dashboard/>} />
    </Routes>
}