import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Photograph/Login/Login";
import Signup from "./Pages/Photograph/Signup/Signup";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Registration}/>
        <Route path="/photographer/login" Component={Login} />
        <Route path="/photographer/signup" Component={Signup} />
        
      </Routes>
    </Router>
  )
}

export default App;