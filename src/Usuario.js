import React from 'react';

function Perfil(props){
  const [imagem, setImagem] = React.useState(props.imagem);
  const [usuario, setUsuario] = React.useState(props.usuario);
  const [nome, setNome] = React.useState(props.nome);
  return(
    <div class="usuario">
          <img onClick={() =>{setImagem(prompt('Digite o link da imagem'))}} src={imagem} />
          <div class="texto">
            <strong>{usuario}</strong>
            <span>
              {nome}
              <ion-icon onClick={() =>{setUsuario(prompt('Digite o nome de usuario'));setNome(prompt('Digite o nome'))}} name="pencil"></ion-icon>
            </span>
          </div>
        </div>
  )
}


export default function Usuario(){
    const perfil = {usuario: 'catanacomics', nome: 'Catana', imagem: "assets/img/catanacomics.svg"}
    return(
      <Perfil usuario={perfil.usuario} nome={perfil.nome} imagem={perfil.imagem}/>
    )
}