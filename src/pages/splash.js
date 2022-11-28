import { Blob } from "react-blob";
import { Link } from "react-router-dom";
import GumBlue from "../images/gum_blue.png";
import GumGold from "../images/gum_gold.png";
import GumGreen from "../images/gum_green.png";
import GumPink from "../images/gum_pink.png";
import GumRed from "../images/gum_red.png";
import GumWhite from "../images/gum_white.png";

function randomOffCenter(center, distance) {
  return Math.random() < 0.5
    ? center - Math.floor(Math.random() * distance)
    : center + Math.floor(Math.random() * distance);
}

function gumDimensions(width, distance) {
  let rand_dist = Math.random() < 0.5 ? Math.floor(Math.random() * distance) : -Math.floor(Math.random() * distance);
  return `${width + rand_dist}vmax ${0.9 * (width + rand_dist)}vmin`;
}

const GumBlob = ({ props, style, children, to }) => (
  <Link to={to}>
    <Blob
      type="gumBlob"
      animationDuration="0s"
      size={`${randomOffCenter(20, 3)}vmax`}
      style={{
        position: "absolute",
        backgroundRepeat: "no-repeat",
        backgroundSize: `${gumDimensions(15, 3)}`,
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
    </Blob>
  </Link>
);

const GumBlobAbout = ({ props, style, children, to }) => (
  <GumBlob
    to={to}
    style={{
      top: `${randomOffCenter(10, 2)}%`,
      left: `${randomOffCenter(20, 2)}%`,
      backgroundImage: `url(${GumBlue})`,
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
      top: `${randomOffCenter(40, 2)}%`,
      left: `${randomOffCenter(60, 2)}%`,
      backgroundImage: `url(${GumGold})`,
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
      top: `${randomOffCenter(65, 2)}%`,
      left: `${randomOffCenter(50, 2)}%`,
      backgroundImage: `url(${GumGreen})`,
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
      top: `${randomOffCenter(40, 0)}%`,
      left: `${randomOffCenter(40, 0)}%`,
      backgroundImage: `url(${GumPink})`,
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
      top: `${randomOffCenter(60, 5)}%`,
      left: `${randomOffCenter(20, 5)}%`,
      backgroundImage: `url(${GumRed})`,
      ...style,
    }}
    {...props}
  >
    {children}
  </GumBlob>
);

const GumBlobVideo = ({ props, style, children, to }) => (
  <GumBlob
    to={to}
    style={{
      top: `${randomOffCenter(20, 5)}%`,
      left: `${randomOffCenter(50, 5)}%`,
      backgroundImage: `url(${GumWhite})`,
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
      <GumBlobAbout to="/about">About</GumBlobAbout>
      <GumBlobFriends to="/friends">Friends</GumBlobFriends>
      <GumBlobHome to="/home">Home</GumBlobHome>
      <GumBlobPress to="/press">Press</GumBlobPress>
      <GumBlobShop to="/shop">Webshop</GumBlobShop>
      <GumBlobVideo to="/video">Video</GumBlobVideo>
    </>
  );
};

document.body.style.backgroundColor = "gray";
export default Splash;
