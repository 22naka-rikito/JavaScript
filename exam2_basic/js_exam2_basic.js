let btn = document.getElementById('btn')
let total_stone = 25;
let stone = ""
let finish = ""
let player ="A"

for(let i = 1; i <= total_stone; i++){
       stone += "●"
       if(i % 10 == 0){
        stone += "<br>"
       } 
}

document.getElementById('player').innerHTML = player
document.getElementById('stone').innerHTML = stone

btn.addEventListener('click', function(){
    let stone_num = document.getElementById('stone_num').value
    total_stone -= stone_num
    stone = ""

    if(player == "A"){
        player = "B"
    }else{
        player = "A"
    }

    if(total_stone < 0){
        total_stone = 0
        document.getElementById('info').innerHTML = "勝者:" + player
    }

    for(let i = 1; i <= total_stone; i++){
        stone += "●"
        if(i % 10 == 0){
         stone += "<br>"
        } 
    }

    document.getElementById('player').innerHTML = player
    document.getElementById('stone').innerHTML = stone
    document.getElementById('nokori').innerHTML = total_stone
})