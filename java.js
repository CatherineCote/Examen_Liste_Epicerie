//ANIMATION GSAP.....................................
  gsap.to('.fruit', { 
      scale: 1.25,
      repeat: -1,
    yoyo: true 
    })
    gsap.registerPlugin(ScrollTrigger);
gsap.timeline({
    
    scrollTrigger: {
      scrub: 1,
      markers: true,
      start: 'top 100%',
      end: 'bottom 50%',
      trigger: '.sectionCrayon',
    }
  })
  .to('.sectionCrayon',{
    x: '100%',
  })

  gsap.timeline({
    
    scrollTrigger: {
      scrub: 1,
      markers: true,
      start: 'top 25%',
      end: 'top 25%',
      toggleActions: 'restart complete reverse reset',
      trigger: '.formulaire',
    }
  })
  .to('.formulaire',{
    opacity: 1,
    duration:1,
  })
  

  
  
  //NEW CHOIX AJOUTER À LA LISTE............................

  const ajouter = document.querySelector('.ajouter');

  ajouter.addEventListener('click', function() {
    
    const game = new Game();
  });
  
  class Game{
    constructor(){
      this.afficherChoix();
    }


    afficherChoix(){
        

        var ul = document.getElementById("list");
        var li = document.createElement("li");
        
        document.body.appendChild(li);
        var choix = document.getElementById("choix").value;
        document.getElementById("list").innerHTML = nom;
       

    }
  }