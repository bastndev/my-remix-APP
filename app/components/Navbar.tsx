export default function Navbar() {
  return (
    <nav
      className="flex items-center justify-between border-gray-200 px-4 md:px-16 py-1.5"
      style={{
        background: "rgba(0, 0, 0, 1)",
        borderBottom: "1px solid #1b1c23",
        boxShadow: "0 1px 6px rgba(109, 109, 109, 0.1)",
        backdropFilter: "blur(1px)"
      }}
    >
      <img className="rounded-full w-12 h-12" src="logo.jpg" alt="Logo" />
      <div className="space-x-6 text-gray-300">
        <a className="no-select opacity-70" href="/" rel="home"> -Logo2</a>
        <a className="hover:text-white" href="#about" rel="about">About</a>
        <a className="hover:text-white" href="#project" rel="project">Project</a>
        <a className="hover:text-white" href="#contact" rel="contact">Contact</a>
        <a className="hover:text-white" href="#contact" rel="contact">Price</a>
      </div>
      <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse ml-auto">
        <a
          href="#111"
          className="text-gray-300 hover:bg-gray-500/10 focus:ring-4 focus:ring-gray-50 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2 focus:outline-none"
        >Login</a>
        <a
          href="#222"
          className="text-black bg-white hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2 focus:outline-none"
        >Sign up</a>
      </div>
    </nav>
  )
}