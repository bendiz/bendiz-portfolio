export default function Navigation() {
  return (
    <nav className="Navigation">
      <div className="nav--left">
        <img
          src="./B-logo.svg"
          alt="A logo with curly braces covering the letter B."
          srcset=""
          className="logo"
        />
      </div>
      <div className="nav--right">
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Resume</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
        </ul>
        <button>Contact</button>
      </div>
    </nav>
  );
}
