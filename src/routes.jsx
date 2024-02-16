import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Page404 from "./pages/Page404"
import PagePlacar from "./pages/PagePlacar"
import CreateUser from "./pages/CreateUser"
import Users from "./pages/Users"
import User from "./pages/User"
import UpdateUser from "./pages/UpdateUser"
import DeleteUser from "./pages/DeleteUser"


function AppRouters() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/placar" element={<PagePlacar />}></Route>
                <Route path="/users" element={<Users />}></Route>
                <Route path="/user/new" element={<CreateUser />}></Route>
                <Route path="/user/:id" element={<User />}></Route>
                <Route path="/user/new" element={<CreateUser />}></Route>
                <Route path="/users" element={<Users />}></Route>
                <Route path="/user/:id/update" element={<UpdateUser />}></Route>
                <Route path="/user/:id/delete" element={<DeleteUser />}></Route>


                <Route path="*" element={<Page404 />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouters