import styled from "styled-components";
import { ReactComponent as beds } from "../../assets/icons/bed.svg";
import { ReactComponent as baths } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";

const Container = styled.div`
  width: 380px;
  height: 429px;

  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  margin: 100px;
`;

const ImgCard = styled.img`
  width: 100%;
  max-height: 220px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: ${({ footer }) => (footer ? "row" : "column")};
  justify-content: ${({ footer }) => footer && "space-between"};
  padding: 16px 20px;
  padding-top: 24px;
  background-color: #fff;
`;
const Details = styled.div`
  display: flex;
  margin-top: 16px;
  justify-content: space-between;
`;
Details.Items = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};

  align-items: ${({ footer }) => !footer && "center"};
`;

const Icons = styled.div``;
Icons.Beds = styled(beds)``;
Icons.Baths = styled(baths)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)`
  margin-right: 20px;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
Icons.Love = styled(love)`
  width: 40px;
  height: 40px;
  padding: 10px;
  background-color: #f6f8f9;
  border-radius: 50%;
  cursor: pointer;
  &:active {
    opacity: 0.8;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #e6e9ec;
`;
export { Container, ImgCard, Content, Details, Icons, Line };
