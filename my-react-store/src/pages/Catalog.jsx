//import
import { useState,useEffect } from "react";
import DataService from "../services/DataService"
import Product from "../component/Product";


//Logic
function Catalog() {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const loadCatalog = async () => {
        try {
            setLoading(true);
            const prods = await DataService.getProducts();
                setProducts(prods)
        }catch (error){
            console.error("Error loading products", error);

        }finally {
            setLoading(false);
        }
        
    };
    
    
    
    
    useEffect(() => {
        loadCatalog(); 
    }, [] ); //Empty the array

    if (loading)
    {
        return(
            <p>Loading products...</p>
        )
    }
     return (
        <div>
        <h2>Product Catalog</h2>
        <p>Showing {products.length} </p>
        <div>
          {products.map(product => <Product data={product} />)}
        </div>
        </div>

     );
    
}
 
//Export
export default Catalog;