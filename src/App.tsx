import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Pages/Registration/Registration";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Registration}/>
      </Routes>
    </Router>
  )
}

export default App;