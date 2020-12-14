const footer = () => {
  return (
    <footer>
      <img src="logo-white.svg" alt="Take it Photohgraphy logo" />
      <h1>Take it Photography</h1>
      <h1>‭07765 586735</h1>
      <div className="columns">
        <div className="column">
          <h2>Contact</h2>
          <p>
            07765 586735‬ <br />
            takeitphotography@gmail.com
          </p>
        </div>
        <div id="social-icons" className="column">
          <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-twitter"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
        </div>
        <div className="column">
          <h2>Address</h2>
          <p>
            17 The Chase <br />
            Knaresborough <br />
            North Yorkshire <br />
            HG5 OSY
          </p>
        </div>
      </div>
      <p>@2020 Copyright: Take it Photography ltd</p>
    </footer>
  );
};

export default footer;
