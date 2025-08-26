import Sidebar from './Sidebar';
import Header from './Header';

const PageLayout = ({ children }) => (
  <div className="d-flex">
    <Sidebar />
    <div className="flex-grow-1 d-flex flex-column" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Header />
      <div className="p-4">
        {children}
      </div>
    </div>
  </div>
);

export default PageLayout;