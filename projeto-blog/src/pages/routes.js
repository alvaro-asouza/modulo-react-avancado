import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Posts } from "./posts"
import { Post } from "../pages/post"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Posts />} />
                <Route exact path="/post/:id" element={<Post />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }