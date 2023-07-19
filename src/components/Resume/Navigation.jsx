import Button from "./Button";
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
        <Button
          theme="secondary"
          href="mailto:benedicte.roksvag@gmail.com"
          className="contact--button"
        >
          Contact
        </Button>
      </div>
    </nav>
  );
}
