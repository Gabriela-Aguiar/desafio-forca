class ForcaCanvas {
    constructor(palavraSecreta) {
      this.c = document.getElementById('forca')
      this.context = this.c.getContext('2d');
      this.palavraSecreta=palavraSecreta;
      // ... your code goes here
      this.criarLousa();
      this.desenharLetraCorreta();
      this.palavraErrada = '';
    }
    
    criarLousa() {
      // ... your code goes here
      this.context.clearRect(0, 0, 800, 1200);
      this.desenharLinhas();
    }
  
    desenharLinhas() {
      // ... your code goes here
      let x = 200;
      let y = 700;

      
      for(let i= 0; i < forca.palavraSecreta.length; i++){
          x = x+100;
          this.context.moveTo(x,y)
          this.context.lineTo(x+80,y)
          this.context.stroke();
      }
      x=300
    }
  
    desenharLetraCorreta(letras) {
        console.log(forca)
      forca.letras.forEach(letra => {
          console.log(letra)
          this.context.font = "200px Calibri";
          this.context.fillText(letra.letra,(letra.posicao*100)+100,650)
          
      })
      
    }
  
    desenharLetraIncorreta(letra, errosRestante) {
      console.log('aaaaah', forca.palavraSecreta.includes(letra))
      
      
      if(!forca.palavraSecreta.includes(letra)){
          if(!this.palavraErrada.includes(letra)){
            this.palavraErrada+=letra
            this.desenharForca()
          }
          console.log(letra)
        this.context.font = "150px Calibri";
        this.context.fillText (this.palavraErrada,600,100)
      }
      
    }
  
    desenharForca() {
      // ... your code goes here
      if (true){
        console.log(this.palavraErrada)
        if(this.palavraErrada.length === 1){
            this.context.beginPath();
            this.context.arc(150, 300, 50, 0, Math.PI*2,false);
            this.context.fill();
            this.context.closePath();
    
            this.context.beginPath();
            this.context.moveTo(50,200);
            this.context.lineTo(50,700)
            this.context.stroke();
            this.context.closePath();
    
            this.context.beginPath();
            this.context.moveTo(0,200);
            this.context.lineTo(150,200)
            this.context.stroke();
            this.context.closePath();
    
            this.context.beginPath();
            this.context.moveTo(0,700);
            this.context.lineTo(150,700)
            this.context.stroke();
            this.context.closePath();
    
            this.context.beginPath();
            this.context.moveTo(150,200);
            this.context.lineTo(150,300)
            this.context.stroke();
            this.context.closePath();
        } 
        
        if(this.palavraErrada.length === 2) {
            this.context.beginPath();
            this.context.moveTo(150,300);
            this.context.lineTo(150,500)
            this.context.stroke();
            this.context.closePath();
        }

        if(this.palavraErrada.length === 3){
            this.context.beginPath();
            this.context.moveTo(150,350);
            this.context.lineTo(100,450)
            this.context.stroke();
            this.context.closePath();
        }

        if(this.palavraErrada.length === 4){
            this.context.beginPath();
            this.context.moveTo(150,350);
            this.context.lineTo(200,450)
            this.context.stroke();
            this.context.closePath();
        }

        if(this.palavraErrada.length === 5){
            this.context.beginPath();
            this.context.moveTo(150,500);
            this.context.lineTo(100,600)
            this.context.stroke();
            this.context.closePath();
        }

        if(this.palavraErrada.length === 6){
            this.context.beginPath();
            this.context.moveTo(150,500);
            this.context.lineTo(200,600)
            this.context.stroke();
            this.context.closePath();
        }
        
      }
    }
  
    fimDeJogo() {
      // ... your code goes here
    }
  
    vitoria() {
      // ... your code goes here
    }
  }