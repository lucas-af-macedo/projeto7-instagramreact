import React from 'react';

function Post(props){
    const [curtidas, setCurtidas] = React.useState(props.pessoasCurtiu);
    const [coracao, setCoracao] = React.useState("heart-outline");
    const [cor, setCor] = React.useState("");
    const [salvar, setSalvar] = React.useState("bookmark-outline");
    return(
        <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.imagemPerfil}/>
            {props.nomePerfil}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img onClick={() =>{if(cor===''){setCor('vermelho');setCoracao('heart');setCurtidas(curtidas+1);}}} src={props.imagem}/>
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon onClick={() =>{ if(cor===''){setCor('vermelho');setCoracao('heart');setCurtidas(curtidas+1);}else{setCor('');setCoracao('heart-outline');setCurtidas(curtidas-1);} }}class={cor} name={coracao}></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon onClick={() =>{if (salvar === 'bookmark'){setSalvar('bookmark-outline')}else{setSalvar('bookmark')}}} name={salvar}></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={props.imagemCurtiu}/>
            <div class="texto">
              Curtido por <strong>{props.nomeCurtiu}</strong> e <strong>outras {curtidas.toLocaleString('pt-BR')} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    )
}

export default function Posts(){
    const post = [
        {imagemPerfil: "assets/img/meowed.svg", nomePerfil: 'meowed', imagem: "assets/img/gato-telefone.svg", imagemCurtiu: "assets/img/respondeai.svg", nomeCurtiu: 'respondeai', pessoasCurtiu:101523 },
        {imagemPerfil: "assets/img/barked.svg", nomePerfil: 'barked', imagem: "assets/img/dog.svg", imagemCurtiu: "assets/img/adorable_animals.svg", nomeCurtiu: 'adorable_animals', pessoasCurtiu: 99159 }
    ]
    return(
        <div class="posts">
            {post.map((f) => <Post imagemPerfil={f.imagemPerfil} nomePerfil={f.nomePerfil} imagem={f.imagem} imagemCurtiu={f.imagemCurtiu} nomeCurtiu={f.nomeCurtiu} pessoasCurtiu={f.pessoasCurtiu}/>)}
          </div>
    )
}