import { FC, useCallback } from "react";
import { useAppDispatch } from "../../app/hooks";
import { resetScore } from "../../features/quiz/quizSlice";
import { PAGE } from "../EntryPoint";
import { useScoreText } from "../useScoreText";

interface ResultProps {
  goTo?: (page: PAGE) => void;
}

const Result: FC<ResultProps> = (props) => {
  const { goTo } = props;
  
  const dispatch = useAppDispatch();
  const scoreText = useScoreText();

  const handleClick = useCallback(() => {
    if (goTo) {
      goTo(PAGE.HOME);
      dispatch(resetScore());
    }
  }, [goTo]);

  return (
    <div>
      <div className="row mb-32">
        <div className="text-box">
          Result Page
        </div>
        <div className="text-box">
          Your result: {scoreText}
        </div>
      </div>
      <div className="text-box mb-32">
        <u>
          Information box
        </u>
        <div>
          Thank you for your participation.
        </div>
        <p>
          You can view more detail in 
          <br />
          OUR HOME PAGE.
        </p>
      </div>
      <div>
        <button
          type="button"
          className="text-box"
          onClick={handleClick}
        >
          New Game
        </button>
      </div>
    </div>
  )
}

export default Result;
