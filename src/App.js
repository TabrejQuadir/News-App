import { useState } from 'react';
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';
import Footer from './Components/Footer';

function App() {
  const [category, setCategory] = useState("Technology");
  const [newsType, setNewsType] = useState("Technology");

  return (
    <div className="App">
        <div className='menu-bar'>
          <Navbar setCategory={setCategory} setNewsType={setNewsType} />
        </div>
        <NewsBoard category={category} newsType={newsType} />
        <Footer />
    </div>
  );
}

export default App;
