import './App.css';
import AOS from 'aos';
import ResumePic from "./img/resume-pic.jpg"
import Persona from "./img/Persona-project.jpg"
import TravelJournal from "./img/tj-project.jpg"
import EtherGames from "./img/coming+soon.jpg"
function App() {
//   const navSlide = () => {
//     const mobleNav = document.querySelector(".mobleNav");
//     const nav = document.querySelector('.nav-links2');
//     const navLinks = document.querySelectorAll('.nav-links2 li');
    
//     mobleNav.addEventListener("click", () => {
//       //toggle nav
//       nav.classList.toggle("nav-active");
      
//       //animate links
//       navLinks.forEach((link, index) => {
//         if (link.style.animation) {
//           link.style.animation = "";
//         } else {
//           link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
//         }
//       });
//       //when on moble nav animation
//       mobleNav.classList.toggle("toggle");
//     });
//   };
//   navSlide();
AOS.init();
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });
  return (
    <div>
      <div className="background"></div>
        <div className="main-wrapper">
            <div className="home-container">
                <header className="nav-container">
                    <div className="nav-links-container">
                        <div
                            className="nav-links"
                        >
                            <ul className="nav-links2">
                                <li>
                                    <a href="#work">work</a>
                                </li>
                                <li>
                                    <a href="#eth">coming soon</a>
                                </li>
                                <li>
                                    <a href="#contact">contact me</a>
                                </li>
                            </ul>
                            <div className="mobleNav">
                                <div className="line1"></div>
                                <div className="line2"></div>
                                <div className="line3"></div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="hero">
                    <div
                        className="logo"
                    >
                        <h1>Hello.</h1>
                        <h1>I am Jones</h1>
                    </div>
                    <div
                        className="under-logo"
                    >
                        <div className="description-container">
                            <p>
                                -I am a creative, freelace full stack developer
                                based in Austin TX.
                            </p>
                        </div>
                        <img src={ResumePic} alt="" />
                    </div>
                    <div className="big-letter-container">
                        <div className="big-letter1">
                            <div className="big-letter2">
                                <div className="big-letter3">
                                    <div className="big-letter4">
                                        <h1>JL</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="work-container" id="work">
                <div
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    className="work"
                >
                    <div className="work-header">
                        <h1>My Work</h1>
                    </div>
                    <div
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        className="work-nav"
                    >
                        <ul className="work-lines">
                            <li className="persona">01</li>
                            <li>work</li>
                        </ul>
                        <ul className="made-role">
                            <li id="role-line">
                                <p className="persona" id="role">role</p>
                                <p id="developer">Developer & Design</p>
                            </li>
                            <li id="made-line">
                                <p className="persona" id="made">made</p>
                                <p id="developer">2020</p>
                            </li>
                        </ul>
                        <ul className="websites">
                            <a href="https://jonesliddy77.github.io/Persona/"
                                ><li>Go to website</li></a
                            >
                        </ul>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        className="about-project-container"
                    >
                        <div className="about-project">
                            <p>
                                <span className="persona">.Persona</span> - Helps
                                clients find the appropriate freelancing
                                services to make their ideas into reality.
                            </p>
                        </div>
                    </div>
                    <div
                        className="project-img-container"
                    >
                        <div className="project-img">
                            <img src={Persona} alt="" />
                        </div>
                    </div>
                    <div
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        className="work-nav"
                    >
                        <ul className="work-lines">
                            <li className="tj">02</li>
                            <li>work</li>
                        </ul>
                        <ul className="made-role">
                            <li id="role-line">
                                <p className="tj" id="role">role</p>
                                <p>Developer & Design</p>
                            </li>
                            <li id="made-line">
                                <p className="tj" id="made">made</p>
                                <p>2021</p>
                            </li>
                        </ul>
                        <ul className="websites">
                            <a
                                href="https://my-travel-journal-project.herokuapp.com/"
                                ><li>Go to website</li></a
                            >
                        </ul>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        className="about-project-container"
                    >
                        <div className="about-project">
                            <p>
                                <span className="tj">Travel Journal</span> - Social
                                Media Network to allow for creation of Trip
                                Journals to share with family and friends!
                            </p>
                        </div>
                    </div>
                    <div
                        className="project-img-container"
                    >
                        <div className="project-img">
                            <img src={TravelJournal} alt="" />
                        </div>
                    </div>
                    <div
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        className="work-nav"
                    >
                        <ul id="eth" className="work-lines">
                            <li className="eth">03</li>
                            <li>work</li>
                        </ul>
                        <ul className="made-role">
                            <li id="role-line">
                                <p className="eth" id="role">role</p>
                                <p>Developer & Design</p>
                            </li>
                            <li id="made-line">
                                <p className="eth" id="made">made</p>
                                <p>2021</p>
                            </li>
                        </ul>
                        <ul className="websites">
                            <li>Go to website</li>
                        </ul>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        className="about-project-container"
                    >
                        <div className="about-project">
                            <p>
                                <span className="eth">Ether Arcade</span> - Online
                                archade, pay 25¢ and get the highscore and win
                                the jackpot!
                            </p>
                        </div>
                    </div>
                    <div
                        className="project-img-container"
                    >
                        <div className="project-img">
                            <img src={EtherGames} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact" className="footer-header">
                <h1>contact</h1>
            </div>
        </div>
        <footer>
            <div className="footer-links-container">
                <div className="links1">
                    <ul>
                        <a
                            href="https://github.com/jonesliddy77"
                            target="_blank"
                            ><li>github</li></a
                        >
                        <a
                            href="https://www.linkedin.com/in/jones-liddy-0229561b4"
                            target="_blank"
                            ><li>linked in</li></a
                        >
                        <a
                            href="https://www.instagram.com/jonesliddy77/?hl=en"
                            target="_blank"
                            ><li>instagram</li></a
                        >
                        <a href="mailto:jonesliddy77@gmail.com" target="_blank"
                            ><li>email</li></a
                        >
                        <a href="Jones_Liddy_Resume-website.pdf" target="_blank"
                            ><li>resume pdf</li></a
                        >
                    </ul>
                </div>
                <div className="links2">
                    <ul>
                        <a href="index.html"><li>back to top</li></a>
                        <li>© 2021 Jones Liddy</li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default App;
