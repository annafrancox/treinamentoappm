import logo from './logo.png';
import './App.css';
import Footer from "./Footer";
import PostList from "./PostList"

const posts = [
  {
      userName:"thegoodplace",
      imageUrl:"https://cdn-ofuxico.akamaized.net/img/upload/noticias/2019/11/30/the-good-place_365052_36.jpg",
      imageDescription:"fofalegalbacana"
  },
  {
      userName:"b99",
      imageUrl:"https://cdn-ofuxico.akamaized.net/img/upload/noticias/2019/11/30/the-good-place_365052_36.jpg",
      imageDescription:"amotudibom"
  }
];

function App() {
  return (
    <div className="App">
     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Code Instagram Clone
        </p>
      </header>

      <PostList posts={posts}/>

      <Footer/> 
    
    </div>
  );
}

export default App;
