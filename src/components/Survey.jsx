import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [answers, setAnswers] = useState([]);

  const handleSubmit = (formData) => {
    setAnswers(prevAnswers => [...prevAnswers, formData]);
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        <AnswersList answersList={answers}/>

      </section>
      <section className="survey__form">{/* a form should be here */}
        <Form onSubmit={handleSubmit}/>
      </section>
    </main>
  );
}

export default Survey;
