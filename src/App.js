import './App.css';
import Row from "./components/Row";
import requests from "./requests";
import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {
  return (
    <div className="app">

      <Navbar />
      <Banner />


      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
