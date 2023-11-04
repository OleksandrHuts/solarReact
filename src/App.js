import './styles/main.scss'

//component
import SiteHeader from './components/Header';
import MainBanner from './components/MainBanner';

function App() {
  return (
    <div className="App page_wrapper">
        <SiteHeader />
        <MainBanner />
    </div>
  );
}

export default App;
