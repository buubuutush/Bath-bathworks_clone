
import './App.css';
// import MainBody from './home-components/body/mainbody/Mainbody';
import Footer from './home-components/footer/Footer';
import Navbar from './home-components/navbar/Navbar'
import Mainroute from './routes/Mainroute';



function App() {
  return (
    <div className="App" >
      <Navbar/>
      <Mainroute/>

      <Footer/>
  

    </div>
  );
}

export default App;
