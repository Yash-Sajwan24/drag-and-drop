let imgBox = document.querySelector('.imgBox');
let whiteBox = document.getElementsByClassName('whiteBox');

imgBox.addEventListener('dragstart', function(e){
    e.target.classList.add('hold');
    setTimeout(function(){
        e.target.classList.add('hide');
    }, 0);
})
imgBox.addEventListener('dragend', function(){
    imgBox.className = 'imgBox';
})

for(whitebox of whiteBox){
    whitebox.addEventListener('dragover', function(e){
        e.preventDefault();
    })
    whitebox.addEventListener('dragenter', function(e){
        e.target.classList.add('dashed');
    })
    whitebox.addEventListener('dragleave', function(e){
        e.target.className = 'whiteBox';
    })
    whitebox.addEventListener('drop', function(e){
        e.target.append(imgBox);
    })
}