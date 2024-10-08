import AnswersItem from "./AnswersItem";

export default function AnswersList({answersList, onEdit}) {

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={answerItem.username || i} onEdit={onEdit} />
      ))}
    </ul>
  );
}
