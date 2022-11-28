import { Link } from "react-router-dom";
// import GumBlue from "../images/gum_blue.png";
// import GumGold from "../images/gum_gold.png";
// import GumGreen from "../images/gum_green.png";
// import GumPink from "../images/gum_pink.png";
// import GumRed from "../images/gum_red.png";
// import GumWhite from "../images/gum_white.png";
import GumAbout from "../images/aboutpage_scroll.png"
import GumArchive from "../images/archivepage_scroll.png"
import GumHome from "../images/homepage_scroll.png"
import GumFriends from "../images/palspage_scroll.png"
import GumPress from "../images/presspage_scroll.png"
import GumShop from "../images/shop_scroll.png"

function randomOffCenter(center, distance) {
  return Math.random() < 0.5
    ? center - Math.floor(Math.random() * distance)
    : center + Math.floor(Math.random() * distance);
}

const GumBlob = ({ props, style, children, to }) => (
  <Link to={to}>
    <div
      type="gumBlob"
      animationDuration="0s"
      size={`${randomOffCenter(20, 3)}vmax`}
      style={{
        width: "21vmax",
        height: "21vmax",
        position: "absolute",
        backgroundRepeat: "no-repeat",
        backgroundSize: `${randomOffCenter(95, 5)}%`,
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
      {...props}
    >
      {children}
    </div>
  </Link>
);

const GumBlobAbout = ({ props, style, children, to }) => (
  <GumBlob
    to={to}
    style={{
      top: `${randomOffCenter(0, 2)}%`,
      left: `${randomOffCenter(6, 2)}%`,
      backgroundImage: `url(${GumAbout})`,
      ...style,
    }}
    {...props}
  >
    {children}
  </GumBlob>
);

const GumBlobFriends = ({ props, style, children, to }) => (
  <GumBlob
    to={to}
    style={{
      top: `${randomOffCenter(32, 2)}%`,
      left: `${randomOffCenter(60, 2)}%`,
      backgroundImage: `url(${GumFriends})`,
      ...style,
    }}
    {...props}
  >
    {children}
  </GumBlob>
);

const GumBlobHome = ({ props, style, children, to }) => (
  <GumBlob
    to={to}
    style={{
      top: `${randomOffCenter(47, 2)}%`,
      left: `${randomOffCenter(45, 2)}%`,
      backgroundImage: `url(${GumHome})`,
      ...style,
    }}
    {...props}
  >
    {children}
  </GumBlob>
);

const GumBlobPress = ({ props, style, children, to }) => (
  <GumBlob
    to={to}
    style={{
      top: `${randomOffCenter(27, 0)}%`,
      left: `${randomOffCenter(30, 0)}%`,
      right: `${randomOffCenter(30, 0)}%`,
      backgroundImage: `url(${GumPress})`,
      ...style,
    }}
    {...props}
  >
    {children}
  </GumBlob>
);

const GumBlobShop = ({ props, style, children, to }) => (
  <GumBlob
    to={to}
    style={{
      top: `${randomOffCenter(47, 2)}%`,
      left: `${randomOffCenter(6, 2)}%`,
      backgroundImage: `url(${GumShop})`,
      ...style,
    }}
    {...props}
  >
    {children}
  </GumBlob>
);

const GumBlobArchive = ({ props, style, children, to }) => (
  <GumBlob
    to={to}
    style={{
      top: `${randomOffCenter(0, 2)}%`,
      left: `${randomOffCenter(42, 2)}%`,
      backgroundImage: `url(${GumArchive})`,
      ...style,
    }}
    {...props}
  >
    {children}
  </GumBlob>
);

const Splash = () => {
  return (
    <>
      <GumBlobAbout to="/about"></GumBlobAbout>
      <GumBlobFriends to="/friends"></GumBlobFriends>
      <GumBlobHome to="/home"></GumBlobHome>
      <GumBlobPress to="/press"></GumBlobPress>
      <GumBlobShop to="/shop"></GumBlobShop>
      <GumBlobArchive to="/archive"></GumBlobArchive>
    </>
  );
};

document.body.style.backgroundColor = "gray";
export default Splash;
