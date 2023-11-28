fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(data => { 
    console.log(data)
    console.log(data.message)
    
    const wouf = document.querySelector(".wouf")
    wouf.src= data.message
})