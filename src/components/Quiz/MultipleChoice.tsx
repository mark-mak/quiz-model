import classnames from "classnames";
import { ReactNode, FC, useState, useEffect, useCallback, Fragment } from "react";
import questionList from "../questionList";

interface ChoiceProps {
  index: number;
  isCorrect?: boolean;
  isAnswered?: boolean;
  onClick?: () => void;
  onCorrect: () => void;
  children: ReactNode;
}

const Choice: FC<ChoiceProps> = (props) => {
  const {
    index,
    isCorrect,
    isAnswered,
    onClick,
    onCorrect,
    children,
  } = props;

  const [isSelected, setIsSelected] = useState(false);
  
  useEffect(() => {
    setIsSelected(false);
  }, [index]);

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }

    if (isCorrect) {
      onCorrect();
    }

    setIsSelected(true);
  }, [onClick]);

  return (
    <button
      type="button"
      className={classnames({
        correct: isCorrect && isAnswered,
        wrong: isSelected && !isCorrect && isAnswered,
        "text-box": true,
      })}
      onClick={isAnswered ? undefined : handleClick}
      disabled={isAnswered}
    >
      {children}
    </button>
  )
}

interface MultipleChoiceProps {
  index: number;
  onCorrect: () => void;
  onClick: () => void;
  isAnswered: boolean;
}

const MultipleChoice: FC<MultipleChoiceProps> = (props) => {
  const { index, onCorrect, onClick, isAnswered } = props;

  const handleClick = useCallback(() => {
    onClick()
  }, []);

  return (
    <div className="mc-contatiner">
      {questionList[index].multipleChoice.map((item) => (
        <Fragment key={item.id}>
          <Choice
            index={index}
            isAnswered={isAnswered}
            isCorrect={item.id === questionList[index].correctAns}
            onClick={handleClick}
            onCorrect={onCorrect}
          >
            {item.content}
          </Choice>
        </Fragment>
      ))}
    </div>
  )
}

export default MultipleChoice;
