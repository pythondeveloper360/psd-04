count = 1
max = 13

function swapImage(action){
    switch (action){
        case 'next':
            if (count<max){
                count++
                document.getElementById(`s${count}`).classList.add('focus')
                document.getElementById(`s${count-1}`).classList.remove('focus')

                document.getElementById(`s${count}`).scrollIntoView()

            }
            break
        case 'prev':
            if (count>1){
                count--;
                document.getElementById(`s${count}`).classList.add('focus')
                document.getElementById(`s${count+1}`).classList.remove('focus')

                document.getElementById(`s${count}`).scrollIntoView()

            }
            break
        default:
            document.getElementById('image').src = `images/${action}.jpg`
            document.getElementById(`s${count}`).classList.add('focus')
            document.getElementById(`s${count}`).classList.remove('focus')

            document.getElementById(`s${action}`).scrollIntoView()

            return
            // break
    }
    document.getElementById('image').src = `images/${count}.jpg`
}

function loadImages(){
    let container_ = document.getElementById('list')
    for (let i=1 ;i<=max;i++){
        container_.innerHTML+=`<img src = 'images/${i}.jpg'id = s${i} class = 'sImage' onclick = 'swapImage(${i})'>`
    }
}

