import { FC, useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addScore, resetScore } from "../../features/quiz/quizSlice";
import { PAGE } from "../EntryPoint";
import questionList from '../questionList';
import { useScoreText } from "../useScoreText";
import MultipleChoice from "./MultipleChoice";
import Question from './Question';

interface QuizProps {
  goTo?: (page: PAGE) => void;
}

const Quiz: FC<QuizProps> = (props) => {
  const { goTo } = props;

  const dispatch = useAppDispatch();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  
  useEffect(() => {
    setIsAnswered(false);
  }, [currentQuestionIndex])

  const scoreText = useScoreText();

  const handleNextClick = useCallback(() => {
    if (currentQuestionIndex === questionList.length - 1) {
      if (goTo) {
        goTo(PAGE.RESULT)
      }

      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }, [goTo, currentQuestionIndex, scoreText]);

  const handleHomeClick = useCallback(() => {
    if (goTo) {
      goTo(PAGE.HOME)
      dispatch(resetScore());
    }
  }, [])

  const handleChoiceClick = useCallback(() => {
    setIsAnswered(true);
  }, [])

  const handleCorrect = useCallback(() => {
    dispatch(addScore());
  }, []);

  return (
    <div>
      <div className="row mb-32">
        <div className="text-box">
          Quiz Page
        </div>
        <div className="text-box">
          Score: {scoreText}
        </div>
        <div className="text-box">
          {currentQuestionIndex + 1} / {questionList.length}
        </div>
      </div>
      <Question index={currentQuestionIndex} />
      <MultipleChoice
        index={currentQuestionIndex}
        onCorrect={handleCorrect}
        onClick={handleChoiceClick}
        isAnswered={isAnswered}
      />
      <div className="row">
        <button
          type="button"
          className="text-box"
          onClick={handleHomeClick}
        >
          Home
        </button>
        <button
          type="button"
          className="text-box action-button"
          onClick={handleNextClick}
          disabled={!isAnswered}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Quiz;
