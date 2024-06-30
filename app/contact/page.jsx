import Image from 'next/image';
import sec4Image from '../../public/sec4.png';

const ContactPage = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end">
          <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full mb-8 lg:mb-0">
            <form className="bg-teal-800 rounded-lg p-8">
              <h5 className="text-white text-lg font-bold mb-4">CONTACT US</h5>
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full mb-4 p-2 border border-white rounded bg-teal-700 text-white placeholder-white focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full mb-4 p-2 border border-white rounded bg-teal-700 text-white placeholder-white focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone No."
                required
                className="w-full mb-4 p-2 border border-white rounded bg-teal-700 text-white placeholder-white focus:outline-none"
              />
              <textarea
                placeholder="Message"
                required
                className="w-full mb-4 p-2 border border-white rounded bg-teal-700 text-white placeholder-white focus:outline-none"
                style={{ height: '150px' }}
              ></textarea>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-teal-600 text-white py-2 px-6 rounded hover:bg-teal-500 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full">
            <div className="flex justify-end">
              <Image src={sec4Image} alt="Contact Us" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
