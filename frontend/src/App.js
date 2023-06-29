import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";


function App() {
  return (
    <>
      <Router>

        <div className="container"></div>
        <Header />
          <Routes>
            <Route path = '/' element = {<Home/>}></Route>
            <Route path="/login" element = {<Login/>}></Route>
            <Route path="/register" element = {<Register />}></Route>

          </Routes>



      </Router>

    </>

  );
}

export default App;
