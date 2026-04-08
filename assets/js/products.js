import { tokenAPI } from "./index-script.js"

const products = [
  {
    name: "iPhone 13",
    description: "Smartphone Apple con ottime prestazioni e fotocamera avanzata.",
    brand: "Apple",
    imageUrl: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5",
    price: 899
  },
  {
    name: "Galaxy S23",
    description: "Smartphone Samsung di fascia alta con display AMOLED brillante.",
    brand: "Samsung",
    imageUrl: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
    price: 849
  },
  {
    name: "Redmi Note 13",
    description: "Telefono Android affidabile con buona autonomia e ottimo prezzo.",
    brand: "Xiaomi",
    imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
    price: 299
  },
  {
    name: "Pixel 8",
    description: "Smartphone Google con esperienza Android pulita e fotocamera eccellente.",
    brand: "Google",
    imageUrl: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
    price: 799
  },
  {
    name: "Moto G84",
    description: "Dispositivo pratico e veloce, ideale per l'uso quotidiano.",
    brand: "Motorola",
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    price: 279
  },
  {
    name: "Nokia XR21",
    description: "Smartphone resistente pensato per durare nel tempo.",
    brand: "Nokia",
    imageUrl: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
    price: 499
  },
  {
    name: "OnePlus 12",
    description: "Telefono premium con ricarica rapida e performance elevate.",
    brand: "OnePlus",
    imageUrl: "https://images.unsplash.com/photo-1585060544812-6b45742d762f",
    price: 949
  },
  {
    name: "Realme 12 Pro",
    description: "Smartphone elegante con ottimo comparto fotografico.",
    brand: "Realme",
    imageUrl: "https://images.unsplash.com/photo-1567581935884-3349723552ca",
    price: 399
  },
  {
    name: "Sony Xperia 5 V",
    description: "Telefono compatto e potente con display di alta qualità.",
    brand: "Sony",
    imageUrl: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",
    price: 999
  },
  {
    name: "Huawei P60",
    description: "Smartphone dal design raffinato con ottima fotocamera.",
    brand: "Huawei",
    imageUrl: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2",
    price: 699
  },
  {
    name: "MacBook Air M2",
    description: "Laptop leggero e potente, ideale per studio e lavoro.",
    brand: "Apple",
    imageUrl: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
    price: 1299
  },
  {
    name: "Galaxy Book3",
    description: "Notebook Samsung sottile e moderno per produttività quotidiana.",
    brand: "Samsung",
    imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    price: 1099
  },
  {
    name: "ThinkPad X1 Carbon",
    description: "Laptop professionale robusto e affidabile.",
    brand: "Lenovo",
    imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    price: 1599
  },
  {
    name: "Dell XPS 13",
    description: "Ultrabook compatto con design premium e ottimo display.",
    brand: "Dell",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    price: 1399
  },
  {
    name: "HP Spectre x360",
    description: "Portatile convertibile elegante e versatile.",
    brand: "HP",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    price: 1499
  },
  {
    name: "iPad Air",
    description: "Tablet Apple potente e leggero per intrattenimento e lavoro.",
    brand: "Apple",
    imageUrl: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
    price: 749
  },
  {
    name: "Galaxy Tab S9",
    description: "Tablet Android di fascia alta con schermo luminoso e fluido.",
    brand: "Samsung",
    imageUrl: "https://images.unsplash.com/photo-1589739900243-4b52cd9ddc36",
    price: 899
  },
  {
    name: "Xiaomi Pad 6",
    description: "Tablet equilibrato con prestazioni solide e buon prezzo.",
    brand: "Xiaomi",
    imageUrl: "https://images.unsplash.com/photo-1561154464-82e9adf32764",
    price: 399
  },
  {
    name: "AirPods Pro",
    description: "Auricolari wireless con cancellazione del rumore.",
    brand: "Apple",
    imageUrl: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37",
    price: 279
  },
  {
    name: "Galaxy Buds2 Pro",
    description: "Auricolari Samsung comodi e con suono immersivo.",
    brand: "Samsung",
    imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    price: 229
  },
  {
    name: "WH-1000XM5",
    description: "Cuffie Sony over-ear con eccellente cancellazione del rumore.",
    brand: "Sony",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    price: 419
  },
  {
    name: "JBL Charge 5",
    description: "Speaker Bluetooth portatile con audio potente e batteria duratura.",
    brand: "JBL",
    imageUrl: "https://images.unsplash.com/photo-1589003077984-894e133dabab",
    price: 179
  },
  {
    name: "GoPro Hero 12",
    description: "Action cam compatta perfetta per video dinamici e avventure.",
    brand: "GoPro",
    imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    price: 449
  },
  {
    name: "Canon EOS R50",
    description: "Fotocamera mirrorless intuitiva e versatile.",
    brand: "Canon",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    price: 979
  },
  {
    name: "Kindle Paperwhite",
    description: "E-reader leggero con schermo antiriflesso e lunga autonomia.",
    brand: "Amazon",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136",
    price: 169
  },
  {
    name: "Apple Watch Series 9",
    description: "Smartwatch completo per notifiche, salute e attività fisica.",
    brand: "Apple",
    imageUrl: "https://images.unsplash.com/photo-1579586337278-3f436f25d4d6",
    price: 459
  },
  {
    name: "Galaxy Watch 6",
    description: "Orologio smart Samsung con funzioni fitness e design moderno.",
    brand: "Samsung",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    price: 329
  },
  {
    name: "Nintendo Switch OLED",
    description: "Console ibrida perfetta per giocare a casa e in mobilità.",
    brand: "Nintendo",
    imageUrl: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
    price: 349
  },
  {
    name: "PlayStation 5",
    description: "Console Sony di nuova generazione con grafica avanzata.",
    brand: "Sony",
    imageUrl: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    price: 549
  },
  {
    name: "Xbox Series X",
    description: "Console Microsoft potente e veloce per gaming ad alte prestazioni.",
    brand: "Microsoft",
    imageUrl: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
    price: 549
  }
]

products.forEach( async product =>{
    await fetch(`https://striveschool-api.herokuapp.com/api/product/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": tokenAPI,
        },
        body: JSON.stringify(product)
        
})
console.log(product)
})