class Forca {
    constructor(palavra) {
      this.palavra = palavra;
      this.palavraSecreta = this.escolherPalavra();
      this.letras = [];
      this.letraAdivinhada = '';
      this.erro = 10;
      // ... your code goes here
    }
  
    escolherPalavra() {
      const palavraAleatoria = this.palavra[Math.floor(Math.random()*this.palavra.length)];
      console.log(palavraAleatoria)
      return palavraAleatoria;
      // ... your code goes here
    }
  
  
    verificarLetraClicada(letra) {
      return !this.letras.includes(letra);
      // ... your code goes here
    }
  
    adicionarLetraCorreta(letra) {
      if( !this.letrasAdivinhada.includes(letra)){
      return this.letrasAdivinhada += letra;
      }
      // ... your code goes here
    }
  
    adicionarLetraErrada(letra) {
      if( !this.palavraSecreta.includes(letra)){
        return this.erro -= 1;
        } else if (!this.letras.includes(letra)) {
          return this.letras.push(letra)
        }
      // ... your code goes here
    }
  
    verificarFimdeJogo() {
      if (this.erro === 0) {
        return true
      } else {
        return false
      }
      // ... your code goes here
    }
  
    verificarVitoria() {
      let palavraCerta = this.letraAdivinhada.split('').sort().join('');
      let palavraSecretaOrder = this.palavraSecreta.split('').sort().join('');
      
      if (palavraCerta ===palavraSecretaOrder){
        return true
      } else {
        return false
      }
      // ... your code goes here
    }
  }
  
  let forca;
  let forcaCanvas;


  
  const botaoJogar = document.getElementById('botao-jogar');
  
  if (botaoJogar) {
    botaoJogar.addEventListener('click', event => {
      forca = new Forca(['alura', 'caelum', 'programacao', 'html', 'javascript', 'css']);
  
      // HINT (uncomment when start working on the canvas portion of the lab)
      forca.palavraSecreta = forca.escolherPalavra();
      forcaCanvas = new ForcaCanvas(forca.palavraSecreta);
      

      // ... your code goes here
    });
  }
  
  document.addEventListener('keydown', e => {
    console.log(e)
    //console.log(forca.palavraSecreta.includes(e.key))
    for(let i = 0; i< forca.palavraSecreta.length; i++) {
      if(forca.palavraSecreta[i] === e.key){
        forca.letras.push({
          letra: e.key, 
          posicao: i,
        })
      }
    }
    forcaCanvas.desenharLetraCorreta()
    forcaCanvas.desenharLetraIncorreta(e.key)
    
    console.log(forca.letras)
  });