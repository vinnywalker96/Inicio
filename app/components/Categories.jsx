"use client"

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const categories = [
  {
    name: 'Automobile',
    subcategories: [
      { name: 'Cars', subtypes: ['SUV', 'Sedan', 'Pickup', 'Hatchback', 'Station Wagon'] },
      { name: 'Bikes', subtypes: ['Scooter', 'Motocross', 'Sport Bikes', 'Cruiser'] },
      { name: 'Trucks', subtypes: ['Tow Truck', 'Tanker', 'Trailer Truck', 'Tipper Truck', 'Refrigerated Trucks', 'Log Carrier Trucks'] },
      { name: 'Medium and Heavy Commercials', subtypes: ['Garbage Truck', 'Concrete Mixer', 'Fuel Truck', 'Bulldozer', 'Front and Backhoe Loader', 'Road Roller', 'Skid Steer Loader', 'Excavator', 'Forklift', 'Backhoe Loader', 'Crane Truck'] },
      { name: 'Farm Vehicles', subtypes: ['Farm Tractor', 'ATV', 'RTV', 'UTV', 'Seeders', 'Balers', 'Trailers'] }
    ]
  },
  {
    name: 'Electronics',
    subcategories: [
      'Audio and Sound Equipment',
      'Cell phone and accessories',
      'Computer and Laptops',
      'Camera and photography',
      'Gaming and consoles',
      'TV and screens',
      'Electrical and Electronic components: DC/AC inverts, LED and LCD, Fuse Holder, Header connectors, Heat sink, Housing and Wafer, IC Sockets, Knobs, Multimeters, Relay, Semi-conductors, Solderless Breadboard, Switches, Terminal Blocks. Tools, Other.'
    ]
  },
  { name: 'Boats', subcategories: ['Boats', 'Yachts', 'Watercraft and Accessories', 'Other'] },
  { name: 'B2B', subcategories: ['Business for sale', 'Office equipment and furniture', 'Industrial Machinery', 'Other'] },
  { name: 'Charity' },
  { name: 'Community', subcategories: ['Activities and hobbies', 'Lost and Found'] },
  { name: 'Events', subcategories: ['Events, Gigs & Nightlife', 'Other'] },
  {
    name: 'Online and Essential Services',
    subcategories: [
      'Online classes and tutoring',
      'Online spiritual counselling',
      'Courier services and deliver',
      'Home maintenance',
      'Pest control',
      'Laundry services',
      'Security services',
      'Other essential services'
    ]
  },
  {
    name: 'Property',
    subcategories: [
      'For rent',
      'For sale',
      'Commercial property rent',
      'Commercial property sale',
      'Other'
    ]
  },
  {
    name: 'Home',
    subcategories: [
      'Furniture',
      'Home appliances',
      'Home décor',
      'Home garden',
      'Hand tools and power tools',
      'Other'
    ]
  },
  { name: 'Kids', subcategories: ['Kids clothing', 'Kids furniture', 'Kids toys', 'Nursery', 'Other'] },
  {
    name: 'Fashion',
    subcategories: ['Clothing', 'Shoes', 'Accessories', 'Wedding wear', 'Jewellery and Watches', 'Other']
  },
  {
    name: 'Pets',
    subcategories: ['Birds', 'Dogs', 'Cats', 'Fish', 'Horses', 'Livestock', 'Reptiles', 'Other pets', 'Pets accessories']
  },
  {
    name: 'Sports',
    subcategories: ['Camping gear', 'Bicycles', 'Sport Fitness Gear', 'Other']
  },
  { name: 'Job' },
  { name: 'Job seekers' },
  { name: 'Trade' },
  { name: 'Freebie' },
  {
    name: 'Services',
    subcategories: [
      'Appliance Repairs',
      'Automotive Services',
      'Building and Trade',
      'Chauffeur',
      'Child Care',
      'Cleaning Services',
      'Courses',
      'Entertainment Services',
      'Satellite Services',
      'Electronics and IT Services',
      'Event Services',
      'Health and Beauty Services',
      'Landscaping and Gardening Services',
      'Legal Services',
      'Party and Catering',
      'Pet Services',
      'Photo and Video Services',
      'Real Estate Services',
      'Tutors',
      'Travel Agents and Tours',
      'Wedding Venues and Wedding Services',
      'Other Services'
    ]
  }
];

const Categories = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();

  const handleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const navigateToCategory = (categoryName) => {
    router.push(`/shop/${categoryName}`);
  };

  const navigateToSubcategory = (categoryName, subcategoryName) => {
    router.push(`/shop/${categoryName}/${subcategoryName}`);
  };

  const renderCategories = (start, end) => {
    return categories.slice(start, end).map((category, index) => (
      <div key={category.name} className="relative group">
        <button
          onClick={() => handleDropdown(index)}
          className="px-3 py-3 rounded-md text-sm font-large hover:bg-[#2D6B66]"
        >
          {category.name}
        </button>
        {category.subcategories && (
          <div
            className={`absolute left-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
              activeDropdown === index ? 'block' : 'hidden'
            } group-hover:block`}
          >
            <div className="py-1">
              {category.subcategories.map((subcategory, subIndex) => (
                <div key={subIndex} className="relative group">
                  {typeof subcategory === 'string' ? (
                    <Link href="#" onClick={() => navigateToSubcategory(category.name, subcategory)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      {subcategory}
                    </Link>
                  ) : (
                    <>
                      <Link href="#" onClick={() => navigateToSubcategory(category.name, subcategory.name)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        {subcategory.name}
                      </Link>
                      {subcategory.subtypes && (
                        <div className="absolute left-full top-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                          <div className="py-1">
                            {subcategory.subtypes.map((subtype, subtypeIndex) => (
                              <Link key={subtypeIndex} href="#" onClick={() => router.push(`/shop/${category.name}/${subcategory.name}/${subtype}`)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                {subtype}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    ));
  };

  return (
    <nav className="bg-[#2D6B66] text-white">
      <div className="mx-auto px-3 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#2D6B66]"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex flex-wrap">
                <div className="hidden lg:flex">
                  {renderCategories(0, 11)}
                  {categories.length > 11 && (
                    <div className="relative group">
                      <button
                        className="px-3 py-3 rounded-md text-sm font-large hover:bg-[#2D6B66]"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      >
                        More Categories
                      </button>
                      <div
                        className={`absolute left-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
                          mobileMenuOpen ? 'block' : 'hidden'
                        }`}
                      >
                        <div className="py-1">
                          {renderCategories(11, categories.length)}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="hidden md:flex lg:hidden">
                  {renderCategories(0, 7)}
                  {categories.length > 7 && (
                    <div className="relative group">
                      <button
                        className="px-3 py-3 rounded-md text-sm font-large hover:bg-[#2D6B66]"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      >
                        More Categories
                      </button>
                      <div
                        className={`absolute left-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
                          mobileMenuOpen ? 'block' : 'hidden'
                        }`}
                      >
                        <div className="py-1">
                          {renderCategories(5, categories.length)}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {categories.map((category, index) => (
            <div key={category.name} className="relative group">
              <button
                onClick={() => handleDropdown(index)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                {category.name}
              </button>
              {category.subcategories && activeDropdown === index && (
                <div className="pl-4 space-y-1">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <div key={subIndex} className="relative group">
                      {typeof subcategory === 'string' ? (
                        <Link href="#" onClick={() => navigateToSubcategory(category.name, subcategory)} className="block px-3 py-2 text-sm text-gray-200 hover:bg-gray-600">
                          {subcategory}
                        </Link>
                      ) : (
                        <>
                          <Link href="#" onClick={() => navigateToSubcategory(category.name, subcategory.name)} className="block px-3 py-2 text-sm text-gray-200 hover:bg-gray-600">
                            {subcategory.name}
                          </Link>
                          {subcategory.subtypes && (
                            <div className="pl-4 space-y-1">
                              {subcategory.subtypes.map((subtype, subtypeIndex) => (
                                <Link key={subtypeIndex} href="#" onClick={() => router.push(`/shop/${category.name}/${subcategory.name}/${subtype}`)} className="block px-3 py-2 text-sm text-gray-200 hover:bg-gray-600">
                                  {subtype}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Categories;
