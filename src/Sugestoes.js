function Sugestao(props){
    return(
          <div class="sugestao">
            <div class="usuario">
              <img src={props.imagem}/>
              <div class="texto">
                <div class="nome">{props.nome}</div>
                <div class="razao">{props.razao}</div>
              </div>
            </div>
            <div class="seguir">Seguir</div>
          </div>
    )
}

export default function Sugestoes(){
    const sugestao = [
        {imagem: "assets/img/bad.vibes.memes.svg", nome: 'bad.vibes.memes', razao:'Segue você'},
        {imagem: "assets/img/chibirdart.svg", nome: 'chibirdart', razao:'Segue você'},
        {imagem: "assets/img/razoesparaacreditar.svg" , nome: 'razoesparaacreditar', razao:'Novo no Instagram'},
        {imagem: "assets/img/adorable_animals.svg" , nome: 'adorable_animals', razao:'Segue você'},
        {imagem: "assets/img/smallcutecats.svg", nome: 'smallcutecats', razao:'Segue você'}
    ];

    return(
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          {sugestao.map((f) => <Sugestao imagem={f.imagem} nome={f.nome} razao={f.razao}/>)}
        </div>
    )
}
