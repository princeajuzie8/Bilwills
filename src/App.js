import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../src/Components/Theme/theme";
import { useDarkMode } from "../src/Components/Theme/Usedarktheme";
import Profile from "./Pages/Profile";
import Groups from "./Pages/Groups";
import Settings from "./settings/Settings";
import Contact from "./Pages/Contact";
import Main from "./Chats/Main";
import SignUp from "./Auth/Signup";
import Login from "./Auth/Login";
import Recover from "./Auth/Recover";
import ConfirmPassword from "./Auth/ConfirmPassword";
import Proctedroute from "./proctedRoute/Proctedroute";
import NoInternet from "./utils/NoInternet";
import GenLoading from "./utils/GenLoading";
function App() {
  const [theme, setTheme] = useDarkMode();

  const Themetogler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Routes>
        <Route
          path="/"
          element={
            <Proctedroute>
              <Home Themetogler={Themetogler} theme={theme} />
            </Proctedroute>
          }
        />
        <Route
          path="/profile"
          element={
            <Proctedroute>
              <Profile Themetogler={Themetogler} theme={theme} />
            </Proctedroute>
          }
        />
        <Route
          path="/groups"
          element={
            <Proctedroute>
              <Groups Themetogler={Themetogler} theme={theme} />
            </Proctedroute>
          }
        />
        <Route
          path="/settings"
          element={
            <Proctedroute>
              <Settings Themetogler={Themetogler} theme={theme} />
            </Proctedroute>
          }
        />
        <Route
          path="/Contacts"
          element={
            <Proctedroute>
              <Contact Themetogler={Themetogler} theme={theme} />
            </Proctedroute>
          }
        />
        <Route
          path="/chatinfo"
          element={
            <Proctedroute>
              <Main Themetogler={Themetogler} theme={theme} />
            </Proctedroute>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/network" element={<GenLoading />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/recover" element={<Recover />} />
        <Route path="/lorem" element={<ConfirmPassword />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
