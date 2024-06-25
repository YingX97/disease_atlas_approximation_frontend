import { Link } from 'react-router-dom';
import {
    CustomerServiceOutlined,
} from '@ant-design/icons';
import logo from '../asset/fabiLogo.png';
import { Layout } from 'antd';
const { Header } = Layout;

const headerStyle = {
  display: 'flex', 
  justifyContent: 'space-between', 
  paddingLeft: '2%', 
  paddingRight: '2%',
  position: 'fixed', 
  top: 0,
  width: '96%',
  zIndex: 100, // Ensures the header is above other content
  backgroundColor: 'white',
  opacity: '96%',
  fontFamily: 'Arial, sans-serif',
  height:'55px',
  boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)',
}

const navItemStyle = {
  color: 'black',
}

const Navbar = () => {
    return (
      <Header style={headerStyle}>
        <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Bot Logo" style={{ height: '40px', marginRight: '10px' }} />
        </Link>
        <div style={{ display: 'flex'}}>
          <div>
            <CustomerServiceOutlined />
            <a href="//fabilab.org/pages/contact.html" target="_blank" rel="noreferrer" style={navItemStyle} className="tab-link"> Contact us</a>
          </div>
        </div>
      </Header>
    );
}

export default Navbar;

