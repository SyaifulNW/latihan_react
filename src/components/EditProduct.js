import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// useHistory di ganti pakai useNavigate
// https://stackoverflow.com/questions/64838587/how-to-properly-use-usehistory-from-react-router-dom

 
const EditProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
 
    useEffect(() => {
        getProductById();
    }, []);
 
    const getProductById = async() => {
        const response = await fetch(`http://localhost:8080/products/${id}`);
        const data = await response.json();
        setTitle(data.title);
        setPrice(data.price);
    }
 
    const updateProduct = async(e) => {
        e.preventDefault();
        const product = { title, price };
        await fetch(`http://localhost:8080/products/${id}`,{
            method: "PUT",
            body: JSON.stringify(product),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        navigate("/");
    }
 
    return (
        <div>
            <form onSubmit={updateProduct}>
                <div className="field">
                <label className="label">Title</label>
                <div className="control">
                    <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" />
                </div>
                </div>
 
                <div className="field">
                <label className="label">Price</label>
                <div className="control">
                    <input className="input" value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Price" />
                </div>
                </div>
         
                <div className="field">
                <div className="control">
                    <button className="button is-primary">Update</button>
                </div>
                </div>
            </form>
        </div>
    )
}
 
export default EditProduct