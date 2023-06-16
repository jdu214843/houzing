import { Container, Content, Details, Icons, ImgCard, Line } from "./style";

import NoImg from "../../assets/img/noimg.png";

export const HouseCard = ({
  url,
  title,
  beds,
  baths,
  ruler,
  garage,
  info,
  love,
  resize,
}) => {
  return (
    <Container>
      <ImgCard src={url || NoImg} />
      <Content>
        <div className="subTitle">{title || "New Apartment Nice Wiew"}</div>
        <div className="info">{info || "Quincy St, Brooklyn, NY, USA"}</div>
        <Details>
          <Details.Items>
            <Icons.Beds />
            <div className="info">Beds {beds || 0}</div>
          </Details.Items>

          <Details.Items>
            <Icons.Baths />
            <div className="info">Baths {baths || 0}</div>
          </Details.Items>
          <Details.Items>
            <Icons.Garage />
            <div className="info">Garage {garage || 0}</div>
          </Details.Items>
          <Details.Items>
            <Icons.Ruler />
            <div className="info">Ruler {ruler || 0}</div>
          </Details.Items>
        </Details>
      </Content>
      <Line />
      <Content footer>
        <Details.Items footer>
          <div className="info">$2,800/mo</div>
          <div className="subTitle">$7,500/mo</div>
        </Details.Items>
        <Details.Items row>
          <Icons.Resize src={resize || "icon"} />
          <Icons.Love src={love || "icon"} />
        </Details.Items>
      </Content>
    </Container>
  );
};
export default HouseCard;
