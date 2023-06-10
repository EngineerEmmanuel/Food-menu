import { useState } from "react";
import data from "./MenuData";

const Menu = () => {
    const [items, setItems]=useState(data)
    const selectThem = (category)=>{
       
        const selected= data.filter((makeI)=> makeI.category===category);
        setItems(selected)
    }
    const pricesCheck=(price)=>{
        const correct = data.filter((itemPrice)=>itemPrice.price ===price);
        setItems(correct)
    }
    const forAll =(allValue)=>{
        if (allValue==="ok"){
            setItems(data)
        }
    }
    return ( 
        <section>
            <h1>Food menu</h1>
            <div className="btns-con">
                <div className="food-type-btn">
                <button onClick={()=>selectThem("lunch")}>Lunch</button>
            <button onClick={()=>selectThem("Breakfast")}>Breakfast</button>
            <button onClick={()=>selectThem("Dinner")}>Dinner</button>
            <button onClick={()=>forAll("ok")}>all</button>
                </div>
            
            <div className="prices">
                <p>Search by prices</p>
                <button onClick={()=>pricesCheck(10)}>$10</button>
                <button onClick={()=>pricesCheck(20)}>20</button>
                <button onClick={()=>pricesCheck(15)}>$15</button>
            </div>
            </div>
            
            <div className="items-con">
            {items.map((item)=>{
                return(
                    <div className="menu-item-con" key={item.id}>
                        <img src={item.image} alt="" />
                        <div className="item-name-price-con">
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident eveniet suscipit atque eius ab sunt cum perspiciatis harum laborum natus?</p>

                        

                    </div>
                )
            })}
            </div>
        </section>
     );
}
 
export default Menu;