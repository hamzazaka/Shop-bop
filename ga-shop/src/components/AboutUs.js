export default function About(){
    return(
        <>
        <div class="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p>
      </div>
      
      <h2>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg" alt="Jane" />
            <div className="container">
              <h2>Elon Musk</h2>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              </div>
              <button className="button">Contact</button>
           
          </div>
        </div>
      
        <div className="column">
          <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Mark_Cuban_%26_Doug_Ducey_%2847384954432%29_%28cropped%29.jpg" alt="Mike"/>
            <div className="container">
              <h2>Mark Cuban</h2>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      
        <div className="column">
          <div className="card">
            <img src="https://www.wallpapertip.com/wmimgs/235-2357158_mayweather-wallpaper.jpg" alt="John" />
            <div className="container">
              <h2>John Doe</h2>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
      </>
        
    )
}