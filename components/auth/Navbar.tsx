import React from 'react'

const Navbar = () => {
  return (
    <div className="container sticky top-0 z-sticky flex justify-center">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full max-w-full px-3 flex-0">
            <nav className="absolute top-0 left-0 right-0 z-30 flex flex-wrap items-center px-4 py-2 mx-6 my-4 shadow-soft-2xl rounded-blur bg-white/80 backdrop-blur-2xl backdrop-saturate-200 lg:flex-nowrap lg:justify-start">
              <div className="flex items-center justify-between w-full p-0 pl-6 mx-auto flex-wrap-inherit">
                <a className="py-2.375 text-sm mr-4 ml-4 whitespace-nowrap font-bold text-slate-700 lg:ml-0" href="../pages/dashboard.html"> Todolist App </a>
                <button navbar-trigger className="px-3 py-1 ml-2 leading-none transition-all bg-transparent border border-transparent border-solid rounded-lg shadow-none cursor-pointer text-lg ease-soft-in-out lg:hidden" type="button" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div navbar-menu className="items-center flex-grow overflow-hidden transition-all duration-500 ease-soft lg-max:max-h-0 basis-full lg:flex lg:basis-auto">
                  <ul className="flex flex-col pl-0 mx-auto mb-0 list-none lg:flex-row xl:ml-auto">
                    <li>
                      <a className="flex items-center px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2" aria-current="page" href="../pages/dashboard.html">
                        <i className="mr-1 fa fa-chart-pie opacity-60"></i>
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a className="block px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2" href="../pages/profile.html">
                        <i className="mr-1 fa fa-user opacity-60"></i>
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="block px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2" href="../pages/sign-up.html">
                        <i className="mr-1 fas fa-user-circle opacity-60"></i>
                        Sign Up
                      </a>
                    </li>
                    <li>
                      <a className="block px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2" href="../pages/sign-in.html">
                        <i className="mr-1 fas fa-key opacity-60"></i>
                        Sign In
                      </a>
                    </li>
                  </ul>
                  <ul className="hidden pl-0 mb-0 list-none lg:block lg:flex-row">
                    <li>
                      <a href="https://www.creative-tim.com/product/soft-ui-dashboard-tailwind" target="_blank" className="leading-pro hover:scale-102 hover:shadow-soft-xs active:opacity-85 ease-soft-in text-xs tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 rounded-3.5xl mb-0 mr-1 inline-block cursor-pointer border-0 bg-transparent px-8 py-2 text-center align-middle font-bold uppercase text-white transition-all">App Download</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
  )
}

export default Navbar