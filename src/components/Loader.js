const Loader = () => {
  return (
    <div className="row loaderPage text-center">
      <div className="col-6 my-auto mx-auto text-center">
        <img src={process.env.PUBLIC_URL + "/Icon.png"} alt="loading..." />

        <h1>Catsat</h1>
      </div>
    </div>
  );
};

export default Loader;
