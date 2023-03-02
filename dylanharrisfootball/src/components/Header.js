import Highlight from "../video/RPReplay_Final1677730475_1.mp4";

function Header() {
  return (
    <section className="relative h-screen">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="absolute z-10 min-w-full min-h-full object-cover"
          autoPlay
          loop
          muted
          src={Highlight}
        ></video>
      </div>
    </section>
  );
}

export default Header;
