let change = document.getElementById('change')

change.addEventListener('click',function(){
    let color = document.getElementById('color_text').value
    let imgText = document.getElementById('img_text').value

    document.getElementById( "img_str" ).style.color = color
    document.getElementById( "color_str" ).style.color = color
    document.getElementById('img').setAttribute('src', imgText);

});