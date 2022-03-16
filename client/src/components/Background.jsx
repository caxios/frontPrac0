import styled from 'styled-components'
import {Container} from "react-bootstrap"
import ModalComponent from "./Modal";

const BackgroundComponent = styled.header`
padding: 5rem 0;
height: 60vh;
background-image: url("https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500&q=80");
background-size: cover;
background-position: center;
`
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
const Background = ()=>{
    return(
        <BackgroundComponent>
            <Container>
                <HeaderContainer>
                    <Heading>
                        HAHAHA!
                        <SubHeading>
                            LALALALA~!!!
                        </SubHeading>
                    </Heading>
                    <ModalComponent text="Sign Up" variant="primary"/> {/** variant = "primary" | "secondary" | "danger"; */}
                    <ModalComponent text="Login" varaint="secondary"/>
                </HeaderContainer>
            </Container>
        </BackgroundComponent>
    )
}

export default Background