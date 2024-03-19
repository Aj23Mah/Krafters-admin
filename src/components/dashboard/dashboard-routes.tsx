import { Route, Routes } from "react-router"
import Dashboard from "../pages/Dashboard"
import Courses from "../pages/Courses"
import Help from "../pages/Help"
import NewCourse from "../../partials/NewCourse"
import Categories from "../pages/Categories"
import NewCategory from "../../partials/NewCategory"
import EditCategory from "../../partials/EditCategory"
import Student from "../pages/Student"
import AddStudent from "../../partials/AddStudent"
import EditStudent from "../../partials/EditStudent"
import Teachers from "../pages/Teachers"
import NewTeacher from "../../partials/NewTeacher"
import EditTeacher from "../../partials/EditTeacher"
// import AddTeacher from "../../partials/AddTeacher"
// import AddTeacher from "../../partials/AddTeacher"

export const DashboardRoutes  =()=>{
    return <Routes>
        <Route path="/categories" element={<Categories/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/help" element={<Help />} />
        <Route path="/new-course" element={<NewCourse />} />
        <Route path="/new-category" element={<NewCategory />} />
        <Route path="/edit-categoy" element={<EditCategory />} />
        <Route path="/student" element={<Student />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/edit-student" element={<EditStudent />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/new-teacher" element={<NewTeacher />} />
        <Route path="/edit-teacher" element={<EditTeacher />} />
        <Route path="*" element={<Dashboard/>} />
    </Routes>
}