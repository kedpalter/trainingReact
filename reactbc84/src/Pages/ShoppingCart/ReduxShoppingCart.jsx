import { Table, Typography } from 'antd'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const ReduxShoppingCart = () => {
  const { carts } = useSelector(state => state.product)

  // table
  const dataColumns = [
    {
      title: "id",
      dataIndex: "id",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
    },
    {
      title: "Mô tả",
      dataIndex: "shortDescription",
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      render: (value) => {
        return <img src={value} width={50} height={50} />
      }
    }
  ]
  return (
    <div className='container mt-5'>
      <Typography.Title>
        Giỏ hàng ({carts.length})
      </Typography.Title>
      <Table columns={dataColumns} dataSource={carts} onRow={record => {
        return {
          onClick: () => {
            console.log('Row clicked:', record);
          }
        }
      }} />
    </div>
  )
}

export default ReduxShoppingCart