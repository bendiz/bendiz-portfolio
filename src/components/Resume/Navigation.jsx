export default function Navigation() {
  return (
    <nav className="Navigation">
      <div className="nav--left">
        <img
          src="./B-logo.svg"
          alt="A logo with curly braces covering the letter B."
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
            <a href="#projects">Projects</a>
          </li>
        </ul>
        <a
          role="button"
          className="contact--button"
          href="mailto:benedicte.roksvag@gmail.com"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
