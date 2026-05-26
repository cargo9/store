import { ProductList } from "../components/ProductList";
import { getProducts } from "../fakeAPI";
import { useSearch } from "../context/SearchContext";
import { searchProducts } from "../utils/searchUtils";

export const Products = () => {
  const products = getProducts();
  const { searchQuery } = useSearch();

  const filteredProducts = searchProducts(products, searchQuery);

  return (
    <main>
      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
          <h3>No products found</h3>
          <p>Try a different search term</p>
        </div>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </main>
  );
};
