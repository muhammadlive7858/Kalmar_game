let start = document.getElementById('start');

let loader = document.querySelector('#loader');
let box = document.querySelector('.box');
let content = document.querySelector('#content')
let error = document.getElementById('error');
let error1 = document.getElementById('error1');


let bir = document.getElementById('bir');
let ikki = document.getElementById('ikki');
let uch = document.getElementById('uch');
let tort = document.getElementById('tort');
let besh = document.getElementById('besh');

let spanr1 = document.querySelector('#r1');
let spanr2 = document.querySelector('#r2');
let spanr3 = document.querySelector('#r3');
let spanr4 = document.querySelector('#r4');
let spanr5 = document.querySelector('#r5');

let spanl1 = document.querySelector('#l1');
let spanl2 = document.querySelector('#l2');
let spanl3 = document.querySelector('#l3');
let spanl4 = document.querySelector('#l4');
let spanl5 = document.querySelector('#l5');


let classR = document.querySelector('.R');
let classL = document.querySelector('.L');

let kalmar = document.getElementById('kalmartext')

son = ['1','0'];

setTimeout((loader.style.display = "none")*10000);
setTimeout((content.style.display = "flex")*10000);


start.addEventListener('focus', function (){
    kalmar.style.display = 'none';
    start.style.display = 'none';

    bir.style.display = 'flex';
    //start1  
    if(spanr1.addEventListener('click', function (){
        let nomer1 = Math.floor(Math.random() * son.length)
        if(nomer1==1){
            bir.style.display = 'none';
            ikki.style.display = 'flex';
                //start2  
                    if(spanr2.addEventListener('click', function (){
                        let nomer2 = Math.floor(Math.random() * son.length)
                        if(nomer2==1){
                            ikki.style.display = 'none';
                            uch.style.display = 'flex';
                                            //start3  
                                            if(spanr3.addEventListener('click', function (){
                                                let nomer3 = Math.floor(Math.random() * son.length)
                                                if(nomer3==1){
                                                    uch.style.display = 'none';
                                                    tort.style.display = 'flex';

                                                }
                                                else{
                                                    box.style.backgroundColor = 'red';
                                                    error.style.display = 'flex';
                                                }
                                            }));
                                            // center3
                                            else if(spanl3.addEventListener('click', function (){
                                                let nomer3 = Math.floor(Math.random() * son.length)
                                                if(nomer3==1){
                                                    uch.style.display = 'none';
                                                    tort.style.display = 'flex';
                                                       //start4  
                                                       if(spanr4.addEventListener('click', function (){
                                                        let nomer4 = Math.floor(Math.random() * son.length)
                                                        if(nomer4==1){
                                                            tort.style.display = 'none';
                                                            besh.style.display = 'flex';
                                                        
                                                        }
                                                        else{
                                                            box.style.backgroundColor = 'red';
                                                            error.style.display = 'flex';
                                                        }
                                                    }));
                                                    // center4
                                                    else if(spanl4.addEventListener('click', function (){
                                                        let nomer4 = Math.floor(Math.random() * son.length)
                                                    if(nomer4==1){
                                                            tort.style.display = 'none';
                                                            besh.style.display = 'flex';
                                                                    //start5  
                                                                    if(spanr5.addEventListener('click', function (){
                                                                        let nomer5 = Math.floor(Math.random() * son.length)
                                                                        if(nomer5==1){
                                                                            besh.style.display = 'none';
                                                                            error1.style.display = 'flex';
                                                                        
                                                                        }
                                                                        else{
                                                                            box.style.backgroundColor = 'red';
                                                                            error.style.display = 'flex';
                                                                        }
                                                                    }));
                                                                    // center5
                                                                    else if(spanl5.addEventListener('click', function (){
                                                                        let nomer5 = Math.floor(Math.random() * son.length)
                                                                        if(nomer5==1){
                                                                            besh.style.display = 'none';
                                                                            error1.style.display = 'flex';
                                                                        
                                                                        }
                                                                        else{
                                                                            box.style.backgroundColor = 'red';
                                                                            error.style.display = 'flex';
                                                                        }
                                                                    }));
                                                                    // end5
                                                        }
                                                        else{
                                                            box.style.backgroundColor = 'red';
                                                            error.style.display = 'flex';
                                                        }
                                                    }));
                                                    // end4
                                                }
                                                else{
                                                    box.style.backgroundColor = 'red';
                                                    error.style.display = 'flex';
                                                }
                                            }));
                                            // end3
                        }
                        else{
                            box.style.backgroundColor = 'red';
                            error.style.display = 'flex';
                        }
                    }));
                    // center2
                    else if(spanl2.addEventListener('click', function (){
                        let nomer2 = Math.floor(Math.random() * son.length)
                        if(nomer2==1){
                            ikki.style.display = 'none';
                            uch.style.display = 'flex';
                                            //start3  
                                            if(spanr3.addEventListener('click', function (){
                                                let nomer3 = Math.floor(Math.random() * son.length)
                                                if(nomer3==1){
                                                    uch.style.display = 'none';
                                                    tort.style.display = 'flex';
                                                        //start4  
                                                        if(spanr4.addEventListener('click', function (){
                                                            let nomer4 = Math.floor(Math.random() * son.length)
                                                            if(nomer4==1){
                                                                tort.style.display = 'none';
                                                                besh.style.display = 'flex';
                                                                       //start5  
                                                                       if(spanr5.addEventListener('click', function (){
                                                                        let nomer5 = Math.floor(Math.random() * son.length)
                                                                        if(nomer5==1){
                                                                            besh.style.display = 'none';
                                                                            error1.style.display = 'flex';
                                                                        
                                                                        }
                                                                        else{
                                                                            box.style.backgroundColor = 'red';
                                                                            error.style.display = 'flex';
                                                                        }
                                                                    }));
                                                                    // center5
                                                                    else if(spanl5.addEventListener('click', function (){
                                                                        let nomer5 = Math.floor(Math.random() * son.length)
                                                                        if(nomer5==1){
                                                                            besh.style.display = 'none';
                                                                            error1.style.display = 'flex';
                                                                        
                                                                        }
                                                                        else{
                                                                            box.style.backgroundColor = 'red';
                                                                            error.style.display = 'flex';
                                                                        }
                                                                    }));
                                                                    // end5
                                                            }
                                                            else{
                                                                box.style.backgroundColor = 'red';
                                                                error.style.display = 'flex';
                                                            }
                                                        }));
                                                        // center4
                                                        else if(spanl4.addEventListener('click', function (){
                                                            let nomer4 = Math.floor(Math.random() * son.length)
                                                        if(nomer4==1){
                                                                tort.style.display = 'none';
                                                                besh.style.display = 'flex';
                                                                        //start5  
                                                                        if(spanr5.addEventListener('click', function (){
                                                                            let nomer5 = Math.floor(Math.random() * son.length)
                                                                            if(nomer5==1){
                                                                                besh.style.display = 'none';
                                                                                error1.style.display = 'flex';
                                                                            
                                                                            }
                                                                            else{
                                                                                box.style.backgroundColor = 'red';
                                                                                error.style.display = 'flex';
                                                                            }
                                                                        }));
                                                                        // center5
                                                                        else if(spanl5.addEventListener('click', function (){
                                                                            let nomer5 = Math.floor(Math.random() * son.length)
                                                                            if(nomer5==1){
                                                                                besh.style.display = 'none';
                                                                                error1.style.display = 'flex';
                                                                            
                                                                            }
                                                                            else{
                                                                                box.style.backgroundColor = 'red';
                                                                                error.style.display = 'flex';
                                                                            }
                                                                        }));
                                                                        // end5
                                                            }
                                                            else{
                                                                box.style.backgroundColor = 'red';
                                                                error.style.display = 'flex';
                                                            }
                                                        }));
                                                        // end4
                                                }
                                                else{
                                                    box.style.backgroundColor = 'red';
                                                    error.style.display = 'flex';
                                                }
                                            }));
                                            // center3
                                            else if(spanl3.addEventListener('click', function (){
                                                let nomer3 = Math.floor(Math.random() * son.length)
                                                if(nomer3==1){
                                                    uch.style.display = 'none';
                                                    tort.style.display = 'flex';
                                                        //start4  
                                                        if(spanr4.addEventListener('click', function (){
                                                            let nomer4 = Math.floor(Math.random() * son.length)
                                                            if(nomer4==1){
                                                                tort.style.display = 'none';
                                                                besh.style.display = 'flex';
                                                                        //start5  
                                                                        if(spanr5.addEventListener('click', function (){
                                                                            let nomer5 = Math.floor(Math.random() * son.length)
                                                                            if(nomer5==1){
                                                                                besh.style.display = 'none';
                                                                                error1.style.display = 'flex';
                                                                            
                                                                            }
                                                                            else{
                                                                                box.style.backgroundColor = 'red';
                                                                                error.style.display = 'flex';
                                                                            }
                                                                        }));
                                                                        // center5
                                                                        else if(spanl5.addEventListener('click', function (){
                                                                            let nomer5 = Math.floor(Math.random() * son.length)
                                                                            if(nomer5==1){
                                                                                besh.style.display = 'none';
                                                                                error1.style.display = 'flex';
                                                                            
                                                                            }
                                                                            else{
                                                                                box.style.backgroundColor = 'red';
                                                                                error.style.display = 'flex';
                                                                            }
                                                                        }));
                                                                        // end5
                                                            }
                                                            else{
                                                                box.style.backgroundColor = 'red';
                                                                error.style.display = 'flex';
                                                            }
                                                        }));
                                                        // center4
                                                        else if(spanl4.addEventListener('click', function (){
                                                            let nomer4 = Math.floor(Math.random() * son.length)
                                                        if(nomer4==1){
                                                                tort.style.display = 'none';
                                                                besh.style.display = 'flex';
                                                                        //start5  
                                                                        if(spanr5.addEventListener('click', function (){
                                                                            let nomer5 = Math.floor(Math.random() * son.length)
                                                                            if(nomer5==1){
                                                                                besh.style.display = 'none';
                                                                                error1.style.display = 'flex';
                                                                            
                                                                            }
                                                                            else{
                                                                                box.style.backgroundColor = 'red';
                                                                                error.style.display = 'flex';
                                                                            }
                                                                        }));
                                                                        // center5
                                                                        else if(spanl5.addEventListener('click', function (){
                                                                            let nomer5 = Math.floor(Math.random() * son.length)
                                                                            if(nomer5==1){
                                                                                besh.style.display = 'none';
                                                                                error1.style.display = 'flex';
                                                                            
                                                                            }
                                                                            else{
                                                                                box.style.backgroundColor = 'red';
                                                                                error.style.display = 'flex';
                                                                            }
                                                                        }));
                                                                        // end5
                                                            }
                                                            else{
                                                                box.style.backgroundColor = 'red';
                                                                error.style.display = 'flex';
                                                            }
                                                        }));
                                                        // end4
                                                }
                                                else{
                                                    box.style.backgroundColor = 'red';
                                                    error.style.display = 'flex';
                                                }
                                            }));
                                            // end3
                        }
                        else{
                            box.style.backgroundColor = 'red';
                            error.style.display = 'flex';
                        }
                    }));
                    // end2
        }
        else{
            box.style.backgroundColor = 'red';
            error.style.display = 'flex';
        }
    }));
    // center1
    else if(spanl1.addEventListener('click', function (){
        let nomer1 = Math.floor(Math.random() * son.length)
        if(nomer1==1){
            bir.style.display = 'none';
            ikki.style.display = 'flex';
                            //start2  
                            if(spanr2.addEventListener('click', function (){
                                let nomer2 = Math.floor(Math.random() * son.length)
                                if(nomer2==1){
                                    ikki.style.display = 'none';
                                    uch.style.display = 'flex';
                                       //start3  
                                       if(spanr3.addEventListener('click', function (){
                                           let nomer3 = Math.floor(Math.random() * son.length)
                                           if(nomer3==1){
                                               uch.style.display = 'none';
                                               tort.style.display = 'flex';
                                                        //start4  
                                                        if(spanr4.addEventListener('click', function (){
                                                            let nomer4 = Math.floor(Math.random() * son.length)
                                                            if(nomer4==1){
                                                                tort.style.display = 'none';
                                                                besh.style.display = 'flex';
                                                                        //start5  
                                                                        if(spanr5.addEventListener('click', function (){
                                                                            let nomer5 = Math.floor(Math.random() * son.length)
                                                                            if(nomer5==1){
                                                                                besh.style.display = 'none';
                                                                                error1.style.display = 'flex';
                                                                            
                                                                            }
                                                                            else{
                                                                                box.style.backgroundColor = 'red';
                                                                                error.style.display = 'flex';
                                                                            }
                                                                        }));
                                                                        // center5
                                                                        else if(spanl5.addEventListener('click', function (){
                                                                            let nomer5 = Math.floor(Math.random() * son.length)
                                                                            if(nomer5==1){
                                                                                besh.style.display = 'none';
                                                                                error1.style.display = 'flex';
                                                                            
                                                                            }
                                                                            else{
                                                                                box.style.backgroundColor = 'red';
                                                                                error.style.display = 'flex';
                                                                            }
                                                                        }));
                                                                        // end5
                                                            }
                                                            else{
                                                                box.style.backgroundColor = 'red';
                                                                error.style.display = 'flex';
                                                            }
                                                        }));
                                                        // center4
                                                        else if(spanl4.addEventListener('click', function (){
                                                            let nomer4 = Math.floor(Math.random() * son.length)
                                                        if(nomer4==1){
                                                                tort.style.display = 'none';
                                                                besh.style.display = 'flex';
                                                                       //start5  
                                                                       if(spanr5.addEventListener('click', function (){
                                                                        let nomer5 = Math.floor(Math.random() * son.length)
                                                                        if(nomer5==1){
                                                                            besh.style.display = 'none';
                                                                            error1.style.display = 'flex';
                                                                        
                                                                        }
                                                                        else{
                                                                            box.style.backgroundColor = 'red';
                                                                            error.style.display = 'flex';
                                                                        }
                                                                    }));
                                                                    // center5
                                                                    else if(spanl5.addEventListener('click', function (){
                                                                        let nomer5 = Math.floor(Math.random() * son.length)
                                                                        if(nomer5==1){
                                                                            besh.style.display = 'none';
                                                                            error1.style.display = 'flex';
                                                                        
                                                                        }
                                                                        else{
                                                                            box.style.backgroundColor = 'red';
                                                                            error.style.display = 'flex';
                                                                        }
                                                                    }));
                                                                    // end5
                                                            }
                                                            else{
                                                                box.style.backgroundColor = 'red';
                                                                error.style.display = 'flex';
                                                            }
                                                        }));
                                                        // end4
                                           }
                                           else{
                                               box.style.backgroundColor = 'red';
                                               error.style.display = 'flex';
                                           }
                                       }));
                                       // center3
                                       else if(spanl3.addEventListener('click', function (){
                                           let nomer3 = Math.floor(Math.random() * son.length)
                                           if(nomer3==1){
                                               uch.style.display = 'none';
                                               tort.style.display = 'flex';
                                                        //start4  
                                                        if(spanr4.addEventListener('click', function (){
                                                            let nomer4 = Math.floor(Math.random() * son.length)
                                                            if(nomer4==1){
                                                                tort.style.display = 'none';
                                                                besh.style.display = 'flex';
                                                                       //start5  
                                                                       if(spanr5.addEventListener('click', function (){
                                                                        let nomer5 = Math.floor(Math.random() * son.length)
                                                                        if(nomer5==1){
                                                                            besh.style.display = 'none';
                                                                            error1.style.display = 'flex';
                                                                        
                                                                        }
                                                                        else{
                                                                            box.style.backgroundColor = 'red';
                                                                            error.style.display = 'flex';
                                                                        }
                                                                    }));
                                                                    // center5
                                                                    else if(spanl5.addEventListener('click', function (){
                                                                        let nomer5 = Math.floor(Math.random() * son.length)
                                                                        if(nomer5==1){
                                                                            besh.style.display = 'none';
                                                                            error1.style.display = 'flex';
                                                                        
                                                                        }
                                                                        else{
                                                                            box.style.backgroundColor = 'red';
                                                                            error.style.display = 'flex';
                                                                        }
                                                                    }));
                                                                    // end5
                                                            }
                                                            else{
                                                                box.style.backgroundColor = 'red';
                                                                error.style.display = 'flex';
                                                            }
                                                        }));
                                                        // center4
                                                        else if(spanl4.addEventListener('click', function (){
                                                            let nomer4 = Math.floor(Math.random() * son.length)
                                                            if(nomer4==1){
                                                                tort.style.display = 'none';
                                                                besh.style.display = 'flex';
                                                                       //start5  
                                                                       if(spanr5.addEventListener('click', function (){
                                                                        let nomer5 = Math.floor(Math.random() * son.length)
                                                                        if(nomer5==1){
                                                                            besh.style.display = 'none';
                                                                            error1.style.display = 'flex';
                                                                        
                                                                        }
                                                                        else{
                                                                            box.style.backgroundColor = 'red';
                                                                            error.style.display = 'flex';
                                                                        }
                                                                    }));
                                                                    // center5
                                                                    else if(spanl5.addEventListener('click', function (){
                                                                        let nomer5 = Math.floor(Math.random() * son.length)
                                                                        if(nomer5==1){
                                                                            besh.style.display = 'none';
                                                                            error1.style.display = 'flex';
                                                                        
                                                                        }
                                                                        else{
                                                                            box.style.backgroundColor = 'red';
                                                                            error.style.display = 'flex';
                                                                        }
                                                                    }));
                                                                    // end5
                                                            }
                                                            else{
                                                                box.style.backgroundColor = 'red';
                                                                error.style.display = 'flex';
                                                            }
                                                        }));
                                                        // end4
                                           }
                                           else{
                                               box.style.backgroundColor = 'red';
                                               error.style.display = 'flex';
                                           }
                                       }));
                                       // end3
                                }
                                else{
                                    box.style.backgroundColor = 'red';
                                    error.style.display = 'flex';
                                }
                            }));
                            // center2
                            else if(spanl2.addEventListener('click', function (){
                                let nomer2 = Math.floor(Math.random() * son.length)
                                if(nomer2==1){
                                    ikki.style.display = 'none';
                                    uch.style.display = 'flex';
                                            //start3  
                                            if(spanr3.addEventListener('click', function (){
                                                let nomer3 = Math.floor(Math.random() * son.length)
                                                if(nomer3==1){
                                                    uch.style.display = 'none';
                                                    tort.style.display = 'flex';
                                                        //start4  
                                                        if(spanr4.addEventListener('click', function (){
                                                            let nomer4 = Math.floor(Math.random() * son.length)
                                                            if(nomer4==1){
                                                                tort.style.display = 'none';
                                                                besh.style.display = 'flex';
                                                                        //start5  
                                                                        if(spanr5.addEventListener('click', function (){
                                                                            let nomer5 = Math.floor(Math.random() * son.length)
                                                                            if(nomer5==1){
                                                                                besh.style.display = 'none';
                                                                                error1.style.display = 'flex';
                                                                            
                                                                            }
                                                                            else{
                                                                                box.style.backgroundColor = 'red';
                                                                                error.style.display = 'flex';
                                                                            }
                                                                        }));
                                                                        // center5
                                                                        else if(spanl5.addEventListener('click', function (){
                                                                            let nomer5 = Math.floor(Math.random() * son.length)
                                                                            if(nomer5==1){
                                                                                besh.style.display = 'none';
                                                                                error1.style.display = 'flex';
                                                                            
                                                                            }
                                                                            else{
                                                                                box.style.backgroundColor = 'red';
                                                                                error.style.display = 'flex';
                                                                            }
                                                                        }));
                                                                        // end5
                                                            }
                                                            else{
                                                                box.style.backgroundColor = 'red';
                                                                error.style.display = 'flex';
                                                            }
                                                        }));
                                                        // center4
                                                        else if(spanl4.addEventListener('click', function (){
                                                            let nomer4 = Math.floor(Math.random() * son.length)
                                                            if(nomer4==1){
                                                                tort.style.display = 'none';
                                                                besh.style.display = 'flex';
                                                                        //start5  
                                                                        if(spanr5.addEventListener('click', function (){
                                                                            let nomer5 = Math.floor(Math.random() * son.length)
                                                                            if(nomer5==1){
                                                                                besh.style.display = 'none';
                                                                                error1.style.display = 'flex';
                                                                            
                                                                            }
                                                                            else{
                                                                                box.style.backgroundColor = 'red';
                                                                                error.style.display = 'flex';
                                                                            }
                                                                        }));
                                                                        // center5
                                                                        else if(spanl5.addEventListener('click', function (){
                                                                            let nomer5 = Math.floor(Math.random() * son.length)
                                                                            if(nomer5==1){
                                                                                besh.style.display = 'none';
                                                                                error1.style.display = 'flex';
                                                                            
                                                                            }
                                                                            else{
                                                                                box.style.backgroundColor = 'red';
                                                                                error.style.display = 'flex';
                                                                            }
                                                                        }));
                                                                        // end5
                                                            }
                                                            else{
                                                                box.style.backgroundColor = 'red';
                                                                error.style.display = 'flex';
                                                            }
                                                        }));
                                                        // end4
                                                }
                                                else{
                                                    box.style.backgroundColor = 'red';
                                                    error.style.display = 'flex';
                                                }
                                            }));
                                            // center3
                                            else if(spanl3.addEventListener('click', function (){
                                                let nomer3 = Math.floor(Math.random() * son.length)
                                                if(nomer3==1){
                                                    uch.style.display = 'none';
                                                    tort.style.display = 'flex';
                                                        //start4  
                                                        if(spanr4.addEventListener('click', function (){
                                                            let nomer4 = Math.floor(Math.random() * son.length)
                                                            if(nomer4==1){
                                                                tort.style.display = 'none';
                                                                besh.style.display = 'flex';
                                                                        //start5  
                                                                        if(spanr5.addEventListener('click', function (){
                                                                            let nomer5 = Math.floor(Math.random() * son.length)
                                                                            if(nomer5==1){
                                                                                besh.style.display = 'none';
                                                                                error1.style.display = 'flex';
                                                                            
                                                                            }
                                                                            else{
                                                                                box.style.backgroundColor = 'red';
                                                                                error.style.display = 'flex';
                                                                            }
                                                                        }));
                                                                        // center5
                                                                        else if(spanl5.addEventListener('click', function (){
                                                                            let nomer5 = Math.floor(Math.random() * son.length)
                                                                            if(nomer5==1){
                                                                                besh.style.display = 'none';
                                                                                error1.style.display = 'flex';
                                                                            
                                                                            }
                                                                            else{
                                                                                box.style.backgroundColor = 'red';
                                                                                error.style.display = 'flex';
                                                                            }
                                                                        }));
                                                                        // end5
                                                            }
                                                            else{
                                                                box.style.backgroundColor = 'red';
                                                                error.style.display = 'flex';
                                                            }
                                                        }));
                                                        // center4
                                                        else if(spanl4.addEventListener('click', function (){
                                                            let nomer4 = Math.floor(Math.random() * son.length)
                                                            if(nomer4==1){
                                                                tort.style.display = 'none';
                                                                besh.style.display = 'flex';
                                                                        //start5  
                                                                        if(spanr5.addEventListener('click', function (){
                                                                            let nomer5 = Math.floor(Math.random() * son.length)
                                                                            if(nomer5==1){
                                                                                besh.style.display = 'none';
                                                                                error1.style.display = 'flex';
                                                                            
                                                                            }
                                                                            else{
                                                                                box.style.backgroundColor = 'red';
                                                                                error.style.display = 'flex';
                                                                            }
                                                                        }));
                                                                        // center5
                                                                        else if(spanl5.addEventListener('click', function (){
                                                                            let nomer5 = Math.floor(Math.random() * son.length)
                                                                            if(nomer5==1){
                                                                                besh.style.display = 'none';
                                                                                error1.style.display = 'flex';
                                                                            
                                                                            }
                                                                            else{
                                                                                box.style.backgroundColor = 'red';
                                                                                error.style.display = 'flex';
                                                                            }
                                                                        }));
                                                                        // end5
                                                            }
                                                            else{
                                                                box.style.backgroundColor = 'red';
                                                                error.style.display = 'flex';
                                                            }
                                                        }));
                                                        // end4
                                                }
                                                else{
                                                    box.style.backgroundColor = 'red';
                                                    error.style.display = 'flex';
                                                }
                                            }));
                                            // end3
                                }
                                else{
                                    box.style.backgroundColor = 'red';
                                    error.style.display = 'flex';
                                }
                            }));
                            // end2
        }
        else{
            box.style.backgroundColor = 'red';
            error.style.display = 'flex';
        }
    }));
    // end1


    })
