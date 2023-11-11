function nextBtn(step){
    switch(step){
        case '1' :
            let firstName = document.getElementById('firstName').value
            let lastName = document.getElementById('lastName').value
            // console.log(firstName,lastName)
            if (firstName){
                document.getElementById('one').classList.add('hidden')
                document.getElementById('two').classList.remove('hidden')
            }
            else{
                document.getElementById('one').innerHTML+=`<h4 class = 'header warning'>First name can not be empty</h4>`
            }
            break
        case '2':
            let bdate = document.getElementById('bDate').value
            let gender = document.getElementById('gender').value
            
            if ((bdate)||(gender)){
                document.getElementById('two').classList.add('hidden')
                document.getElementById('three').classList.remove('hidden')
                
            }else{
                // console.log('dasdsa')
                console.log(document.getElementById('bDate').value)
                document.getElementById('two').innerHTML+=`<h4 class = 'header warning'>Please input birth date and select gender</h4>`
            }
            break
        case '3':
            let email1 = document.getElementById('email1').value
            let email2 = document.getElementById('email2').value
            let pass1 = document.getElementById('password1').value
            let pass2 = document.getElementById('password2').value
            if (email1!=email2){
                document.getElementById('three').innerHTML+=`<h4 class = 'header warning'>'Emails should match'</h4>`
            }
            else if (pass1!=pass2){
                document.getElementById('three').innerHTML+=`<h4 class = 'header warning'>'Password should match'</h4>`
                document.getElementById('email1').value = email1
                document.getElementById('email2').value = email2
            }
            else{
                document.getElementById("three").classList.add('hidden')
                document.getElementById("four").classList.remove('hidden')
                document.getElementById('four').innerHTML+=`
                
                
                `
            }
            break

}

}