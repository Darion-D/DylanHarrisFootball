function Navbar() {
  return (
    <nav className="flex justify-around py-5 bg-green-800 text-white">
      <p>Dylan Harris</p>
      <ul className="flex gap-8">
        <li>Home</li>
        <li>Stats</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
