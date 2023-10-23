import { Routes, Route } from "react-router-dom";
import QuestionList from "./components/Forum/QuestionList";
import AskQuestion from "./components/Forum/AskQuestion";
import AnswerForm from "./components/Forum/AnswerForm";
import Contacts from "./components/Shared/Contacts";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Home from "./components/Shared/Home";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" exact component={QuestionList} />
      <Route path="/questionList" exact component={QuestionList} />
      <Route path="/ask" component={AskQuestion} />
      <Route path="/answer" component={AnswerForm} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<UserProfile />} />
    </Routes>
  );
}

export default App;
