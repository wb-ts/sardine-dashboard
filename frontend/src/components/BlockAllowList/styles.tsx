import styled from "styled-components";

export const TableWrapper = styled.div`
  margin: 30px 0;
  width: inherit;
`;

export const StyledMainDiv = styled.div`
  @media (min-width: 1400px) {
    width: 95%;
    padding-left: 2%;
    padding-right: 5%;
  }
  @media only screen and (max-width: 1400px) and (min-width: 1300px) {
    width: 90%;
    padding-left: 5%;
    padding-right: 5%;
  }
  @media only screen and (max-width: 1300px) and (min-width: 700px) {
    margin: 20px 10px;
    width: 80%;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  background-color: #ffffff;
  margin: 8px 0px;
  padding: 0px 8px;
`;

export const MainDiv = styled.body`
  // position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  // height: 1100px;

  margin: auto;
  width: 500px;
  //   height : 495px;
`;

export const BackgroundBox = styled.div`
  // position: absolute;
  left: 0%;
  right: 0%;
  top: 5%;
  bottom: 5%;
  // height: 1100px;

  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.02);
  border-radius: 10px;
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.05);
  @media (max-width: 760px) {
    border-radius: 10px 10px 0px 0px;
  }
`;

export const Title = styled.div`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  font-feature-settings: "ss02" on;
  color: var(--dark-14);
`;

export const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HorizontalSpace = styled.div`
  margin: 15px;
`;

export const Container = styled.div``;

export const StyledContainer = styled.div`
  margin: 50px 50px 0px;
  @media (max-width: 760px) {
    margin: 32px 16px 0px;
  }
  label {
    margin-bottom: 0px;
  }
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0 35px;
  height: 55px;
  overflow: hidden;
  background-color: #f8fbff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Dropbtn = styled.div`
  text-align: center;
  padding: 14px 16px;
  width: 270px;
  height: 50px;
  max-width: 100%;
  border: 1px solid #ced4da;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  margin: 8px 0px;
  cursor: pointer;
  color: #325078;
  span {
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140%;
  }
`;

export const SubDropbtn = styled.div`
  text-align: center;
  padding: 14px 16px;
  width: 250px;
  height: 40;
  max-width: 100%;
  display: flex;
  cursor: pointer;
  color: black;
  justify-content: space-between;
  span {
    font-weight: 600;
    font-size: 20px;
  }
`;

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: 250px;
  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  table-layout: auto;
  width: -webkit-fill-available;
  display: table;
`;

export const StyledTh = styled.th`
  height: 16px;
  padding: 0px 8px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */

  letter-spacing: 0.14em;

  /* Secondary */

  color: black;
`;

export const StyledTr = styled.tr`
  height: 36px;

  border-radius: 4px;
  font-family: IBM Plex Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  font-feature-settings: "ss02" on, "zero" on;
  color: grey;
  padding: 9px 0px;
  background-color: #ffffff;
  border: solid 2px transparent;
  border-bottom-color: #f7f9fc;
  width: auto;
`;

export const StyledTd = styled.td`
  vertical-align: middle;
  height: 25px;
  padding: 0px 8px;
`;

export const TdValue = styled.div`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 14px;
  color: #001932;
`;
