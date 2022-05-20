let btn = document.getElementById('btn')
let start = document.getElementById('start')
let total_stone = document.getElementById('stone_total').value;
let stone = ""
let finish = ""
let player ="A"
var player_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let cnt = 0
let max_player = 2
let mark = document.getElementById('mark').value

for(let i = 1; i <= total_stone; i++){
       stone += mark
       if(i % 10 == 0){
        stone += "<br>"
       } 
}

document.getElementById('nokori').innerHTML = total_stone
document.getElementById('get_stone').innerHTML = document.getElementById('stone_max').value
document.getElementById('player').innerHTML = player
document.getElementById('stone').innerHTML = stone

btn.addEventListener('click', function(){
    let stone_num = document.getElementById('stone_num').value
    total_stone -= stone_num
    stone = ""

    if(total_stone <= 0){
        total_stone = 0
        document.getElementById('result').innerHTML = "敗者:" + player
    }

    cnt++
    if(cnt == max_player){
        cnt = 0
    }
    player = player_list[cnt]

    

    for(let i = 1; i <= total_stone; i++){
        stone += mark
        if(i % 10 == 0){
         stone += "<br>"
        } 
    }

    document.getElementById('player').innerHTML = player
    document.getElementById('stone').innerHTML = stone
    document.getElementById('nokori').innerHTML = total_stone
})

start.addEventListener('click', function(){
    document.getElementById('stone_total').setAttribute('disabled', 'disabled')
    document.getElementById('stone_max').setAttribute('disabled', 'disabled')
    document.getElementById('player_num').setAttribute('disabled', 'disabled')
    document.getElementById('mark').setAttribute('disabled', 'disabled')
    document.getElementById('start').setAttribute('disabled', 'disabled')
    document.getElementById('stone_num').setAttribute('max', document.getElementById('stone_max').value)

    max_player = document.getElementById('player_num').value
    total_stone = document.getElementById('stone_total').value
    mark = document.getElementById('mark').value
    stone = ""

    for(let i = 1; i <= total_stone; i++){
        stone += mark
        if(i % 10 == 0){
         stone += "<br>"
        } 
    }
    document.getElementById('nokori').innerHTML = total_stone
    document.getElementById('get_stone').innerHTML = document.getElementById('stone_max').value
    document.getElementById('stone').innerHTML = stone
})