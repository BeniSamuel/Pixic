import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Client/Login/Login";
import Signup from "./Pages/Client/Signup/Signup";
import Location from "./Pages/Client/Location/Location";
import LoginPhoto from "./Pages/Photographer/Login/LoginPhoto"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Registration}/>
        <Route path="/client/login" Component={Login} />
        <Route path="/client/signup" Component={Signup} />
        <Route path="/client/location" Component={Location} />
        <Route path="/photographer/login" Component={LoginPhoto} />
      </Routes>
    </Router>
  )
}

export default App;