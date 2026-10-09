import logo_2 from "../assets/xilancer logo.png"
import Image from "../Components/Image";
import {
  FaFacebook,
  FaDribbble,
  FaSquareXTwitter,
  FaLinkedin
} from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-black px-5 py-16 text-gray-300 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1170px]">

        {/* Footer Links */}
        <div className="mb-20 grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">

          {/* About */}
          <ul>
            <li className="mb-8 text-2xl font-semibold text-white">
              <a href="#">About</a>
            </li>
            <li className="mt-2 text-sm"><a href="#">About Us</a></li>
            <li className="mt-2 text-sm"><a href="#">Become Seller</a></li>
            <li className="mt-2 text-sm"><a href="#">Find Job</a></li>
            <li className="mt-2 text-sm"><a href="#">Pricing</a></li>
            <li className="mt-2 text-sm"><a href="#">Service</a></li>
            <li className="mt-2 text-sm"><a href="#">Terms of Service</a></li>
          </ul>

          {/* Categories */}
          <ul>
            <li className="mb-8 text-2xl font-semibold text-white">
              <a href="#">Categories</a>
            </li>
            <li className="mt-2 text-sm"><a href="#">Design &amp; Creative</a></li>
            <li className="mt-2 text-sm"><a href="#">Programming</a></li>
            <li className="mt-2 text-sm"><a href="#">Data</a></li>
            <li className="mt-2 text-sm"><a href="#">Development &amp; IT</a></li>
            <li className="mt-2 text-sm"><a href="#">Writing &amp; Translation</a></li>
            <li className="mt-2 text-sm"><a href="#">Finance &amp; Accounting</a></li>
            <li className="mt-2 text-sm"><a href="#">Digital Marketing</a></li>
            <li className="mt-2 text-sm"><a href="#">Business</a></li>
            <li className="mt-2 text-sm"><a href="#">Photography</a></li>
          </ul>

          {/* Support */}
          <ul>
            <li className="mb-8 text-2xl font-semibold text-white">
              <a href="#">Support</a>
            </li>
            <li className="mt-2 text-sm"><a href="#">Privacy Policy</a></li>
            <li className="mt-2 text-sm"><a href="#">Terms &amp; Condition</a></li>
            <li className="mt-2 text-sm"><a href="#">Help &amp; Support</a></li>
            <li className="mt-2 text-sm"><a href="#">Contact Us</a></li>
            <li className="mt-2 text-sm"><a href="#">Documentation</a></li>
          </ul>

          {/* Subscribe */}
          <div>
            <h3 className="mb-8 text-2xl font-semibold text-white">
              Subscribe
            </h3>

            <p className="text-sm leading-6">
              Receive Xilancer news, updates, exclusive discounts and early
              access.
            </p>

            <form
              className="mt-5 flex items-center gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 rounded-lg bg-gray-900 px-3 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-orange-500"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#ECEDEF] text-xl text-[#242B36] hover:bg-orange-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 3L10 14M21 3L14 21L10 14L3 10L21 3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-[#ECEDEF] pt-6 md:flex-row">

          <div>
            <Image imgSrc={logo_2}/>
          </div>

          <p className="text-center text-sm">
            ©2025 All rights reserved by Xgenious
          </p>

          <div className="flex gap-3 text-2xl text-white">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Dribbble"><FaDribbble /></a>
            <a href="#" aria-label="X"><FaSquareXTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
