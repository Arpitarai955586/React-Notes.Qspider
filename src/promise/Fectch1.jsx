import { useEffect, useState } from "react";

const Fetch1=()=>{
    let [photos,setPhotos]=useState(null)
    async function getPhotos(){
        let res= await fetch("https://fakestoreapi.com/products");
        let data=await res.json();
        // console.log(data);
        setPhotos(data);
    }
    useEffect(()=>{
      getPhotos();
    },[])
    return(
        <div > 
            <h1>Fetch API using useEffect</h1>
            {photos?.map((ele)=>{
                    console.log(ele);
                    let {id,thumbnailUrl,title,url,price}=ele;
                    return(
                        <div key={id}>
                           <img src={thumbnailUrl} alt={title} height={100} width={100} />
                           {/* <h3>{title}</h3> */}
                           <h2>{price}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Fetch1;
