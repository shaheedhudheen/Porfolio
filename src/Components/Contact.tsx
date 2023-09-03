import { FaMapLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const Contact = () => {
  return (
    <section className=" py-20">
      <div className="max-w-2xl lg:max-w-5xl mx-auto  flex flex-col  gap-5  lg:px-8 lg:gap-10">
        <div className=" text-center md:self-start md:text-left">
          <h1 className="text-accent font-bold text-lg">CONTACT</h1>
          <p className="text-primary font-semibold text-2xl ">Hit me up! 👇🏿</p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row  md:gap-8 md:items-center lg:justify-between">
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
            <div className="p-4 inline-block rounded-full shadow-lg">
              <FaMapLocationDot color={"#2962FF"} size={"32"} />
            </div>
            <div className="text-center md:flex md:flex-col md:text-left">
              <h3 className="font-bold text-lg text-primary">Location</h3>
              <p className="text-base font-medium text-secondary">
                Kerala, India
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
            <div className="p-4 inline-block rounded-full shadow-lg">
              <MdMail color={"#2962FF"} size={"32"} />
            </div>
            <div className="text-center md:flex md:flex-col md:text-left">
              <h3 className="font-bold text-lg text-primary">Mail</h3>
              <p className="text-base font-medium text-secondary">
                shaheedhudheenpambalath@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
