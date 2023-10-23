import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/askQuestion.css";
import "../styles/questionList.css";
import "../styles/robotoFont.css";

const AskQuestion = ({ onQuestionAdded }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleAskQuestion = () => {
    const newQuestion = { title, body };

    try {
      const questions = JSON.parse(localStorage.getItem("questions")) || [];

      questions.push(newQuestion);

      localStorage.setItem("questions", JSON.stringify(questions));

      onQuestionAdded(newQuestion);

      setTitle("");
      setBody("");
    } catch (error) {
      console.error("An error occurred while saving the question.");
    }
  };

  return (
    <div className="askQuestion">
      <input
        type="text"
        placeholder="Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Type your question..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={handleAskQuestion}>Ask</button>
    </div>
  );
};

AskQuestion.propTypes = {
  onQuestionAdded: PropTypes.func,
};

export default AskQuestion;
