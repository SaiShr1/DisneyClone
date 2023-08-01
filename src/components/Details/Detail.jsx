import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../../utils/firebase.js";

const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  return (
    <Container>
      <Background>
        <img
          src={detailData.backgroundImg}
          alt={detailData.title}
        />
      </Background>

      <ImageTitle>
        <img
          src={detailData.titleImg}
          alt={detailData.title}
        />
      </ImageTitle>

      <MetaContent>
        <Controls>
          <Player>
            <img src="/assets/images/play-icon-black.png" alt="" />
            <span>Watch Now</span>
          </Player>

          <Trailer>
            <img src="/assets/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>

          <AddList>
            <span />
            <span />
          </AddList>

          <GroupWatch>
            <div>
              <img src="/assets/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>

        <SubTitle>{detailData.subTitle}</SubTitle>

        <Description>{detailData.description}</Description>
      </MetaContent>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
      height: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 240px;
    width: 35vw;
  }
`;

const MetaContent = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 8px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  opacity: 1;
  border: none;
  background: rgb(250, 250, 250, 0.8);
  color: rgb(0, 0, 0);
  font-size: 17px;
  transition: transform 0.3s ease;

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(250, 250, 250, 0.9);
    transform: scale(1.08);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s ease;
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.8);
  color: rgb(250, 250, 250);
  font-size: 17px;

  &:hover {
    background: rgb(0, 0, 0, 0.9);
    transform: scale(1.1);
  }
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid white;
  border-radius: 50%;

  span {
    background-color: rgb(250, 250, 250);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: white;

  div {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: rgb(0, 0, 0);

    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 8px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;
