import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './index.css';

function ProductPage(){
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    useEffect(function(){
        axios.get(`https://c35b5964-a297-45bc-8233-e21ef24307a7.mock.pstmn.io/products/${id}`)
        .then(function(result){
            setProduct(result.data);
        }).catch(function(error){
            console.error(error);
        });
    },[]);

    if(product === null){
        return <h1>{id} 상품 정보를 받고 있습니다...</h1>
    }

    return (
        <div>
            <div className="wrap_image">
                <img src={"/"+product.imageUrl} />
            </div>
            <div className="wrap_profile">
                <img src="/images/icons/avatar.png" />
                <span className="seller">{product.seller}</span>
            </div>
            <div className="wrap_content">
                <div className="name">{product.name}</div>
                <div className="price">{product.price}원</div>
                <div className="created_at">2020년 03월 03일</div>
                <div className="desc">{product.description}</div>
            </div>
        </div>
    );
}

export default ProductPage;