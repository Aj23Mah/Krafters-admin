import { Route, Routes } from "react-router"
import Dashboard from "../pages/Dashboard"
import Courses from "../pages/Courses"
import NewCourse from "../../partials/NewCourse"
import Categories from "../pages/Categories"
import NewCategory from "../../partials/NewCategory"
import EditCategory from "../../partials/EditCategory"
import Student from "../pages/Student"
import AddStudent from "../../partials/AddStudent"
import Teachers from "../pages/Teachers"
import EditStudent from "../../partials/EditStudent"
import Setting from "../pages/Setting"
import Profile from "../pages/Profile"
import EditProfile from "../../partials/EditProfile"
import AddAdmin from "../../partials/AddAdmin"
import EditAdmin from "../../partials/EditAdmin"
import FAQ from "../pages/FAQ"
import UserMessage from "../pages/UserMessage"
// import AddTeacher from "../../partials/AddTeacher"

export const DashboardRoutes  =()=>{
    return <Routes>
        <Route path="/categories" element={<Categories/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/new-course" element={<NewCourse />} />
        <Route path="/new-category" element={<NewCategory />} />
        <Route path="/edit-categoy" element={<EditCategory />} />
        <Route path="/student" element={<Student />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/edit-student" element={<EditStudent />} />
        <Route path="/teachers" element={<Teachers />} />
        {/* <Route path="/add-teacher" element={<AddTeacher />} /> */}
        <Route path="/setting" element={<Setting />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/add-admin" element={<AddAdmin />} />
        <Route path="/edit-admin" element={<EditAdmin />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/message" element={<UserMessage />} />
        <Route path="*" element={<Dashboard/>} />
    </Routes>
}