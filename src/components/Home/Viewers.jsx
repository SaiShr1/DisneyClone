import styled from "styled-components";

const Viewers = (props) => {
  return (
    <Container>
      <Wrap>
        <img src="/assets/images/viewers-disney.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} src="/assets/videos/1564674844-disney.mp4"></video>
      </Wrap>

      <Wrap>
        <img src="/assets/images/viewers-marvel.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} src="/assets/videos/1564676115-marvel.mp4"></video>
      </Wrap>

      <Wrap>
        <img src="/assets/images/viewers-national.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} src="/assets/videos/1564676296-national-geographic.mp4"></video>
      </Wrap>

      <Wrap>
        <img src="/assets/images/viewers-starwars.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} src="/assets/videos/1608229455-star-wars.mp4"></video>
      </Wrap>

      <Wrap>
        <img src="/assets/images/viewers-pixar.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} src="/assets/videos/1564676714-pixar.mp4"></video>
      </Wrap>

      <Wrap>
        <img src="/assets/images/viewers-hotstar.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} src="/assets/videos/1608229455-hotstar.mp4"></video>
      </Wrap>
    </Container>
  );
};


const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(6, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 63%) 0px 26px 30px -10px,
    rgb(0 0 0 / 67%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(259, 259, 259, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    position: absolute;
    opacity: 1;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 72%) 0px 26px 30px -10px,
    rgb(0 0 0 / 72%) 0px 16px 10px -10px;

    transform: scale(1.05);
    border-color: rgba(259, 259, 259, 0.8);

    video {
      opacity: 1;
    }

  }
`;

export default Viewers;
