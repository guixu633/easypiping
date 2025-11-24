import { Download, FileText, CheckCircle, ArrowRight } from 'lucide-react';

const Catalog = () => {
  const catalogUrl = "http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/easypiping_catalogue.pdf";
  
  const features = [
    "Plastic pipe (pex) tools",
    "Tube (Copper & Stainless steel) tools",
    "Pipe gripping tools",
    "Steel pipe cutters",
    "Test pumps",
    "Pipe making machines",
    "Drain cleaning machines",
    "Diamond core drill machines",
    "Butt fusion machines"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Product Catalogue</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Discover our comprehensive range of professional piping tools and machinery. 
            Download the full catalogue for detailed specifications and technical data.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* Left Column: Preview & Download */}
            <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col justify-center bg-white">
              <div className="flex items-start space-x-4 mb-8">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <FileText className="w-12 h-12 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">2025 Full Catalogue</h2>
                  <p className="text-gray-500">Format: PDF • Size: 4.32MB</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Get instant access to our complete product line including detailed diagrams, 
                part numbers, and technical specifications for all our professional-grade tools.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={catalogUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
                >
                  <Download className="mr-2 h-6 w-6" />
                  Download PDF
                </a>
              </div>
            </div>

            {/* Right Column: Content Preview */}
            <div className="p-8 md:p-12 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900 mb-6">What's Inside:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h4 className="font-semibold text-blue-900 mb-2">Need a physical copy?</h4>
                <p className="text-blue-700 text-sm mb-4">
                  Contact our sales team to request a printed catalogue mailed to your office.
                </p>
                <a href="/contact" className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium text-sm">
                  Contact Sales <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;

