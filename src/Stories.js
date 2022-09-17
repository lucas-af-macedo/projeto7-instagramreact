function Story(props){
 return( 
  <div class="story">
    <div class="imagem">
      <img src={props.imagem}/>
    </div>
    <div class="usuario">
      {props.nome}
    </div>
  </div>
  )
}

export default function Stories(){
    const story = [
        {imagem: "assets/img/9gag.svg" ,nome: '9gag'},
        {imagem: "assets/img/meowed.svg",nome: 'meowed'},
        {imagem: "assets/img/barked.svg" ,nome: 'barked'},
        {imagem: "assets/img/nathanwpylestrangeplanet.svg",nome: 'nathanwpylestrangeplanet'},
        {imagem: "assets/img/wawawicomics.svg",nome: 'wawawicomics'},
        {imagem: "assets/img/respondeai.svg",nome: 'respondeai'},
        {imagem: "assets/img/filomoderna.svg",nome: 'filomoderna'},
        {imagem: "assets/img/memeriagourmet.svg",nome: 'memeriagourmet'}
    ];
    return(
        <div class="stories">
          {story.map((f) => <Story imagem={f.imagem} nome={f.nome}/>)}
          <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
    );
}