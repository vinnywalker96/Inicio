import Link from 'next/link';
import { products } from '../../../utils/products';
import { useNavigation } from 'next/navigation';

const SubcategoryPage = () => {
  const navigation = useNavigation();
  const { category, subcategory } = navigation.getPathData();

  const subcategoryProducts = products.filter(product => product.category === category && product.subcategory === subcategory);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{subcategory}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {subcategoryProducts.map(product => (
          <Link key={product.id} href={`/shop/${category}/${subcategory}/${product.id}`} className="border rounded p-4">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="mt-2">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubcategoryPage;
