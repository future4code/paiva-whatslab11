import styled from "styled-components";
import planoDeFundo from "./img/plano-de-fundo.jpg"
export const Container = styled.div`
  display: flex;
  border: 1px solid;
  max-width: 500px;
  height: 100vh;
  flex-direction: column-reverse;
  margin: 0 auto;
  padding: 0;
  background-image: url(${planoDeFundo});
  box-sizing: border-box;
`;
 export const InputsDiv = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  height: 5%;
`;
export const InputTexts = styled.input`
  border: none;
  border-radius: 0.5em;
  margin: 0px;
  padding: 5px;
  align-content: center;
  width:${props => {
        if (props.tipo === "nome") {
            return "15%"
        } else {
            return "60%"
        }
    }};
`
export const Button = styled.button `
border-radius: 0.5em;
width: 15%;
border: none;
`
export const ImgButton = styled.img`
width: 100%;
`

export const Mensagens = styled.div`
  display: flex;
  flex-direction: column;
  text-align: ${props => {
        if (props.tipo.toLowerCase() === "eu") {
            return "right"
        } else {
            return "left"
        }
    }};
`
 export const BalaoDeMensagem = styled.div`
  margin: 0.5em;
  max-width: 60%;
  padding: 0.9em 0.8em;
  border-radius: 0.5em;
  font-weight: 450;
  line-height: 1.3;
  word-wrap: break-word;
  max-width: 60%;
  min-width: 8%;
  margin-bottom: 1em;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  
  background-color: ${props => {
        if (props.tipo === "eu") {
            return "#DDF7C8" // Verde copiado do WhatsApp
        } else {
            return "#ffffff" // Branco
        }
    }};
 
 align-self:  ${props => {
        if (props.tipo === "eu") {
            return "flex-end"
        } else {
            return "flex-start"
        }
    }};

`;
export const DivMensagens = styled.div `
box-sizing: border-box;
overflow-y: auto;
::-webkit-scrollbar {
  display: none;}
`