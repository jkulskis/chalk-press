import { Link } from "react-router-dom";
import GumAbout from "../images/gum/aboutpage_noscroll.png"
import GumArchive from "../images/gum/archivepage_noscroll.png"
import GumHome from "../images/gum/homepage_noscroll.png"
import GumFriends from "../images/gum/palspage_noscroll.png"
import GumPress from "../images/gum/presspage_noscroll.png"
import GumShop from "../images/gum/shop_noscroll.png"

function randomOffCenter(center, distance) {
  return Math.random() < 0.5
    ? center - Math.floor(Math.random() * distance)
    : center + Math.floor(Math.random() * distance);
}

const GumBlob = ({ style, to, id }) => (
  <Link to={to}>
    <div
      id={id}
      type="gumBlob"
      animationDuration="0s"
      style={{
        width: "15vmax",
        height: "15vmax",
        position: "absolute",
        backgroundRepeat: "no-repeat",
        backgroundSize: `${randomOffCenter(130, 5)}%`,
        transform: `rotate(${randomOffCenter(0, 30)}deg)`,
        backgroundPosition: "center",
        color: "black",
        opacity: 1.0,
        fontSize: "1.5vmax",
        fontFamily: "Lucida Console ,Courier New, monospace",
        fontWeight: "bold",
        textAlign: "center",
        ...style,
      }}
    >
    </div>
  </Link>
);

const GumBlobAbout = (props) => (
  <GumBlob
    style={{
      top: `${randomOffCenter(5, 2)}%`,
      left: `${randomOffCenter(6, 2)}%`,
      backgroundImage: `url(${GumAbout})`,
    }}
    {...props}
  >
  </GumBlob>
);

const GumBlobFriends = (props) => (
  <GumBlob
    style={{
      top: `${randomOffCenter(32, 2)}%`,
      left: `${randomOffCenter(60, 2)}%`,
      backgroundImage: `url(${GumFriends})`,
    }}
    {...props}
  >
  </GumBlob>
);

const GumBlobHome = (props) => (
  <GumBlob
    style={{
      top: `${randomOffCenter(47, 2)}%`,
      left: `${randomOffCenter(45, 2)}%`,
      backgroundImage: `url(${GumHome})`,
    }}
    {...props}
  >
  </GumBlob>
);

const GumBlobPress = (props) => (
  <GumBlob
    style={{
      top: `${randomOffCenter(27, 0)}%`,
      left: `${randomOffCenter(30, 0)}%`,
      right: `${randomOffCenter(30, 0)}%`,
      backgroundImage: `url(${GumPress})`,
    }}
    {...props}
  >
  </GumBlob>
);

const GumBlobShop = (props) => (
  <GumBlob
    style={{
      top: `${randomOffCenter(47, 2)}%`,
      left: `${randomOffCenter(6, 2)}%`,
      backgroundImage: `url(${GumShop})`,
    }}
    {...props}
  >
  </GumBlob>
);

const GumBlobArchive = (props) => (
  <GumBlob
    style={{
      top: `${randomOffCenter(5, 2)}%`,
      left: `${randomOffCenter(42, 2)}%`,
      backgroundImage: `url(${GumArchive})`,
    }}
    {...props}
  >
  </GumBlob>
);

const Splash = () => {
  return (
    <>
      <GumBlobAbout to="/about" id="about-blob"></GumBlobAbout>
      <GumBlobFriends to="/friends" id="friends-blob"></GumBlobFriends>
      <GumBlobHome to="/home" id="home-blob"></GumBlobHome>
      <GumBlobPress to="/press" id="press-blob"></GumBlobPress>
      <GumBlobShop to="/shop" id="shop-blob"></GumBlobShop>
      <GumBlobArchive to="/archive" id="archive-blob"></GumBlobArchive>
    </>
  );
};

export default Splash;
