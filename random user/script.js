function  loadUser(){
    fetch('https://randomuser.me/api/')
    .then((res)=>res.json())
    .then((data)=>{
        // console.log(data.results[0])
        document.getElementById('userImg').src = data.results[0].picture.large
        document.getElementById('name').innerHTML = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`
    //    
    })
}