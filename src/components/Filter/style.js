import styled from "styled-components";
import { ReactComponent as houses } from "../../assets/icons/house.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";
import { ReactComponent as setting } from "../../assets/icons/setting.svg";

const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-bottom: 10px;
  padding-top: 10px;
  gap: 20px;
`;

const Icons = styled.div``;

Icons.Search = styled(search)`
  margin-right: 10px;
  & path {
    fill: white;
  }
`;
Icons.Filter = styled(setting)`
  margin-right: 10px;
`;
Icons.Houses = styled(houses)`
  margin-right: 10px;
`;

const SectionWrapper = styled.div`
  padding: 30px;
  background-color: white;
  border: 1px solid #e6e9ec;
`;
const Section = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export { Container, Icons, SectionWrapper, Section };
