export const NavList = ({ active, children }) => (
  <ul
    className={`menu flex items-center sm:gap-5 sm:text-xs gap-4 font-bold md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 md:opacity-100 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-49 ${
      active ? "top-0 opacity-100" : "-top-10 opacity-10"
    }`}
  >
    {children}
  </ul>
);

export const NavItem = ({ href, children }) => (
  <li>
    <a
      href={href}
      className="md:text-sm lg:text-lg text-sm hover:text-cyan-500 transition-colors lg:flex"
    >
      {children}
    </a>
  </li>
);
