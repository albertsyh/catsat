import "./App.css";
import Hero from "./components/Hero";
import Button from "./components/Button";
import Cats from "./components/Cats";
import Loader from "./components/Loader";
import CatThumb from "./components/CatThumb";
import Monster from "./components/Monster";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";

function App() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(null);
  const [shownCat, setCard] = useState(0);

  useEffect(() => {
    axios
      .get("https://cdn.ivodigital.com/catsapp/felines.json")
      .then((res) => {
        console.log(res);
        setCats(res.data.data);
      })
      .catch((error) => {
        console.log(error);
        setHasError(error.message);
        // You should actually handle the error. Right now the user will be ???? if there's an error. The page will forever be loading..
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const toggle = (id) => {
    console.log("clicked", id);
    setCats(
      cats.map((cat) =>
        cat.id === id
          ? {
              ...cat,
              liked: !cat.liked,
            }
          : cat
      )
    );
  };

  const [allCategory, setCategory] = useState(true);

  const allCats = () => {
    setCategory(true);
  };

  const likedCats = () => {
    setCategory(false);
  };

  const [viewMore, setView] = useState(false);

  const view = (id) => {
    setCard(id);
    setView(true);
  };

  const close = () => {
    setView(false);
    setCard();
  };

  // This is a cleaner way of doing things rather than having too many..... ternary operators in the render section
  const activeCats = useMemo(() => {
    if (allCategory) {
      return cats;
    }
    return cats.filter((o) => o.liked);
  }, [cats, allCategory]);

  // you can stop rendering everything else while it is loading
  if (loading) {
    return (
      <div className="container-fluid">
        <Loader />
      </div>
    );
  }

  // If there's an error, show something
  if (hasError) {
    return (
      <div className="container-fluid">
        <p>{hasError}</p>
      </div>
    );
  }

  // Load the rest only if it succeeds in loading
  return (
    <div className="container-fluid">
      <div className="row text-center">
        <div className="col-8 mx-auto">
          <Hero />
        </div>
      </div>

      <Button
        allCats={allCats}
        likedCats={likedCats}
        allCategory={allCategory}
      />

      <div className="row">
        <Cats
          cats={activeCats}
          view={view}
          viewMore={viewMore}
          shownCat={shownCat}
          onToggle={toggle}
        />

        {!activeCats.length ? <Monster /> : null}

        {viewMore && (
          <CatThumb
            cats={cats.filter((cat) => cat.id === shownCat)}
            view={view}
            viewMore={viewMore}
            onToggle={toggle}
            close={close}
          />
        )}
      </div>
    </div>
  );
}

export default App;
