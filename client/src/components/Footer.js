import {AiFillLinkedin,AiFillGithub,AiOutlineMail,AiOutlinePhone,AiOutlineHome} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'
import styled from "styled-components";
  
  const Container = styled.div`
    display: flex;
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  

  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  

 
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  

  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>AHMET MERT OZDEMIR</Logo>
          <Desc>
            Full Stack Web Developer
          </Desc>
          <SocialContainer>
            <SocialIcon color="33A5FF">
              <AiFillLinkedin />
            </SocialIcon>
            <SocialIcon color="19191A">
              <AiFillGithub />
            </SocialIcon>
            <SocialIcon color="F53B09">
              <SiGmail />
            </SocialIcon>
           
          </SocialContainer>
        </Left>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <AiOutlineHome style={{marginRight:"10px"}}/> Yenimahalle, Ankara
          </ContactItem>
          <ContactItem>
            <AiOutlinePhone style={{marginRight:"10px"}}/> +90 553 571 14 05
          </ContactItem>
          <ContactItem>
            <AiOutlineMail style={{marginRight:"10px"}} /> avamertozdemir@gmail.com
          </ContactItem>
          
        </Right>
      </Container>
    );
  };
  
  export default Footer;