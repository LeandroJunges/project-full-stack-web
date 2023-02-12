import { Route, Routes, Navigate } from "react-router-dom"
import ProtectRoute from "../components/ProtectRoute"
import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"
import SignUp from "../pages/Signup"

const MainRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route element={<ProtectRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<Navigate replace to={"/"} />} />
        </Routes>
    )

}

export default MainRoutes