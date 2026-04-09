
import { tokenAPI } from "./index-script.js"

const products = [
  {
    _id: '69d600c65325890015620290',
    name: "iPhone 13",
    description: "Smartphone Apple con ottime prestazioni e fotocamera avanzata.",
    brand: "Apple",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/apple-iphone-13_converted.webp",
    price: 899
  },
  {
    _id: '69d600c65325890015620278',
    name: "Galaxy S23",
    description: "Smartphone Samsung di fascia alta con display AMOLED brillante.",
    brand: "Samsung",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/samsung-galaxy-s23_converted.webp",
    price: 849
  },
  {
    _id: '69d600c6532589001562027a',
    name: "Redmi Note 13",
    description: "Telefono Android affidabile con buona autonomia e ottimo prezzo.",
    brand: "Xiaomi",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/redmi-note-13_converted.webp",
    price: 299
  },
  {
    _id: '69d600c6532589001562028b',
    name: "Pixel 8",
    description: "Smartphone Google con esperienza Android pulita e fotocamera eccellente.",
    brand: "Google",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/google-pixel-8_converted.webp",
    price: 799
  },
  {
    _id: '69d600c6532589001562028a',
    name: "Moto G84",
    description: "Dispositivo pratico e veloce, ideale per l'uso quotidiano.",
    brand: "Motorola",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/motorola-moto-g84_converted.webp",
    price: 279
  },
  {
    _id: '69d601995325890015620293',
    name: "Nokia XR21",
    description: "Smartphone resistente pensato per durare nel tempo.",
    brand: "Nokia",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/nokia-xr21_converted.webp",
    price: 499
  },
  {
    _id: '69d600c6532589001562028c',
    name: "OnePlus 12",
    description: "Telefono premium con ricarica rapida e performance elevate.",
    brand: "OnePlus",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/oneplus-12_converted.webp",
    price: 949
  },
  {
    _id: '69d600c6532589001562028d',
    name: "Realme 12 Pro",
    description: "Smartphone elegante con ottimo comparto fotografico.",
    brand: "Realme",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/realme-12-pro_converted.webp",
    price: 399
  },
  {
    _id: '69d600c6532589001562028e',
    name: "Sony Xperia 5 V",
    description: "Telefono compatto e potente con display di alta qualità.",
    brand: "Sony",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/sony-xperia-5-v_converted.webp",
    price: 999
  },
  {
    _id: '69d601995325890015620294',
    name: "Huawei P60",
    description: "Smartphone dal design raffinato con ottima fotocamera.",
    brand: "Huawei",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/huawei-p60_converted.webp",
    price: 699
  },
  {
    _id: '69d600c65325890015620291',
    name: "MacBook Air M2",
    description: "Laptop leggero e potente, ideale per studio e lavoro.",
    brand: "Apple",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/apple-macbook-air-2_converted.webp",
    price: 1299
  },
  {
    _id: '69d600c6532589001562028f',
    name: "Galaxy Book3",
    description: "Notebook Samsung sottile e moderno per produttività quotidiana.",
    brand: "Samsung",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/samsung-galaxy-book-3_converted.webp",
    price: 1099
  },
  {
    _id: '69d600c65325890015620292',
    name: "ThinkPad X1 Carbon",
    description: "Laptop professionale robusto e affidabile.",
    brand: "Lenovo",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/lenovo-thinkpad-x1-carbon_converted.webp",
    price: 1599
  },
  {
    _id: '69d600c65325890015620279',
    name: "Dell XPS 13",
    description: "Ultrabook compatto con design premium e ottimo display.",
    brand: "Dell",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/dell-xps-13_converted.webp",
    price: 1399
  },
  {
    _id: '69d600c65325890015620277',
    name: "HP Spectre x360",
    description: "Portatile convertibile elegante e versatile.",
    brand: "HP",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/hp-spectre-x360_converted.webp",
    price: 1499
  },
  {
    _id: '69d600c6532589001562027c',
    name: "iPad Air",
    description: "Tablet Apple potente e leggero per intrattenimento e lavoro.",
    brand: "Apple",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/ipad-air_converted.webp",
    price: 749
  },
  {
    _id: '69d600c6532589001562027b',
    name: "Galaxy Tab S9",
    description: "Tablet Android di fascia alta con schermo luminoso e fluido.",
    brand: "Samsung",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/samsung-galaxy-tab-s9_converted.webp",
    price: 899
  },
  {
    _id: '69d600c6532589001562027f',
    name: "Xiaomi Pad 6",
    description: "Tablet equilibrato con prestazioni solide e buon prezzo.",
    brand: "Xiaomi",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/xiaomi-pad-6_converted.webp",
    price: 399
  },
  {
    _id: '69d600c6532589001562027d',
    name: "AirPods Pro",
    description: "Auricolari wireless con cancellazione del rumore.",
    brand: "Apple",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/apple-airpods-pro_converted.webp",
    price: 279
  },
  {
    _id: '69d600c65325890015620280',
    name: "Galaxy Buds2 Pro",
    description: "Auricolari Samsung comodi e con suono immersivo.",
    brand: "Samsung",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/samsung-galaxy-buds2-pro_converted.webp",
    price: 229
  },
  {
    _id: '69d600c6532589001562027e',
    name: "WH-1000XM5",
    description: "Cuffie Sony over-ear con eccellente cancellazione del rumore.",
    brand: "Sony",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/sony-wh-1000xm5_converted.webp",
    price: 419
  },
  {
    _id: '69d600c65325890015620282',
    name: "JBL Charge 5",
    description: "Speaker Bluetooth portatile con audio potente e batteria duratura.",
    brand: "JBL",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/jbl-charge-5_converted.webp",
    price: 179
  },
  {
    _id: '69d600c65325890015620281',
    name: "GoPro Hero 12",
    description: "Action cam compatta perfetta per video dinamici e avventure.",
    brand: "GoPro",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/gopro-hero-12_converted.webp",
    price: 449
  },
  {
    _id: '69d600c65325890015620285',
    name: "Canon EOS R50",
    description: "Fotocamera mirrorless intuitiva e versatile.",
    brand: "Canon",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/canon-eos-r50_converted.webp",
    price: 979
  },
  {
    _id: '69d600c65325890015620283',
    name: "Kindle Paperwhite",
    description: "E-reader leggero con schermo antiriflesso e lunga autonomia.",
    brand: "Amazon",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/amazon-kindle-paperwhite_converted.webp",
    price: 169
  },
  {
    _id: '69d600c65325890015620287',
    name: "Apple Watch Series 9",
    description: "Smartwatch completo per notifiche, salute e attività fisica.",
    brand: "Apple",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/apple-watch-serie-9_converted.webp",
    price: 459
  },
  {
    _id: '69d600c65325890015620286',
    name: "Galaxy Watch 6",
    description: "Orologio smart Samsung con funzioni fitness e design moderno.",
    brand: "Samsung",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/samsung-galaxy-watch-6_converted.webp",
    price: 329
  },
  {
    _id: '69d600c65325890015620284',
    name: "Nintendo Switch OLED",
    description: "Console ibrida perfetta per giocare a casa e in mobilità.",
    brand: "Nintendo",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/nintendo-switch-oled_converted.webp",
    price: 349
  },
  {
    _id: '69d600c65325890015620288',
    name: "PlayStation 5",
    description: "Console Sony di nuova generazione con grafica avanzata.",
    brand: "Sony",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/sony-playstation-5_converted.webp",
    price: 549
  },
  {
    _id: '69d600c65325890015620289',
    name: "Xbox Series X",
    description: "Console Microsoft potente e veloce per gaming ad alte prestazioni.",
    brand: "Microsoft",
    imageUrl: "https://raw.githubusercontent.com/EmanWeBdV/EPICODE_M4-W4D4/refs/heads/main/assets/img/microsoft-xbox-serie-x_converted.webp",
    price: 549
  }
]

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const checkProduct = async (products) => {
  for (const product of products) {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${product._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": tokenAPI,
        },
        body: JSON.stringify(product)
      })

      const data = await response.json()



      await wait(1000)
    } catch (error) {
      console.error(`Errore su ${product.name}:`, error)
    }
  }
}

checkProduct(products)
