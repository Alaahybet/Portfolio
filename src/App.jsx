import './App.css'
import Card from './ProjectCard';
import CardDef from './CardDef';
function App() {
  

  return (
 <>
 
 <header>
  <nav className='Nav'>

  <h1>AH.<span class="slice">dev</span></h1>
  <div className='nav-links'> 
  <a href='#home'>Home</a>
  
  <a href='#project'>Project</a>
  
  <a href="#contact">Contact</a>
   
  <a href="#about">about</a>
   </div>
  <button className='nav-button'>Let's Start to Talk </button>

  </nav>
  
  <hr></hr>
 </header>


    
 <main>
    
    <section id="home">
        <div className="home-container">

            <div className="home-content">
  <h2 class="def"><span class="defone">Front-End</span>  <span class="deftwo">Developer</span></h2>
  <h1>Hi, I'm <span className='char'>Alaa</span></h1>
  <br/>
  <h1>I build <span class="one">fast ,</span> <span class="two">beautiful</span> web interfaces.</h1>
  <hr/>
  
  <p>Front-end developer focused on React, TypeScript and design  systems. I turn ideas into smooth, accessible<br/> products people  enjoy using.</p>
  <div className="li" >
     <a href='#project' className="btn-one">
        View my work
        </a>
        <a href='#Work'  className="btn-two">Get in touch 
        </a>
</div>
</div>
<div className='home-card'>
< CardDef/>
</div>
</div>
</section>

<section id="project">
    <div className='project-heading'>
    <span className='project-subtitle'>MY WORK</span>
    <h1 className='project-title'>
        My <span>project <br/>.</span>
        </h1>
        <p className='poject-discription'>
            Some things I've built with code & creativity.
        </p>
        </div>
    <div className="project-container"> 
      <Card className="shopEasy-image"  title="ShopEasy"
  description="A weather app that displays current weather information."
  technologies={["React", "CSS", "JavaScript","Html"]} 
  ImageApp='./src/shop.png'
  LinkApp='https://alaahybet.github.io/ShopEasy1/'
  GitApp='https://github.com/Alaahybet'/>
      <Card title="To-Do List App"
  description="A simple to-do list app built with JavaScript that allows users to add, manage, and track daily tasks."
  technologies={[ "CSS", "JavaScript","Html"]}
  ImageApp='./src/To-do.png'
  LinkApp='https://alaahybet.github.io/To-Do-List/'
  GitApp='https://github.com/Alaahybet'/>
      <Card title="Weather"
  description="A simple Weather project built with React."
  technologies={["React", "CSS", "JavaScript","Html"]}
     ImageApp='./src/Weather.png'
     LinkApp='https://alaahybet.github.io/Weather-Card/'
     GitApp='https://github.com/Alaahybet'/>
      <Card title="Movie Search App"
  description="A movie search app that lets users explore movies and view details using a movie API."
  technologies={["React", "CSS", "JavaScript","Html"]}
  ImageApp='./src/Movie.png'
  LinkApp='https://alaahybet.github.io/Movie-search/'
  GitApp='https://github.com/Alaahybet'/>
  <Card title="LogIn App"
  description="A responsive Login App built with React, designed to provide a simple and user-friendly authentication interface. The application features a clean UI, reusable components, and form inputs for entering user credentials."
  technologies={["React", "CSS", "JavaScript","Html"]}
  ImageApp='./src/LogIn.png'
  LinkApp='https://alaahybet.github.io/Movie-search/'
  GitApp='https://github.com/Alaahybet'/>
      </div>
</section>
<section id="about">
    
</section>
<section id="contact">
    <div className='contact-heading'>
<h2>contact</h2>
<h1>let's Connect</h1>
</div>
<div className='contact-discription'>
    <p>Have a question or an idea? Feel free to reach out.</p>
</div>
<div className='contact-container'>
  <a
    href="mailto:YOUR_EMAIL@example.com"
    className="contact-card"
  >
    <div className="contact-icon">
      <i className="fa-regular fa-envelope"></i>
    </div>
    <div className="contact-info">
      <h3>Email</h3>
      <p>Let's talk via email</p>
    </div>
    <span className="contact-arrow">↗</span>
  </a>

  <a
    href="https://github.com/Alaahybet"
    target="_blank"
    rel="noreferrer"
    className="contact-card"
  >
    <div className="contact-icon">
      <i className="fa-brands fa-github"></i>
    </div>
    <div className="contact-info">
      <h3>GitHub</h3>
      <p>Explore my projects</p>
    </div>
    <span className="contact-arrow">↗</span>
  </a>

  <a
    href="YOUR_LINKEDIN_URL"
    target="_blank"
    rel="noreferrer"
    className="contact-card"
  >
    <div className="contact-icon">
      <i className="fa-brands fa-linkedin-in"></i>
    </div>
    <div className="contact-info">
      <h3>LinkedIn</h3>
      <p>Connect with me</p>
    </div>
    <span className="contact-arrow">↗</span>
  </a>
</div>
</section>
</main>

 </>
  );
}

export default App