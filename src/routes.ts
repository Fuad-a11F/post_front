import Post from "./pages/post/Post";
import PostDetail from "./pages/postDetail/PostDetail";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import { LOGIN, POST, POST_DETAIL, REGISTRATION } from "./shared/const/routes";

export const authRoutes = [
  {
    path: POST,
    component: Post,
  },
  {
    path: POST_DETAIL,
    component: PostDetail,
  },
];

export const publicRoutes = [
  {
    path: LOGIN,
    component: Login,
  },
  {
    path: REGISTRATION,
    component: Registration,
  },
];
