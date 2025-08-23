import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getAllProductEditApiThunk } from '../../redux/ProductReducer'
import { useFormik } from 'formik';

const ProductEdit = () => {
    const { productEdit } = useSelector(state => state.productReducer);
    const dispatch = useDispatch();
    const param = useParams();
    const frmProductEdit = useFormik({
        initialValues: {
            id: productEdit?.id,
            name: productEdit?.name,
            price: productEdit?.price,
            description: productEdit?.description,
            shortDescription: productEdit?.shortDescription,
            quantity: productEdit?.quantity,
            image: productEdit.image,
        },
        onSubmit: (values) => {
            console.log('values', values);
        },
        enableReinitialize: true
    })



    const getProductEditApi = () => {
        const actionThunk = getAllProductEditApiThunk(param.id);
        dispatch(actionThunk);
    }

    useEffect(() => {
        getProductEditApi();
    }, [param.id])

    console.log(productEdit, 'product edit')


    return (
        <div className="container py-5">

            <h2 className="mb-4 fw-bold">Edit Product</h2>
            <div className="row ">
                <div className="col-md-12">
                    <form className="bg-white p-4 ">
                        <div className="row mb-4">
                            <div className="col-md-4 text-center">
                                <img src="https://apistore.cybersoft.edu.vn/images/vans-black-black.png" alt="vans black" className="img-fluid rounded" style={{ maxHeight: '200px' }} />
                            </div>
                            <div className="col-md-8">
                                <div className="mb-3">
                                    <label htmlFor="productId" className="form-label fw-semibold">ID</label>
                                    <input type="text" className="form-control" id="productId" value={frmProductEdit.values.id} readOnly onChange={frmProductEdit.handleChange} onBlur={frmProductEdit.handleBlur} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="productName" className="form-label fw-semibold">Name</label>
                                    <input type="text" className="form-control" id="productName" value={frmProductEdit.values.name} onChange={frmProductEdit.handleChange} onBlur={frmProductEdit.handleBlur} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="productPrice" className="form-label fw-semibold">Price ($)</label>
                                    <input type="number" className="form-control" id="productPrice" value={frmProductEdit.values.price} onChange={frmProductEdit.handleChange} onBlur={frmProductEdit.handleBlur} />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="productFeature" checked={false} />
                                    <label className="form-check-label fw-semibold" htmlFor="productFeature">Feature</label>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="productQuantity" className="form-label fw-semibold">Quantity</label>
                                    <input type="number" className="form-control" id="productQuantity" value={frmProductEdit.values.quantity} onChange={frmProductEdit.handleChange} onBlur={frmProductEdit.handleBlur} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="productImage" className="form-label fw-semibold">Image Link</label>
                                    <input type="text" className="form-control" id="productImage" value={frmProductEdit.values.image} onChange={frmProductEdit.handleChange} onBlur={frmProductEdit.handleBlur} />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productShortDesc" className="form-label fw-semibold">Short Description</label>
                            <textarea className="form-control" id="productShortDesc" rows="2">about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productDesc" className="form-label fw-semibold">Description</label>
                            <textarea className="form-control" id="productDesc" rows="4">about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </textarea>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-dark px-4 fw-bold">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductEdit