import 'antd/dist/antd.css';
import './App.css';
import MainPageComponent from './main/index.js';
import {Switch, Route, Link, useHistory} from 'react-router-dom';
import UploadPage from './upload';
import ProductPage from './product';
import {Button} from 'antd';
import {DownloadOutlined} from '@ant-design/icons';

function App() {
  const history = useHistory();
  return (
    <div>
        <div className="header">
            <div className="inner">
                <h1 className="logo">
                  <Link to="/"><img src="/images/icons/logo.png" alt="" /></Link>
                </h1>
                <Button 
                  className="btn"
                  size="large" 
                  icon={<DownloadOutlined />} 
                  onClick={function(){history.push('/upload')}}>상품 업로드</Button>
            </div>
        </div>
        <div className="content">
          <Switch>
            <Route exact={true} path={"/"}>
              <MainPageComponent />
            </Route>
            <Route exact={true} path={"/product/:id"}>
              <ProductPage />
            </Route>
            <Route exact={true} path={"/upload"}>
              <UploadPage />
            </Route>
          </Switch>
        </div>
        <div className="footer"></div>
    </div>
  );
}

export default App;
