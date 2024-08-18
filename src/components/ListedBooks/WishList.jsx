import { useLoaderData } from "react-router-dom";
import { isStoredWishtlist } from "../LocalStorage/LocalStorageWishlist";
import ListedItem from "./ListedItem";
import { useContext, useEffect, useState } from "react";
import { SortContext } from "./ListedBooks";

const WishList = () => {
  
  const books = useLoaderData();
  const listed = isStoredWishtlist();
  const readList = JSON.stringify(listed);
  const reads = books.filter((book) => readList.includes(book.bookId));
  const sort = useContext(SortContext)
  console.log(sort)
  const [list, setList] = useState([])
  useEffect(()=>{
    if(sort === 'rate'){
      const results = reads.sort((a,b)=> a.rating - b.rating)
      setList(results)
    }else if(sort === 'page'){
      const results = reads.sort((a,b)=> a.totalPages - b.totalPages)
      setList(results)
    }else{
      const results = reads.sort((a,b)=> a.yearOfPublishing - b.yearOfPublishing)
      setList(results)
    }
  },[sort])
  return (
    <div>
        {
            list.map(read => <ListedItem key={read.bookId} read={read}></ListedItem>)
        }
    </div>
  );
};

export default WishList;
