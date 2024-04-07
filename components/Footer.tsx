import { socials } from "../constants";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="bg-black mt-10 sm:px-16 px-8 sm:py-24 py-12">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <Link href="/">
          <Image src="/images/logo1.png" width={100} height={100} alt="Logo" />
        </Link>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <Image src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
      <hr />
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
       
        <ul className="flex gap-5 flex-wrap">
            <a
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
             

            </a>
        </ul>
        <p className="caption text-white lg:block"> © {new Date().getFullYear()}.Trend Micro Incorporated. All rights reserved. </p>
    </div>
    </section>
  );
};

export default Footer;