import Cat from "./Cat";

const Cats = ({ cats, onToggle, view, viewMore }) => {
  return cats.map((cat) => (
    <Cat
      key={cat.id}
      cat={cat}
      onToggle={onToggle}
      view={view}
      viewMore={viewMore}
    />
  ));
};

export default Cats;
