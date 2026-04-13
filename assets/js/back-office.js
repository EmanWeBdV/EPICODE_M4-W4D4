const tokenAPI = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ1NDM3NGJhMGYxMjAwMTUyZTc3NmIiLCJpYXQiOjE3NzU1ODQxMTYsImV4cCI6MTc3Njc5MzcxNn0.IJzM3lyFfQC9wLFlzv2bE1mbyIVPGWi7N4shdrUZE5w"

const tbodyListProductBO = document.querySelector(".bodyTable")
const formProduct = document.querySelector(".formProduct")
const deleteButtonProduct = document.querySelector(".cancelButtonForm")
const confirmDeleteButton = document.querySelector(".confirmDeleteButton")
const alertSectionForm = document.querySelector(".alert-success")
const modalAlertDelete = document.querySelector(".modal")
const spinner = document.querySelector(".loadingSpinner")
let editingProductId = null
const formSection = document.querySelector(".form")
formSection.classList.add("d-none")



const hideSpinner = () => {
    spinner.classList.add("d-none")
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
        generateProductList(data)
        
    } catch (error) {
        console.error(error)
    }
}
getProducts()


const generateProductList = (products) =>{
    products.forEach(product =>{
        const trProduct = document.createElement("tr")
        const tdPreviewProduct = document.createElement("td")
        const imgFortdPreviewProduct = document.createElement("img")
        const tdNameProduct = document.createElement("td")
        const tdBrandProduct = document.createElement("td")
        const tdDescriptionProduct = document.createElement("td")
        const tdPriceProduct = document.createElement("td")
        const tdActionsProduct = document.createElement("td")
        const viewProductPageButton = document.createElement("a")
        const iTagForViewProductPageButton = document.createElement("i")
        const spanTagForViewProductPageButton = document.createElement("span")
        const editProductPageButton = document.createElement("button")
        const iTagForEditProductPageButton = document.createElement("i")
        const spanTagForEditProductPageButton = document.createElement("span")
        const deleteProductPageButton = document.createElement("button")
        const iTagForDeleteProductPageButton = document.createElement("i")
        const spanTagForDeleteProductPageButton = document.createElement("span")

        //General Class list for table
        trProduct.classList.add("singleRowProduct")
        tdPreviewProduct.classList.add("productPreviewImg")
        tdNameProduct.classList.add("productName")
        tdBrandProduct.classList.add("productBrand")
        tdDescriptionProduct.classList.add("productDescription")
        tdPriceProduct.classList.add("productPrice")
        tdActionsProduct.classList.add("td-actions")


        //Setting for button view product
        viewProductPageButton.setAttribute("type", "button")
        viewProductPageButton.setAttribute("class", "viewProductSite")
        viewProductPageButton.setAttribute("title", "Visualizza dettagli")
        viewProductPageButton.setAttribute("href", `./product.html?productid=${product._id}`)
        viewProductPageButton.innerText = "Visualizza Dettagli"
        iTagForViewProductPageButton.classList.add("material-icons")
        spanTagForViewProductPageButton.classList.add("material-symbols-outlined")
        spanTagForViewProductPageButton.innerText = "visibility"

        //Setting for button edit product
        editProductPageButton.setAttribute("type", "button")
        editProductPageButton.setAttribute("class", "editProduct")
        editProductPageButton.setAttribute("title", "Modifica")
        editProductPageButton.setAttribute("data-id", product._id)
        editProductPageButton.innerText = "Modifica"
        iTagForEditProductPageButton.classList.add("material-icons")
        spanTagForEditProductPageButton.classList.add("material-symbols-outlined")
        spanTagForEditProductPageButton.innerText = "edit_square"

        //Setting for button delete product
        deleteProductPageButton.setAttribute("type", "button")
        deleteProductPageButton.setAttribute("class", "deleteProduct")
        deleteProductPageButton.setAttribute("title", "Elimina")
        deleteProductPageButton.setAttribute("data-id", product._id)
        deleteProductPageButton.setAttribute("data-bs-toggle", "modal")
        deleteProductPageButton.setAttribute("data-bs-target", "#staticBackdrop" )
        deleteProductPageButton.innerText = "Elimina"
        iTagForDeleteProductPageButton.classList.add("material-icons")
        spanTagForDeleteProductPageButton.classList.add("material-symbols-outlined")
        spanTagForDeleteProductPageButton.innerText = "delete"

        //Add information for data
        imgFortdPreviewProduct.setAttribute("src", product.imageUrl)
        tdNameProduct.innerText = product.name
        tdBrandProduct.innerText = product.brand
        tdDescriptionProduct.innerText = product.description
        tdPriceProduct.innerText = product.price

        //Append section for button
        
        //Delete Button

        iTagForDeleteProductPageButton.appendChild(spanTagForDeleteProductPageButton)
        deleteProductPageButton.appendChild(iTagForDeleteProductPageButton)

        //Edit Button

        iTagForEditProductPageButton.appendChild(spanTagForEditProductPageButton)
        editProductPageButton.appendChild(iTagForEditProductPageButton)

        //View Button

        iTagForViewProductPageButton.appendChild(spanTagForViewProductPageButton)
        viewProductPageButton.appendChild(iTagForViewProductPageButton)

        tdActionsProduct.append(viewProductPageButton, editProductPageButton, deleteProductPageButton)

        //Append Section for tr

        tdPreviewProduct.appendChild(imgFortdPreviewProduct)
        trProduct.append(tdPreviewProduct, tdNameProduct, tdBrandProduct, tdDescriptionProduct, tdPriceProduct, tdActionsProduct)
  
        tbodyListProductBO.appendChild(trProduct)

        hideSpinner()
    })
}


const deleteProduct = async (id) =>{
     try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": tokenAPI,
                },
            })
            tbodyListProductBO.innerHTML = ""
            getProducts()
        } catch (error) {
            console.error(`Errore eliminazione prodotto:`, error)
        }
}


const editProduct = async (id) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": tokenAPI,
        },
      })
        const data = await response.json()

      editingProductId = data._id

        const titleForm = document.querySelector(".titleForm")
        titleForm.innerText = "Modifica il prodotto"
        document.getElementById("name-product").value = data.name
        document.getElementById("brand-product").value = data.brand
        document.getElementById("description-product").value = data.description
        document.getElementById("price-product").value = data.price
        document.getElementById("image-product").value = data.imageUrl
            
        document.querySelector(".submitFormButton").classList.add("d-none")
        document.querySelector(".editButtonForm").classList.remove("d-none")

        formSection.classList.remove("d-none")
        document.querySelector(".formProduct").scrollIntoView({ behavior: "smooth" })

    } catch (error) {
      console.error(`Errore su ${data.name}:`, error)
    }
}


tbodyListProductBO.addEventListener("click", (event) => {
    if(event.target.closest(".deleteProduct")){
        const button = event.target.closest(".deleteProduct")
        const id = button.dataset.id
        confirmDeleteButton.addEventListener("click", () =>{
        modalAlertDelete.classList.add("d-none")
        document.body.classList.remove("modal-open")
        deleteProduct(id)
        })
    }else if (event.target.closest(".editProduct")){
        const button = event.target.closest(".editProduct")
        const id = button.dataset.id
        editProduct(id)
    }
})




formProduct.addEventListener("submit", (event) =>{
    
    event.preventDefault()

    const nameNewProduct = document.getElementById("name-product").value
    const brandNewProduct = document.getElementById("brand-product").value
    const descriptionNewProduct = document.getElementById("description-product").value
    const priceNewProduct = document.getElementById("price-product").value
    const imageUrlNewProduct = document.getElementById("image-product").value

    const newProduct = {
        name: nameNewProduct,
        description: descriptionNewProduct,
        brand: brandNewProduct,
        imageUrl: imageUrlNewProduct,
        price: Number(priceNewProduct)
    }

    sendProduct(newProduct)
})



//Send product on server

const sendProduct = async (newProduct) => {
    if(editingProductId){
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${editingProductId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": tokenAPI,
                },
                body: JSON.stringify(newProduct)
            })
            if(response.ok){
            formSection.classList.add("d-none")
            alertSectionForm.classList.remove("d-none")
            alertSectionForm.innerText = "Prodotto modificato con successo!"
            setTimeout(() =>{
                alertSectionForm.classList.add("d-none")
            }, 3000)
            editingProductId = null
            resetForm()
            tbodyListProductBO.innerHTML = ""
            getProducts()
            }
        } catch (error) {
            console.error(`Errore modifica prodotto:`, error)
        }
    }else{
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                "Authorization": tokenAPI,
                },
                body: JSON.stringify(newProduct)
            })
            if(response.ok){
            formSection.classList.add("d-none")
            alertSectionForm.classList.remove("d-none")
            alertSectionForm.innerText = "Prodotto aggiunto con successo!"
            setTimeout(() =>{
                alertSectionForm.classList.add("d-none")
            }, 3000)
            editingProductId = null
            resetForm()
            tbodyListProductBO.innerHTML = ""
            getProducts()
            }
            console.log(response)
            } catch (error) {
            console.error(`Errore su ${newProduct.name}:`, error)
        }
    }
}

const resetForm = () => {
    formProduct.reset()
    editingProductId = null
    document.querySelector(".submitFormButton").classList.remove("d-none")
    document.querySelector(".editButtonForm").classList.add("d-none")
}

deleteButtonProduct.addEventListener("click", resetForm)



//Function for edit new product button
document.querySelector(".addProduct").addEventListener("click", () => {
    resetForm()
    const titleForm = document.querySelector(".titleForm")
    titleForm.innerText = "Aggiungi un nuovo prodotto"
    formSection.classList.remove("d-none")
    document.querySelector(".formProduct").scrollIntoView({ behavior: "smooth" })
})


//Function for closing form
const closeFormButton = document.querySelector(".formClose")

closeFormButton.addEventListener("click", () => {
    formSection.classList.add("d-none")
})