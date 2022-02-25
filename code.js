




function imageADA(url) {
    let adaImage = document.createElement('img')
    adaImage.src = url
    adaImage.setAttribute('id', 'ADAimage')
    
    let div = document.querySelector('#ADA')
    div.appendChild(adaImage)
    document.body.append(div)
}

imageADA('./assets/ADAlogoimage.jpg')