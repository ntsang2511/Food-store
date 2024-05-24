
import "../pagesCss/Home.css";
import Navbar from "../components/Navbar";
// import Contact from "./Contact";
function Home() {
  return (
    <>
      <Navbar/>
      <header className="header">
        <img className="header__img" src="https://www.w3schools.com/w3images/hamburger.jpg" alt="Hamburger" />
        <div className="header__content">
          <h1 className="header__content-item">Chúc quý khách ngon miệng</h1>
        </div>
      </header>
      {/* <Contact/> */}
    </>
  )
}

export default Home;
