import { useState } from "react";
import "./Quiz.css";

function Quiz() {
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});

  const questions = [
    {
      question: "What does MERN stand for?",
      options: [
        "MongoDB, Express, React, Node",
        "MySQL, Express, React, Node",
        "MongoDB, Electron, React, Node",
        "MongoDB, Express, Redux, Node"
      ],
      answer: "MongoDB, Express, React, Node"
    },
    {
      question: "Which database is used in the MERN Stack?",
      options: ["Oracle", "MongoDB", "MySQL", "SQL Server"],
      answer: "MongoDB"
    },
    {
      question: "What is React?",
      options: ["Library", "Framework", "Database", "Language"],
      answer: "Library"
    },
    {
      question: "What is Node.js?",
      options: ["Database", "Runtime", "Browser", "Compiler"],
      answer: "Runtime"
    },
    {
      question: "What does Express.js provide?",
      options: ["Database", "Web Framework", "CSS", "UI"],
      answer: "Web Framework"
    },
    {
      question: "What is JSX?",
      options: [
        "JavaScript XML",
        "Java XML",
        "JSON",
        "JavaScript Extension"
      ],
      answer: "JavaScript XML"
    },
    {
      question: "What hook manages state?",
      options: ["useEffect", "useState", "useRef", "useMemo"],
      answer: "useState"
    },
    {
      question: "How to pass data to components?",
      options: ["State", "Props", "Global", "Local"],
      answer: "Props"
    },
    {
      question: "What is MongoDB?",
      options: ["Relational", "NoSQL", "SQL", "Graph"],
      answer: "NoSQL"
    },
    {
      question: "What is an arrow function?",
      options: ["Method", "Class", "Function", "Variable"],
      answer: "Function"
    },
    {
      question: "Which command runs the app?",
      options: ["npm start", "npm build", "npm run", "npm install"],
      answer: "npm start"
    },
    {
      question: "What does git init do?",
      options: ["Create repo", "Push", "Pull", "Clone"],
      answer: "Create repo"
    },
    {
      question: "What is an API?",
      options: ["Framework", "Interface", "Database", "Language"],
      answer: "Interface"
    },
    {
      question: "What is NPM?",
      options: ["Package Manager", "Database", "Library", "Compiler"],
      answer: "Package Manager"
    },
    {
      question: "What is a component?",
      options: ["Data", "UI piece", "Server", "API"],
      answer: "UI piece"
    },
    {
      question: "What is useEffect for?",
      options: ["State", "Side effects", "Routing", "CSS"],
      answer: "Side effects"
    },
    {
      question: "What is JSON?",
      options: ["Data format", "Language", "Database", "Tool"],
      answer: "Data format"
    },
    {
      question: "What does .env store?",
      options: ["Keys", "Images", "CSS", "HTML"],
      answer: "Keys"
    },
    {
      question: "What is a Router?",
      options: ["Navigation", "Styling", "Database", "Testing"],
      answer: "Navigation"
    },
    {
      question: "What is Axios?",
      options: ["HTTP client", "Database", "CSS", "Tool"],
      answer: "HTTP client"
    },
    {
      question: "What is a server?",
      options: ["Client", "Backend", "Frontend", "Browser"],
      answer: "Backend"
    },
    {
      question: "What is client-side?",
      options: ["Server", "Browser", "Database", "API"],
      answer: "Browser"
    },
    {
      question: "What is debugging?",
      options: ["Writing", "Testing", "Fixing errors", "Deployment"],
      answer: "Fixing errors"
    },
    {
      question: "What is Bootstrap?",
      options: ["CSS framework", "Database", "Library", "Server"],
      answer: "CSS framework"
    },
    {
      question: "What is a build?",
      options: ["Output", "Source", "Data", "Tool"],
      answer: "Output"
    }
  ];

  const handleSelect = (qIndex, option) => {
    setUserAnswers({
      ...userAnswers,
      [qIndex]: option
    });
  };

  const calculateScore = () => {
    let finalScore = 0;

    questions.forEach((q, index) => {
      if (userAnswers[index] === q.answer) {
        finalScore++;
      }
    });

    setScore(finalScore);
    setSubmitted(true);
  };

  const answeredCount = Object.keys(userAnswers).length;
  const progressPercent = Math.round(
    (answeredCount / questions.length) * 100
  );

  return (
    <div className="quiz-page-container">
      <div className="quiz-box-card">

        {/* Header */}
        <div className="quiz-header-bar">
          <div>
            <h1>MERN Certification Quiz</h1>
            <p>Smart E-Learning Platform Assessment</p>
          </div>

          <div className="quiz-timer-badge">
            <span>⏱ Active Quiz</span>
          </div>
        </div>

        {/* Questions */}
        <div className="questions-scroll-area">

          {questions.map((q, qIndex) => {

            const selectedAnswer = userAnswers[qIndex];
            const isCorrect = selectedAnswer === q.answer;
            const isWrong =
              submitted &&
              selectedAnswer !== undefined &&
              selectedAnswer !== q.answer;

            return (
              <div
                key={qIndex}
                className={`question-card ${
                  submitted
                    ? isCorrect
                      ? "question-correct"
                      : isWrong
                      ? "question-wrong"
                      : ""
                    : ""
                }`}
              >

                {/* Question */}
                <h3 className="question-title">
                  <span className="q-number">
                    {qIndex + 1}.
                  </span>{" "}
                  {q.question}
                </h3>

                {/* Options */}
                <div className="options-group">

                  {q.options.map((option, i) => {

                    const isSelected =
                      userAnswers[qIndex] === option;

                    const isCorrectAnswer =
                      submitted && option === q.answer;

                    const isWrongSelected =
                      submitted &&
                      isSelected &&
                      option !== q.answer;

                    return (
                      <label
                        key={i}
                        className={`option-row ${
                          isSelected ? "selected" : ""
                        } ${
                          isCorrectAnswer
                            ? "correct-option"
                            : ""
                        } ${
                          isWrongSelected
                            ? "wrong-option"
                            : ""
                        }`}
                      >

                        <input
                          name={`q${qIndex}`}
                          type="radio"
                          checked={isSelected}
                          onChange={() =>
                            handleSelect(qIndex, option)
                          }
                          disabled={submitted}
                        />

                        <span className="option-label-text">
                          {option}
                        </span>

                        {/* Correct / Wrong indicator */}
                        {submitted && isCorrectAnswer && (
                          <span className="answer-icon">
                            ✓
                          </span>
                        )}

                        {submitted && isWrongSelected && (
                          <span className="answer-icon">
                            ✗
                          </span>
                        )}

                      </label>
                    );
                  })}

                </div>

                {/* Result message */}
                {submitted && selectedAnswer === undefined && (
                  <div className="unanswered-message">
                    ⚠ Not answered
                  </div>
                )}

                {submitted && selectedAnswer !== undefined && isCorrect && (
                  <div className="correct-message">
                    ✓ Correct Answer
                  </div>
                )}

                {submitted && selectedAnswer !== undefined && isWrong && (
                  <div className="wrong-message">
                    ✗ Wrong Answer
                    <span>
                      Correct Answer: <strong>{q.answer}</strong>
                    </span>
                  </div>
                )}

              </div>
            );
          })}

        </div>

        {/* Footer */}
        <div className="quiz-footer-bar">

          <div className="progress-info-block">

            <span className="progress-text">
              Answered: {answeredCount} / {questions.length} questions (
              {progressPercent}%)
            </span>

            <div className="quiz-progress-track">

              <div
                className="quiz-progress-fill"
                style={{
                  width: `${progressPercent}%`
                }}
              ></div>

            </div>

          </div>

          {!submitted ? (

            <button
              className="quiz-submit-btn"
              onClick={calculateScore}
            >
              Submit Quiz
            </button>

          ) : (

            <div className="score-badge-result">
              Final Score: {score} / {questions.length} (
              {Math.round(
                (score / questions.length) * 100
              )}
              %)
            </div>

          )}

        </div>

      </div>
    </div>
  );
}

export default Quiz;