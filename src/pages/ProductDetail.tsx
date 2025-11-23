import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';
import { getProductByCode } from '../data/products';

const ProductDetail = () => {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  const product = getProductByCode(code || '');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">The product you are looking for does not exist.</p>
        <button
          onClick={() => navigate('/products')}
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Products
        </button>
      </div>
    );
  }

  const hasMultipleImages = product.images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="mb-8">
        <Link to="/products" className="text-gray-500 hover:text-blue-600 flex items-center">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Products
        </Link>
      </nav>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Image Gallery */}
          <div className="bg-gray-100 p-8 relative flex flex-col items-center justify-center h-[500px] md:border-r border-gray-200">
            {product.images.length > 0 ? (
              <>
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={product.images[currentImageIndex]}
                    alt={`Product ${product.code} - View ${currentImageIndex + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {hasMultipleImages && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-md hover:bg-white text-gray-700 transition-all"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-md hover:bg-white text-gray-700 transition-all"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>

                    {/* Thumbnails */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4 overflow-x-auto">
                      {product.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-16 h-16 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                            idx === currentImageIndex
                              ? 'border-blue-600 opacity-100'
                              : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover bg-white" />
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center text-gray-400">
                <ImageIcon className="h-20 w-20 mb-4" />
                <span>No Image Available</span>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="p-8 md:p-12 flex flex-col">
            <div className="mb-auto">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Product Detail
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Code: <span className="text-blue-600">{product.code}</span>
              </h1>

              {product.description && (
                <div className="prose prose-blue text-gray-600 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-lg leading-relaxed">{product.description}</p>
                </div>
              )}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Interested in this product?</h3>
              <p className="text-gray-600 mb-6">
                Contact us with the product code <strong className="text-gray-900">{product.code}</strong> to get a quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`mailto:billy@easypiping.com?subject=Inquiry for Product ${product.code}`}
                  className="flex-1 inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
                >
                  Email Inquiry
                </a>
                <Link
                  to="/contact"
                  className="flex-1 inline-flex justify-center items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

