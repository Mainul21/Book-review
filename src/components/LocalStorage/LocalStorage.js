const isStored = () =>{
    const stored = localStorage.getItem('listed-books')
    if(stored){
        return JSON.parse(stored)
    }
    return []
}

const addToLS = id =>{
    const stored = isStored()
    const isThere = stored.find(item => item == id)

    if(!isThere){
        stored.push(id)
        localStorage.setItem('listed-books',JSON.stringify(stored))
    }
}

export {isStored,addToLS}