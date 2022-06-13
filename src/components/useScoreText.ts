import { useMemo } from "react";
import { useAppSelector } from "../app/hooks";
import { quizScore } from "../features/quiz/quizSlice";
import questionList from "./questionList";

export const useScoreText = () => {
  const score = useAppSelector(quizScore);

  return useMemo(() => (
    `${Math.round(score * 100)} / ${Math.round(questionList.length * 100)}`
  ), [score]);
}
