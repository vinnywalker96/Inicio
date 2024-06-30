const SignupPage = () => {
  return (
    <section className="bg-gray-100 py-8 mb-12"> {/* Added margin-bottom and padding-bottom */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center"> {/* Changed align-items-end to align-items-center and centered the signup form */}
          <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full mx-auto"> {/* Centered the signup form */}
            <form className="bg-teal-800 rounded-lg p-8 mb-4"> {/* Added margin-bottom */}
              <h5 className="text-white text-lg font-bold mb-4">SIGN UP</h5> {/* Changed heading to SIGN UP */}
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full mb-4 p-2 border border-white rounded bg-teal-700 text-white placeholder-white focus:outline-none"
              /> {/* Added Name field */}
              <input
                type="text"
                placeholder="Surname"
                required
                className="w-full mb-4 p-2 border border-white rounded bg-teal-700 text-white placeholder-white focus:outline-none"
              /> {/* Added Surname field */}
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full mb-4 p-2 border border-white rounded bg-teal-700 text-white placeholder-white focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full mb-4 p-2 border border-white rounded bg-teal-700 text-white placeholder-white focus:outline-none"
              /> {/* Changed placeholder to Phone Number */}
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full mb-4 p-2 border border-white rounded bg-teal-700 text-white placeholder-white focus:outline-none"
              />
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-teal-600 text-white py-2 px-6 rounded hover:bg-teal-500 transition duration-300"
                >
                  Sign Up
                </button> {/* Changed button text to Sign Up */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
