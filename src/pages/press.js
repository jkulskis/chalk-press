import ContentBox from "../components/ContentBox";
import PressHolderImage from "../images/press_holder.jpg";

const Press = () => {
  return (
    <>
      <ContentBox>
        <img id="press-image" src={PressHolderImage} alt="chalk press press ;)" />
      </ContentBox>
    </>
  );
};
export default Press;
