import React from 'react';
import Header from '../components/Header';
import FrontPage from './FrontPage';
import Footer from '../components/Footer';
import MyColorPallet from '../sandbox/MyColorPallet';

class App extends React.Component {
  render() {
    return (
    <div className="p-6 text-white font-sans bg-slate-900">
      <FrontPage />
      <Header />
      <Footer />
      <MyColorPallet />
    </div>
    );
  }
}

export default App;