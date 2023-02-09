import React from "react";
import styled from "styled-components";
import Container from "./components/shared/Container";
import Flex from "./components/shared/Flex";
import Typography from "./components/shared/Typography";

const Center = styled(Flex)`
  height: 100vh;
`;

const LoginForm = styled.form`
  min-width: 240px;
`;

function App() {
  return (
    <Center justify="center" align="center">
      <Container>
        <LoginForm>
          <Typography variant="subtitle">Hope 2</Typography>
          <Typography>Login</Typography>
          <input type="text" />
          <Typography>Senha</Typography>
          <input style={{}} type="text" />
        </LoginForm>
      </Container>
    </Center>
  );
}

export default App;
