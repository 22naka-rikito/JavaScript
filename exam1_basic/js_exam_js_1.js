let clac = document.getElementById('clac')
let clear = document.getElementById('clear')

clac.addEventListener('click',function(){
    let kokugoStr = document.getElementById('kokugo').value
    let suugakuStr = document.getElementById('suugaku').value
    let eigoStr = document.getElementById('eigo').value
    
    let kokugo = Number.parseInt(kokugoStr)
    let suugaku = Number.parseInt(suugakuStr)
    let eigo = Number.parseInt(eigoStr)

    let sum = kokugo + suugaku + eigo
    let avg = sum / 3
    document.getElementById('sum').innerHTML = sum
    document.getElementById('avg').innerHTML = avg
});

clear.addEventListener('click',function(){
    document.getElementById( "kokugo" ).value = 0
    document.getElementById( "suugaku" ).value = 0
    document.getElementById( "eigo" ).value = 0
    document.getElementById('sum').innerHTML = ""
    document.getElementById('avg').innerHTML = ""
});