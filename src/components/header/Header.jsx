import { HeaderContainer, Text, Money } from "./styles";

const Header = ({ para }) => {
  return (
    <HeaderContainer>
      <Text>
        Harcamak için <Money>{para} TL</Money> paranız var!
      </Text>
    </HeaderContainer>
  );
};

export default Header;
