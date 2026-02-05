// قاعدة بيانات المنتجات والفئات المترابطة منطقياً

export interface Product {
  name: string;
  nameEn: string;
  brand: string;
  brandEn: string;
  minPrice: number;
  maxPrice: number;
  unit: string;
  unitEn: string;
}

export interface SubCategory {
  name: string;
  nameEn: string;
  products: Product[];
}

export interface Category {
  name: string;
  nameEn: string;
  icon: string;
  subCategories: SubCategory[];
}

export const productCategories: Category[] = [
  {
    name: 'إلكترونيات',
    nameEn: 'Electronics',
    icon: '📱',
    subCategories: [
      {
        name: 'هواتف ذكية',
        nameEn: 'Smartphones',
        products: [
          { name: 'آيفون 15 برو ماكس', nameEn: 'iPhone 15 Pro Max', brand: 'آبل', brandEn: 'Apple', minPrice: 4500, maxPrice: 5500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'آيفون 15 برو', nameEn: 'iPhone 15 Pro', brand: 'آبل', brandEn: 'Apple', minPrice: 4000, maxPrice: 4800, unit: 'قطعة', unitEn: 'piece' },
          { name: 'آيفون 15', nameEn: 'iPhone 15', brand: 'آبل', brandEn: 'Apple', minPrice: 3200, maxPrice: 3800, unit: 'قطعة', unitEn: 'piece' },
          { name: 'سامسونج جالكسي S24 ألترا', nameEn: 'Samsung Galaxy S24 Ultra', brand: 'سامسونج', brandEn: 'Samsung', minPrice: 4200, maxPrice: 5000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'سامسونج جالكسي S24+', nameEn: 'Samsung Galaxy S24+', brand: 'سامسونج', brandEn: 'Samsung', minPrice: 3500, maxPrice: 4200, unit: 'قطعة', unitEn: 'piece' },
          { name: 'سامسونج جالكسي S24', nameEn: 'Samsung Galaxy S24', brand: 'سامسونج', brandEn: 'Samsung', minPrice: 2800, maxPrice: 3400, unit: 'قطعة', unitEn: 'piece' },
          { name: 'سامسونج جالكسي Z فولد 5', nameEn: 'Samsung Galaxy Z Fold 5', brand: 'سامسونج', brandEn: 'Samsung', minPrice: 6000, maxPrice: 7500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'هواوي ميت 60 برو', nameEn: 'Huawei Mate 60 Pro', brand: 'هواوي', brandEn: 'Huawei', minPrice: 3800, maxPrice: 4500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'شاومي 14 ألترا', nameEn: 'Xiaomi 14 Ultra', brand: 'شاومي', brandEn: 'Xiaomi', minPrice: 3000, maxPrice: 3800, unit: 'قطعة', unitEn: 'piece' },
          { name: 'ون بلس 12', nameEn: 'OnePlus 12', brand: 'ون بلس', brandEn: 'OnePlus', minPrice: 2500, maxPrice: 3200, unit: 'قطعة', unitEn: 'piece' },
          { name: 'جوجل بيكسل 8 برو', nameEn: 'Google Pixel 8 Pro', brand: 'جوجل', brandEn: 'Google', minPrice: 3200, maxPrice: 3800, unit: 'قطعة', unitEn: 'piece' },
          { name: 'أوبو فايند X7 ألترا', nameEn: 'Oppo Find X7 Ultra', brand: 'أوبو', brandEn: 'Oppo', minPrice: 3500, maxPrice: 4200, unit: 'قطعة', unitEn: 'piece' },
        ]
      },
      {
        name: 'أجهزة لابتوب',
        nameEn: 'Laptops',
        products: [
          { name: 'ماك بوك برو 16', nameEn: 'MacBook Pro 16', brand: 'آبل', brandEn: 'Apple', minPrice: 9000, maxPrice: 15000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'ماك بوك برو 14', nameEn: 'MacBook Pro 14', brand: 'آبل', brandEn: 'Apple', minPrice: 7500, maxPrice: 12000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'ماك بوك إير M3', nameEn: 'MacBook Air M3', brand: 'آبل', brandEn: 'Apple', minPrice: 4500, maxPrice: 6500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'ديل XPS 15', nameEn: 'Dell XPS 15', brand: 'ديل', brandEn: 'Dell', minPrice: 5500, maxPrice: 8000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'ديل XPS 13', nameEn: 'Dell XPS 13', brand: 'ديل', brandEn: 'Dell', minPrice: 4000, maxPrice: 6000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'لينوفو ثينك باد X1 كاربون', nameEn: 'Lenovo ThinkPad X1 Carbon', brand: 'لينوفو', brandEn: 'Lenovo', minPrice: 5000, maxPrice: 7500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'إتش بي سبيكتر x360', nameEn: 'HP Spectre x360', brand: 'إتش بي', brandEn: 'HP', minPrice: 4500, maxPrice: 6500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'أسوس زين بوك 14', nameEn: 'ASUS ZenBook 14', brand: 'أسوس', brandEn: 'ASUS', minPrice: 3500, maxPrice: 5000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'مايكروسوفت سيرفيس لابتوب 5', nameEn: 'Microsoft Surface Laptop 5', brand: 'مايكروسوفت', brandEn: 'Microsoft', minPrice: 4000, maxPrice: 6000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'ريزر بليد 15', nameEn: 'Razer Blade 15', brand: 'ريزر', brandEn: 'Razer', minPrice: 7000, maxPrice: 10000, unit: 'قطعة', unitEn: 'piece' },
        ]
      },
      {
        name: 'أجهزة لوحية',
        nameEn: 'Tablets',
        products: [
          { name: 'آيباد برو 12.9', nameEn: 'iPad Pro 12.9', brand: 'آبل', brandEn: 'Apple', minPrice: 4000, maxPrice: 6000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'آيباد برو 11', nameEn: 'iPad Pro 11', brand: 'آبل', brandEn: 'Apple', minPrice: 3200, maxPrice: 4500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'آيباد إير', nameEn: 'iPad Air', brand: 'آبل', brandEn: 'Apple', minPrice: 2200, maxPrice: 3000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'آيباد ميني', nameEn: 'iPad Mini', brand: 'آبل', brandEn: 'Apple', minPrice: 1800, maxPrice: 2500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'سامسونج جالكسي تاب S9 ألترا', nameEn: 'Samsung Galaxy Tab S9 Ultra', brand: 'سامسونج', brandEn: 'Samsung', minPrice: 4000, maxPrice: 5500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'سامسونج جالكسي تاب S9+', nameEn: 'Samsung Galaxy Tab S9+', brand: 'سامسونج', brandEn: 'Samsung', minPrice: 3000, maxPrice: 4000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'مايكروسوفت سيرفيس برو 9', nameEn: 'Microsoft Surface Pro 9', brand: 'مايكروسوفت', brandEn: 'Microsoft', minPrice: 4000, maxPrice: 6000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'هواوي ميت باد برو', nameEn: 'Huawei MatePad Pro', brand: 'هواوي', brandEn: 'Huawei', minPrice: 2000, maxPrice: 3000, unit: 'قطعة', unitEn: 'piece' },
        ]
      },
      {
        name: 'تلفزيونات',
        nameEn: 'TVs',
        products: [
          { name: 'سامسونج Neo QLED 8K 85 بوصة', nameEn: 'Samsung Neo QLED 8K 85"', brand: 'سامسونج', brandEn: 'Samsung', minPrice: 25000, maxPrice: 35000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'سامسونج Neo QLED 4K 75 بوصة', nameEn: 'Samsung Neo QLED 4K 75"', brand: 'سامسونج', brandEn: 'Samsung', minPrice: 8000, maxPrice: 12000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'إل جي OLED C3 65 بوصة', nameEn: 'LG OLED C3 65"', brand: 'إل جي', brandEn: 'LG', minPrice: 7000, maxPrice: 10000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'إل جي OLED G3 77 بوصة', nameEn: 'LG OLED G3 77"', brand: 'إل جي', brandEn: 'LG', minPrice: 12000, maxPrice: 18000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'سوني برافيا XR A95L 65 بوصة', nameEn: 'Sony Bravia XR A95L 65"', brand: 'سوني', brandEn: 'Sony', minPrice: 10000, maxPrice: 15000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'تي سي إل C845 Mini LED 75 بوصة', nameEn: 'TCL C845 Mini LED 75"', brand: 'تي سي إل', brandEn: 'TCL', minPrice: 4000, maxPrice: 6000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'هايسنس U8K Mini LED 65 بوصة', nameEn: 'Hisense U8K Mini LED 65"', brand: 'هايسنس', brandEn: 'Hisense', minPrice: 3500, maxPrice: 5000, unit: 'قطعة', unitEn: 'piece' },
        ]
      },
      {
        name: 'سماعات',
        nameEn: 'Headphones',
        products: [
          { name: 'آبل إيربودز برو 2', nameEn: 'Apple AirPods Pro 2', brand: 'آبل', brandEn: 'Apple', minPrice: 900, maxPrice: 1100, unit: 'قطعة', unitEn: 'piece' },
          { name: 'آبل إيربودز ماكس', nameEn: 'Apple AirPods Max', brand: 'آبل', brandEn: 'Apple', minPrice: 2000, maxPrice: 2500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'سوني WH-1000XM5', nameEn: 'Sony WH-1000XM5', brand: 'سوني', brandEn: 'Sony', minPrice: 1200, maxPrice: 1500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'سوني WF-1000XM5', nameEn: 'Sony WF-1000XM5', brand: 'سوني', brandEn: 'Sony', minPrice: 900, maxPrice: 1100, unit: 'قطعة', unitEn: 'piece' },
          { name: 'بوز QuietComfort Ultra', nameEn: 'Bose QuietComfort Ultra', brand: 'بوز', brandEn: 'Bose', minPrice: 1300, maxPrice: 1600, unit: 'قطعة', unitEn: 'piece' },
          { name: 'سامسونج جالكسي بادز 2 برو', nameEn: 'Samsung Galaxy Buds 2 Pro', brand: 'سامسونج', brandEn: 'Samsung', minPrice: 600, maxPrice: 800, unit: 'قطعة', unitEn: 'piece' },
          { name: 'جي بي إل Tour One M2', nameEn: 'JBL Tour One M2', brand: 'جي بي إل', brandEn: 'JBL', minPrice: 800, maxPrice: 1000, unit: 'قطعة', unitEn: 'piece' },
        ]
      },
      {
        name: 'ساعات ذكية',
        nameEn: 'Smartwatches',
        products: [
          { name: 'آبل ووتش ألترا 2', nameEn: 'Apple Watch Ultra 2', brand: 'آبل', brandEn: 'Apple', minPrice: 3000, maxPrice: 3500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'آبل ووتش سيريز 9', nameEn: 'Apple Watch Series 9', brand: 'آبل', brandEn: 'Apple', minPrice: 1500, maxPrice: 2000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'سامسونج جالكسي ووتش 6 كلاسيك', nameEn: 'Samsung Galaxy Watch 6 Classic', brand: 'سامسونج', brandEn: 'Samsung', minPrice: 1200, maxPrice: 1600, unit: 'قطعة', unitEn: 'piece' },
          { name: 'جارمن فينيكس 7X', nameEn: 'Garmin Fenix 7X', brand: 'جارمن', brandEn: 'Garmin', minPrice: 2500, maxPrice: 3200, unit: 'قطعة', unitEn: 'piece' },
          { name: 'هواوي ووتش GT 4', nameEn: 'Huawei Watch GT 4', brand: 'هواوي', brandEn: 'Huawei', minPrice: 800, maxPrice: 1100, unit: 'قطعة', unitEn: 'piece' },
          { name: 'فيتبيت سينس 2', nameEn: 'Fitbit Sense 2', brand: 'فيتبيت', brandEn: 'Fitbit', minPrice: 900, maxPrice: 1200, unit: 'قطعة', unitEn: 'piece' },
        ]
      },
      {
        name: 'كاميرات',
        nameEn: 'Cameras',
        products: [
          { name: 'كانون EOS R5', nameEn: 'Canon EOS R5', brand: 'كانون', brandEn: 'Canon', minPrice: 14000, maxPrice: 18000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'كانون EOS R6 Mark II', nameEn: 'Canon EOS R6 Mark II', brand: 'كانون', brandEn: 'Canon', minPrice: 9000, maxPrice: 11000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'سوني ألفا A7 IV', nameEn: 'Sony Alpha A7 IV', brand: 'سوني', brandEn: 'Sony', minPrice: 9000, maxPrice: 11000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'سوني ألفا A7R V', nameEn: 'Sony Alpha A7R V', brand: 'سوني', brandEn: 'Sony', minPrice: 13000, maxPrice: 16000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'نيكون Z8', nameEn: 'Nikon Z8', brand: 'نيكون', brandEn: 'Nikon', minPrice: 14000, maxPrice: 17000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'فوجي فيلم X-T5', nameEn: 'Fujifilm X-T5', brand: 'فوجي فيلم', brandEn: 'Fujifilm', minPrice: 6000, maxPrice: 8000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'جو برو هيرو 12', nameEn: 'GoPro Hero 12', brand: 'جو برو', brandEn: 'GoPro', minPrice: 1500, maxPrice: 2000, unit: 'قطعة', unitEn: 'piece' },
        ]
      },
      {
        name: 'أجهزة ألعاب',
        nameEn: 'Gaming Consoles',
        products: [
          { name: 'بلايستيشن 5', nameEn: 'PlayStation 5', brand: 'سوني', brandEn: 'Sony', minPrice: 2000, maxPrice: 2500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'بلايستيشن 5 ديجيتال', nameEn: 'PlayStation 5 Digital', brand: 'سوني', brandEn: 'Sony', minPrice: 1600, maxPrice: 2000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'إكس بوكس سيريز X', nameEn: 'Xbox Series X', brand: 'مايكروسوفت', brandEn: 'Microsoft', minPrice: 1800, maxPrice: 2200, unit: 'قطعة', unitEn: 'piece' },
          { name: 'إكس بوكس سيريز S', nameEn: 'Xbox Series S', brand: 'مايكروسوفت', brandEn: 'Microsoft', minPrice: 1000, maxPrice: 1300, unit: 'قطعة', unitEn: 'piece' },
          { name: 'نينتندو سويتش OLED', nameEn: 'Nintendo Switch OLED', brand: 'نينتندو', brandEn: 'Nintendo', minPrice: 1200, maxPrice: 1500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'ستيم ديك', nameEn: 'Steam Deck', brand: 'فالف', brandEn: 'Valve', minPrice: 1500, maxPrice: 2500, unit: 'قطعة', unitEn: 'piece' },
        ]
      }
    ]
  },
  {
    name: 'ملابس',
    nameEn: 'Clothing',
    icon: '👕',
    subCategories: [
      {
        name: 'ملابس رجالية',
        nameEn: 'Men\'s Clothing',
        products: [
          { name: 'قميص رسمي قطن', nameEn: 'Cotton Formal Shirt', brand: 'زارا', brandEn: 'Zara', minPrice: 150, maxPrice: 350, unit: 'قطعة', unitEn: 'piece' },
          { name: 'بنطلون جينز', nameEn: 'Jeans Pants', brand: 'ليفايز', brandEn: 'Levi\'s', minPrice: 250, maxPrice: 500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'تيشيرت قطني', nameEn: 'Cotton T-Shirt', brand: 'نايكي', brandEn: 'Nike', minPrice: 100, maxPrice: 250, unit: 'قطعة', unitEn: 'piece' },
          { name: 'بدلة رسمية', nameEn: 'Formal Suit', brand: 'هوجو بوس', brandEn: 'Hugo Boss', minPrice: 2000, maxPrice: 5000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'جاكيت جلد', nameEn: 'Leather Jacket', brand: 'ماسيمو دوتي', brandEn: 'Massimo Dutti', minPrice: 800, maxPrice: 2000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'سويتر صوف', nameEn: 'Wool Sweater', brand: 'تومي هيلفيغر', brandEn: 'Tommy Hilfiger', minPrice: 400, maxPrice: 800, unit: 'قطعة', unitEn: 'piece' },
          { name: 'شورت رياضي', nameEn: 'Sports Shorts', brand: 'أديداس', brandEn: 'Adidas', minPrice: 150, maxPrice: 300, unit: 'قطعة', unitEn: 'piece' },
          { name: 'ثوب سعودي', nameEn: 'Saudi Thobe', brand: 'الدفة', brandEn: 'Al Daffah', minPrice: 300, maxPrice: 800, unit: 'قطعة', unitEn: 'piece' },
        ]
      },
      {
        name: 'ملابس نسائية',
        nameEn: 'Women\'s Clothing',
        products: [
          { name: 'فستان سهرة', nameEn: 'Evening Dress', brand: 'مانجو', brandEn: 'Mango', minPrice: 500, maxPrice: 1500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'بلوزة حرير', nameEn: 'Silk Blouse', brand: 'إتش آند إم', brandEn: 'H&M', minPrice: 200, maxPrice: 450, unit: 'قطعة', unitEn: 'piece' },
          { name: 'تنورة ميدي', nameEn: 'Midi Skirt', brand: 'زارا', brandEn: 'Zara', minPrice: 180, maxPrice: 400, unit: 'قطعة', unitEn: 'piece' },
          { name: 'عباية مطرزة', nameEn: 'Embroidered Abaya', brand: 'عبايات الريان', brandEn: 'Al Rayan Abayas', minPrice: 500, maxPrice: 2000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'بنطلون واسع', nameEn: 'Wide Leg Pants', brand: 'مانجو', brandEn: 'Mango', minPrice: 200, maxPrice: 450, unit: 'قطعة', unitEn: 'piece' },
          { name: 'كارديجان', nameEn: 'Cardigan', brand: 'ماسيمو دوتي', brandEn: 'Massimo Dutti', minPrice: 350, maxPrice: 700, unit: 'قطعة', unitEn: 'piece' },
          { name: 'جاكيت تويد', nameEn: 'Tweed Jacket', brand: 'شانيل', brandEn: 'Chanel', minPrice: 3000, maxPrice: 8000, unit: 'قطعة', unitEn: 'piece' },
        ]
      },
      {
        name: 'ملابس أطفال',
        nameEn: 'Kids Clothing',
        products: [
          { name: 'طقم أطفال قطني', nameEn: 'Cotton Kids Set', brand: 'كارترز', brandEn: 'Carter\'s', minPrice: 100, maxPrice: 250, unit: 'طقم', unitEn: 'set' },
          { name: 'فستان بناتي', nameEn: 'Girls Dress', brand: 'زارا كيدز', brandEn: 'Zara Kids', minPrice: 150, maxPrice: 350, unit: 'قطعة', unitEn: 'piece' },
          { name: 'بيجاما أطفال', nameEn: 'Kids Pajamas', brand: 'إتش آند إم', brandEn: 'H&M', minPrice: 80, maxPrice: 180, unit: 'طقم', unitEn: 'set' },
          { name: 'جاكيت أطفال', nameEn: 'Kids Jacket', brand: 'جاب كيدز', brandEn: 'Gap Kids', minPrice: 200, maxPrice: 400, unit: 'قطعة', unitEn: 'piece' },
          { name: 'شورت أولادي', nameEn: 'Boys Shorts', brand: 'نايكي', brandEn: 'Nike', minPrice: 80, maxPrice: 150, unit: 'قطعة', unitEn: 'piece' },
        ]
      },
      {
        name: 'أحذية',
        nameEn: 'Shoes',
        products: [
          { name: 'حذاء رياضي', nameEn: 'Sports Sneakers', brand: 'نايكي', brandEn: 'Nike', minPrice: 400, maxPrice: 800, unit: 'زوج', unitEn: 'pair' },
          { name: 'حذاء كلاسيكي جلد', nameEn: 'Leather Classic Shoes', brand: 'كلاركس', brandEn: 'Clarks', minPrice: 500, maxPrice: 1200, unit: 'زوج', unitEn: 'pair' },
          { name: 'صندل رجالي', nameEn: 'Men\'s Sandals', brand: 'بيركنستوك', brandEn: 'Birkenstock', minPrice: 300, maxPrice: 600, unit: 'زوج', unitEn: 'pair' },
          { name: 'حذاء نسائي كعب عالي', nameEn: 'High Heels', brand: 'جيمي تشو', brandEn: 'Jimmy Choo', minPrice: 2000, maxPrice: 5000, unit: 'زوج', unitEn: 'pair' },
          { name: 'حذاء رياضي للجري', nameEn: 'Running Shoes', brand: 'أديداس', brandEn: 'Adidas', minPrice: 450, maxPrice: 900, unit: 'زوج', unitEn: 'pair' },
          { name: 'حذاء أطفال رياضي', nameEn: 'Kids Sports Shoes', brand: 'نيو بالانس', brandEn: 'New Balance', minPrice: 200, maxPrice: 400, unit: 'زوج', unitEn: 'pair' },
          { name: 'بوت شتوي', nameEn: 'Winter Boots', brand: 'تيمبرلاند', brandEn: 'Timberland', minPrice: 600, maxPrice: 1200, unit: 'زوج', unitEn: 'pair' },
        ]
      }
    ]
  },
  {
    name: 'أثاث ومفروشات',
    nameEn: 'Furniture',
    icon: '🛋️',
    subCategories: [
      {
        name: 'غرف نوم',
        nameEn: 'Bedrooms',
        products: [
          { name: 'سرير كينج مع خزانة', nameEn: 'King Bed with Wardrobe', brand: 'إيكيا', brandEn: 'IKEA', minPrice: 5000, maxPrice: 12000, unit: 'طقم', unitEn: 'set' },
          { name: 'سرير كوين خشب زان', nameEn: 'Queen Beech Wood Bed', brand: 'هوم سنتر', brandEn: 'Home Centre', minPrice: 3000, maxPrice: 6000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'كومود خشب', nameEn: 'Wooden Nightstand', brand: 'بوتري بارن', brandEn: 'Pottery Barn', minPrice: 800, maxPrice: 2000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'خزانة ملابس 6 أبواب', nameEn: '6-Door Wardrobe', brand: 'إيكيا', brandEn: 'IKEA', minPrice: 3500, maxPrice: 7000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'مرتبة طبية', nameEn: 'Orthopedic Mattress', brand: 'سيرتا', brandEn: 'Serta', minPrice: 2000, maxPrice: 5000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'تسريحة مع مرآة', nameEn: 'Dressing Table with Mirror', brand: 'هوم بوكس', brandEn: 'Home Box', minPrice: 1500, maxPrice: 3500, unit: 'قطعة', unitEn: 'piece' },
        ]
      },
      {
        name: 'غرف معيشة',
        nameEn: 'Living Rooms',
        products: [
          { name: 'كنبة زاوية جلد', nameEn: 'Leather Corner Sofa', brand: 'ناتوزي', brandEn: 'Natuzzi', minPrice: 8000, maxPrice: 20000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'طقم كنب 7 مقاعد', nameEn: '7-Seater Sofa Set', brand: 'هوم سنتر', brandEn: 'Home Centre', minPrice: 5000, maxPrice: 12000, unit: 'طقم', unitEn: 'set' },
          { name: 'طاولة قهوة زجاج', nameEn: 'Glass Coffee Table', brand: 'إيكيا', brandEn: 'IKEA', minPrice: 500, maxPrice: 1500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'مكتبة تلفزيون', nameEn: 'TV Unit', brand: 'هوم بوكس', brandEn: 'Home Box', minPrice: 1500, maxPrice: 4000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'كرسي استرخاء', nameEn: 'Recliner Chair', brand: 'ليزي بوي', brandEn: 'La-Z-Boy', minPrice: 2000, maxPrice: 5000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'سجادة فاخرة', nameEn: 'Luxury Carpet', brand: 'كليم', brandEn: 'Kilim', minPrice: 1000, maxPrice: 5000, unit: 'قطعة', unitEn: 'piece' },
        ]
      },
      {
        name: 'مطابخ',
        nameEn: 'Kitchens',
        products: [
          { name: 'مطبخ ألمنيوم متكامل', nameEn: 'Complete Aluminum Kitchen', brand: 'نوبيليا', brandEn: 'Nobilia', minPrice: 15000, maxPrice: 40000, unit: 'مطبخ', unitEn: 'kitchen' },
          { name: 'طاولة طعام 8 أشخاص', nameEn: '8-Person Dining Table', brand: 'إيكيا', brandEn: 'IKEA', minPrice: 2000, maxPrice: 5000, unit: 'طقم', unitEn: 'set' },
          { name: 'كراسي بار', nameEn: 'Bar Stools', brand: 'ويست إلم', brandEn: 'West Elm', minPrice: 300, maxPrice: 800, unit: 'قطعة', unitEn: 'piece' },
          { name: 'خزانة مطبخ علوية', nameEn: 'Upper Kitchen Cabinet', brand: 'هوم سنتر', brandEn: 'Home Centre', minPrice: 800, maxPrice: 2000, unit: 'قطعة', unitEn: 'piece' },
        ]
      },
      {
        name: 'مكاتب',
        nameEn: 'Office Furniture',
        products: [
          { name: 'مكتب عمل خشب', nameEn: 'Wooden Work Desk', brand: 'إيكيا', brandEn: 'IKEA', minPrice: 800, maxPrice: 2500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'كرسي مكتب دوار', nameEn: 'Office Swivel Chair', brand: 'هيرمان ميلر', brandEn: 'Herman Miller', minPrice: 2000, maxPrice: 6000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'مكتبة كتب', nameEn: 'Bookshelf', brand: 'إيكيا', brandEn: 'IKEA', minPrice: 500, maxPrice: 1500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'خزانة ملفات', nameEn: 'Filing Cabinet', brand: 'هوم بوكس', brandEn: 'Home Box', minPrice: 400, maxPrice: 1000, unit: 'قطعة', unitEn: 'piece' },
        ]
      }
    ]
  },
  {
    name: 'أجهزة منزلية',
    nameEn: 'Home Appliances',
    icon: '🏠',
    subCategories: [
      {
        name: 'أجهزة المطبخ',
        nameEn: 'Kitchen Appliances',
        products: [
          { name: 'ثلاجة سامسونج فرنش دور', nameEn: 'Samsung French Door Refrigerator', brand: 'سامسونج', brandEn: 'Samsung', minPrice: 6000, maxPrice: 12000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'غسالة صحون بوش', nameEn: 'Bosch Dishwasher', brand: 'بوش', brandEn: 'Bosch', minPrice: 2500, maxPrice: 4500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'فرن كهربائي مدمج', nameEn: 'Built-in Electric Oven', brand: 'سيمنز', brandEn: 'Siemens', minPrice: 3000, maxPrice: 6000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'مايكروويف', nameEn: 'Microwave', brand: 'إل جي', brandEn: 'LG', minPrice: 400, maxPrice: 1200, unit: 'قطعة', unitEn: 'piece' },
          { name: 'خلاط كيتشن ايد', nameEn: 'KitchenAid Mixer', brand: 'كيتشن ايد', brandEn: 'KitchenAid', minPrice: 1500, maxPrice: 3000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'ماكينة قهوة', nameEn: 'Coffee Machine', brand: 'نسبريسو', brandEn: 'Nespresso', minPrice: 800, maxPrice: 2500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'قلاية هوائية', nameEn: 'Air Fryer', brand: 'فيليبس', brandEn: 'Philips', minPrice: 400, maxPrice: 900, unit: 'قطعة', unitEn: 'piece' },
          { name: 'غلاية كهربائية', nameEn: 'Electric Kettle', brand: 'راسل هوبز', brandEn: 'Russell Hobbs', minPrice: 150, maxPrice: 400, unit: 'قطعة', unitEn: 'piece' },
        ]
      },
      {
        name: 'أجهزة الغسيل',
        nameEn: 'Laundry Appliances',
        products: [
          { name: 'غسالة ملابس أوتوماتيك', nameEn: 'Automatic Washing Machine', brand: 'إل جي', brandEn: 'LG', minPrice: 2000, maxPrice: 4500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'نشافة ملابس', nameEn: 'Clothes Dryer', brand: 'سامسونج', brandEn: 'Samsung', minPrice: 2500, maxPrice: 4000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'مكواة بخار', nameEn: 'Steam Iron', brand: 'تيفال', brandEn: 'Tefal', minPrice: 200, maxPrice: 600, unit: 'قطعة', unitEn: 'piece' },
          { name: 'مكواة بخار عمودية', nameEn: 'Vertical Steam Iron', brand: 'فيليبس', brandEn: 'Philips', minPrice: 400, maxPrice: 900, unit: 'قطعة', unitEn: 'piece' },
        ]
      },
      {
        name: 'أجهزة التكييف',
        nameEn: 'Air Conditioning',
        products: [
          { name: 'مكيف سبليت', nameEn: 'Split AC', brand: 'جنرال', brandEn: 'General', minPrice: 2000, maxPrice: 4500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'مكيف شباك', nameEn: 'Window AC', brand: 'كرير', brandEn: 'Carrier', minPrice: 1200, maxPrice: 2500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'مكيف صحراوي', nameEn: 'Desert Cooler', brand: 'ميديا', brandEn: 'Midea', minPrice: 800, maxPrice: 1800, unit: 'قطعة', unitEn: 'piece' },
          { name: 'مروحة سقف', nameEn: 'Ceiling Fan', brand: 'توشيبا', brandEn: 'Toshiba', minPrice: 200, maxPrice: 500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'سخان مياه كهربائي', nameEn: 'Electric Water Heater', brand: 'اريستون', brandEn: 'Ariston', minPrice: 800, maxPrice: 2000, unit: 'قطعة', unitEn: 'piece' },
        ]
      },
      {
        name: 'أجهزة التنظيف',
        nameEn: 'Cleaning Appliances',
        products: [
          { name: 'مكنسة كهربائية', nameEn: 'Vacuum Cleaner', brand: 'دايسون', brandEn: 'Dyson', minPrice: 1500, maxPrice: 3500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'روبوت تنظيف', nameEn: 'Robot Vacuum', brand: 'آي روبوت', brandEn: 'iRobot', minPrice: 1200, maxPrice: 3000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'منظف بخاري', nameEn: 'Steam Cleaner', brand: 'كارشر', brandEn: 'Karcher', minPrice: 500, maxPrice: 1500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'غسالة ضغط عالي', nameEn: 'Pressure Washer', brand: 'كارشر', brandEn: 'Karcher', minPrice: 800, maxPrice: 2500, unit: 'قطعة', unitEn: 'piece' },
        ]
      }
    ]
  },
  {
    name: 'مستحضرات تجميل',
    nameEn: 'Beauty & Cosmetics',
    icon: '💄',
    subCategories: [
      {
        name: 'مكياج',
        nameEn: 'Makeup',
        products: [
          { name: 'كريم أساس', nameEn: 'Foundation', brand: 'ماك', brandEn: 'MAC', minPrice: 150, maxPrice: 300, unit: 'قطعة', unitEn: 'piece' },
          { name: 'بودرة وجه', nameEn: 'Face Powder', brand: 'شارلوت تلبيري', brandEn: 'Charlotte Tilbury', minPrice: 200, maxPrice: 400, unit: 'قطعة', unitEn: 'piece' },
          { name: 'أحمر شفاه', nameEn: 'Lipstick', brand: 'نارس', brandEn: 'NARS', minPrice: 100, maxPrice: 200, unit: 'قطعة', unitEn: 'piece' },
          { name: 'ماسكارا', nameEn: 'Mascara', brand: 'بينيفت', brandEn: 'Benefit', minPrice: 100, maxPrice: 180, unit: 'قطعة', unitEn: 'piece' },
          { name: 'آيلاينر', nameEn: 'Eyeliner', brand: 'ماك', brandEn: 'MAC', minPrice: 80, maxPrice: 150, unit: 'قطعة', unitEn: 'piece' },
          { name: 'باليت ظلال عيون', nameEn: 'Eyeshadow Palette', brand: 'أوربان ديكاي', brandEn: 'Urban Decay', minPrice: 200, maxPrice: 400, unit: 'قطعة', unitEn: 'piece' },
        ]
      },
      {
        name: 'عناية بالبشرة',
        nameEn: 'Skincare',
        products: [
          { name: 'كريم مرطب', nameEn: 'Moisturizer', brand: 'لامير', brandEn: 'La Mer', minPrice: 500, maxPrice: 1500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'سيروم فيتامين سي', nameEn: 'Vitamin C Serum', brand: 'ذا أورديناري', brandEn: 'The Ordinary', minPrice: 80, maxPrice: 200, unit: 'قطعة', unitEn: 'piece' },
          { name: 'غسول وجه', nameEn: 'Face Wash', brand: 'سيتافيل', brandEn: 'Cetaphil', minPrice: 50, maxPrice: 120, unit: 'قطعة', unitEn: 'piece' },
          { name: 'واقي شمس', nameEn: 'Sunscreen', brand: 'لاروش بوزيه', brandEn: 'La Roche-Posay', minPrice: 100, maxPrice: 250, unit: 'قطعة', unitEn: 'piece' },
          { name: 'ماسك وجه', nameEn: 'Face Mask', brand: 'جلام جلو', brandEn: 'GlamGlow', minPrice: 150, maxPrice: 300, unit: 'قطعة', unitEn: 'piece' },
          { name: 'كريم عيون', nameEn: 'Eye Cream', brand: 'كلينيك', brandEn: 'Clinique', minPrice: 150, maxPrice: 350, unit: 'قطعة', unitEn: 'piece' },
        ]
      },
      {
        name: 'عطور',
        nameEn: 'Perfumes',
        products: [
          { name: 'عطر رجالي فاخر', nameEn: 'Luxury Men\'s Perfume', brand: 'توم فورد', brandEn: 'Tom Ford', minPrice: 600, maxPrice: 1500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'عطر نسائي فاخر', nameEn: 'Luxury Women\'s Perfume', brand: 'شانيل', brandEn: 'Chanel', minPrice: 500, maxPrice: 1200, unit: 'قطعة', unitEn: 'piece' },
          { name: 'عطر عربي عود', nameEn: 'Arabic Oud Perfume', brand: 'العربية للعود', brandEn: 'Arabian Oud', minPrice: 300, maxPrice: 1000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'بخور فاخر', nameEn: 'Luxury Incense', brand: 'سويس أرابيان', brandEn: 'Swiss Arabian', minPrice: 100, maxPrice: 400, unit: 'علبة', unitEn: 'box' },
          { name: 'عطر مسك', nameEn: 'Musk Perfume', brand: 'عبدالصمد القرشي', brandEn: 'Abdul Samad Al Qurashi', minPrice: 200, maxPrice: 800, unit: 'قطعة', unitEn: 'piece' },
        ]
      },
      {
        name: 'عناية بالشعر',
        nameEn: 'Hair Care',
        products: [
          { name: 'شامبو مغذي', nameEn: 'Nourishing Shampoo', brand: 'كيراستاس', brandEn: 'Kerastase', minPrice: 150, maxPrice: 350, unit: 'قطعة', unitEn: 'piece' },
          { name: 'بلسم شعر', nameEn: 'Hair Conditioner', brand: 'أوريبي', brandEn: 'Oribe', minPrice: 180, maxPrice: 400, unit: 'قطعة', unitEn: 'piece' },
          { name: 'زيت أرغان', nameEn: 'Argan Oil', brand: 'موروكان أويل', brandEn: 'Moroccanoil', minPrice: 150, maxPrice: 300, unit: 'قطعة', unitEn: 'piece' },
          { name: 'ماسك شعر', nameEn: 'Hair Mask', brand: 'كيراستاس', brandEn: 'Kerastase', minPrice: 200, maxPrice: 450, unit: 'قطعة', unitEn: 'piece' },
          { name: 'سيروم شعر', nameEn: 'Hair Serum', brand: 'لوريال', brandEn: 'L\'Oreal', minPrice: 80, maxPrice: 180, unit: 'قطعة', unitEn: 'piece' },
        ]
      }
    ]
  },
  {
    name: 'رياضة ولياقة',
    nameEn: 'Sports & Fitness',
    icon: '⚽',
    subCategories: [
      {
        name: 'معدات رياضية',
        nameEn: 'Sports Equipment',
        products: [
          { name: 'جهاز مشي كهربائي', nameEn: 'Electric Treadmill', brand: 'نورديك تراك', brandEn: 'NordicTrack', minPrice: 3000, maxPrice: 8000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'دراجة ثابتة', nameEn: 'Stationary Bike', brand: 'شوين', brandEn: 'Schwinn', minPrice: 1500, maxPrice: 4000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'أوزان حديدية', nameEn: 'Dumbbells Set', brand: 'بودي سوليد', brandEn: 'Body Solid', minPrice: 500, maxPrice: 2000, unit: 'طقم', unitEn: 'set' },
          { name: 'بار أولمبي', nameEn: 'Olympic Barbell', brand: 'روج فيتنس', brandEn: 'Rogue Fitness', minPrice: 800, maxPrice: 2000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'جهاز متعدد', nameEn: 'Multi Gym', brand: 'باور بلوك', brandEn: 'PowerBlock', minPrice: 4000, maxPrice: 10000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'حبل قفز', nameEn: 'Jump Rope', brand: 'كروس روب', brandEn: 'CrossRope', minPrice: 100, maxPrice: 300, unit: 'قطعة', unitEn: 'piece' },
        ]
      },
      {
        name: 'كرات رياضية',
        nameEn: 'Sports Balls',
        products: [
          { name: 'كرة قدم', nameEn: 'Football', brand: 'أديداس', brandEn: 'Adidas', minPrice: 150, maxPrice: 600, unit: 'قطعة', unitEn: 'piece' },
          { name: 'كرة سلة', nameEn: 'Basketball', brand: 'سبالدينج', brandEn: 'Spalding', minPrice: 120, maxPrice: 400, unit: 'قطعة', unitEn: 'piece' },
          { name: 'كرة تنس', nameEn: 'Tennis Ball', brand: 'ويلسون', brandEn: 'Wilson', minPrice: 30, maxPrice: 100, unit: 'علبة', unitEn: 'can' },
          { name: 'كرة طائرة', nameEn: 'Volleyball', brand: 'ميكاسا', brandEn: 'Mikasa', minPrice: 100, maxPrice: 300, unit: 'قطعة', unitEn: 'piece' },
          { name: 'كرة غولف', nameEn: 'Golf Ball', brand: 'تايتليست', brandEn: 'Titleist', minPrice: 80, maxPrice: 200, unit: 'علبة', unitEn: 'box' },
        ]
      },
      {
        name: 'ملابس رياضية',
        nameEn: 'Sportswear',
        products: [
          { name: 'طقم رياضي', nameEn: 'Sports Set', brand: 'نايكي', brandEn: 'Nike', minPrice: 300, maxPrice: 700, unit: 'طقم', unitEn: 'set' },
          { name: 'شورت رياضي', nameEn: 'Sports Shorts', brand: 'أندر آرمر', brandEn: 'Under Armour', minPrice: 150, maxPrice: 350, unit: 'قطعة', unitEn: 'piece' },
          { name: 'تيشيرت رياضي', nameEn: 'Sports T-Shirt', brand: 'بوما', brandEn: 'Puma', minPrice: 100, maxPrice: 250, unit: 'قطعة', unitEn: 'piece' },
          { name: 'بنطلون رياضي', nameEn: 'Sports Pants', brand: 'أديداس', brandEn: 'Adidas', minPrice: 200, maxPrice: 450, unit: 'قطعة', unitEn: 'piece' },
          { name: 'حذاء رياضي للتمرين', nameEn: 'Training Shoes', brand: 'ريبوك', brandEn: 'Reebok', minPrice: 350, maxPrice: 700, unit: 'زوج', unitEn: 'pair' },
        ]
      },
      {
        name: 'مستلزمات يوجا',
        nameEn: 'Yoga Supplies',
        products: [
          { name: 'ماط يوجا', nameEn: 'Yoga Mat', brand: 'ماندوكا', brandEn: 'Manduka', minPrice: 150, maxPrice: 500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'بلوك يوجا', nameEn: 'Yoga Block', brand: 'لولوليمون', brandEn: 'Lululemon', minPrice: 50, maxPrice: 150, unit: 'قطعة', unitEn: 'piece' },
          { name: 'حزام يوجا', nameEn: 'Yoga Strap', brand: 'جايام', brandEn: 'Gaiam', minPrice: 40, maxPrice: 100, unit: 'قطعة', unitEn: 'piece' },
          { name: 'كرة بيلاتس', nameEn: 'Pilates Ball', brand: 'تون فيتنس', brandEn: 'Tone Fitness', minPrice: 80, maxPrice: 200, unit: 'قطعة', unitEn: 'piece' },
        ]
      }
    ]
  },
  {
    name: 'طعام ومشروبات',
    nameEn: 'Food & Beverages',
    icon: '🍔',
    subCategories: [
      {
        name: 'مشروبات',
        nameEn: 'Beverages',
        products: [
          { name: 'قهوة عربية', nameEn: 'Arabic Coffee', brand: 'محماص الشعلان', brandEn: 'Al Shaalan Roastery', minPrice: 50, maxPrice: 150, unit: 'كيلو', unitEn: 'kg' },
          { name: 'شاي ليبتون', nameEn: 'Lipton Tea', brand: 'ليبتون', brandEn: 'Lipton', minPrice: 20, maxPrice: 50, unit: 'علبة', unitEn: 'box' },
          { name: 'عصير طازج', nameEn: 'Fresh Juice', brand: 'المراعي', brandEn: 'Almarai', minPrice: 10, maxPrice: 25, unit: 'لتر', unitEn: 'liter' },
          { name: 'ماء معدني', nameEn: 'Mineral Water', brand: 'بيرين', brandEn: 'Berain', minPrice: 5, maxPrice: 15, unit: 'كرتون', unitEn: 'carton' },
          { name: 'مشروب طاقة', nameEn: 'Energy Drink', brand: 'ريد بول', brandEn: 'Red Bull', minPrice: 8, maxPrice: 15, unit: 'علبة', unitEn: 'can' },
        ]
      },
      {
        name: 'منتجات ألبان',
        nameEn: 'Dairy Products',
        products: [
          { name: 'حليب طازج', nameEn: 'Fresh Milk', brand: 'المراعي', brandEn: 'Almarai', minPrice: 8, maxPrice: 20, unit: 'لتر', unitEn: 'liter' },
          { name: 'لبن زبادي', nameEn: 'Yogurt', brand: 'ندى', brandEn: 'Nada', minPrice: 5, maxPrice: 15, unit: 'علبة', unitEn: 'cup' },
          { name: 'جبنة شيدر', nameEn: 'Cheddar Cheese', brand: 'كرافت', brandEn: 'Kraft', minPrice: 25, maxPrice: 60, unit: 'قطعة', unitEn: 'piece' },
          { name: 'جبنة فيتا', nameEn: 'Feta Cheese', brand: 'بوك', brandEn: 'Puck', minPrice: 15, maxPrice: 35, unit: 'علبة', unitEn: 'pack' },
          { name: 'قشطة', nameEn: 'Cream', brand: 'المراعي', brandEn: 'Almarai', minPrice: 10, maxPrice: 25, unit: 'علبة', unitEn: 'can' },
        ]
      },
      {
        name: 'حلويات',
        nameEn: 'Sweets',
        products: [
          { name: 'شوكولاتة', nameEn: 'Chocolate', brand: 'جالكسي', brandEn: 'Galaxy', minPrice: 10, maxPrice: 40, unit: 'قطعة', unitEn: 'bar' },
          { name: 'تمر سكري', nameEn: 'Sukkari Dates', brand: 'تمور المدينة', brandEn: 'Madinah Dates', minPrice: 40, maxPrice: 120, unit: 'كيلو', unitEn: 'kg' },
          { name: 'بقلاوة', nameEn: 'Baklava', brand: 'حلويات الفخرية', brandEn: 'Al Fakhria Sweets', minPrice: 60, maxPrice: 150, unit: 'كيلو', unitEn: 'kg' },
          { name: 'كنافة', nameEn: 'Kunafa', brand: 'حلويات السمان', brandEn: 'Al Samman Sweets', minPrice: 50, maxPrice: 120, unit: 'كيلو', unitEn: 'kg' },
          { name: 'بسكويت', nameEn: 'Biscuits', brand: 'أوريو', brandEn: 'Oreo', minPrice: 8, maxPrice: 25, unit: 'علبة', unitEn: 'pack' },
        ]
      },
      {
        name: 'مواد غذائية',
        nameEn: 'Grocery',
        products: [
          { name: 'أرز بسمتي', nameEn: 'Basmati Rice', brand: 'أبو كاس', brandEn: 'Abu Kas', minPrice: 30, maxPrice: 80, unit: 'كيلو', unitEn: 'kg' },
          { name: 'زيت زيتون', nameEn: 'Olive Oil', brand: 'الجوف', brandEn: 'Al Jouf', minPrice: 40, maxPrice: 100, unit: 'لتر', unitEn: 'liter' },
          { name: 'معكرونة', nameEn: 'Pasta', brand: 'باريلا', brandEn: 'Barilla', minPrice: 10, maxPrice: 25, unit: 'كيس', unitEn: 'pack' },
          { name: 'طحين', nameEn: 'Flour', brand: 'الحمامة', brandEn: 'Al Hamamah', minPrice: 15, maxPrice: 35, unit: 'كيلو', unitEn: 'kg' },
          { name: 'سكر', nameEn: 'Sugar', brand: 'الوطنية', brandEn: 'Al Watania', minPrice: 10, maxPrice: 25, unit: 'كيلو', unitEn: 'kg' },
        ]
      }
    ]
  },
  {
    name: 'مستلزمات أطفال',
    nameEn: 'Baby Products',
    icon: '👶',
    subCategories: [
      {
        name: 'حفاضات ونظافة',
        nameEn: 'Diapers & Hygiene',
        products: [
          { name: 'حفاضات بامبرز', nameEn: 'Pampers Diapers', brand: 'بامبرز', brandEn: 'Pampers', minPrice: 80, maxPrice: 180, unit: 'علبة', unitEn: 'pack' },
          { name: 'مناديل مبللة', nameEn: 'Baby Wipes', brand: 'هجيز', brandEn: 'Huggies', minPrice: 20, maxPrice: 50, unit: 'علبة', unitEn: 'pack' },
          { name: 'شامبو أطفال', nameEn: 'Baby Shampoo', brand: 'جونسون', brandEn: 'Johnson\'s', minPrice: 25, maxPrice: 50, unit: 'قطعة', unitEn: 'bottle' },
          { name: 'لوشن أطفال', nameEn: 'Baby Lotion', brand: 'جونسون', brandEn: 'Johnson\'s', minPrice: 20, maxPrice: 45, unit: 'قطعة', unitEn: 'bottle' },
          { name: 'كريم حفاضات', nameEn: 'Diaper Cream', brand: 'سودوكريم', brandEn: 'Sudocrem', minPrice: 30, maxPrice: 70, unit: 'قطعة', unitEn: 'jar' },
        ]
      },
      {
        name: 'رضاعة وتغذية',
        nameEn: 'Feeding',
        products: [
          { name: 'حليب أطفال', nameEn: 'Baby Formula', brand: 'سيميلاك', brandEn: 'Similac', minPrice: 80, maxPrice: 180, unit: 'علبة', unitEn: 'can' },
          { name: 'رضاعة', nameEn: 'Baby Bottle', brand: 'فيليبس أفينت', brandEn: 'Philips Avent', minPrice: 40, maxPrice: 100, unit: 'قطعة', unitEn: 'piece' },
          { name: 'كرسي طعام أطفال', nameEn: 'High Chair', brand: 'تشيكو', brandEn: 'Chicco', minPrice: 400, maxPrice: 1000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'أطباق أطفال', nameEn: 'Baby Plates', brand: 'مانشكين', brandEn: 'Munchkin', minPrice: 50, maxPrice: 120, unit: 'طقم', unitEn: 'set' },
          { name: 'معقم رضاعات', nameEn: 'Bottle Sterilizer', brand: 'تومي تيبي', brandEn: 'Tommee Tippee', minPrice: 200, maxPrice: 500, unit: 'قطعة', unitEn: 'piece' },
        ]
      },
      {
        name: 'عربات ومقاعد',
        nameEn: 'Strollers & Seats',
        products: [
          { name: 'عربة أطفال', nameEn: 'Baby Stroller', brand: 'ماكلارين', brandEn: 'Maclaren', minPrice: 1500, maxPrice: 4000, unit: 'قطعة', unitEn: 'piece' },
          { name: 'كرسي سيارة أطفال', nameEn: 'Car Seat', brand: 'ماكسي كوزي', brandEn: 'Maxi-Cosi', minPrice: 800, maxPrice: 2500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'حاملة أطفال', nameEn: 'Baby Carrier', brand: 'بيبي بيورن', brandEn: 'BabyBjorn', minPrice: 400, maxPrice: 900, unit: 'قطعة', unitEn: 'piece' },
          { name: 'سرير أطفال', nameEn: 'Baby Crib', brand: 'جونيورز', brandEn: 'Juniors', minPrice: 800, maxPrice: 2500, unit: 'قطعة', unitEn: 'piece' },
        ]
      },
      {
        name: 'ألعاب أطفال',
        nameEn: 'Baby Toys',
        products: [
          { name: 'خشخيشة', nameEn: 'Rattle', brand: 'فيشر برايس', brandEn: 'Fisher-Price', minPrice: 30, maxPrice: 80, unit: 'قطعة', unitEn: 'piece' },
          { name: 'عضاضة', nameEn: 'Teether', brand: 'صوفي', brandEn: 'Sophie', minPrice: 50, maxPrice: 120, unit: 'قطعة', unitEn: 'piece' },
          { name: 'مفرش ألعاب', nameEn: 'Play Mat', brand: 'تيني لوف', brandEn: 'Tiny Love', minPrice: 200, maxPrice: 500, unit: 'قطعة', unitEn: 'piece' },
          { name: 'كتب قماش', nameEn: 'Cloth Books', brand: 'لاماز', brandEn: 'Lamaze', minPrice: 40, maxPrice: 100, unit: 'قطعة', unitEn: 'piece' },
        ]
      }
    ]
  },
  {
    name: 'سيارات وقطع غيار',
    nameEn: 'Automotive',
    icon: '🚗',
    subCategories: [
      {
        name: 'زيوت ومشحمات',
        nameEn: 'Oils & Lubricants',
        products: [
          { name: 'زيت محرك تخليقي', nameEn: 'Synthetic Engine Oil', brand: 'موبيل 1', brandEn: 'Mobil 1', minPrice: 150, maxPrice: 350, unit: 'جالون', unitEn: 'gallon' },
          { name: 'زيت محرك عادي', nameEn: 'Conventional Engine Oil', brand: 'كاسترول', brandEn: 'Castrol', minPrice: 80, maxPrice: 150, unit: 'جالون', unitEn: 'gallon' },
          { name: 'زيت قير', nameEn: 'Transmission Fluid', brand: 'فالفولين', brandEn: 'Valvoline', minPrice: 60, maxPrice: 120, unit: 'لتر', unitEn: 'liter' },
          { name: 'زيت فرامل', nameEn: 'Brake Fluid', brand: 'بوش', brandEn: 'Bosch', minPrice: 30, maxPrice: 70, unit: 'لتر', unitEn: 'liter' },
        ]
      },
      {
        name: 'إطارات',
        nameEn: 'Tires',
        products: [
          { name: 'إطار ميشلان', nameEn: 'Michelin Tire', brand: 'ميشلان', brandEn: 'Michelin', minPrice: 400, maxPrice: 900, unit: 'إطار', unitEn: 'tire' },
          { name: 'إطار بريدجستون', nameEn: 'Bridgestone Tire', brand: 'بريدجستون', brandEn: 'Bridgestone', minPrice: 350, maxPrice: 800, unit: 'إطار', unitEn: 'tire' },
          { name: 'إطار جوديير', nameEn: 'Goodyear Tire', brand: 'جوديير', brandEn: 'Goodyear', minPrice: 300, maxPrice: 700, unit: 'إطار', unitEn: 'tire' },
          { name: 'إطار كونتيننتال', nameEn: 'Continental Tire', brand: 'كونتيننتال', brandEn: 'Continental', minPrice: 400, maxPrice: 850, unit: 'إطار', unitEn: 'tire' },
        ]
      },
      {
        name: 'بطاريات',
        nameEn: 'Batteries',
        products: [
          { name: 'بطارية سيارة', nameEn: 'Car Battery', brand: 'أي سي ديلكو', brandEn: 'ACDelco', minPrice: 300, maxPrice: 700, unit: 'بطارية', unitEn: 'battery' },
          { name: 'بطارية بوش', nameEn: 'Bosch Battery', brand: 'بوش', brandEn: 'Bosch', minPrice: 400, maxPrice: 800, unit: 'بطارية', unitEn: 'battery' },
          { name: 'بطارية أوبتيما', nameEn: 'Optima Battery', brand: 'أوبتيما', brandEn: 'Optima', minPrice: 600, maxPrice: 1200, unit: 'بطارية', unitEn: 'battery' },
        ]
      },
      {
        name: 'إكسسوارات سيارات',
        nameEn: 'Car Accessories',
        products: [
          { name: 'داش كام', nameEn: 'Dash Camera', brand: 'نكستبيز', brandEn: 'Nextbase', minPrice: 300, maxPrice: 800, unit: 'قطعة', unitEn: 'piece' },
          { name: 'شاحن سيارة', nameEn: 'Car Charger', brand: 'أنكر', brandEn: 'Anker', minPrice: 50, maxPrice: 150, unit: 'قطعة', unitEn: 'piece' },
          { name: 'حامل جوال سيارة', nameEn: 'Phone Mount', brand: 'آي أوتي', brandEn: 'iOttie', minPrice: 80, maxPrice: 200, unit: 'قطعة', unitEn: 'piece' },
          { name: 'غطاء مقاعد', nameEn: 'Seat Covers', brand: 'كاتزكين', brandEn: 'Katzkin', minPrice: 200, maxPrice: 600, unit: 'طقم', unitEn: 'set' },
          { name: 'معطر سيارة', nameEn: 'Car Air Freshener', brand: 'ليتل تريز', brandEn: 'Little Trees', minPrice: 10, maxPrice: 40, unit: 'قطعة', unitEn: 'piece' },
        ]
      }
    ]
  }
];

// دالة للحصول على منتج عشوائي مع كامل معلوماته
export const getRandomProduct = (language: 'ar' | 'en' = 'ar'): {
  category: string;
  subCategory: string;
  productName: string;
  brand: string;
  price: number;
  unit: string;
  icon: string;
} => {
  const category = productCategories[Math.floor(Math.random() * productCategories.length)];
  const subCategory = category.subCategories[Math.floor(Math.random() * category.subCategories.length)];
  const product = subCategory.products[Math.floor(Math.random() * subCategory.products.length)];
  
  const price = Math.floor(Math.random() * (product.maxPrice - product.minPrice + 1)) + product.minPrice;
  
  return {
    category: language === 'ar' ? category.name : category.nameEn,
    subCategory: language === 'ar' ? subCategory.name : subCategory.nameEn,
    productName: language === 'ar' ? product.name : product.nameEn,
    brand: language === 'ar' ? product.brand : product.brandEn,
    price: price,
    unit: language === 'ar' ? product.unit : product.unitEn,
    icon: category.icon
  };
};

// دالة للحصول على منتج من فئة محددة
export const getProductFromCategory = (categoryName: string, language: 'ar' | 'en' = 'ar'): {
  category: string;
  subCategory: string;
  productName: string;
  brand: string;
  price: number;
  unit: string;
  icon: string;
} | null => {
  const category = productCategories.find(
    c => c.name === categoryName || c.nameEn.toLowerCase() === categoryName.toLowerCase()
  );
  
  if (!category) return null;
  
  const subCategory = category.subCategories[Math.floor(Math.random() * category.subCategories.length)];
  const product = subCategory.products[Math.floor(Math.random() * subCategory.products.length)];
  
  const price = Math.floor(Math.random() * (product.maxPrice - product.minPrice + 1)) + product.minPrice;
  
  return {
    category: language === 'ar' ? category.name : category.nameEn,
    subCategory: language === 'ar' ? subCategory.name : subCategory.nameEn,
    productName: language === 'ar' ? product.name : product.nameEn,
    brand: language === 'ar' ? product.brand : product.brandEn,
    price: price,
    unit: language === 'ar' ? product.unit : product.unitEn,
    icon: category.icon
  };
};

// دالة لتوليد SKU
export const generateSKU = (category: string, productName: string): string => {
  const catCode = category.substring(0, 3).toUpperCase();
  const prodCode = productName.substring(0, 3).toUpperCase();
  const random = Math.floor(Math.random() * 9000) + 1000;
  return `${catCode}-${prodCode}-${random}`;
};

// دالة لتوليد باركود
export const generateBarcode = (): string => {
  const prefix = Math.floor(Math.random() * 900) + 100;
  const middle = Math.floor(Math.random() * 90000) + 10000;
  const suffix = Math.floor(Math.random() * 90000) + 10000;
  return `${prefix}${middle}${suffix}`;
};

// قائمة الفئات للاستخدام المباشر
export const categoryList = productCategories.map(c => ({
  name: c.name,
  nameEn: c.nameEn,
  icon: c.icon
}));
