function cambiarColor() {
    var imagenBorde = document.getElementById('imagen');
    if(imagenBorde.classList.contains('border-2')){
        imagenBorde.classList.remove('border-2');
    }else{
        imagenBorde.classList.add('border-2');
    }
 }