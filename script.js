function toggleMode(){
    const html = document.documentElement
   /* 
      if(html.classList.contains('ligth')){
          html.classList.remove('ligth')
      } else {
          html.classList.add('ligth')
      }
      */
  
     html.classList.toggle("ligth")
  
  // se tiver sem ligth mode, manter a imagem normal
  
  const img = document.querySelector("#profile img")
  
  //subistituir a imagem 
  
  if  (html.classList.contains('ligth')){
  // se tiver ligth mode, adicionar a imagem ligth  
      img.setAttribute("src", "./assets/Untitled-2.png")
  } else {
   //pegar a tag img 
      img.setAttribute("src","./assets/Untitled-1.png")
  }
  
  }
      
  
  
  