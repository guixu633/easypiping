import { useState } from 'react';
import { ChevronRight, Image as ImageIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../data/products';

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES[0].id);
  const navigate = useNavigate();

  const currentProducts = PRODUCTS[selectedCategory] || [];

  const handleProductClick = (code: string) => {
    navigate(`/products/${code}`);
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
              Browse products by Code. Click on a product to view all images and details.
            </p>
          </div>

          {currentProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map((product) => {
                return (
                  <div 
                    key={product.code} 
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col cursor-pointer group"
                    onClick={() => handleProductClick(product.code)}
                  >
                    {/* Image Area - Only show first image */}
                    <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                      {product.images.length > 0 ? (
                        <img 
                          src={product.images[0]} 
                          alt={`Product ${product.code}`} 
                          className="max-w-full max-h-full object-contain p-4 transform group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-48 flex items-center justify-center text-gray-400">
                          <ImageIcon className="h-12 w-12" />
                        </div>
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
