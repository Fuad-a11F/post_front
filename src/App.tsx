import { Routes, Route } from "react-router-dom";

import Post from "./pages/post/Post";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Container from "./component/container/Container";
import PostDetail from "./pages/postDetail/PostDetail";

const App = () => (
  <Container>
    <Routes>
      <Route path={"/"} element={<Post />} />
      <Route path={"/:id"} element={<PostDetail />} />

      <Route path={"/login"} element={<Login />} />
      <Route path={"/registration"} element={<Registration />} />
    </Routes>
  </Container>
);

export default App;
