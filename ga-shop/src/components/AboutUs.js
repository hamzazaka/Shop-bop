export default function About(){
    return(
        <>
        <div class="about-section">
        <h1>SHOP BOP</h1>
        <p>The go-to online retail destination for modern style, Shopbop offers a comprehensive, hand-picked collection of apparel and accessories from the industry’s foremost contemporary and designer labels. Since its launch in 2000 as a denim-focused e-commerce platform, Shopbop has grown into one of the world’s leading fashion authorities. Along with renowned customer service, Shopbop delivers unparalleled wardrobe advice, cutting-edge editorial lookbooks, innovative features, and exclusive collaborations with forward-minded brands. The result is a highly personalized, satisfying, and—above all—fun shopping experience that caters to style-minded women around the globe.</p>
        
      </div>
      
      <h1>Our Team</h1>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg" alt="Jane" />
            <div className="contain">
              <h2>Elon Musk</h2>
              <p>Elon Reeve Musk FRS is an entrepreneur and business magnate. He is the founder, CEO, and Chief Engineer at SpaceX; early stage investor</p>
              </div>
              <button className="button">Contact</button>
           
          </div>
        </div>
      
        <div className="column">
          <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Mark_Cuban_%26_Doug_Ducey_%2847384954432%29_%28cropped%29.jpg" alt="Mike"/>
            <div className="contain">
              <h2>Mark Cuban</h2>
              <p>Mark Cuban (born July 31, 1958)[3] is an American billionaire entrepreneur, television personality, media proprietor, and investor, whose net worth is an estimated $4.3 billion, according to Forbes,</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      
        <div className="column">
          <div className="card">
            <img src="https://www.wallpapertip.com/wmimgs/235-2357158_mayweather-wallpaper.jpg" alt="John" />
            <div className="contain">
              <h2>Floyd Mayweather</h2>
              <p>Floyd Joy Mayweather Jr is an American professional boxing promoter and former professional boxer. He competed between 1996 and 2015,</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
      </>
        
    )
}