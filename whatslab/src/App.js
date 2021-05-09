import React, { useState } from "react";
import img from "./img/enviar.png"
import {Container, InputsDiv, InputTexts ,Button, ImgButton, Mensagens, BalaoDeMensagem} from "./styled"

class App extends React.Component{
  state = {
    mensagens: [{id:1, nome:"Daniel", mensagem: "Estou na esquerda!"},{id:Date.now(), nome:"eu", mensagem: "Estou na direita!"}],
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
    const novaMsg = {id: Date.now(), nome:this.state.inputName, mensagem: this.state.inputMsg}    
    this.setState({
      mensagens: [...this.state.mensagens,novaMsg],
      inputName:"",
      inputMsg: "",
    })
  }
doubleClickApagar = (idPost) =>{
  const atualizaMsg = this.state.mensagens.filter((post) =>{
    if (post.id !==idPost){
      return true;
    }
  })
  this.setState({
    mensagens: [...atualizaMsg]
  })
}
render () {
  const chat = this.state.mensagens.map((msg)=> {
    if (msg.nome === "eu") {
              return (
                <Mensagens tipo={"eu"} key={msg.id} onDoubleClick={()=>{this.doubleClickApagar(msg.id)}}>
                  <BalaoDeMensagem tipo={"eu"}>
                      {msg.mensagem}   
                  </BalaoDeMensagem>
                  </Mensagens>
              )
          } else {
              return (
                <Mensagens tipo={"outro"} key={msg.id} onDoubleClick={()=>{this.doubleClickApagar(msg.id)}}>
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
