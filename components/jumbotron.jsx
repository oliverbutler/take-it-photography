const Jumbotron = (props) => {
  return (
    <header className="jumbotron" style={{ height: props.height }}>
      <img src={props.image} alt="header" />
      <div>{props.children}</div>
    </header>
  );
};

export default Jumbotron;
