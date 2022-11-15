import React from 'react';
import './index.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
/*
  es6에서는 모듈을 불러오는 방식으로 import를 사용
  import axios from 'axios'; 다운로드 받은 axios 라이브러리 불러옴
  import를 할 수 있다는 것은 export 되어있다는 것

  axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리
*/

function MainPage(){
    const text = 'jsx 문법';
    const sayHi = function(){
        return <p>안녕? 난 집인데, 집에 가고 싶어</p>;
    };
    const [products, setProducts] = React.useState([]);
    React.useEffect(function(){
        axios.get("https://c35b5964-a297-45bc-8233-e21ef24307a7.mock.pstmn.io/products")
        .then(function(result){
            const products = result.data.products;
            setProducts(products);
        }).catch(function(error){
            console.error('에러 발생', error);
        });
    },[]);

    return (
    <div>
        <div className="test">
            {text}{sayHi()}
        </div>
        <div className="banner"><img src="images/banners/banner1.png" alt="" /></div>
        <h2>판매되는 상품들</h2>
        <div className="list_product">
            {products.map(function(product, index){
                return (
                    <div className="product_card">
                        <div className="thumb">
                            <img src={product.imageUrl} className="img" alt="" />
                        </div>
                        <div className="cont">
                            <strong className="tit">{product.name}</strong>
                            <span className="price">{product.price}원</span>
                            <span className="seller">
                                <img src="images/icons/avatar.png" alt="" />
                                <span>{product.seller}</span>
                            </span>
                        </div>
                        <Link to={`/product/${product.id}`} className="link_product" ></Link>
                    </div>
                );
            })}
        </div>
    </div>
    );
}
export default MainPage;