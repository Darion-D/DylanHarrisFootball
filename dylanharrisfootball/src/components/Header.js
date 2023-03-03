import Highlight from "../video/RPReplay_Final1677730475_1.mp4";

function Header() {
  return (
    <section className="relative h-screen">
      <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full overflow-hidden">
        <div className=" absolute z-20 min-w-full min-h-full bg-black bg-opacity-50"></div>
        <video
          className="absolute z-10 min-w-full min-h-full object-cover"
          autoPlay
          loop
          muted
          src={Highlight}
        ></video>
        <h1 className=" relative z-30 text-white text-5xl text-center" >Dylan Harris #24 RB <br /> William Floyd HS</h1>        
          </div>
    </section>
  );
}

export default Header;
