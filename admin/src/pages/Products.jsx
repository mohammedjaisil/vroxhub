import PageLayout from '../components/PageLayout';
import { FaEye, FaEdit, FaEllipsisV } from 'react-icons/fa';

const Products = () => {
  const productData = [
    { name: 'Playstation 3 Slim', category: 'PS3', sub: 'Consoles', edition: 'Standard (1490)' },
    { name: 'Life is Strange', category: 'PS4', sub: 'Games', edition: 'Standard (1486)' },
    { name: 'Naruto Storm 4', category: 'PS4', sub: 'Games', edition: 'Standard (1484)' },
  ];

  return (
    <PageLayout>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Product</h2>
        <button className="btn btn-primary">+ Add Item</button>
      </div>

      <input className="form-control mb-3" type="text" placeholder="Search..." />

      <table className="table table-hover">
        <thead className="table-light">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Category</th>
            <th>Sub Category</th>
            <th>Editions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((p, idx) => (
            <tr key={idx}>
              <td><input type="checkbox" /></td>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>{p.sub}</td>
              <td>{p.edition}</td>
              <td>
                <FaEdit className="me-2" />
                <FaEye className="me-2" />
                <FaEllipsisV />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </PageLayout>
  );
};

export default Products;