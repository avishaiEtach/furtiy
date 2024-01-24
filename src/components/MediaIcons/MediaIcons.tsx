import { CiFacebook } from "react-icons/ci";
import { TfiTwitter } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import "./MediaIconsStyle.scss";

export const MediaIcons = () => {
  return (
    <div className="media__icons__continuer flex g10">
      <CiFacebook />
      <TfiTwitter />
      <FaInstagram />
      <AiOutlineYoutube />
      <FaWhatsapp />
    </div>
  );
};
