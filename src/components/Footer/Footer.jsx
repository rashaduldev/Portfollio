import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="shadow-2xl relative">
      <div className="footer footer-center p-4  text-black">
        <aside>
          <p>Copyright © 2024 - MD RASHADUL ISLAM</p>
        </aside>
      </div>
      <div id="bottom" className="absolute -top-7 right-10 text-5xl"><a href="#"><FaArrowUp /></a></div>
    </div>
  );
};

export default Footer;
