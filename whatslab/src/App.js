import React, { useState } from "react";
import img from "./img/enviar.png"
import {Container, InputsDiv, InputTexts ,Button, ImgButton, Mensagens, BalaoDeMensagem, DivMensagens} from "./styled"

class App extends React.Component{
  state = {
    mensagens: [
      {id:1, nome:"Lais Petra", mensagem: "Que legaaal! Vcs crescem a cada dia! Que orgulhoooo"},
      {id:2, nome:"Amanda Rangel", mensagem: "Turma linda e muito querida!!❤️"},
      {id:3, nome:"eu", mensagem: "Tá ficando bacana xD"},
      {id:4, nome:"Caio Teixeira", mensagem: "Estão mandando bem nas funções"},
      {id:5, nome:"Índio Medeiros", mensagem: "É tudo uma questão de visão holística🤓"},
      {id:6, nome:"Letícia Chijo", mensagem: "Geeente Front é demais né???"},
      {id:7, nome:"eu", mensagem: "Suuuper legal! Ajustado para diferentes telas inclusive hahaha"}

  ],
    inputName:"",
    inputMsg: ""
  };
  handleName = (event) => {
    this.setState({ inputName: event.target.value });
  }
  handleMsg = (event) => {
      this.setState({ inputMsg: event.target.value });
  }
  onEnterEnviar = (event) =>{
    if (event.key ==="Enter"){
      this.onClickEnviar();
    }
  }
  
  onClickEnviar = () =>{
    const novaMsg = {id: Date.now(), nome:this.state.inputName, mensagem: this.state.inputMsg}    
    this.setState({
      mensagens: [...this.state.mensagens,novaMsg],
      inputName:"",
      inputMsg: ""
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
          onKeyPress = {this.onEnterEnviar}
        />
        <Button onClick={this.onClickEnviar}><ImgButton src={img}/></Button>
      </InputsDiv>
      <DivMensagens>{chat}</DivMensagens>
      </Container>
  );
}
}
export default App;