import { ImGithub, ImLinkedin } from "react-icons/im";
import dp from "../assets/95g18d.jpg";
import html from "../assets/HTML5.png";
import css from "../assets/CSS3.png";
import js from "../assets/JavaScript.png";
import react from "../assets/react.png";
import ts from "../assets/TypeScript.png";
import tailwind from "../assets/Tailwind CSS.png";
import git from "../assets/git.png";

interface techStackInterface {
  src: string;
  name: string;
}

const Main = () => {
  const techStack: techStackInterface[] = [
    {
      src: html,
      name: "html",
    },
    {
      src: css,
      name: "css",
    },
    {
      src: js,
      name: "JavaScript",
    },
    {
      src: react,
      name: "react",
    },
    {
      src: ts,
      name: "TypeScript",
    },
    {
      src: tailwind,
      name: "tailwind CSS",
    },
    {
      src: git,
      name: "git",
    },
  ];

  return (
    <section className="bg-background min-h-screen flex items-center py-28 px-8 lg:py-48">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col-reverse gap-16 justify-center items-center lg:flex-row ">
          <div className="space-y-7 max-w-lg flex flex-col items-center">
            <h1 className="text-4xl font-bold text-center text-primary md:text-6xl lg:text-left">
              Front-End React Developer
            </h1>
            <p className="text-center text-lg text-secondary lg:text-left">
              Hi, I'm Ahammed Shaheedhudheen. A passionate Front-end React
              Developer based in Kerala, India. 📌
            </p>
            <div className="flex justify-center gap-8 lg:self-start">
              <ImLinkedin size={32} />
              <ImGithub size={32} />
            </div>
          </div>
          <div className="rounded-full overflow-hidden w-[250px] border-4 border-primary lg:w-[350px]">
            <img src={dp} alt="a photo of ahammed shaheedhudheen" />
          </div>
        </div>

        <div className="flex flex-col items-center flex-wrap gap-6">
          <h2 className="text-xl font-medium border-b-[2px] text-primary border-primary pb-1">
            Tech Stack
          </h2>
          <div className="">
            <ul className="flex gap-5 flex-wrap justify-center">
              {techStack.map((stack) => (
                <li
                  key={stack.name}
                  className="bg-white p-3 rounded-full drop-shadow-md"
                >
                  <img src={stack.src} alt="tech stack" className="w-8" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
