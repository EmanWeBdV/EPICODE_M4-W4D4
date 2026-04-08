// Strive School Token API : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ1NDM3NGJhMGYxMjAwMTUyZTc3NmIiLCJpYXQiOjE3NzU1ODQxMTYsImV4cCI6MTc3Njc5MzcxNn0.IJzM3lyFfQC9wLFlzv2bE1mbyIVPGWi7N4shdrUZE5w
export const productApiUrl = "https://striveschool-api.herokuapp.com/api/product/"
export const tokenAPI = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ1NDM3NGJhMGYxMjAwMTUyZTc3NmIiLCJpYXQiOjE3NzU1ODQxMTYsImV4cCI6MTc3Njc5MzcxNn0.IJzM3lyFfQC9wLFlzv2bE1mbyIVPGWi7N4shdrUZE5w"



const createProduct = async () => {
        try {
        const response = await fetch(productApiUrl, {
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
        const response = await fetch(productApiUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": tokenAPI,
            }
        })
        const data = await response.json()
        console.log(response)
        console.log(data)
        
    } catch (error) {
        console.error(error)
    }
}
getProducts()


const showProducts = (products) =>{
    products.forEach(product => {
        const containerProduct = document.createElement("div")
        const imgProduct = document.createElement("img")
        const titleProduct = document.createElement("h2")
        const descriptionProduct = document.createElement("p")

        imgProduct.setAttribute("src", product.imageUrl)
        titleProduct.innerText = product.name
        descriptionProduct.innerText = product.description

        containerProduct.append(imgProduct, titleProduct, descriptionProduct)
    });




}



