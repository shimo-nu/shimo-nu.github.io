import { useState } from "react";

const SNS = () => {
  // useEffect(() => {
  //   // Equivalent to $(document).ready
  //   $(function() {
  //     $(".trigger").click(function() {
  //       $(".menu").toggleClass("active");
  //     });
  //   });

  //   // Cleanup function to unbind the click event when the component unmounts
  //   return () => {
  //     $(".trigger").off("click");
  //   };
  // }, []); // Empty dependency array means this effect runs once on mount
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
      setIsActive(!isActive);
  };

  return (
    <div className={`menu ${isActive ? 'active': ''}`}>
      <div className="btn trigger" onClick={toggleMenu}>
        <span className="line"></span>
      </div>
      <div className="icons">
        <div className="rotater">
          <a href="https://x.com/Engineershinshu" target="_blank" rel="noopener noreferrer" className="btn btn-icon">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <div className="rotater">
          <a href="https://www.linkedin.com/in/hironorishimosato" target="_blank" rel="noopener noreferrer" className="btn btn-icon">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
        <div className="rotater">
            <a href="https://github.com/shimo-nu" target="_blank" rel="noopener noreferrer" className="btn btn-icon">
              <i className="fa fa-github"></i>
            </a>
        </div>
        
      </div>
    </div>
  );
};

export default SNS;

