import Linkedin from "../assets/SocialMediaSvg/Linkedin";
import Github from "../assets/SocialMediaSvg/Github";

function SocialMediaIcons() {
  return (
    <div className="flex justify-center gap-7 md:justify-start">
      <a
        href="https://www.linkedin.com/"
        className=" transition duration-500 ease-out  hover:opacity-50"
        target="_blank"
        rel="noreferrer"
      >
        {/* tomar de localstorage dakrk */}

        <Linkedin fill="#ffffff" width="45px" height="45px" />
      </a>
      <a
        href="https://www.linkedin.com/"
        className=" transition duration-500 ease-out  hover:opacity-50"
        target="_blank"
        rel="noreferrer"
      >
        {/* tomar de localstorage dakrk */}

        <Github fill="#ffffff" width="45px" height="45px" />
      </a>
    </div>
  );
}

export default SocialMediaIcons;
