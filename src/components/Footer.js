import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <span> PaperFox &copy; </span>
        <a
          href="https://github.com/DusanVulic"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://instagram.com/dusanxvulic?utm_medium=copy_link"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaInstagram className="icon" />
        </a>
        <a href="mailto:dusanvulic11@gmail.com">
          <FaEnvelope className="icon" />
        </a>
      </div>
    </>
  );
};

export default Footer;
