import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../../utils/firebase";
import { setMovies } from "../../features/movie/movieSlice.js";
import { selectUserName } from "../../features/user/userSlice.js";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    const unsubscribe = db.collection("movies").onSnapshot((snapshot) => {
      const recommends = [];
      const newDisney = [];
      const originals = [];
      const trending = [];

      snapshot.docs.forEach((doc) => {
        const data = { id: doc.id, ...doc.data() };
        switch (data.type) {
          case "recommend":
            recommends.push(data);
            break;
          case "new":
            newDisney.push(data);
            break;
          case "original":
            originals.push(data);
            break;
          case "trending":
            trending.push(data);
            break;
          default:
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisney,
          original: originals,
          trending: trending,
        })
      );
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [userName, dispatch]);

  return (
    <div>
      <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
    </div>
    
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 240px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/assets/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;