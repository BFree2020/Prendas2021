import React from 'react';
import "./Home.css";
import { products } from '../../Utils/productsData';
import {product} from '../Product/Product';


const Home = () => {
    
    return (
        <div>
            <div className="item-container">
                {headerItems && headerItems.map((item, index) => <p>{item}</p>)}
            </div>
            
                    <div className="home-row">
                        {products.slice(0, 3).map((item) => (
                            <Product 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            quantities={item.quantities}
                            />
                           
                        ))}
                       
                    </div>
                    <div className="home-row">
                        {products.slice(3, 6).map((item) => (
                            <Product 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            quantities={item.quantities}
                            />
                        ))}

                        </div>

                        <div className="home-row">
                        {products.slice(6, 9).map((item) => (
                            <Product 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            quantities={item.quantities}
                            />
                        ))}

                        </div>
                       
                    <div style={{ marginTop: "30px" }}>
                        
                    </div>
                </div>
          
    )
}

export default Home;
