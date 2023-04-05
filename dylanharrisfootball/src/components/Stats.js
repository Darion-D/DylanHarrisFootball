import Countup from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import Dylan1 from "../images/dylan1.jpg";
import Dylan2 from "../images/dylan2.jpg";
import Dylan3 from "../images/dylan3.jpg";
import Dylan4 from "../images/dylan4.jpg";

function Stats() {
  const [touchdownCounter, setTouchdownCounter] = useState(false);
  const [yardsCounter, setYardsCounter] = useState(false);
  const [averageYardsCounter, setAverageYardsCounter] = useState(false);
  const [hundredYardsCounter, setHundredYardsCounter] = useState(false);

  return (
    <section className="py-20">
      <div className="max-w-6xl m-auto">
      <ScrollTrigger
          onEnter={() => setTouchdownCounter(true)}
          onExit={() => setTouchdownCounter(false)}
        >
          <div className="grid grid-cols-12 mb-16">
            <div className="col-span-3 col-start-3 flex flex-col justify-center">
              <p>Total Touchdowns</p>
              <p>
                {touchdownCounter && (
                  <Countup start={0} end={40} duration={2} delay={1} />
                )}{" "}
              </p>
            </div>
            <img
              className="col-span-4 col-start-7 rounded-xl w-96"
              src={Dylan1}
              alt="football"
            />
          </div>
        </ScrollTrigger>

        <ScrollTrigger
          onEnter={() => setYardsCounter(true)}
          onExit={() => setYardsCounter(false)}
        >
          <div className="grid grid-cols-12 mb-16">
              <img className="col-span-4 col-start-3 rounded-xl w-96" src={Dylan2} alt="football" />
              <div className="col-start-7 col-span-4 flex flex-col justify-center items-end">
                <p>Total Yards</p>
                <p>
                  {yardsCounter && (
                    <Countup start={0} end={2331} duration={2} delay={1} />
                  )}{" "}
                </p>
              </div>
            </div>
        </ScrollTrigger>
        <ScrollTrigger
          onEnter={() => setAverageYardsCounter(true)}
          onExit={() => setAverageYardsCounter(false)}
        >
          <div className="grid grid-cols-12 mb-16">
            <div className="col-span-3 col-start-3 flex flex-col justify-center">
              <p>Average Yards Per Game</p>
              <p>
                {averageYardsCounter && (
                  <Countup start={0} end={97} duration={2} delay={1} />
                )}
              </p>
            </div>
            <img className="col-span-4 col-start-7 rounded-xl w-96" src={Dylan3} alt="football" />
          </div>
        </ScrollTrigger>

        <ScrollTrigger
          onEnter={() => setHundredYardsCounter(true)}
          onExit={() => setHundredYardsCounter(false)}
        >
          <div className="grid grid-cols-12">
            <img className="col-span-4 col-start-3 rounded-xl w-96" src={Dylan4} alt="football" />
            <div className="col-start-7 col-span-4 flex flex-col justify-center items-end">
              <p>Games with 100+ Yards</p>
              <p>
                {hundredYardsCounter && (
                  <Countup start={0} end={11} duration={2} delay={1} />
                )}
              </p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
}

export default Stats;
