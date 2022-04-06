import axios from 'axios';
import react from 'react';

const DeleteButton = (props) => {

    const {productId, successCallBack} = props;

    // método
    const deleteProduct = async (id) => {
        console.log("deleteProduct Method")
        try {
            const response = axios.delete(`http://localhost:8000/product/${id}/delete`)
            successCallBack();
        }
        catch (error){
            console.log(error)
        }
    }

    return (

        <div>
            <button onClick={() => deleteProduct(productId)}>Delete</button>
        </div>

    )

}

export default DeleteButton;