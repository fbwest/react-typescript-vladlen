import {useProducts} from "../hooks/products";
import React, {useContext} from "react";
import {ModalContext} from "../context/ModalContext";
import {IProduct} from "../models";
import {Loader} from "../components/Loader";
import {Errorer} from "../components/Errorer";
import {Product} from "../components/Product";
import {Modal} from "../components/Modal";
import {CreateProduct} from "../components/CreateProduct";

export function ProductsPage() {
    const {products, error, loading, addProduct} = useProducts()
    const {modal, open, close} = useContext(ModalContext)

    function createHandler(product: IProduct) {
        close()
        addProduct(product)
    }

    return (
        <div className='conainer mx-auto max-w-2xl pt-5'>
            {loading && <Loader />}
            {error && <Errorer error={ error } />}
            <button className={'fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2 pb-3'}
                    onClick={() => open()}>
                + add product
            </button>
            {products.map(product => <Product product={product} key={product.id}/>)}
            {/*<Product product={products[0]} />*/}
            {/*<Product product={products[1]} />*/}
            {modal && <Modal title={'Create new product'} onClose={() => close()}>
                <CreateProduct onCreate={createHandler} />
            </Modal>}
        </div>
    )
}