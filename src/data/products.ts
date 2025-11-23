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
  'pipe-gripping-tool': [
    { code: '62064', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62064.jpg'] },
    { code: '62065', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62065.jpg'] },
    { code: '62066', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62066.png'] },
    { code: '62067', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62067.png'] },
    { code: '62068', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62068.png'] },
    { code: '62069', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/62069.png'] },
    { code: '63001', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/63001.png'] },
    { code: '63006', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/63006.jpg'] },
    { code: '63009', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/63009.png'] },
    { code: '63012', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/63012.png'] },
    { code: '63014', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/63014.png'] },
    { code: '63020', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/63020.jpg'] },
    { code: '63030', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/63030.jpg'] },
    { code: '63040', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/63040.jpg'] },
    { code: '63050', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/63050.jpg'] },
    { code: '63051', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/63051.png'] },
    { code: '63052', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/63052.png'] },
    { code: '63057', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/63057.png'] },
    { code: '63062', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/63062.jpg'] },
    { code: '63064', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/63064.jpg'] },
    { code: '63066', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/63066.jpg'] },
    { code: '63067', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/63067.jpg'] },
    { code: '63070', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/63070.jpg'] },
    { code: '63076', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/63076.jpg'] },
    { code: '63080', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/63080.jpg'] },
    { code: '63085', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/63085.png'] },
    { code: '63089', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/63089.jpg'] },
    { code: '63093', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/63093.jpg'] },
    { code: '63100', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/63100.jpg'] },
    { code: '63105', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/63105-1.jpg', 'http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/63105-2.jpg'] },
    { code: '63110', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/63110.jpg'] },
  ],
  'steel-pipe-cutters': [
    { code: '64001', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/64001-1.png', 'http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/64001-2.jpg'] },
    { code: '64002', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/64002.jpg'] },
    { code: '64005', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/64005-1.png', 'http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/64005-2.png'] },
    { code: '64010', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/64010-1.jpg', 'http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/64010-2.jpg'] },
    { code: '64020', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/64020.jpg'] },
    { code: '64021', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/64021.jpg'] },
    { code: '64030', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/64030.jpg'] },
    { code: '64040', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/64040.jpg'] },
  ],
  'test-pump': [
    { code: '64056', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/64056.png'] },
    { code: '64058', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/64058.png'] },
  ],
  'pipe-making-machine': [
    { code: '65001', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/65001-1.jpg', 'http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/65001-2.png', 'http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/65001-3.png'] },
    { code: '65002', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/65002-1.jpg', 'http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/65002-2.png', 'http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/65002-3.png'] },
    { code: '65003', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/65003.jpg'] },
    { code: '65004', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/65004.jpg'] },
    { code: '65005', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/65005.jpg'] },
    { code: '65006', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/65006.jpg'] },
    { code: '65007', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/65007.jpg'] },
    { code: '65008', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/65008.jpg'] },
    { code: '65009', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/65009.jpg'] },
    { code: '65020', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/65020.jpg'] },
    { code: '65031', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/65031.png'] },
  ],
  'drain-cleaning-machine': [
    { code: '66001', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/66001.jpg'] },
    { code: '66002', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/66002.jpg'] },
    { code: '66003', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/66003.jpg'] },
    { code: '66004', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/66004.jpg'] },
    { code: '66005', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/66005.jpg'] },
  ],
  'diamond-coredrill-machine': [],
  'butt-fusion-machine': [
    { code: '68001', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/68001-1.png', 'http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/68001-2.png'] },
    { code: '68002', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/68002.png'] },
    { code: '68003', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/68003.png'] },
  ],
  'other-tools': [
    { code: '69001', images: ['http://windwin.oss-cn-beijing.aliyuncs.com/easypiping/products/69001.jpg'] },
  ],
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
