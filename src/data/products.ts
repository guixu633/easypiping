export interface ProductData {
  code: string;
  images: string[];
  description?: string;
}

export const CATEGORIES = [
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

export const PRODUCTS: Record<string, ProductData[]> = {
  'plastic-pipe-tool': [
    { 
      code: '60001', 
      images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61001.png'],
      description: 'Professional PEX tool.'
    },
    { code: '61002', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61002.png'] },
    { code: '61003', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61003.png'] },
    { code: '61004', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61004.png'] },
    { code: '61005', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61005.png'] },
    { code: '61006', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61006.png'] },
    { code: '61007', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61007.png'] },
    { code: '61008', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61008.png'] },
    { 
      code: '61009', 
      images: [
        'http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61009-1.jpg',
        'http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61009-2.jpg'
      ] 
    },
    { 
      code: '61010', 
      images: [
        'http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61010-1.png',
        'http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61010-2.jpg'
      ] 
    },
    {
      code: '61020',
      images: [
        'http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61020-1.jpg',
        'http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61020-2.jpg',
        'http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61020-3.jpg',
        'http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61020-4.jpg'
      ]
    },
    { code: '61022', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61022.png'] },
    { code: '61024', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/61024.png'] },
  ],
  'tube-tool': [
    { code: '62001', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62001.jpg'] },
    { code: '62002', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62002.jpg'] },
    { code: '62003', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62003.png'] },
    { code: '62006', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62006.png'] },
    { code: '62007', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62007.png'] },
    { code: '62008', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62008-1.jpg', 'http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62008-2.jpg'] },
    { code: '62009', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62009.jpg'] },
    { code: '62010', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62010.png'] },
    { code: '62011', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62011.png'] },
    { code: '62012', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62012.jpg'] },
    { code: '62013', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62013-1.png', 'http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62013-2.jpg'] },
    { code: '62014', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62014-1.jpg','http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62014-2.jpg'] },
    { code: '62015', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62015.png'] },
    { code: '62016', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62016.jpg'] },
    { code: '62017', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62017.png'] },
    { code: '62018', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62018.jpg'] },
    { code: '62020', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62020.jpg'] },
    { code: '62030', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62030.jpg'] },
    { code: '62040', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62040.jpg'] },
    { code: '62042', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62042.jpg'] },
    { code: '62044', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62044.png'] },
    { code: '62045', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62045.jpg'] },
    { code: '62057', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62057.jpg'] },
    { code: '62060', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62060-1.jpg', 'http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62060-2.jpg','http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62060-3.jpg'] },
    { code: '62061', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62061.png'] },
    { code: '62062', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62062.jpg'] },
    { code: '62063', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62063.png'] },
  ],
  'pipe-gripping-tool': [],
  'steel-pipe-cutters': [],
  'test-pump': [],
  'pipe-making-machine': [],
  'drain-cleaning-machine': [],
  'diamond-coredrill-machine': [],
  'butt-fusion-machine': [],
  'other-tools': [],
};

export const getAllProducts = () => {
  const allProducts: ProductData[] = [];
  Object.values(PRODUCTS).forEach(categoryProducts => {
    allProducts.push(...categoryProducts);
  });
  return allProducts;
};

export const getProductByCode = (code: string) => {
  const allProducts = getAllProducts();
  return allProducts.find(p => p.code === code);
};
