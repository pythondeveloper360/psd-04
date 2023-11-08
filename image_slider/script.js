count = 1
max = 5

function swapImage(action){
    switch (action){
        case 'next':
            if (count+1<max){
                count++
            }
            break
        case 'prev':
            if (count-1>0){
                count--
            }
            break
    }
    document.getElementById('image').src = `images/${count}.jpg`
}

