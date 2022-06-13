import { FC, useCallback } from "react";
import { PAGE } from "../EntryPoint";

interface HomeProps {
  goTo?: (page: PAGE) => void
}

const Home: FC<HomeProps> = (props) => {
  const { goTo } = props;

  const handleClick = useCallback(() => {
    if (goTo) {
      goTo(PAGE.QUIZ)
    }
  }, [goTo]);

  return (
    <div>
      <div className="row mb-32">
        <div className="text-box">
          Home Page
        </div>
      </div>
      <div className="text-box mb-32">
        <u>
          Introduction
        </u>
        <div>
          This is a demo for quiz game.
        </div>
        <p>
          The quiz contains several questions.
          <br />
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </p>
      </div>
      <button
        type="button"
        className="text-box"
        onClick={handleClick}
      >
        Start
      </button>
    </div>
  )
}

export default Home;
