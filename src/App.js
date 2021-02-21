import logo from "./logo.svg";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import NavBar from "./NavBar";
import YouTube from "react-youtube";
import requests from "./requests";

function App() {
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const BASE = {};

  return (
    <div className="App">
      {/* Navbar */}
      {/* Banner */}
      <NavBar />
      <Banner />
      <Row
        isLargeRow={true}
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movie" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movie" />
      <Row title="Romance Movie" />
      <Row title="Documentary" />
      <YouTube videoId="XtMThy8QKqU" opts={opts} />;
    </div>
  );
}

export default App;
