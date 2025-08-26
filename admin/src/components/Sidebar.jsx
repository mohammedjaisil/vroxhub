import { Link } from 'react-router-dom';
import { FaBox, FaTachometerAlt, FaFileInvoice, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => (
  <div className="bg-dark text-white vh-100 position-fixed p-3" style={{ width: '250px' }}>
    <h5 className="text-center">VROXHUB</h5>
    <ul className="nav flex-column mt-4">
      <li className="nav-item mb-2">
        <Link className="nav-link text-white" to="/"><FaTachometerAlt /> Dashboard</Link>
      </li>
      <li className="nav-item mb-2">
        <Link className="nav-link text-white" to="/products"><FaBox /> Products</Link>
      </li>
      <li className="nav-item mb-2">
        <Link className="nav-link text-white" to="/invoices"><FaFileInvoice /> Invoices</Link>
      </li>
      <li className="nav-item mt-auto">
        <span
            className="nav-link text-white"
            style={{ cursor: 'pointer' }}
            onClick={() => {
            localStorage.removeItem('token');
            window.location.href = '/login'; // full reload to reset protected routes
            }}
        >
            <FaSignOutAlt /> Logout
        </span>
        </li>

    </ul>
  </div>
);

export default Sidebar;