import { ImGithub, ImLinkedin } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="bg-primary py-8">
      <div className="max-w-5xl mx-auto px-8 flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
        <h1 className="text-background font-semibold">
          Copyright © 2023. All rights are reserved
        </h1>
        <div className="flex gap-8">
          <ImLinkedin size={32} color={"white"} />
          <ImGithub size={32} color={"white"} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
