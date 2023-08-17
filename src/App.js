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
function App() {
 const [theme, setTheme] = useDarkMode();

 const Themetogler = () => {
   theme === "light" ? setTheme("dark") : setTheme("light");
 };
  
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Routes>
        <Route path="/" element={<Home Themetogler={Themetogler} />} />
        <Route
          path="/profile"
          element={<Profile Themetogler={Themetogler} />}
        />
        <Route path="/groups" element={<Groups Themetogler={Themetogler} />} />
        <Route
          path="/settings"
          element={<Settings Themetogler={Themetogler} />}
        />
        <Route
          path="/Contacts"
          element={<Contact Themetogler={Themetogler} />}
        />
        <Route
          path="/chatinfo"
          element={<Main Themetogler={Themetogler} />}
        />
        <Route path="/signup"  element={<SignUp />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
