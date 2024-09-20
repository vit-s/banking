'use client'

import { Disclosure }           from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Paydrop                  from '../assets/logos/Paydrop.svg'
import ButtonLink               from "../common/ButtonLink";
import { Fade }                 from "react-awesome-reveal";

const Nav = () => {
  const textLinkClasses = 'text-gray-500 hover:text-gray-900 active:text-gray-400'

  const navLinks = [
    {href: '#features', children: 'Features'},
    {href: '#partners', children: 'Partners'},
    {href: '#reviews', children: 'Reviews'},
  ]
  return (
    <Fade
      cascade
      direction={'down'}
      delay={600}
      damping={1e-1}
      triggerOnce={true}
    >
      <Disclosure as={`nav`}>
        {
          ({open}) => (
            <>
              <div className={`flex h-[10vh] max-w-7xl items-center justify-between px-10 lg:px-12 xl:m-auto z-100`}>
                <div className={`flex`}>
                  <ButtonLink
                    href={`#`}
                    children={
                      <img
                        src={Paydrop}
                        alt={`logo`}
                      />
                    }
                  />
                  <div className={`ml-4 hidden items-center space-x-4 sm:ml-6 sm:flex lg:ml-8 lg:space-x-8`}>
                    {
                      navLinks.map((link, index) => (
                        <ButtonLink
                          key={index}
                          href={link.href}
                          children={link.children}
                          className={textLinkClasses}
                        />
                      ))
                    }
                  </div>
                </div>
                <ButtonLink
                  href={'#'}
                  target={`_blank`}
                  children={'Contact'}
                  className={`active:bg hidden rounded-full bg-gray-800 px-5 py-3 text-white hover:bg-gray-900 active:bg-gray-600 sm:flex`}
                />
                <Disclosure.Button className={`rounded-md p-2 text-gray-500 hover:bg-gray-900 hover:text-white sm:hidden z-10`}>
                  {
                    open ? (
                      <XMarkIcon className={`block h-6 w-6 `}/>
                    ) : (
                      <Bars3Icon className={`block h-6 w-6`}/>
                    )
                  }
                </Disclosure.Button>
              </div>
              <Disclosure.Panel className={"w-full bg-gray-100 fixed top-0 z-[100] h-fit shadow-xl"}>
                <div className={`flex flex-col justify-center mb-5`}>
                  <div className={`flex h-[10vh] items-center justify-between px-10 lg:px-12 xl:m-auto z-100`}>
                    <ButtonLink
                      href="#"
                      children={
                        <img
                          src={Paydrop}
                          alt={`logo`}
                        />
                      }
                    />
                    <Disclosure.Button className={`rounded-md p-2 text-gray-500 hover:bg-gray-900 hover:text-white sm:hidden z-10`}>
                      {
                        open ? (
                          <XMarkIcon className={`block h-6 w-6 `}/>
                        ) : (
                          <Bars3Icon className={`block h-6 w-6`}/>
                        )
                      }
                    </Disclosure.Button>
                  </div>
                  {
                    navLinks.map((link, index) => (
                      <Disclosure.Button
                        className={`text-black hover:bg-gray-300 rounded-md text-base font-medium px-5 py-4 mx-5`}
                        as={`a`}
                        href={link.href}
                        key={index}
                      >
                        {link.children}
                      </Disclosure.Button>
                    ))
                  }
                  <ButtonLink
                    href={'#'}
                    target={`_blank`}
                    children={'Contact'}
                    className={`bg-gray-800 text-white hover:bg-gray-300 rounded-md text-base font-medium px-5 py-4 mx-5`}
                  />
                </div>
              </Disclosure.Panel>
            </>
          )
        }
      </Disclosure>
    </Fade>
  );
};

export default Nav;
