import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import ItemProduct from './ReactRouterDom/ItemProduct';
import { httpClientStoreApi } from '../settings/setting';

const HomeIndex = () => {
  const [arrProduct, setArrProduct] = useState([]);
  const getAllProductApi = async () => {
    try {
      const res = await httpClientStoreApi.get('/Product');
      console.log(res.data);
      // Lấy data đưa vào state arrProduct
      setArrProduct(res.data.content)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getAllProductApi();
  }, []);




  return (
    <div className="container py-4">
      <h4 className="mb-4 fw-bold">Danh sách sản phẩm</h4>
      <div className="row g-3">
        {arrProduct.map((item, index) => {
          return <div className="col-6 col-md-3 mt-2" key={index}>
            <ItemProduct item={item}></ItemProduct>
          </div>
        })}


      </div>
    </div>
  )
}

export default HomeIndex