let apiKey = "f9ea54045bb54454b8c5f54b7b42a05f"
let selected = 'general'
function loadNews() {
    let country = document.getElementById('country').value
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`)

        .then((res) => res.json())
        .then((data) => {
            document.getElementById('news').innerHTML = ''
            document.getElementById('info').innerHTML = `All news from ${country}`
            if (data.totalResults > 0) {
                for (let i = 0; i <= data.articles.length; i++) {
                    document.getElementById('news').innerHTML += `
                <div class = 'card'>
                <img class = 'newsImg' src = ${data.articles[i].urlToImage} alt = 'Image Not Found'>
                <div>
                <a target ='_blank'href = ${data.articles[i].url}><h3>${data.articles[i].title ? data.articles[i].title : ''}</h3></a>
                <p>${data.articles[i].description ? data.articles[i].description : ''}</p>
                </div>
                </div>
                `
                }
            }
            else {
                document.getElementById('news').innerHTML = '<h2>No News</h2>'
            }
        })
}
function selectCateogory(category) {
    let country = document.getElementById('country').value
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
            document.getElementById('info').innerHTML = `${category.toUpperCase()} news from ${country}`
            document.getElementById('news').innerHTML = ''
            document.getElementById(selected).className = 'cate'
            document.getElementById(category).className = 'cate selected'
            selected = category
            console.log(selected)
            if (data.totalResults > 0) {
                for (let i = 0; i <= data.articles.length; i++) {
                    document.getElementById('news').innerHTML += `
                <div class = 'card'>
                <img class = 'newsImg' src = ${data.articles[i].urlToImage} alt = 'Image Not Found'>
                <div>
                <a target ='_blank'href = ${data.articles[i].url}><h3>${data.articles[i].title ? data.articles[i].title : ''}</h3></a>
                <p>${data.articles[i].description ? data.articles[i].description : ''}</p>
                </div>
                </div>
                `

                }

            }
            else {
                document.getElementById('news').innerHTML = '<h2>No News</h2>'
            }
           

        })
}