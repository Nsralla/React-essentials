import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";
const words = ["Fundamental", "Core", "Crusial"];
function getRandom() {
  return Math.floor(Math.random() * words.length);
}

// component
function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {words[getRandom()]} React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
}

export default Header;
