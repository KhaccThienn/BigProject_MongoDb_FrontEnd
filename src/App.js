import { useSelector } from "react-redux";
import { selectUserData } from "./redux/reducers/user";
import { Route, Routes } from "react-router-dom";
import { adminRoutes, clientRoutes, publicRoutes } from "./routes/Routes";
import Login from "./components/login/Login";

function App() {
  const userData = useSelector(selectUserData);
  console.log(userData);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {
        (!userData.user.role_id) && publicRoutes.map((route, i) => {
          return (
            <Route
              exact
              key={i}
              path={route.path}
              element={route.element}
            />
          )

        })
      }
      {
        (userData.user.role_id === 1) && adminRoutes.map((route, i) => {
          return (
            <Route
              exact
              key={i}
              path={route.path}
              element={route.element}
            />
          )

        })
      }
      {
        (userData.user.role_id === 0) && clientRoutes.map((route, i) => {
          return (
            <Route
              exact
              key={i}
              path={route.path}
              element={route.element}
            />
          )

        })
      }
    </Routes>
  );
}

export default App;
