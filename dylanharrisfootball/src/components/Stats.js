import Dylan1 from "../images/dylan1.jpg";
import Dylan2 from "../images/dylan2.jpg";
import Dylan3 from "../images/dylan3.jpg";
import Dylan4 from "../images/dylan4.jpg";

function Stats() {
  return (
    <section className="py-20">
      <div className="max-w-6xl m-auto">
        <div className="flex justify-around mb-16">
          <div>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <img className="rounded-xl w-96" src={Dylan1} alt="football" />
        </div>

        <div className="flex justify-around mb-16">
          <img className="rounded-xl w-96" src={Dylan2} alt="football" />
          <div>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="flex justify-around mb-16">
          <div>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <img className="rounded-xl w-96" src={Dylan3} alt="football" />
        </div>

        <div className="flex justify-around">
          <img className="rounded-xl w-96" src={Dylan4} alt="football" />
          <div>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
