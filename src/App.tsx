import Header from './client/Header';
import Body from './client/Body';
import Footer from './client/Footer';
import Properties from './client/Properties';
import { Provider } from './components/context';


function App() {
  return (
    <div className="App">
      <Provider>
        {/* <Header />
        <Body /> */}
        <Properties />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
