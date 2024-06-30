import Image from 'next/image';
import contactImage from '../../public/sec4.png';

const ContactSection = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-end">
          <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full mb-8 lg:mb-0">
            <form className="bg-[#2D6B66] text-white p-8 rounded-t-md shadow-lg">
              <h5 className="text-white mb-4">CONTACT US</h5>
              <input type="email" placeholder="Email" required className="w-full mb-4 p-2 bg-[#2D6B66] border border-white rounded-md text-white placeholder-white focus:outline-none" />
              <input type="text" placeholder="Phone No." required className="w-full mb-4 p-2 bg-[#2D6B66] border border-white rounded-md text-white placeholder-white focus:outline-none" />
              <div className="text-center">
                <button type="submit" className="bg-teal-800 text-white py-2 px-4 rounded-md hover:bg-teal-900">Submit</button>
              </div>
            </form>
          </div>
          <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full">
            <div className="text-right">
              <Image src={contactImage} alt="Contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
