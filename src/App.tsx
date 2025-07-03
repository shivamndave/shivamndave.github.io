import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  {
    name: "GitHub",
    href: "https://github.com/shivamndave",
    target: "_blank",
    current: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shivamndave",
    target: "_blank",
    current: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Nav = () => {
  return (
    <Disclosure as="nav" className="bg-stone-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <img alt="" src="/img_1.JPG" className="size-8 rounded-full" />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <img alt="" src="/img_1.JPG" className="size-8 rounded-full" />
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.target}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

function App() {
  return (
    <>
      <Nav />
      <div>
        <main className="flex min-h-screen flex-col items-center pt-28 bg-stone-900 p-4">
          <h1 className="text-2xl font-bold text-white mb-4 text-center mt-4 md:hidden block">
            Hello, I am Shivam Dave
            <br />
            Full stack software engineer
          </h1>
          <div className="flex space-x-4 mb-4">
            <h1 className="text-2xl font-bold text-white mb-4 text-right mt-4 hidden md:block">
              Hello, I am Shivam Dave
              <br />
              Full stack software engineer
            </h1>
            <img alt="" src="/img_1.JPG" className="size-24 rounded-full" />
            <img alt="" src="/img_2.JPG" className="size-24 rounded-full" />
            <img alt="" src="/img_3.JPG" className="size-24 rounded-full" />
          </div>
          <p className="text-white text-center mb-6 sm:w-120">
            Please use the links in the navigation bar for more information
            about me. Currently this site is under development :)
          </p>
        </main>
      </div>
    </>
  );
}

export default App;
