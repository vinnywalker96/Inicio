import Image from 'next/image';
import Link from 'next/link';
import footerLogo from '../../public/footer_logo.png';
import googlePlay from '../../public/GooglePlay.png';
import appStore from '../../public/AppStore.png';
import i1 from '../../public/i1.png';
import i2 from '../../public/i2.png';
import i3 from '../../public/i3.png';
import i4 from '../../public/i4.png';
import f1 from '../../public/f1.png';
import footerBg from '../../public/Footer.png';

const Footer = () => {
  return (
    <footer className="bg-cover bg-no-repeat py-8" style={{ backgroundImage: `url(${footerBg.src})` }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <div className="footer_logo">
              <Image src={footerLogo} alt="Footer Logo" />
            </div>
          </div>
          <div className="w-full lg:w-2/3 px-4">
            <div className="flex flex-wrap">
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                <div className="footer_text">
                  <h5 className="text-white mb-4">Support</h5>
                  <Link href="#">
                    <span className="text-gray-200 block mb-2">abc address office number 123</span>
                  </Link>
                  <Link href="mailto:vendor@gmail.com">
                    <span className="text-gray-200 block mb-2">vendor@gmail.com</span>
                  </Link>
                  <Link href="tel:+8801588888999">
                    <span className="text-gray-200 block">+88015-88888-9999</span>
                  </Link>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                <div className="footer_text">
                  <h5 className="text-white mb-4">Account</h5>
                  <Link href="#">
                    <span className="text-gray-200 block mb-2">My Account</span>
                  </Link>
                  <Link href="#">
                    <span className="text-gray-200 block mb-2">Login / Register</span>
                  </Link>
                  <Link href="#">
                    <span className="text-gray-200 block mb-2">Cart</span>
                  </Link>
                  <Link href="#">
                    <span className="text-gray-200 block mb-2">Wishlist</span>
                  </Link>
                  <Link href="/shop">
                    <span className="text-gray-200 block">Shop</span>
                  </Link>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                <div className="footer_text">
                  <h5 className="text-white mb-4">Quick Link</h5>
                  <Link href="#">
                    <span className="text-gray-200 block mb-2">Privacy Policy</span>
                  </Link>
                  <Link href="#">
                    <span className="text-gray-200 block mb-2">Terms Of Use</span>
                  </Link>
                  <Link href="#">
                    <span className="text-gray-200 block mb-2">FAQ</span>
                  </Link>
                  <Link href="#">
                    <span className="text-gray-200 block">Contact</span>
                  </Link>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                <div className="footer_text">
                  <h5 className="text-white mb-4">Download App</h5>
                  <div className="flex items-center gap-4">
                    <Image src={f1} alt="Download App" className="w-16" />
                    <div className="flex flex-col">
                      <Image src={googlePlay} alt="Google Play" className="pt-1" />
                      <Image src={appStore} alt="App Store" className="pt-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-5 py-8 flex-wrap">
          <Image src={i1} alt="Social Icon 1" />
          <Image src={i2} alt="Social Icon 2" />
          <Image src={i3} alt="Social Icon 3" />
          <Image src={i4} alt="Social Icon 4" />
        </div>
        <div className="border-t border-white opacity-40 my-10"></div>
        <div className="text-center">
          <p className="text-gray-200 opacity-40 text-base">Copyright abc 2023. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
