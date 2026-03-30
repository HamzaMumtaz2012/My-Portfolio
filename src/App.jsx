import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import './App.css';
import Cards from './Components/Cards';
import TCard from './Components/T-Card';
import img1 from './Images/image2.jpg';
import img2 from './Images/image3.jpg';
import { Bounce, Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import boy from './Images/About section Boy.jpg';

function App() {
  const handleClick = () => {
    toast.success('Downloading is Started!', {
      position: 'top-left',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark',
      transition: Slide,
    });
  };
  return (
    <div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition="Slide"
      />
      <Navbar />
      <section className="home" id="home">
        <div className="text">
          <h1 style={{ display: 'flex', alignItems: 'center' }}>
            Hi, l'm Hamza
            <lord-icon
              src="https://cdn.lordicon.com/zubhquzc.json"
              trigger="loop"
              colors="primary:#ffffff,secondary:#b4b4b4"
              className="greeting-icon"
            ></lord-icon>
          </h1>
          <hr width="65%" />
          <p>Frontend Developer (HTML, CSS, JS, React) </p>
          <div className="buttons">
            <div id="button-1">
              <button className="button-1">
                <lord-icon src="https://cdn.lordicon.com/knitbwfa.json" trigger="hover"></lord-icon>
                <a href="https://javascript-projects-zz4e.vercel.app/">View Project</a>
              </button>
            </div>
            <div id="button-2">
              <button onClick={handleClick} className="button-2">
                <lord-icon src="https://cdn.lordicon.com/ueutfbqc.json" trigger="hover"></lord-icon>
                <a href="/Hamza_Mumtaz_CV.pdf" download>
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="typing">
          <p>-- Hamza Mumtaz --</p>
        </div>
      </section>

      <section id="skills">
        <h1>Skills</h1>
        <div className="skill-cards">
          <Cards
            Title="HTML"
            Description="I build clean and well-structured web pages using semantic HTML for better readability and SEO. "
          />
          <Cards
            Title="CSS"
            Description="I design responsive and modern layouts using Flexbox, Grid, and smooth animations. "
          />
          <Cards
            Title="JavaScript"
            Description="I add interactivity to websites using JavaScript, including DOM manipulation and basic logic. "
          />
          <Cards
            Title="React"
            Description="I build dynamic user interfaces using React components and manage data efficiently. "
          />
        </div>
      </section>
      <section id="testimonials">
        <h1>My Testimonials</h1>
        <div className="testimonials-cards">
          <TCard
            src={img2}
            name="John Doe"
            description="Hamza is a dedicated and consistent learner who is actively improving his skills in frontend development. He focuses on writing clean code and understanding the basics properly instead of rushing things. I have seen him work on multiple small projects, and his progress over time shows his commitment to becoming a better developer. With this mindset, he has strong potential to grow and handle real-world projects in the future. "
          />
          <TCard
            className="t-2"
            src={img1}
            name="Jane Smith"
            description="Hamza has a strong interest in building modern and responsive websites. He spends time practicing HTML, CSS, and JavaScript and is not afraid to experiment with new ideas while learning. What stands out is his willingness to fix mistakes and improve his work step by step. He is still in the learning phase, but his consistency and effort make him someone who can develop solid frontend skills with time."
          />
        </div>
      </section>
      <section id="about">
        <h1>About Me</h1>

        <div className="about">
          <div className="about-1">
            <img src={boy} alt="Profile" style={{ objectFit: 'cover' }} />
          </div>
          <div className="about-2">
            <h2>About Me</h2>

            <li>Student - Class 8</li>
            <li>Learning Web Development</li>
            <li>Fiverr Aspirations</li>
          </div>
        </div>
      </section>
      <section
        id="contact"
        style={{ height: '300px', backgroundColor: 'rgb(243, 239, 239)', marginTop: '50px' }}
      >
        <h1 style={{ textAlign: 'center' }}>Contact Me</h1>
        <div
          className="info"
          style={{
            display: 'flex',
            paddingLeft: '25px',
            paddingTop: '30px',
            flexDirection: 'column',
            backgroundColor: 'white',
            width: '80%',
            margin: '20px auto',
            borderRadius: '10px',
            gap: '5px',
          }}
        >
          <input
            type="text"
            style={{
              height: '35px',
              width: '90%',
              fontSize: '1.2rem',
              paddingLeft: '10px',
              border: '1px solid #ccc',
            }}
            placeholder="Name"
          />{' '}
          <br />
          <input
            type="email"
            style={{
              height: '35px',
              width: '90%',
              fontSize: '1.2rem',
              paddingLeft: '10px',
              border: '1px solid #ccc',
            }}
            placeholder="Email"
          />
          <br />
          <textarea
            placeholder="Message"
            style={{
              width: '90%',
              fontSize: '1.2rem',
              paddingLeft: '10px',
              border: '1px solid #ccc',
              fontWeight: 'bolder',
              paddingTop: '10px',
            }}
            rows="6"
          ></textarea>
          <br />
          <button
            style={{
              height: '40px',

              margin: 'auto',
              fontSize: '1.2rem',
              border: '1px solid #ccc',

              marginBottom: '15px',
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}

          >
            Send Message
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
