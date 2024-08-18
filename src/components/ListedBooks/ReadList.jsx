import { useLoaderData } from "react-router-dom";
import { isStored } from "../LocalStorage/LocalStorage";
import ListedItem from "./ListedItem";
import { useContext, useEffect, useState } from "react";
import { SortContext } from "./ListedBooks";

const ReadList = () => {
  const books = useLoaderData();
  const listed = isStored();
  const readList = JSON.stringify(listed);
  const reads = books.filter( book => readList.includes(book.bookId))
  const sort = useContext(SortContext)

  const [list, setList] = useState([])
  useEffect(()=>{
    if(sort === 'rate'){
      const results = [...reads].sort((a,b)=> a.rating - b.rating)
      console.log('r')
      setList(results)
    }else if(sort === 'page'){
      const results = [...reads].sort((a,b)=> a.totalPages - b.totalPages)
      console.log('p')
      setList(results)
    }else{
      const results = [...reads].sort((a,b)=> a.yearOfPublishing - b.yearOfPublishing)
      console.log('y')
      setList(results)
    }
  },[sort])
  console.log(list)
  return (
    <div>

        {
            list.map(read => <ListedItem key={read.bookId} read={read}></ListedItem>)
        }
    </div>

  );
};

export default ReadList;
