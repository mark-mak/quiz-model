import { useState } from "react"
import Home from "./Home/Home";
import Quiz from "./Quiz/Quiz";
import Result from "./Result/Result";

export enum PAGE {
  HOME = 'home',
  QUIZ = 'quiz',
  RESULT = 'result',
}

const EntryPoint = () => {
  const [page, setPage] = useState<PAGE>(PAGE.HOME);

  const goToPage = (newPage: PAGE) => {
    setPage(newPage);
  }

  if (page === PAGE.QUIZ) {
    return (
      <div className="page-container">
        <Quiz goTo={goToPage} />
      </div>
    )
  }

  if (page === PAGE.RESULT) {
    return (
      <div className="page-container">
        <Result goTo={goToPage} />
      </div>
    )
  }
  
  return (
    <div className="page-container">
      <Home goTo={goToPage} />
    </div>
  )
};

export default EntryPoint;