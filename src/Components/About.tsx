import photoOne from "../assets/photo1.jpg";

const About = () => {
  return (
    <section className="bg-fuchsia-400 h-screen">
      <div className="max-w-screen-xl bg-red-300 h-screen mx-auto flex justify-center py-20 px-8">
        <div className="grid">
          <img
            src={photoOne}
            alt="a photo of computer"
            className="rounded-xl h-[350px] w-[410px] object-cover"
          />

          <div>
            <h3>About Me</h3>
            <h1>A front End Developer</h1>
            <p>
              As a Front-End Developer, I possess an impressive arsenal of
              skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
