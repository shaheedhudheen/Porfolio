import photoOne from "../assets/photo1.jpg";

const About = () => {
  return (
    <section id="About">
      <div className="max-w-2xl lg:max-w-5xl mx-auto grid justify-items-center py-10 px-8 gap-8 lg:grid-cols-2 lg:items-center md:py-20 lg:py-36">
        <img
          src={photoOne}
          alt="a photo of computer"
          className="rounded-xl h-[350px] w-[410px] object-cover drop-shadow-lg"
        />

        <div className="flex flex-col items-center gap-3 lg:items-start">
          <h3 className="font-bold text-[#2962FF] ">ABOUT ME</h3>
          <h1 className="text-2xl font-bold text-primary">
            Front End Developer
          </h1>
          <p className="text-center text-secondary lg:text-left">
            As a proficient Front-End Developer, I have a remarkable command of
            HTML, CSS, JavaScript, React, Tailwind, and SCSS. I specialize in
            creating and maintaining responsive websites that deliver a seamless
            user experience. My strength is in developing dynamic and
            captivating interfaces with clean and optimized code, using the
            latest development tools and techniques. I am also a collaborative
            team player who enjoys working with cross-functional teams to build
            exceptional web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
