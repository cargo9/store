import { useSearchParams } from "react-router-dom";
import { ProductList } from "../components/ProductList";
import { getProducts } from "../fakeAPI";
import { useSearch } from "../context/SearchContext";
import { searchProducts } from "../utils/searchUtils";

export const Products = () => {
  const products = getProducts();
  const { searchQuery } = useSearch();
  const [searchParams] = useSearchParams();

  const urlSearchQuery = searchParams.get("name") ?? "";
  const finalSearchQuery = urlSearchQuery || searchQuery;

  const filteredProducts = searchProducts(products, finalSearchQuery);

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
