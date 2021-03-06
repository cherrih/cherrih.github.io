import React from 'react';
import Breakpoint, { BreakpointProvider } from 'react-socks';
import Home from './World/Home.jsx';
import Projects from './Projects/Projects.jsx';
import Modal from './Modal.jsx';
import DeadMessage from './DeadMessage.jsx';
import WinMessage from './WinMessage.jsx';
import MobileHome from './Mobile/MobileHome.jsx';
import MobileProjects from './Mobile/MobileProjects.jsx';
import MobileProject from './Mobile/MobileProject.jsx';
import MobileModal from './Mobile/MobileModal.jsx';
import Menu from './Mobile/Menu.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: true,
      currentView: 'home',
      isMenu: false,
      isProjects: false,
      isMobileModal: false,
      isModal: false,
      isDead: false,
      isChampion: false,
      projects: [
        {
          title: 'SPACE10 Residency Program',
          id: 'space10',
          description: 'Website development for IKEA\'s research/design lab',
          techStack: ' Three.js, React, PHP, Timber',
          date: 'June 2020 - Ongoing',
          fullDescription:
            'I was initially contracted to implement the new Residency Program subsite including 3D web animation and component library updates.',
          photoText: [
            'Following the successful launch, my contract was converted to a retainer to update and modernize the site\'s tech stack, url mapping and analytics.',
          ],
          team:
            ' Morten Bjørn (digital coordinator), Mitsuko Sato (designer), Jana Perkovic (editor / copywriter), Cherri Hartigan (full-stack engineer)',
          link: {
            link: 'https://space10.com/residencies/',
            location: ' subsite',
          },
          video: 'space10',
          img: 'space10',
        },
        {
          title: 'Pinterest Campaign Builder',
          id: 'propromote',
          description: "Rework of Pinterest's ad creation flow",
          techStack: ' React, Python, Gestalt',
          date: 'July 2019',
          fullDescription:
            'As part of an internal two day "makeathon" at Pinterest, our team reworked the exisiting ad creation flow to be more in line with the new Pinterest design that launched last year.',
          photoText: [
            'I was responsible for the notoriously finicky masonry component, including the functionality of selecting/deselecting pins and the ad closeup.',
          ],
          team:
            ' Koraldo Kajanaku (concept / design), Meera Srinivasan (product manager), Peter Zed (full-stack engineer), Terell Brown (full-stack engineer), Cherri Hartigan (full-stack engineer)',
          link: {
            link: 'https://6wl14.csb.app/',
            location: ' project',
          },
          video: 'propromote',
          img: 'propromote',
        },
        {
          title: 'Queertrip',
          description: 'Full-stack travel app for the LGBTQIA+ community',
          techStack:
            ' Javascript, React, HTML, CSS, MongoDB, Mongoose.js, Express, Node.js, Webpack, Google Maps API',
          date: 'Jan 2019 - Ongoing',
          fullDescription:
            'Traveling internationally while queer can sometimes be a scary experience. With Queertrip you can find experiences and people across the globe who will accept you for who you are. Browse through safe spots around the world and share your own tips!',
          photoText: [
            'This project utilized the Google Maps API with custom markers to dynamically display city data persisted in a MongoDB instance.',
          ],
          team:
            ' Belen Tenorio (concept / design), Cherri Hartigan (concept / full-stack engineer)',
          link: {
            link: 'https://queertrip.world',
            location: ' Queertrip V2',
          },
          video: 'Queertrip',
          img: 'QueerTrip',
        },
        {
          title: 'Rogue',
          description: 'Digital experiential "low fashion" magazine',
          techStack:
            ' Javascript, HTML, CSS, React, Webpack, Matter.js, Three.js, WebGL',
          date: 'Feb 2018 - 2019',
          fullDescription:
            'Rogue is an online experiential magazine that explores timeless issues in the context of today. Rogue focuses on storytelling in an interactive way explored through digital experiences.',
          photoText: [
            'The landing page with interactive menu items is built in React, with physics provided by Matter.js.',
          ],
          team:
            ' Belen Tenorio (concept / design), Cherri Hartigan (concept / development), Eli VanAlsburg (model), Isioma Iyamah (model)',
          link: {
            link: 'https://github.com/cherrih/rogue',
            location: ' project on GitHub',
          },
          video: 'RogueHome',
          img: 'Rogue',
        },
        {
          title: 'Watch.io',
          id: 'Watch',
          description: 'Full-stack retail product app for watch company',
          techStack:
            ' Javascript, React, HTML, CSS, MySQL, Express, AWS, Node.js, Webpack, Jest/Enzyme',
          date: 'Dec 2018 - Jan 2019',
          fullDescription: '',
          photoText: [
            'Developed an interactive front-end microservice using JavaScript and React to dynamically render details and specifications for 100 watches.',
            'Seeded MySQL database with 1000 unique rows of watch product information to enforce a single source of truth and avoid data duplication.',
            'Utilized service-oriented architecture by integrating microservices through an Express proxy server to improve team development efficiency.',
            'Improved page load speeds by 53% by minifying webpack bundles and implementing Express compression middleware.',
          ],
          team:
            ' Aaron Deane (full-stack engineer, photo component), Cherri Hartigan (full-stack engineer, summary/cart component), George Qian (full-stack engineer, details component), Linden Chiu (full-stack engineer, reviews component)',
          link: {
            link: 'https://github.com/TheEventHandlers/MVMT-details-specs',
            location: ' project on GitHub',
          },
          video: 'Watch',
          img: 'Watch.io',
        },
        {
          title: 'FindTables',
          description:
            'System design of an online restaurant reservation service',
          techStack:
            ' Javascript, MongoDB, Mongoose.js, PostgreSQL, Express, AWS, Node.js, Webpack, NGINX, K6, New Relic, loader.io',
          date: 'Jan 2019 - Feb 2019',
          fullDescription:
            'I built out and optimized the backend of a photos component of a restaurant reservation application. The goal was to extend the capabilities of the database and server layer to support production-level traffic. I defined success as achieving 1000 RPS with an error rate of less than 1% and latency of less than 200ms.',
          photoText: [
            'In order to choose the optimal database for the component, I benchmarked the performance of Postgres and MongoDB on a production-level dataset (10M records) to explore tradeoffs in SQL and noSQL databases.',
            'MongoDB initially outperformed Postgres, with query speeds between 0-1ms compared to 40 seconds. I reduced Postgre query times from 40 seconds to 3.5 ms by creating relevant btree indexes.',
            "While MongoDB still outperformed Postgres, I considered other tradeoffs in coming to my final decision including write speeds (MongoDB again outperformed Postgres), whether complex querying was required (it wasn't), and transactional integrity (the data was non-transactional in nature).",
            'The next challenge was to benchmark the MongoDB database under production-level traffic. I performed stresstests using K6 and loader.io to simulate sustained web-scale traffic. I identified a bottleneck via New Relic with multiple queries trying to access the database. In order to combat this, I implemented Redis as a data structure store to create a cache for some of the data.',
            'I also changed my stress-test to favour requests to 20% of the database as this would be a more realistic simulation of production. This reduced response times at 1000 rps to 4ms (well below my goal of 200 ms). Error rate remained at 0%.',
            'As a final optimization, I horizontally scaled the microservice using an NGINX load balancer across 3 servers enabling the microservice to handle a 12000 RPS throughput at 34 ms latency and 0% errors.',
          ],
          team:
            ' Cherri Hartigan (back end engineer, photos service), Ed Wu (back end engineer, menu cards service), Johnson Kwok (back end engineer, reviews service), Mike Lau (back end engineer, reservations service)',
          link: {
            link: 'https://github.com/TheEventHandlers/MVMT-details-specs',
            location: ' project on GitHub',
          },
          img: 'findtables',
        },
        {
          title: 'Belen Tenorio Portfolio',
          id: 'Belen',
          shortTitle: 'Belen T Portfolio',
          description: 'Portfolio development for product/brand designer',
          techStack: ' Javascript, HTML, CSS, Sketch',
          date: 'Apr 2018 - May 2018',
          fullDescription: '',
          photoText: [
            'Portfolio development for product/brand designer Belen Tenorio.',
            'Created a parallax scrolling effect and other unique UI/UX design elements resulting in being featured as site of the day on Typewolf and Wow-Web.',
          ],
          team: ' Belen Tenorio (design), Cherri Hartigan (front end engineer)',
          link: {
            link: 'http://belentenorio.com',
            location: ' project',
          },
          video: 'belentenorio',
          img: 'BelenTenorioPortfolio',
        },
        {
          title: 'Anna Degenaar Portfolio',
          id: 'Anna',
          shortTitle: 'Anna D Portfolio',
          description:
            'Portfolio design and development for photographer/writer',
          techStack: ' Javascript, jQuery, HTML, CSS, Sketch',
          date: 'Feb 2018 - Mar 2018',
          fullDescription: '',
          photoText: [
            'Portfolio design and development for photographer/writer, Anna Degenaar including click and place photo elements and a photo slideshow.',
          ],
          team: ' Cherri Hartigan (design / front end engineer)',
          link: {
            link: 'http://www.annadegenaar.com',
            location: ' project',
          },
          video: 'annadegenaar',
          img: 'AnnaDegenaarPortfolio',
        },
      ],
    };
    this.toggleProjects = this.toggleProjects.bind(this);
    this.goHome = this.goHome.bind(this);
    this.goHomeMobile = this.goHomeMobile.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleDeadMessage = this.toggleDeadMessage.bind(this);
    this.showWinMessage = this.showWinMessage.bind(this);
    this.hideWinMessage = this.hideWinMessage.bind(this);
    this.toggleMobileProjects = this.toggleMobileProjects.bind(this);
    this.toggleModalMobile = this.toggleModalMobile.bind(this);
  }

  componentDidMount() {
    setTimeout(this.toggleModal, 2000);
    setTimeout(this.toggleModalMobile, 2000);
  }

  toggleProjects() {
    this.setState(state => ({
      isProjects: !state.isProjects,
      isHome: !state.isHome,
      isDead: false,
      isModal: false,
      isChampion: false,
    }));
  }

  goHome() {
    this.setState({
      isProjects: false,
      isHome: true,
    });
  }

  toggleModal() {
    if (this.state.isHome) {
      this.setState({
        isModal: !this.state.isModal,
      });
    }
  }

  toggleDeadMessage() {
    this.setState({
      isDead: !this.state.isDead,
    });
  }

  hideWinMessage() {
    this.setState({
      isChampion: false,
    });
  }

  showWinMessage() {
    this.setState({
      isChampion: true,
    });
  }

  toggleMobileProjects(e) {
    this.setState({
      currentView: e.target.className,
    });
    window.scrollTo(0, 0);
  }

  toggleModalMobile() {
    this.setState({
      isMobileModal: !this.state.isMobileModal,
    });
  }

  goHomeMobile() {
    this.setState({
      currentView: 'home',
    });
  }

  toggleMenu() {
    this.setState({
      isMenu: !this.state.isMenu,
    });
  }

  render() {
    const {
      toggleProjects,
      toggleModal,
      goHome,
      goHomeMobile,
      toggleDeadMessage,
      hideWinMessage,
      showWinMessage,
      toggleMobileProjects,
      toggleMenu,
      toggleModalMobile,
    } = this;
    const {
      isHome,
      isModal,
      isDead,
      isChampion,
      projects,
      currentView,
      isMenu,
      isMobileModal,
    } = this.state;
    return (
      <BreakpointProvider>
        <Breakpoint large up>
          <nav className="home-nav">
            <div className="cherri" onClick={goHome}>
              Cherri Hartigan
            </div>
            <div className="about">
              <div className="link-arrow-container">
                <a
                  className="link-container"
                  href="https://drive.google.com/file/d/1QSqtAUQOSEjXy6E26ANiOwHmelXt6GfZ/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                  <div className="link-arrow link-arrow-black" />
                </a>
              </div>
              <div className="link-arrow-container">
                <a
                  className="link-container"
                  href="mailto:cherri.hartigan@gmail.com"
                >
                  Contact
                  <div className="link-arrow link-arrow-black" />
                </a>
              </div>
            </div>
          </nav>
          {isHome ? (
            <Home
              toggleProjects={toggleProjects}
              toggleDeadMessage={toggleDeadMessage}
              showWinMessage={showWinMessage}
            />
          ) : (
            <Projects projects={projects} />
          )}
          {isModal && (
            <Modal close={toggleModal} toggleProjects={toggleProjects} />
          )}
          {isDead && (
            <DeadMessage
              close={toggleDeadMessage}
              toggleProjects={toggleProjects}
            />
          )}
          {isChampion && (
            <WinMessage
              close={hideWinMessage}
              toggleProjects={toggleProjects}
            />
          )}
        </Breakpoint>
        <Breakpoint medium down>
          <div>
            <nav className="small-home-nav">
              <div className="cherri" onClick={goHomeMobile}>
                Cherri Hartigan
              </div>
              <img
                src="https://s3-us-west-1.amazonaws.com/cherri-portfolio/hamburger.png"
                onClick={toggleMenu}
              />
            </nav>
            <div className="small-home-container">
              {isMobileModal && <MobileModal close={toggleModalMobile} />}
              {isMenu && <Menu toggleMenu={toggleMenu} />}
              {currentView === 'home' && <MobileHome />}
              {currentView === 'smallspace10' && (
                <MobileProject project={projects[0]} />
              )}
              {currentView === 'smallpropromote' && (
                <MobileProject project={projects[1]} />
              )}
              {currentView === 'smallRogue' && (
                <MobileProject project={projects[3]} />
              )}
              {currentView === 'smallQueertrip' && (
                <MobileProject project={projects[2]} />
              )}
              {currentView === 'smallWatch' && (
                <MobileProject project={projects[4]} />
              )}
              {currentView === 'smallFindTables' && (
                <MobileProject project={projects[5]} />
              )}
              {currentView === 'smallBelen' && (
                <MobileProject project={projects[6]} />
              )}
              {currentView === 'smallAnna' && (
                <MobileProject project={projects[7]} />
              )}
            </div>
            <MobileProjects
              projects={projects}
              toggleMobileProjects={toggleMobileProjects}
            />
          </div>
        </Breakpoint>
      </BreakpointProvider>
    );
  }
}

export default App;
