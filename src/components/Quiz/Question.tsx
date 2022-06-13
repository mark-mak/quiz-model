import { FC } from "react";
import questionList from "../questionList";

interface QuestionProps {
  index: number;
}

const Question: FC<QuestionProps> = (props) => {
  const { index } = props;
  
  return (
    <div className="text-box mb-32 question-container">
      <u>
        {`Question ${index + 1}`}
      </u>
      <div>
        {questionList[index].question.desc}
      </div>
      <p>
        {questionList[index].question.content}
      </p>
    </div>
  )
}

export default Question;
