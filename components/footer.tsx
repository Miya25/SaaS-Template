import Link from "next/link";
import { FaGithub, FaDiscord } from 'react-icons/fa';

export default function Footer() {

  let items = [
    { label: "Home", icon: "fa fa-home", link: "/", external: false },
  ];

  return (
    <>
      <div className="w-full flex justify-center px-10 lg:px-12">
        <footer className="max-w-7xl w-full py-6 pt-24">
          <div className="rounded-lg md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <Link href="/" legacyBehavior={true}>
                <div className="cursor-pointer col-span-2 flex items-center mr-6">
                  <p className="pointer-events-none text-black dark:text-white font-semibold text-2xl">
                    Saas<span className="text-primary"></span>‎ App
                  </p>
                </div>
              </Link>
              <div className="flex space-x-4">
                <a
                  href="https://x.com/ranveersoni98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center w-8 h-8 bg-main-700 rounded-full mr-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                    />
                  </svg>
                  <span className="sr-only">X</span>
                </a>
                <a
                  href="https://github.com/miya25/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center w-8 h-8 bg-main-700 rounded-full mr-2"
                >
                  <FaGithub className="text-white hover:opacity-75" />
                  <span className="sr-only">GitHub</span>
                </a>
              </div>
            </div>
            <ul className="flex sm:flex-row flex-col mt-6 sm:mt-0 flex-wrap lg:items-center mb-6 gap-4 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
              {items.map((item, index) => (
                <Link href={item.link} key={index} legacyBehavior={true}>
                  <a
                    className={`relative text-slate-600 font-medium dark:text-zinc-400 hover:text-black hover:dark:text-white transition-all duration-200`}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </ul>
          </div>

          <div className="col-span-4 flex flex-col lg:flex-row justify-between items-center pt-2 md:pt-4 lg:pt-6 border-t border-zinc-500/5 mt-2 md:mt-4 lg:mt-6">
  <p className="text-slate-600 dark:text-zinc-400 font-medium">
    &copy; {new Date().getFullYear()} © RSenterprises. All rights reserved.
  </p>
  <p className="text-slate-600 dark:text-zinc-400 font-medium">
    Powered with <span className="text-red-500">❤</span> by{" "}
    <a
      href="https://topiclist.xyz"
      target="_blank"
      className="text-primary"
    >
      TopicList
    </a>
  </p>
</div>
        </footer>
      </div>
    </>
  );
}
