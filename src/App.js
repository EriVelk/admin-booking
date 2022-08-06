import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import NewHotel from "./pages/newHotel/NewHotel";
import NewRoom from "./pages/newRoom/NewRoom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";

function App() {

  const {darkMode} = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark":"app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login/>}/>
            <Route
              index
              element={
                <Home/>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <List columns={3}/>
                }
              />
              <Route
                path="new"
                element={<New/>}
              />
            </Route>
            <Route path="hotels">
                <Route
                  index
                  element={<List columns={3}/>}
                />
                <Route
                  path=":productId"
                  element={<Single/>}
                />
                <Route
                  path="new"
                  element={<NewHotel/>}
                />
            </Route>
            <Route path="rooms">
                <Route
                  index
                  element={<List columns={3}/>}
                />
                <Route
                  path="productId"
                  element={
                    <Single/>
                  }
                />
                <Route
                  path="new"
                  element={
                    <NewRoom/>
                  }
                />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
