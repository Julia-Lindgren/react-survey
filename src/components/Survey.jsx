import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [answers, setAnswers] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState(null);

  const handleSubmit = (formData) => {
    if (editMode) {
      setAnswers((prevAnswers) =>
        prevAnswers.map((answer) =>
          answer.username === currentAnswer.username ? formData : answer
        )
      );
      setEditMode(false);
    } else {
      setAnswers((prevAnswers) => [...prevAnswers, formData]);
    }
    resetForm();
  };

  const handleEdit = (answer) => {
    setCurrentAnswer(answer);
    setEditMode(true);
  };
  
  const resetForm = () => {
    setCurrentAnswer(null);
    setEditMode(false);
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        <AnswersList answersList={answers} onEdit ={handleEdit}/>

      </section>
      <section className="survey__form">{/* a form should be here */}
        <Form onSubmit={handleSubmit} currentAnswer={currentAnswer} editMode={editMode}/>
      </section>
    </main>
  );
}

export default Survey;
