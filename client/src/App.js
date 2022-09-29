import Home from "./pages/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useGlobalContext } from "./context";
import SinglePostPage from "./pages/SinglePostPage";
import About from "./pages/About";

const App = () => {
  const {user,successRegister} = useGlobalContext()
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}/ >
      <Route path="/login" element={user ? <Home/> : <Login/>}/ >
      <Route path="/register" element={user ? <Home/> : <Register/>}/ >
      <Route path="/posts/:postId" element={<SinglePostPage/>}/ >
      <Route path="/about" element={<About/>}/ >


    </Routes>
  </BrowserRouter>
  )
  
}

export default App;
