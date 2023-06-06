import resume_gio from "../assets/resume_gio.pdf";

export default function Navbar() {
  return (
    <div className="fixed z-50 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36"style={{ backgroundColor:"#0c0c0c" }}>
      <div className="flex justify-between items-center text-white">
        <ul className="hidden md:flex">
          <li className="p-4">
            <a href="#home" className="hover:underline">
              About
            </a>
          </li>
          <li className="p-4">
            <a href="#skills" className="hover:underline">
              Skills
            </a>
          </li>
          <li className="p-4">
            <a href="#certs" className="hover:underline">
              Certfications
            </a>
          </li>
        </ul>
        <a
          href={resume_gio}
          rel="noreferrer"
          target="_blank"
          className=" rounded-full px-4 py-1 border border border-4" style={{ backgroundColor:"#302c27",borderColor:"#666158" }}
        >
          Resume
        </a>
      </div>
    </div>
  );
}
