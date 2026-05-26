const products = [
  {
    id: "h-1",
    name: "Hoodie 1",
    price: 45.00,
    description: "Comfortable cotton hoodie with modern design. Perfect for casual wear and everyday style. Features adjustable drawstring hood and front pocket.",
    image: "https://res.cloudinary.com/dmqfs4yxs/image/upload/v1779801562/Hoodie_1_oyitow.webp"
  },
  {
    id: "h-2",
    name: "Hoodie 2",
    price: 48.00,
    description: "Premium quality hoodie with soft fabric blend. Ideal for cool weather and street style. Durable construction with ribbed cuffs.",
    image: "https://res.cloudinary.com/dmqfs4yxs/image/upload/v1779801562/Hoodie_2_gvvasg.webp"
  },
  {
    id: "h-3",
    name: "Hoodie 3",
    price: 52.00,
    description: "Stylish oversized hoodie with contemporary fit. Great for layering and urban fashion. Made from breathable material.",
    image: "https://res.cloudinary.com/dmqfs4yxs/image/upload/v1779801562/Hoodie_3_p6gpyy.webp"
  },
  {
    id: "s-1",
    name: "Sneakers 1",
    price: 89.00,
    description: "Classic athletic sneakers with excellent cushioning. Designed for comfort and performance. Lightweight construction with durable sole.",
    image: "https://res.cloudinary.com/dmqfs4yxs/image/upload/v1779801563/Sneakers_1_d8oul8.avif"
  },
  {
    id: "s-2",
    name: "Sneakers 2",
    price: 95.00,
    description: "Modern running shoes with advanced support technology. Perfect for active lifestyle and daily training. Breathable mesh upper.",
    image: "https://res.cloudinary.com/dmqfs4yxs/image/upload/v1779801563/Sneakers_2_tamfct.avif"
  },
  {
    id: "s-3",
    name: "Sneakers 3",
    price: 99.00,
    description: "Premium sneakers with sleek design and superior comfort. Ideal for both sports and casual wear. Enhanced grip and stability.",
    image: "https://res.cloudinary.com/dmqfs4yxs/image/upload/v1779801563/Sneakers_3_sj4zr4.webp"
  },
  {
    id: "s-4",
    name: "Sneakers 4",
    price: 92.00,
    description: "Versatile athletic footwear with modern aesthetics. Great for everyday activities and light workouts. Padded collar for extra comfort.",
    image: "https://res.cloudinary.com/dmqfs4yxs/image/upload/v1779801563/Sneakers_1_d8oul8.avif"
  },
  {
    id: "p-1",
    name: "Pants 1",
    price: 65.00,
    description: "Comfortable casual pants with relaxed fit. Perfect for everyday wear and leisure activities. Multiple pockets for convenience.",
    image: "https://res.cloudinary.com/dmqfs4yxs/image/upload/v1779801562/Pants_1_nlduet.jpg"
  },
  {
    id: "p-2",
    name: "Pants 2",
    price: 68.00,
    description: "Stylish trousers with modern cut and quality fabric. Suitable for various occasions and easy to style. Durable and easy-care material.",
    image: "https://res.cloudinary.com/dmqfs4yxs/image/upload/v1779801562/Pants_2_iefkot.jpg"
  },
  {
    id: "p-3",
    name: "Pants 3",
    price: 72.00,
    description: "Premium pants with contemporary design and excellent fit. Great for both casual and semi-formal settings. Comfortable waistband.",
    image: "https://res.cloudinary.com/dmqfs4yxs/image/upload/v1779801562/Pants_3_ht4n4z.jpg"
  }
];

export const getProducts = () => {
  return products;
};

export const getProductById = (productId) => {
  return products.find((product) => product.id === productId);
};
