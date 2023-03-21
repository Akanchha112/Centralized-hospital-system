import styled from "styled-components";
import "./index.css";
import { AccountBox } from "../components/login/accountBox";
const AppContainer = styled.div`
    margin-top:10vh;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Login=()=>{
    return(
        <AppContainer>
      <AccountBox />
    </AppContainer>
    )
}
export default Login;
