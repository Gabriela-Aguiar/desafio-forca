class ForcaCanvas {
    constructor(palavraSecreta) {
      this.c = document.getElementById('forca')
      this.context = this.c.getContext('2d');
      this.context.strokeStyle = 'green';
      this.context.fillStyle = "orange"
      this.context.strokeRect(0, 0, 800, 1200) 
      this.context.fill()  
      this.palavraSecreta=palavraSecreta;
      // ... your code goes here
      this.criarLousa();
      
    }
    
    criarLousa() {
      // ... your code goes here
      this.context.clearRect(0, 0, 800, 1200);
      this.desenharLinhas();
      
    }
  
    desenharLinhas() {
      // ... your code goes here
      let x = 300;
      let y = 700;
      
      for(let i= 0; i < forca.palavraSecreta.length; i++){
          console.log(forca.palavraSecreta)

      }
      
      
    }
  
    desenharLetraCorreta(index) {
      // ... your code goes here
      
    }
  
    desenharLetraIncorreta(letra, errosRestante) {
      // ... your code goes here
      
      let textY = (errosRestante *50)+100;
      this.context.fillStyle = "green"
      this.context.font = "25px Roboto";
      this.context.fillText (letra,1000,textY)
      
    }
  
    desenharForca(errosRestante) {
      // ... your code goes here
      if (errosRestante==9){
        this.context.strokeStyle = "blue";
        this.context.fillStyle = "yellow";
        this.context.beginPath();
        this.context.moveTo(550,250);
        this.context.arc(550, 300, 50, 0, Math.PI*2,false);
        this.context.fill();
        this.context.closePath();
      }
    }
  
    fimDeJogo() {
      // ... your code goes here
      let gameOverImg = new Image();
      gameOverImg.src ="../images/gameover.png";
      this.context.drawImage(gameOverIMg, 200, 200)
    }
  
    vitoria() {
      // ... your code goes here
      let winImg = new Image();
      winImg.src ="../images/awesome.png";
      this.context.drawImage(winImg, 200, 100)
    }
  }