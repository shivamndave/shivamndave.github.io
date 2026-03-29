import {
  createRootRoute,
  Link,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const logo = "/img_1.JPG";
const navigation = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shivamndave",
    target: "_blank",
  },
  {
    name: "GitHub",
    href: "https://github.com/shivamndave",
    target: "_blank",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Nav = () => {
  const routerState = useRouterState();
  return (
    <Disclosure
      as="nav"
      className="bg-gradient-to-r from-stone-800 via-stone-900 to-stone-900 sticky top-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <Link to="/">
              <img alt="" src={logo} className="size-8 rounded-full" />
            </Link>
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
                <Link to="/">
                  <img
                    alt=""
                    src="/img_1.JPG"
                    className="size-8 rounded-full"
                  />
                </Link>
                {navigation.map((item) => {
                  const isCurrent = item.href === routerState.location.pathname;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      target={item.target}
                      aria-current={isCurrent ? "page" : undefined}
                      className={classNames(
                        isCurrent
                          ? "bg-gray-900 text-yellow-100"
                          : "text-gray-100 hover:bg-gray-700 hover:text-yellow-100",
                        "rounded-md px-3 py-2 text-sm font-medium",
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => {
            const isCurrent = item.href === routerState.location.pathname;
            return (
              <Link
                to={item.href}
                target={item.target}
                aria-current={isCurrent ? "page" : undefined}
                key={item.name}
              >
                <DisclosureButton
                  as="span"
                  className={classNames(
                    isCurrent
                      ? "bg-gray-900 text-yellow-100"
                      : "text-gray-100 hover:bg-gray-700 hover:text-yellow-100",
                    "block rounded-md px-3 py-2 text-base font-medium",
                  )}
                >
                  {item.name}
                </DisclosureButton>
              </Link>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export const Route = createRootRoute({
  component: () => (
    <>
      <Nav />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
