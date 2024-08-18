import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";
import { addToLS, isStored } from "../LocalStorage/LocalStorage";
import { addToLSWishlist, isStoredWishtlist } from "../LocalStorage/LocalStorageWishlist";

const BookDetails = () => {
    const books = useLoaderData()
    const {bookId} = useParams()
    const book = books.find(book => book.bookId == bookId)


    const saveBookToRead = () =>{
        const file = isStored()
        const fileW = isStoredWishtlist()
        const item = file.find(id => id == bookId)
        const itemW = fileW.find(id => id == bookId)
        if(!itemW ){
            if(!item){
                addToLS(bookId)
                toast.success('Added Successfully')
    
            }else{
                toast.error('Already Added')
            }
        }else{
            toast.error('Already added')
        }
        
    }
    const saveBookToWishList = () =>{
        const file = isStored()
        const fileW = isStoredWishtlist()
        const item = file.find(id => id == bookId)
        const itemW = fileW.find(id => id == bookId)
        if(!itemW ){
            if(!item){
                addToLSWishlist(bookId)
                toast.success('Added Successfully')
    
            }else{
                toast.error('Already Added')
            }
        }else{
            toast.error('Already added')
        }
        
    }

    const {bookName, author, rating, tags, category, image,review, totalPages, publisher, yearOfPublishing } = book
    return (
        <div className="grid grid-cols-2 mt-9 p-4 gap-6">
            <div className="bg-gray-200 rounded"><img className="w-2/4 m-auto py-4 rounded-xl" src={image} alt="" /></div>
            <div className="">
                <div className="border-b border-gray-300 mb-4">
                    <h2 className="text-4xl font-bold mb-2">{bookName}</h2>
                    <h2 className="text-xl font-semibold mb-4 text-gray-400">By: {author}</h2>
                </div>
                <div className="border-b border-gray-300 mb-4"><h2 className="text-gray-400 mb-4 text-xl">{category}</h2></div>
                <div className="mb-4 border-b border-gray-300">
                    <p className="mb-2 text-xl text-gray-400"><span className="font-bold">review:</span> {review}</p>
                    <div className="mb-4">
                        {
                            tags.map((tag,idx)=> <span className="rounded-full bg-gray-100 text-green-500 mr-4 p-2 mt-2" key={idx}>{tag}</span>)
                        }
                    </div>
                </div>
                <div className="flex flex-col text-gray-400 w-1/2 mb-4">

                    <div className="flex justify-between"><span className='text-lg mb-2'>No of Pages: </span> <span className="font-bold text-black">{totalPages}</span></div>
                    <div className="flex justify-between"><span className='text-lg mb-2'>Publisher: </span> <span className="font-bold text-black">{publisher}</span></div>
                    <div className="flex justify-between"><span className='text-lg mb-2'>Year of Publish: </span> <span className="font-bold text-black">{yearOfPublishing}</span></div>
                    <div className="flex justify-between "><span className='text-lg mb-2'>Rating: </span> <span className="font-bold text-black">{rating}</span></div>
                </div>
                <div className="">
                    <button onClick={saveBookToRead} className="border border-gray-400 mr-5 px-5 py-3 rounded-xl">Read</button>
                    <button onClick={saveBookToWishList} className="px-5 py-3 rounded-xl bg-blue-400">Wishlist</button>
                    <Toaster></Toaster>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;