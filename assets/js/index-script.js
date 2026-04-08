// TODO: Strive School Token API : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ1NDM3NGJhMGYxMjAwMTUyZTc3NmIiLCJpYXQiOjE3NzU1ODQxMTYsImV4cCI6MTc3Njc5MzcxNn0.IJzM3lyFfQC9wLFlzv2bE1mbyIVPGWi7N4shdrUZE5w
// TODO: Link to fetch API:  https://striveschool-api.herokuapp.com/api/product/

export const tokenAPI = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ1NDM3NGJhMGYxMjAwMTUyZTc3NmIiLCJpYXQiOjE3NzU1ODQxMTYsImV4cCI6MTc3Njc5MzcxNn0.IJzM3lyFfQC9wLFlzv2bE1mbyIVPGWi7N4shdrUZE5w"

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
        
    } catch (error) {
        console.error(error)
    }
}


