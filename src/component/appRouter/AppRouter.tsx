import { Routes, Route, Navigate } from "react-router-dom";

import { authRoutes, publicRoutes } from "../../routes";
import { useAppSelector } from "../../shared/hook/redux";
import { getIsAuth } from "../../store/selectors";

const AppRouter = () => {
  const isAuth = useAppSelector(getIsAuth);

  return (
    <Routes>
      {isAuth &&
        authRoutes.map((item) => (
          <Route
            key={item.path}
            path={item.path}
            element={<item.component />}
          />
        ))}

      {!isAuth &&
        publicRoutes.map((item) => (
          <Route
            key={item.path}
            path={item.path}
            element={<item.component />}
          />
        ))}

      <Route path={"*"} element={<Navigate to={isAuth ? "/" : "/login"} />} />
    </Routes>
  );
};

export default AppRouter;
