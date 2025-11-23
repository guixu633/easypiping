const Product = () => {
  const products = [
    { id: 1, name: 'Steel Pipes', category: 'Pipes', image: 'https://placehold.co/400x300?text=Steel+Pipes' },
    { id: 2, name: 'Elbow Fittings', category: 'Fittings', image: 'https://placehold.co/400x300?text=Elbow+Fittings' },
    { id: 3, name: 'Gate Valves', category: 'Valves', image: 'https://placehold.co/400x300?text=Gate+Valves' },
    { id: 4, name: 'Flanges', category: 'Accessories', image: 'https://placehold.co/400x300?text=Flanges' },
    { id: 5, name: 'PVC Pipes', category: 'Pipes', image: 'https://placehold.co/400x300?text=PVC+Pipes' },
    { id: 6, name: 'Ball Valves', category: 'Valves', image: 'https://placehold.co/400x300?text=Ball+Valves' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-sm text-blue-600 font-semibold mb-1">{product.category}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
              <button className="mt-4 w-full bg-gray-100 text-gray-800 py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

