// Strive School Token API : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ1NDM3NGJhMGYxMjAwMTUyZTc3NmIiLCJpYXQiOjE3NzU1ODQxMTYsImV4cCI6MTc3Njc5MzcxNn0.IJzM3lyFfQC9wLFlzv2bE1mbyIVPGWi7N4shdrUZE5w
// Link to fetch API:  https://striveschool-api.herokuapp.com/api/product/

export const tokenAPI = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ1NDM3NGJhMGYxMjAwMTUyZTc3NmIiLCJpYXQiOjE3NzU1ODQxMTYsImV4cCI6MTc3Njc5MzcxNn0.IJzM3lyFfQC9wLFlzv2bE1mbyIVPGWi7N4shdrUZE5w"

const productsContainer = document.querySelector(".allProducts")
const productsRow = document.querySelector(".rowProducts")


const createProduct = async () => {
        try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": tokenAPI,
            },
            body: JSON.stringify()
        })
        const data = await response.json()
        console.log(response)
        console.log(data)
        
    } catch (error) {
        console.error(error)
    }
}


const getProducts = async () =>{
    try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": tokenAPI,
            }
        })
        const data = await response.json()
        console.log(response)
        console.log(data)
        await showProducts(data)
        
    } catch (error) {
        console.error(error)
    }
}
getProducts()


const showProducts = (products) =>{
    products.forEach(product => {
        const containerProduct = document.createElement("div")
        const imgContainer = document.createElement("div")
        const imgProduct = document.createElement("img")
        const titleProduct = document.createElement("h2")
        const descriptionProduct = document.createElement("p")
        const priceProduct = document.createElement("p")



        containerProduct.setAttribute("class", "col-12 col-md-4 singleProductContainer")
        imgContainer.classList.add("containerImgProduct")
        imgProduct.setAttribute("src", product.imageUrl)
        imgProduct.setAttribute("class", "img-thumbnail")
        titleProduct.innerText = product.name
        descriptionProduct.innerText = product.description
        priceProduct.innerText = product.price + " €"

        imgContainer.appendChild(imgProduct)
        containerProduct.append(imgContainer, titleProduct, descriptionProduct, priceProduct)
        productsRow.appendChild(containerProduct)
    });




}




