const Footer = () => {
  return (
    <div className="text-base/loose flex flex-col gap-6 items-center md:gap-0 md:flex-row justify-between py-4 mt-32 ">
      <h1 className="text-base">MY Portfolio</h1>
      <div className="gap-2 sm:gap-5">
        <a href="#">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="#">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="#">
          <i className="ri-youtube-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
