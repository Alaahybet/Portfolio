export default function Card ({GitApp,LinkApp,title , description , technologies , ImageApp}){
    return(
       <div className="card">
        <div className="card-image">
            <div className="My-Image">
        <img src={ImageApp}  alt={title} />
      </div>
        </div>

        <h2>{title}</h2>

        <p>
          {description}
        </p>
        <div className="card-tags">

          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
          
        </div>
        <div className="card-buttons">
            <a href={LinkApp} className="btn-primary">
                Live Demo
            </a>

            <a href={GitApp} className="btn-scondary">
                GitHub
           </a>
        </div>
       </div>
    )

}