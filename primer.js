if(spanr2.addEventListener('click', function (){
    let nomer2 = Math.floor(Math.random() * son.length)
    if(nomer2==1){
        ikki.style.display = 'none';
        uch.style.display = 'flex';
        if(spanr3.addEventListener('click', function (){
            let nomer3 = Math.floor(Math.random() * son.length)
            if(nomer3==1){
                uch.style.display = 'none';
                tort.style.display = 'flex';
                if(spanr4.addEventListener('click', function (){
                    let nomer4 = Math.floor(Math.random() * son.length)
                    if(nomer4==1){
                        tort.style.display = 'none';
                        besh.style.display = 'flex';
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
                    }
                    else{
                        box.style.backgroundColor = 'red';
                        error.style.display = 'flex';
                    }
                }));
            }
            else{
                box.style.backgroundColor = 'red';
                error.style.display = 'flex';
            }
        }));
    }
    else{
        box.style.backgroundColor = 'red';
        error.style.display = 'flex';
    }
}));
// right end
// left start
if(spanl2.addEventListener('click', function (){
    let nomer2 = Math.floor(Math.random() * son.length)
    if(nomer2==1){
        ikki.style.display = 'none';
        uch.style.display = 'flex';
        if(spanl3.addEventListener('click', function (){
            let nomer3 = Math.floor(Math.random() * son.length)
            if(nomer3==1){
                uch.style.display = 'none';
                tort.style.display = 'flex';
                if(spanl4.addEventListener('click', function (){
                    let nomer4 = Math.floor(Math.random() * son.length)
                    if(nomer4==1){
                        tort.style.display = 'none';
                        besh.style.display = 'flex';
                        if(spanl5.addEventListener('click', function (){
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
                    }
                    else{
                        box.style.backgroundColor = 'red';
                        error.style.display = 'flex';
                    }
                }));
            }
            else{
                box.style.backgroundColor = 'red';
                error.style.display = 'flex';
            }
        }));
    }
    else{
        box.style.backgroundColor = 'red';
        error.style.display = 'flex';
    }
}));