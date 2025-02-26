/*import Button from "./components/Button";

import { BsCalendarFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import ListGroup from "./components/ListGroup";
import WelcomeMessage from "./components/WelcomeMessage";
import ImageComponent from "./components/ImageComponent";
import UserForm from "./components/UserForm";
import Counter from "./components/StateComponent";
import LoginPage from "./components/LoginPage";*/
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import MovieList from "./components/MovieList";
import RegisterMovie from "./components/RegisterMovie";

function App() {
  //const onClick = () => console.log("Clicked");
  /*return (
    <div>
      <WelcomeMessage name="Håkan"></WelcomeMessage>
      <BsCalendarFill color="blue" size="25"></BsCalendarFill>
      <AiFillHeart color="purple" size="25"></AiFillHeart>
      <Button color="danger" onClick={onClick}>
        <span>Hello world</span>
      </Button>
      <ImageComponent></ImageComponent>
      <ListGroup items={["Stockholm", "Paris", "New York"]}></ListGroup>
      <UserForm/>
      <Counter />
    </div>
  );*/
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/register-movie" element={<RegisterMovie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
