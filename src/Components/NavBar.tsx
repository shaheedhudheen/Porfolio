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
      <section className="flex justify-between items-center shadow-md px-8 py-4 lg:px-12 ">
        <h1 className="cursor-pointer">
          <a href="#" className="group font-bold text-2xl text-primary">
            as.<span className="group-hover:text-[#2962FF]">dev</span>
          </a>
        </h1>
        <nav className="flex items-center MdMenu">
          <button  onClick={() => setmenu(!menu)} className="z-10 md:hidden ">
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
        className={`bg-red-200 absolute top-0 w-full min-h-screen flex-col  justify-center px-8  origin-top animate-open-menu ${menu ? 'flex': 'hidden'} `}
      >
        <nav className="flex flex-col items-center space-y-12 text-primary font-bold ">
          {links.map((link) => (
            <a
              href={link.link}
              key={link.name}
              className="text-4xl text-primary font-semibold"
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
