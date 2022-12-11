import ContentBox from "../components/ContentBox";

const Video = () => {
  return (
    <>
      <ContentBox>
          <iframe
            className="av"
            src="https://www.youtube.com/embed/6WQhuopFtvo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
      </ContentBox>
    </>
  );
};

export default Video;
