import './App.css';
import Hero from  "./components/Hero"
import Button from "./components/Button"
import Cats from "./components/Cats"
import Loader from "./components/Loader"
import CatThumb from './components/CatThumb';
import Monster from "./components/Monster"
import { useState, useEffect } from "react"
import axios from "axios"

function App() {

  const [cats, setCats] = useState([])

  const [loading, setLoading] = useState(true);

  const [shownCat, setCard] = useState(0)

  useEffect(() => {
    axios.get("https://cdn.ivodigital.com/catsapp/felines.json")
        .then((res) => {
            console.log(res);
            setCats( res.data.data );
            setLoading(false)
        })
        .catch(error => {
          console.log(error)
        })
  }, [])

  const toggle = (id) => {
    console.log("clicked", id);
    setCats(cats.map((cat) => cat.id === id ? {
      ...cat, liked: !cat.liked} : cat ))
  }

  const [allCategory, setCategory] = useState(true)

  const allCats = () => {
    setCategory(true);
  }

  const likedCats = () => {
    setCategory(false);
  }

  const [viewMore, setView] = useState(false);

  const view = (id) => {
    setCard(id);
    setView(true);
  };

  const close = () => {
    setView(false);
    setCard();
  }

  return (
    <div className="container-fluid">

      {loading ? <Loader /> : ""}

      <div className="row text-center">

        <div className="col-8 mx-auto">

          <Hero />

        </div>

      </div>

      <Button allCats = {allCats} likedCats = {likedCats} allCategory = {allCategory}/>

      <div className="row">

        {allCategory ? <Cats cats={cats} view = {view} viewMore = {viewMore} shownCat = {shownCat} onToggle = {toggle} /> : (cats.filter((cat) => cat.liked === true)).length > 0 ? <Cats cats = {cats.filter((cat) => cat.liked === true)}  view = {view} viewMore = {viewMore} onToggle = {toggle}/> : <Monster />}

        {viewMore && <CatThumb cats = {cats.filter((cat) => cat.id === shownCat)}  view = {view} viewMore = {viewMore} onToggle = {toggle} close={close}/>}

      </div>

    </div>
  );
}

export default App;
