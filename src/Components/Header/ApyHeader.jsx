import {Layout} from 'antd';
import './header.css'
  const { Header } = Layout;
  const ApyHeader=()=>{
    return (
      <Header className="site-layout__navbar" style={{ padding: '10px' }}>
          <div className="container">
            <div className="title">APY</div>
            <h1 className="desc">ForLOOP</h1>
          </div>
          
      </Header>
    );
  }
  export default ApyHeader;