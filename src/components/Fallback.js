import Menu from "./Menu";

export default function Fallback(){
  
    return(
        <>

          <div id="pre" className="preloader">
          <Menu/>
            <div className="preloader-wrapper">
              
              <div className="loading">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                
              </div>
              
              <h2>Sorry, your browser is not compatible.</h2>
            </div>
          </div>

          
        </>
    )
}