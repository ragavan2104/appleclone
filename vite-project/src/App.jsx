import Navbar from './components/Navbar';
import Add from './components/Add'
import Banner from './components/Banner';
import Banner2 from './components/Banner2';
import Watch from './components/Watch';
import Product from './components/Product';
import Slide from './components/Slide';
import Footer from './components/Footer';

function App() {


  return (
    <>
      <Navbar />
      <div className="pt-10">
        <Add />
        <Banner />
        <Banner2 />
        <Watch />
        <Product />  
        <Slide />   
        <Footer />   
      </div>
    
    </>
  )
}

export default App
