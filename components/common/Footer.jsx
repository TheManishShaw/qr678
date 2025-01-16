import Image from "next/image";
import React from "react";
const footerItems = {
  Company: [
    { link: "/about-us", name: "About" },
    // { link: "/", name: "Testimonials" },
    { link: "/products", name: "Before/After" },
    { link: "https://blog.qr678.com", name: "Blogs" },
  ],
  // Region: [
  //   { link: "", name: "Indonesia" },
  //   { link: "", name: "Singapore" },
  //   { link: "", name: "Hongkong" },
  //   { link: "", name: "Canada" },
  // ],
  Help: [
    { link: "/faq", name: "FAQ" },
    { link: "/contact-us", name: "Contact Us" },
    // { link: "#", name: "Become a Trichopreneur" },
    // { link: "#", name: "How it works" },
  ],
};
const Footer = () => {
  return (
    <div>
      <footer className="wow fadeInUp overflow-hidden text-white relative z-10 bg-primary pt-20 lg:pt-[50px]">
        <div className="max-w-screen-xl mx-auto ">
          <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-7 gap-3 p-2">
            <div className="w-full px-2  ">
              <div className="md:mb-10 w-full">
                <a
                  href="javascript:void(0)"
                  className="mb-6 inline-block max-w-[160px]"
                >
                  <Image
                    src="/assets/svg/logo/logo-white.svg"
                    alt="logo"
                    className="max-w-full"
                    width={200}
                    height={100}
                  />
                </a>
              </div>
            </div>
            <div className="w-full  ">
              <div className="mb-10 w-full">
                <h4 className="mb-3 text-lg font-semibold text-white">
                  Our Contact Details
                </h4>
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-3 inline-block text-base text-gray-7 "
                    >
                      Let’s connect.
                    </a>
                  </li>
                </ul>
                <h4 className="mb-2 mt-3 text-lg font-semibold text-white">
                  Telephone
                </h4>
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-2 inline-block text-base text-gray-7 "
                    >
                      +91 83538 35330
                    </a>
                  </li>
                </ul>
                <h4 className="mb-2 mt-3 text-lg font-semibold text-white">
                  WhatsApp
                </h4>
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-3 inline-block text-base text-gray-7 "
                    >
                      +91 9876 543 210
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-2  md:col-span-2">
              <div className="mb-10 w-full">
                <h4 className="mb-3 text-lg font-semibold text-white">
                  Office
                </h4>
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-3 inline-block text-base "
                    >
                      1st & 2nd Floor, Navratnamala Cooperative Housing Society
                      Limited, First Floor CTS No 6946 , CST Road, Back Side Of,
                      Bandra Kurla Complex, Santacruz East, Mumbai, Maharashtra
                      400098
                    </a>
                  </li>
                </ul>
                <h4 className="my-2 text-lg font-semibold text-white">Email</h4>
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-3 inline-block text-base "
                    >
                      info@qr678.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-2">
              <div className="mb-10 w-full">
                <h4 className="mb-3 text-lg font-semibold text-white">
                  Company
                </h4>
                <ul>
                  {footerItems.Company.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.link}
                        className="mb-3 inline-block text-base "
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* <div className="w-full px-2 ">
              <div className="mb-10 w-full">
                <h4 className="mb-3 text-lg font-semibold text-white">
                  Region
                </h4>
                <ul>
                  {footerItems.Region.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.link}
                        className="mb-3 inline-block text-base text "
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
            <div className="w-full px-2 ">
              <div className="mb-10 w-full">
                <h4 className="mb-3 text-lg font-semibold text-white">Help</h4>
                <ul>
                  {footerItems.Help.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.link}
                        className="mb-3 inline-block text-base "
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className=" py-8 ">
          <div className="">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 ">
                <div className="my-1 flex justify-center md:justify-center">
                  <p className="text-base text-gray-7">
                    QR678® Neo  © 2019-24. All rights reserved.
                    {/* <a
                      href="https://tailgrids.com"
                      rel="nofollow noopner"
                      target="_blank"
                      className="text-gray-1 hover:underline"
                    >
                      TailGrids and UIdeck
                    </a> */}
                  </p>
                </div>
                <div className="my-1 flex justify-center md:justify-center">
                  <p className="text-base text-center text-gray-7">
                    The QR678® Neo  is a patented, proprietary product.  Any
                    infringement of any kind will invite legal action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="absolute left-0 top-0 z-[-1]"></span>

          <span className="absolute bottom-0 left-0 z-[-1]">
            <Image
              src="/assets/svg/common/shape2.svg"
              alt="shape"
              height={100}
              width={100}
            />
          </span>

          <span className="absolute right-0 -top-[27px] z-[-1]">
            <Image
              src="/assets/svg/common/shape1.svg"
              alt="shape"
              height={100}
              width={100}
            />
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
