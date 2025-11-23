const Solutions = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Industry Solutions</h1>
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <img src="https://placehold.co/600x400?text=Oil+%26+Gas" alt="Oil & Gas" className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Oil & Gas</h2>
            <p className="text-gray-600 mb-4">
              Comprehensive piping solutions for upstream, midstream, and downstream operations. 
              Our products are designed to withstand extreme conditions and meet rigorous safety standards.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>High-pressure pipelines</li>
              <li>Refinery piping systems</li>
              <li>Offshore drilling equipment</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="flex-1">
            <img src="https://placehold.co/600x400?text=Construction" alt="Construction" className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Construction & Infrastructure</h2>
            <p className="text-gray-600 mb-4">
              Reliable piping systems for commercial buildings, water treatment plants, and urban infrastructure projects.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>HVAC systems</li>
              <li>Water supply and drainage</li>
              <li>Fire protection systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;

