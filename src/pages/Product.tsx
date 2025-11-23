import { useState } from 'react';
import { ChevronRight, Image as ImageIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Define categories
const CATEGORIES = [
  { id: 'plastic-pipe-tool', name: 'Plastic pipe (pex) tool' },
  { id: 'tube-tool', name: 'Tube (Copper stainless steel) tool' },
  { id: 'pipe-gripping-tool', name: 'Pipe gripping tool' },
  { id: 'steel-pipe-cutters', name: 'Steel pipe cutters' },
  { id: 'test-pump', name: 'Test pump' },
  { id: 'pipe-making-machine', name: 'Pipe making machine' },
  { id: 'drain-cleaning-machine', name: 'Drain cleaning machine' },
  { id: 'diamond-coredrill-machine', name: 'Diamond coredrill machine' },
  { id: 'butt-fusion-machine', name: 'Butt fusion machine' },
  { id: 'other-tools', name: 'Other tools' },
];

// Updated data structure
interface ProductData {
  code: string;
  images: string[]; // Array of image URLs
  description?: string;
}

// Sample products data
const PRODUCTS: Record<string, ProductData[]> = {
  'plastic-pipe-tool': [
    { 
      code: '60001', 
      images: [
        'http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61001.png'
      ],
      description: 'Professional PEX tool.'
    },
    { code: '61002', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61002.png'] },
    { code: '61003', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61003.png'] },
    { code: '61004', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61004.png'] },
    { code: '61005', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61005.png'] },
    { code: '61006', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61006.png'] },
    { code: '61007', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61007.png'] },
    { code: '61008', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61008.png'] },
    { code: '61009', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61009.png'] },
    { code: '61010', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61010.png'] },
  ],
  'tube-tool': [
    { 
      code: 'TT-105', 
      images: ['https://placehold.co/300x200?text=TT-105'],
      description: 'Manual tube bender set.'
    },
  ],
  // Add placeholders for other categories to show UI
  'pipe-gripping-tool': [],
  'steel-pipe-cutters': [],
  'test-pump': [],
  'pipe-making-machine': [],
  'drain-cleaning-machine': [],
  'diamond-coredrill-machine': [],
  'butt-fusion-machine': [],
  'other-tools': [],
};

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES[0].id);
  // Track current image index for each product code to allow swiping/switching images
  const [currentImageIndices, setCurrentImageIndices] = useState<Record<string, number>>({});
  const navigate = useNavigate();

  const currentProducts = PRODUCTS[selectedCategory] || [];

  const handleNextImage = (code: string, totalImages: number) => {
    setCurrentImageIndices(prev => ({
      ...prev,
      [code]: ((prev[code] || 0) + 1) % totalImages
    }));
  };

  const handleProductClick = (code: string) => {
    // Navigate to product detail page (to be implemented)
    // For now, we can just log or maybe navigate to a placeholder detail route if you wish
    console.log(`Navigate to product detail: ${code}`);
    // navigate(`/products/${code}`); // Uncomment when detail page is ready
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar - Category List */}
        <div className="w-full md:w-1/4 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <h2 className="font-semibold text-gray-900">Categories</h2>
            </div>
            <ul className="divide-y divide-gray-100">
              {CATEGORIES.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-3 flex items-center justify-between transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-50 text-blue-600 font-medium'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <span>{category.name}</span>
                    {selectedCategory === category.id && (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content - Product List */}
        <div className="w-full md:w-3/4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {CATEGORIES.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-500">
              Browse products by Code. Click on a product to view details.
            </p>
          </div>

          {currentProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map((product) => {
                const currentImageIndex = currentImageIndices[product.code] || 0;
                const hasMultipleImages = product.images.length > 1;

                return (
                  <div 
                    key={product.code} 
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col cursor-pointer group"
                    onClick={() => handleProductClick(product.code)}
                  >
                    {/* Image Area */}
                    <div className="relative aspect-w-3 aspect-h-2 bg-gray-100">
                      {product.images.length > 0 ? (
                        <img 
                          src={product.images[currentImageIndex]} 
                          alt={`Product ${product.code}`} 
                          className="w-full h-48 object-contain p-2 transform group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-48 flex items-center justify-center text-gray-400">
                          <ImageIcon className="h-12 w-12" />
                        </div>
                      )}
                      
                      {/* Image Indicators/Controls if multiple */}
                      {hasMultipleImages && (
                        <>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNextImage(product.code, product.images.length);
                            }}
                            className="absolute inset-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity z-10"
                          >
                            <span className="sr-only">Next Image</span>
                          </button>
                          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-20 pointer-events-none">
                            {product.images.map((_, idx) => (
                              <div 
                                key={idx}
                                className={`h-1.5 w-1.5 rounded-full ${
                                  idx === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    <div className="p-4 flex-grow flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          Code: <span className="text-blue-600">{product.code}</span>
                        </h3>
                      </div>
                      
                      {product.description && (
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {product.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-lg border border-dashed border-gray-300 p-12 text-center">
              <p className="text-gray-500 mb-2">No products found in this category.</p>
              <p className="text-sm text-gray-400">Please check back later or contact us for more information.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
