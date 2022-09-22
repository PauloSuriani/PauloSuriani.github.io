import React from 'react';
import Header from '../components/Header';
import FrontPage from './FrontPage';
import Footer from '../components/Footer';

class App extends React.Component {
  render() {
    return (
    <div className="px-4 lg:pt-6 md:pt-4 pt-2 pb-1 text-white font-sans bg-slate-900">

      <FrontPage />

      <Header />

      <Footer />
      
    </div>
    );
  }
}

export default App;