import { BrowserRouter } from 'react-router-dom';
import Footer from './components/layout/footer/Index';
import AppHeader from './components/layout/header/Index';
import PageContent from './components/layout/pagecontent/Index';

import './App.css';

const App = () => {
  return <div className='App'>
    <BrowserRouter>
      <AppHeader />
      <PageContent />
      <Footer />
    </BrowserRouter>
  </div>;
}

export default App;