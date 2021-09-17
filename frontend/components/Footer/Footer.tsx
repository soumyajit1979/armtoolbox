import React from 'react';
import Container from '../UiElements/Container/Container';
import FooterWrapper, { Text } from './Footer.styled';

const Footer: React.FC<{}> = () => {
  return (
    <FooterWrapper>
      <Container>
        <Text>ARM Toolbar ©{new Date().getFullYear()} All right reserved</Text>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
