import Image from 'next/image';
import discountImage from '../../public/dicount.png';
import d1 from '../../public/d1.png';
import d2 from '../../public/d2.png';
import d3 from '../../public/d3.png';
import d4 from '../../public/d4.png';
import d5 from '../../public/d5.png';
import d6 from '../../public/d6.png';

const DiscountSection = () => {
  return (
    <section className="bg-opacity-30 bg-blue-300 py-8">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="w-1 h-full bg-black"></div>
          <label className="ml-2 font-semibold text-lg">Discounts of the week</label>
        </div>
        <h3 className="text-3xl mt-4 mb-6">Our Discount Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-6">
          {[d1, d2, d3, d4, d5, d6].map((productImage, index) => (
            <div key={index} className="border-2 border-gray-300 rounded-lg p-6 bg-white">
              <Image src={discountImage} alt="Discount" />
              <div className="flex justify-center py-4">
                <Image src={productImage} alt={`Product ${index + 1}`} width={100} height={100} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
