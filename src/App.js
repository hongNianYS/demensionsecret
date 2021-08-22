import './App.css';
import Header from './component/Navigator/header';
import Footer from './component/Navigator/footer';
import Background from './imgs/YASUO.jpg'
function App() {
  const background={
    backgroundImage:`url(${Background})`,
    height:'100vh'
  }
  return (
    <div className="App" style={background}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
