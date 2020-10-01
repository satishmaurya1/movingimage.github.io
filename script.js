const imgbox=document.querySelector('.imgbox');
const whitebox=document.querySelectorAll('.whitebox');




imgbox.addEventListener('dragstart',(e)=>{
    console.log('dragstart  has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className += ' hide';
    }, 0);
})

imgbox.addEventListener('dragend',(e)=>{
    console.log('dragend  has been triggered');
    e.target.className='imgbox';
})





for (const iterator of whitebox) {
    iterator.addEventListener('dragover',(e)=>{
        e.preventDefault();
    console.log('dragover  has been triggered');
        
    });
    iterator.addEventListener('dragenter',()=>{
    console.log('dragenter  has been triggered');
       
    });
    iterator.addEventListener('dragleave',()=>{
        console.log('dragleave has been triggered');
        
      
    });
    iterator.addEventListener('drop',(e)=>{
        console.log('dragdrop  has been triggered');
        e.target.append(imgbox);
        
    });
}