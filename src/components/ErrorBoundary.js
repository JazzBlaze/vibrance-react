import { Component } from "react";
import Fallback from "./Fallback";
import gsap from "gsap";
class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
      
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  

  
    render() {
      if (this.state.hasError) {
        setTimeout(function () {
          const menuBtn = document.querySelector(".menu-div");
          const exitBtn = document.querySelector(".menu-exit");
          let t1 = gsap.timeline({ paused: true });
          t1.to(".menu-div",{ opacity: 0 });
          t1.to(".menu", { opacity: 1, duration: 0.5, top: 0, ease: "power2.inOut" });
          t1.to(
              ".nav",
              {
                  opacity: 1,
                  marginBottom: 0,
                  duration: 0.4,
                  ease: "power2.inOut",
                  stagger: 0.2,
              },
              ">-0.5"
          );

          menuBtn.addEventListener("click", () => {
              t1.play().timeScale(1);
          });

          exitBtn.addEventListener("click", () => {
              t1.timeScale(2.5);
              t1.reverse();
          });
        }, 1);
        return(
          <>
            <Fallback/>
            
          </>

        
        )
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary