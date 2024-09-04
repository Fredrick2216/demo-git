import {productDatas} from "../../api/DummyData";
import Card from "../Card/Card";
import axios from "axios"
import {useEffect, useState} from "react";
const body = () => {
    const [productDatas, setproductData]=useState([]);

    const fetchData = async() =>{
        const data = await axios.get("https://api.escuelajs.co/api/v1/products");
        setproductData(data.data);
    };
    useEffect(()=>{
        fetchData();
        console.log(productDatas);
    },[]);
    
  return (
    <>
    <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto grid grid-cols-1 md: grid-cols-2 lg:grid grid-cols-3 gap-6"></div>
        {productDatas.map((items)=>{
            return(
                <Card key={items.id} title={items.title} image={"https://i.imgur.com/QkIa5tT.jpeg"}
                description={items.description} price={items.price} category={items.category.name} count={items.id}/>

            );
        })}
    </div>
    
    </>
  )
}

export default body