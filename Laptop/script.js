function loadLaptopData(){
    fetch('data.json')
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data[0])
    })
}