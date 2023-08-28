import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { useState } from "react";

interface Link {
  name: string;
  link: string;
}

const NavBar = () => {
  const [menu, setmenu] = useState(false);

  const links: Link[] = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Projects", link: "/" },
    { name: "Contacts", link: "/" },
  ];
  return (
    <>
      <section
        className={`fixed flex justify-between items-center px-8 py-5 lg:px-12 w-full bg-white z-50 ${
          menu ? "" : "shadow-sm"
        }`}
      >
        <h1 className="cursor-pointer">
          <a href="#" className="group font-bold text-2xl text-primary">
            as.<span className="group-hover:text-[#2962FF]">dev</span>
          </a>
        </h1>
        <nav className="flex items-center MdMenu">
          <button onClick={() => setmenu(!menu)} className="md:hidden z-10">
            {menu ? <MdClose size={32} /> : <MdMenu size={32} />}
          </button>
          <div className="hidden md:block space-x-3 ">
            {links.map((link) => (
              <a
                href={link.link}
                key={link.name}
                className="text-xl text-primary font-medium hover:text-[#2962FF]"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </section>

      <section
        className={`z-10 bg-white absolute top-0 w-full min-h-screen flex-col  justify-center px-8  origin-top transition-all ease-in-out duration-500 ${
          menu ? "flex " : "hidden "
        } `}
      >
        <nav className="flex flex-col items-center space-y-12 text-primary font-bold ">
          {links.map((link) => (
            <a
              href={link.link}
              key={link.name}
              className="text-4xl text-primary font-semibold"
              onClick={(e) => {
                e.preventDefault();
                setmenu(!menu);
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </section>
    </>
  );
};

export default NavBar;
