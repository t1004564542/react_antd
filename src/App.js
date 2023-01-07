import './App.css';
import './styles/public.css'
import './styles/antd.scss'
import RouteConfig from './routes/index'
import { ConfigProvider } from 'antd'
import 'moment/locale/zh-cn'

import zhCN from 'antd/lib/locale/zh_CN'
function App() {
  return (
    <div className="App">
      <ConfigProvider locale={zhCN}>
        <RouteConfig />
      </ConfigProvider>
    </div>
  );
}

export default App;
