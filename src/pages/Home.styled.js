import styled from "styled-components";

// Контейнер для всей страницы
export const HomeContainer = styled.div`
  padding: 20px 0;
`;

// Приветственный блок (Welcome)
export const Hero = styled.div`
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 12px;
  margin-bottom: 40px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 15px;
    color: #333;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }
`;

// Заголовок "ТОП вещей"
export const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
  position: relative;
  font-weight: bold;

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background-color: #ff4500; /* Оранжевый акцент под твой стиль */
    margin: 10px auto 0;
    border-radius: 2px;
  }
`;

// Умная сетка для товаров (как в твоем наброске, но ровная и адаптивная)
export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 25px;
  padding: 10px;
`;

// Стиль самой карточки товара
export const ProductCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  border: 1px solid #eee;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 6px;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.1rem;
    margin: 10px 0;
    color: #333;
  }

  span {
    font-weight: bold;
    color: #ff4500;
  }
`;