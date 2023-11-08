// count = 1
// max = 5

let count = document.getElementById('count')
count.oninput=function(){
    document.getElementById('image').src = `images/${this.value}.jpg`
    document.getElementById('banner').innerHTML = `${this.value}.jpg`
}