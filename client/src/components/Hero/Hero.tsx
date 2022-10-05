import styled from "styled-components";
import { Container } from "react-bootstrap";
import ModalComponent from "../Modal/Modal";

const HeroComponent = styled.header`
padding: 5rem 0;
height: 80vh;
background-image: url("https://images.unsplash.com/photo-1494178270175-e96de2971df9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80");
`;

const HeaderContainer = styled.div`
background-color: rgb(5, 148, 112);
padding: 3rem;
color: white;
width: 32.5rem;
`

const Heading = styled.h1`
font-size: 5rem;
`

const SubHeading = styled.h3`
margin: 1rem 0;
font-weight: 400;
`

const Hero = () => {
  return (
    <HeroComponent>
        <Container>
            <HeaderContainer>
                <Heading>Learn From The Best And Grow</Heading>
                <SubHeading>
                    Develop and master the ultimate habits of success.
                    Learn from real world experts
                </SubHeading>
                <ModalComponent
                    text="Signup"
                    variant="primary"
                    isSignupFlow={true}
                />
                <ModalComponent
                    text="Login"
                    variant="danger"
                    isSignupFlow={false}
                />
            </HeaderContainer>
        </Container>
    </HeroComponent>
  );
};

export default Hero;