const isStoredWishtlist = () =>{
    const stored = localStorage.getItem('wishlist-books')
    if(stored){
        return JSON.parse(stored)
    }
    return []
}

const addToLSWishlist = id =>{
    const stored = isStoredWishtlist()
    const isThere = stored.find(item => item == id)

    if(!isThere){
        stored.push(id)
        localStorage.setItem('wishlist-books',JSON.stringify(stored))
    }
}

export {isStoredWishtlist,addToLSWishlist}