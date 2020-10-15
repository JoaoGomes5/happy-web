import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  > aside {
    z-index: 10;
    width: 440px;
    background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

    padding: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 

    > footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      > div {
          margin-left: 24px;
          display: flex;
        flex-direction: column;
        line-height: 24px;
      }

      > a {
          background: #ffd666;
          

          &:hover {
            background: #96feff;
          }
        }

      > strong {
        font-weight: 800;
      }

    }
  }

  > a {
    z-index: 10;
    position: absolute;

    right: 40px;
    bottom: 40px;

    width: 64px;
    height: 64px;
    background: #15c3d6;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s;

    &:hover {
      background: #17d6eb;
    }
  }

  .map-popup .leaflet-popup-content-wrapper{
    background: rgba(255,255,255,0.8);
    border-radius: 20px;
    box-shadow: none;
  }
  .map-popup .leaflet-popup-content {
    color: #0089a5;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .map-popup .leaflet-popup-content a {
    width: 40px;
    height: 40px;
    background: #15c4d6;
    box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
    border-radius: 12px;  

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .map-popup .leaflet-popup-tip-container {
    display: none;
  }


`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
  line-height: 42px;
  margin-top: 64px;
`;

export const Description = styled.p`
  line-height: 28px;
  margin-top: 24px;
`;



