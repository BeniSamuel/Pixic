import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Client/Login/Login";
import Signup from "./Pages/Client/Signup/Signup";
import Location from "./Pages/Client/Location/Location";
import LoginPhoto from "./Pages/Photographer/Login/LoginPhoto";
import SignupPhoto from "./Pages/Photographer/Signup/SignupPhoto";
import Experience from "./Pages/Photographer/Experience/Experience.tsx";
import Description from "./Pages/Photographer/Description/Description.tsx";
import NotFound from "./Pages/NotFound/NotFound.tsx";
import Home from "./Pages/Photographer/Home/Home.tsx";
import Chat from "./Pages/Photographer/Chat/Chat.tsx";
import Profile from "./Pages/Photographer/Profile/Profile.tsx";
import Calendar from "./Pages/Photographer/Calendar/Calendar.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Registration} />
        <Route path="/client/login" Component={Login} />
        <Route path="/client/signup" Component={Signup} />
        <Route path="/client/location" Component={Location} />
        <Route path="/photographer/login" Component={LoginPhoto} />
        <Route path="/photographer/signup" Component={SignupPhoto} />
        <Route
          path="/photographer/location-experience"
          Component={Experience}
        />
        <Route path="/photographer/description" Component={Description} />
        <Route path="/photographer/home" Component={Home} />
        <Route path="/photographer/chat" Component={Chat} />
        <Route path="/photographer/profile" Component={Profile} />
        <Route path="/photographer/calender" Component={Calendar} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
  );
};

export default App;
