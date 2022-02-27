





// change function below to work for all sorts of images called in the url parameter/argument:
function imageADA(url) {
    let adaImage = document.createElement('img')
    adaImage.src = url
    adaImage.setAttribute('id', 'ADAimage')
    
    let div = document.querySelector('#ADA')
    div.appendChild(adaImage)
    document.body.append(div)
}

imageADA('./assets/ADAlogoimage.jpg')

