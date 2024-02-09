import { Routes, Route } from "react-router-dom";
import Post from "./pages/post/Post";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Ui from "./pages/ui/Ui";

const App = () => (
  <div>
    <Routes>
      <Route path={"/"} element={<Post />} />

      <Route path={"/login"} element={<Login />} />
      <Route path={"/registration"} element={<Registration />} />
      <Route path={"/ui"} element={<Ui />} />
    </Routes>
  </div>
);

export default App;
