import logo from './logo.svg';
import styled from "styled-components";
import React from "react";
import img from "./img/enviar.png"

const Container = styled.div`
  display: flex;
  border: 1px solid;
  width: 500px;
  height: 100vh;
  flex-direction: column-reverse;
  margin: 0 auto;
  padding: 0;
  background-color: #e7ddd7;
  box-sizing: border-box;
`;
 const InputsDiv = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  height: 5%;
`;
const InputTexts = styled.input`
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
const Button = styled.button `
border-radius: 0.5em;
width: 15%;
border: none;
`
const Mensagens = styled.div`
  display: flex;
  flex-direction: column;
  text-align: ${props => {
        if (props.tipo === "eu") {
            return "right"
        } else {
            return "left"
        }
    }};
`
const ImgButton = styled.img`
width: 100%;
`
 const BalaoDeMensagem = styled.div`
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

//acaba o styled
class App extends React.Component {
  state = {
    mensagens: [{id:1, nome:"Daniel", mensagem: "fica na esquerda"},{id:2, nome:"eu", mensagem: "fica pra direita"}
    ],
    inputName:"",
    inputMsg: "",
  };
  handleName = (event) => {
    this.setState({ inputName: event.target.value });
  }
  handleMsg = (event) => {
    this.setState({ inputMsg: event.target.value });
  }
  onClickEnviar = () =>{
    const novaMsg = {id: Math.random(), nome:this.state.inputName, mensagem: this.state.inputMsg}    
    this.setState({
      mensagens: [...this.state.mensagens,novaMsg],
      inputName:"",
      inputMsg: "",
    })
    
  }
  render () {
const chat = this.state.mensagens.map((msg)=> {
  if (msg.nome === "eu") {
            return (
              <Mensagens tipo={"eu"}>
                <BalaoDeMensagem tipo={"eu"}>
                    {msg.mensagem}   
                </BalaoDeMensagem>
                </Mensagens>
            )
        } else {
            return (
              <Mensagens tipo={"outro"}>
                <BalaoDeMensagem tipo={"outro"}>
                    <div><b>{msg.nome}</b></div>
                    <div>{msg.mensagem}</div>
                </BalaoDeMensagem>
                </Mensagens>
            )
        }
})

  return (
    <Container>
      <InputsDiv>
      <InputTexts tipo={"nome"}
          placeholder={"Nome"}
          value={this.state.inputName}
          onChange = {this.handleName}
        />
        <InputTexts tipo={"mensagem"}
          placeholder={"Mensagem"}
          value={this.state.inputMsg}
          onChange={this.handleMsg}

        />
        <Button onClick={this.onClickEnviar}><ImgButton src={img}/></Button>
      </InputsDiv>
      <div>{chat}</div>
      </Container>
  );
}
}
export default App;
