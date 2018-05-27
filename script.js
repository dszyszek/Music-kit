const prog = {
 box: document.querySelectorAll('.box'),
 flag: true,
 clickMove: function(){
						if(event.repeat){return}								//prevent key-hold bug 
						this.box.forEach(x => x.classList.remove('key1'));
						let boxD = document.querySelectorAll('div[data-key]');   
     
						boxD.forEach(function(x){
							
							if(event.keyCode == x.getAttribute('data-key')){
							                                
								if(prog.flag == true){x.classList.add('key1')}
								else if(prog.flag == false){x.classList.add('box')}

								}
							}	
							)
						this.audioFunc(event);
						this.flag = !this.flag
						},
audioFunc: function(p){	
                        if(this.flag == true){
                        let audioD = document.querySelectorAll('audio[data-key]');    
                        audioD.forEach(function(x){if(p.keyCode == x.getAttribute('data-key')){
                            x.currentTime = 0;
                            x.play();}})
                                }
                        }
}
window.addEventListener('keydown',prog.clickMove.bind(prog))
window.addEventListener('keyup',prog.clickMove.bind(prog));