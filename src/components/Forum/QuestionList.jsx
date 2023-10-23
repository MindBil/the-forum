import { useState, useEffect } from "react";
import EditQuestion from "./EditQuestion";
import AnswerForm from "./AnswerForm";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import "../styles/dialogIcons.css";
import "../styles/questionList.css";
import "../styles/answerBlock.css";
import "../styles/dialogBlock.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [editingAnswerIndex, setEditingAnswerIndex] = useState(null);

  useEffect(() => {
    const fetchQuestions = () => {
      const storedQuestions =
        JSON.parse(localStorage.getItem("questions")) || [];
      setQuestions(storedQuestions);

      const initialAnswers = JSON.parse(localStorage.getItem("answers")) || [];
      setAnswers(initialAnswers);
    };

    fetchQuestions();
  }, []);

  const handleEditQuestion = (index) => {
    setEditingIndex(index);
  };

  const handleLikeDislikeQuestion = (index, action) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][action]++;
    setQuestions(updatedQuestions);

    localStorage.setItem("questions", JSON.stringify(updatedQuestions));
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);

    localStorage.setItem("questions", JSON.stringify(updatedQuestions));
  };

  const handleSaveQuestion = (editedQuestion, index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = editedQuestion;
    setQuestions(updatedQuestions);
    setEditingIndex(-1);

    localStorage.setItem("questions", JSON.stringify(updatedQuestions));
  };

  const handleCancelEdit = () => {
    setEditingIndex(-1);
  };

  const handleAddAnswer = (index) => {
    setSelectedQuestion(index);
  };

  const handleSaveAnswer = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = updatedAnswers[index] || [];
    updatedAnswers[index].push({
      text: newAnswer,
      avatarUrl: "avatar-url-here",
      likes: 0,
      dislikes: 0,
    });
    setAnswers(updatedAnswers);
    setSelectedQuestion(null);
    setNewAnswer("");

    localStorage.setItem("answers", JSON.stringify(updatedAnswers));
  };

  const handleLikeDislikeAnswer = (questionIndex, answerIndex, action) => {
    const updatedAnswers = [...answers];
    if (action === "like") {
      updatedAnswers[questionIndex][answerIndex].likes++;
    } else if (action === "dislike") {
      updatedAnswers[questionIndex][answerIndex].dislikes++;
    }
    setAnswers(updatedAnswers);

    localStorage.setItem("answers", JSON.stringify(updatedAnswers));
  };

  const handleEditAnswer = (questionIndex, answerIndex) => {
    setEditingAnswerIndex({ questionIndex, answerIndex });
  };

  const handleSaveEditedAnswer = (questionIndex, answerIndex, editedAnswer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex][answerIndex] = editedAnswer;
    setAnswers(updatedAnswers);
    setEditingAnswerIndex(null);

    localStorage.setItem("answers", JSON.stringify(updatedAnswers));
  };

  const handleCancelEditAnswer = () => {
    setEditingAnswerIndex(null);
  };

  const handleDeleteAnswer = (questionIndex, answerIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex].splice(answerIndex, 1);
    setAnswers(updatedAnswers);

    localStorage.setItem("answers", JSON.stringify(updatedAnswers));
  };

  const renderQuestion = (question, questionIndex) => {
    if (editingIndex === questionIndex) {
      return (
        <EditQuestion
          question={question}
          onSave={(editedQuestion) =>
            handleSaveQuestion(editedQuestion, questionIndex)
          }
          onCancel={handleCancelEdit}
        />
      );
    }

    const handleAction = (action) => () =>
      handleLikeDislikeQuestion(questionIndex, action);

    const renderAnswers = () => (
      <div className="answerBlock">
        <h4>Answers</h4>
        {answers[questionIndex] &&
          answers[questionIndex].map((answer, answerIndex) => (
            <div key={answerIndex} className="answer">
              {editingAnswerIndex &&
              editingAnswerIndex.questionIndex === questionIndex &&
              editingAnswerIndex.answerIndex === answerIndex ? (
                <div>
                  <AnswerForm
                    value={answer.text}
                    onChange={(e) => setNewAnswer(e.target.value)}
                    onSubmit={() =>
                      handleSaveEditedAnswer(questionIndex, answerIndex, {
                        text: newAnswer,
                        avatarUrl: answer.avatarUrl,
                        likes: answer.likes,
                        dislikes: answer.dislikes,
                      })
                    }
                  />
                  <button
                    className="dialogIcons"
                    onClick={() =>
                      handleSaveEditedAnswer(questionIndex, answerIndex, {
                        text: newAnswer,
                        avatarUrl: answer.avatarUrl,
                        likes: answer.likes,
                        dislikes: answer.dislikes,
                      })
                    }
                  >
                    Save
                  </button>
                  <button onClick={handleCancelEditAnswer}>Cancel</button>
                </div>
              ) : (
                <div className="dialogIcons">
                  <p>
                    <AccountCircleIcon /> {answer.text}
                  </p>
                  <span
                    onClick={() =>
                      handleLikeDislikeAnswer(
                        questionIndex,
                        answerIndex,
                        "like"
                      )
                    }
                  >
                    <ThumbUpIcon />
                  </span>{" "}
                  {answer.likes}
                  <span
                    onClick={() =>
                      handleLikeDislikeAnswer(
                        questionIndex,
                        answerIndex,
                        "dislike"
                      )
                    }
                  >
                    <ThumbDownIcon />
                  </span>{" "}
                  {answer.dislikes}
                  <span
                    onClick={() => handleEditAnswer(questionIndex, answerIndex)}
                  >
                    <EditIcon />
                  </span>
                  <span
                    onClick={() =>
                      handleDeleteAnswer(questionIndex, answerIndex)
                    }
                  >
                    <DeleteIcon />
                  </span>
                </div>
              )}
            </div>
          ))}
      </div>
    );

    return (
      <div className="dialogBlock dialogIcons">
        <h2>
          <AccountCircleIcon />
          {question.title}
        </h2>
        <p>{question.body}</p>
        <div>
          <span onClick={handleAction("likes")}>
            <ThumbUpIcon />
          </span>{" "}
          {question.likes}
          <span onClick={handleAction("dislikes")}>
            <ThumbDownIcon />
          </span>{" "}
          {question.dislikes}
          <span onClick={() => handleEditQuestion(questionIndex)}>
            <EditIcon /> Edit
          </span>
          <span onClick={() => handleDeleteQuestion(questionIndex)}>
            <DeleteIcon /> Delete
          </span>
          {selectedQuestion === questionIndex ? (
            <div className="dialogIcons">
              <AnswerForm
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                onSubmit={() => handleSaveAnswer(questionIndex)}
              />
              <button onClick={() => handleSaveAnswer(questionIndex)}>
                Submit Answer
              </button>
            </div>
          ) : (
            <span onClick={() => handleAddAnswer(questionIndex)}>
              <InsertCommentIcon /> Comment
            </span>
          )}
          {answers[questionIndex] &&
            answers[questionIndex].length > 0 &&
            renderAnswers(questionIndex)}
        </div>
      </div>
    );
  };

  return (
    <div className="questionList">
      <h3>DISCUSSIONS</h3>
      <div className="discussion-cards">
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="dialogBlock dialogIcons">
            {renderQuestion(question, questionIndex)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionList;
