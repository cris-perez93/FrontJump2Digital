import styled from "styled-components";

const FooterContainer = styled.footer`
 display:flex;
 background:black;
 width:100%;
 color: white;
 justify-content: center;
`

const Footer = () => {
    return (
        <FooterContainer>
            <h3>Equipo 1</h3>
        </FooterContainer>
      );
}
 
export default Footer;