const params = new URLSearchParams (window.location.search)
const productID = params.get("productid")
const tokenAPI = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ1NDM3NGJhMGYxMjAwMTUyZTc3NmIiLCJpYXQiOjE3NzU1ODQxMTYsImV4cCI6MTc3Njc5MzcxNn0.IJzM3lyFfQC9wLFlzv2bE1mbyIVPGWi7N4shdrUZE5w"
const productInfoRow = document.querySelector(".productInfo")
const spinner = document.querySelector(".loadingSpinner")



const hideSpinner = () => {
    spinner.classList.add("d-none")
}


const getProductInfo = async () =>{
    try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${productID}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": tokenAPI,
            }
        })
        const data = await response.json()
        console.log(response)
        console.log(data)
        showProductInfo(data)
        console.log(showProductInfo)
        
    } catch (error) {
        console.error(error)
    }
}

getProductInfo()


const showProductInfo = (product) =>{
        const containerInfo = document.createElement("div")
        const containerProductInfo = document.createElement("div")
        const imgProductContainer = document.createElement("div")
        const imgProductInfo = document.createElement("img")
        const bodyProductInfo = document.createElement("div")
        const brandProductInfo = document.createElement("p")
        const titleProductInfo = document.createElement("h2")
        const descriptionProductInfo = document.createElement("p")
        const priceProductInfo = document.createElement("p")
        const buttonOrderProduct = document.createElement("a")

        bodyProductInfo.classList.add("bodyCardInfo")
        containerInfo.setAttribute("class", "col")
        containerProductInfo.classList.add("productInfoContainer")
        imgProductContainer.classList.add("containerImgProductInfo")
        imgProductInfo.setAttribute("src", product.imageUrl)
        imgProductInfo.setAttribute("class", "img-fluid imgProductInfo")
        imgProductInfo.setAttribute("draggable", false)
        brandProductInfo.innerText = product.brand
        titleProductInfo.innerText = product.name
        descriptionProductInfo.innerText = product.description
        priceProductInfo.innerText = product.price + " €"
        buttonOrderProduct.innerText = "Non disponibile"

        bodyProductInfo.append(brandProductInfo, titleProductInfo, descriptionProductInfo, priceProductInfo, buttonOrderProduct)
        imgProductContainer.appendChild(imgProductInfo)
        containerProductInfo.append(imgProductContainer, bodyProductInfo)
        containerInfo.appendChild(containerProductInfo)
        productInfoRow.appendChild(containerInfo)

        hideSpinner()
    };