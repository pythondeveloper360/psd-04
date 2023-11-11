let audios = ['a-long-way', 'one-night', 'sunshine-jaunt']
let current = 0
// function forward() {
//     if (current == audios.length - 1) {
//         current = 0
//     }
//     else {
//         current += 1
//     }
//     let name = audios[current]

//     name = name.replace('-', ' ').replace('-', ' ').replace('-', ' ').toUpperCase()
//     document.getElementById('name').innerHTML = name
//     document.getElementById('audio').src = `./audio/${audios[current]}.mp3`
// }
// function backward() {
//     if (current == 0) {
//         current = audios.length - 1
//     }
//     else {
//         current -= 1
//     }
//     let name = audios[current]
//     name = name.replace('-', ' ').replace('-', ' ').replace('-', ' ').toUpperCase()
//     document.getElementById('name').innerHTML = name

//     document.getElementById('audio').src = `./audio/${audios[current]}.mp3`
// }

function loadAudios() {
    for (let i = 0; i < audios.length; i++) {
        document.getElementById('audios').innerHTML += `
        <option value =${audios[i]}>
            ${audios[i].replace('-', ' ').replace('-', ' ').replace('-', ' ').toUpperCase()}
        </option>`
    }
}
function play(){
    let source = document.getElementById('audios').value
    let name = source.replace('-', ' ').replace('-', ' ').replace('-', ' ').toUpperCase()
    document.getElementById('name').innerHTML = name
    document.getElementById('audio').src = `./audio/${source}.mp3`
}