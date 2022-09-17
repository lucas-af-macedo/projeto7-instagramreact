function Post(props){
    const a= props.pessoasCurtiu.toLocaleString('pt-BR');
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
          <img src={props.imagem}/>
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon class='' name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={props.imagemCurtiu}/>
            <div class="texto">
              Curtido por <strong>{props.nomeCurtiu}</strong> e <strong>outras {a} pessoas</strong>
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