const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About EasyPiping</h1>
        <p className="text-xl text-gray-600">
          We're EasyPiping Co., Ltd
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
        <div>
          <img src="https://placehold.co/600x400?text=Our+Team" alt="Our Team" className="rounded-lg shadow-lg" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-gray-600 mb-4">
            A manufacturer for tube tool and an Agent for medium scale manufacturers and distributors all over the world; we are very familiar to China hand tools makers, Thanks to so many years in this filed.
          </p>
          <p className="text-gray-600 mb-4">
            We specialized in: plumbing tools, pliers and tubing tools. Now we are developing construction machines market. We have been offering customers worldwide the absolutely best value in professional quality, innovative products.
          </p>
          <p className="text-gray-600">
            We also supplier: Adjustable wrenches, hammers and files, we are in China, so we know all the best makers in China.
          </p>
          <p className="text-gray-600 mt-4 italic">
            "For save your and your clients' money, instead of buying OEM products from EU or USA, it is time for you to buy from China directly, no matter what Brand tools you are buying, the original is 80% China."
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-blue-50 rounded-lg">
          <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
          <div className="text-gray-700 font-medium">Years Experience</div>
        </div>
        <div className="p-6 bg-blue-50 rounded-lg">
          <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
          <div className="text-gray-700 font-medium">Countries Served</div>
        </div>
        <div className="p-6 bg-blue-50 rounded-lg">
          <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
          <div className="text-gray-700 font-medium">Projects Completed</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

