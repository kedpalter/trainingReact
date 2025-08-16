import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setAddToCart, setProductList } from '../../redux/products';
import { Button, Card, Col, Row, Typography } from 'antd';

const ReduxProducts = () => {

  const { list } = useSelector(state => state.product);
  const dispatch = useDispatch();
  const { Meta } = Card

  const getProductApiAxios = async () => {
    try {
      let res = await axios({
        url: `https://apistore.cybersoft.edu.vn/api/Product`,
        method: 'GET'
      });

      // Lấy dữ liệu xong thì đưa dữ liệu lên store
      const products = res.data.content;
      dispatch(setProductList(products));

      console.log(res.data.content)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    // Sau khi html được khởi tạo lần đầu tiên và sau mỗi lần setState (bất kỳ state nào)
    getProductApiAxios();
  }, [])


  const handleAddToCart = (item) => {
    dispatch(setAddToCart(item))
  }
  return (
    <div className='container'>
      <Typography.Title>Danh sách sản phẩm</Typography.Title>

      <Row gutter={[16, 16]}>
        {list.map((item) => {
          return <Col span={6} key={item.id}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={<img src={item.image} alt={item.name}></img>}
            >
              <Meta title={item.name} description={item.shortDescription} />
              <Button type='primary' className='mt-4' size='large' onClick={() => { handleAddToCart(item) }}>Thêm giỏ hàng</Button>
            </Card>
          </Col>
        })}
      </Row>

    </div>
  )
}

export default ReduxProducts