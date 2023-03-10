import axios from 'axios'
import { useState } from 'react';

// axios.get(`https://62b6e8c76999cce2e809fa1e.mockapi.io/dkt/products`)

export const api = axios.create({
    baseURL: 'https://62d59d9515ad24cbf2caa1cd.mockapi.io/tets/',
    // baseURL: 'http://localhost:3000/',
    timeout: 30000,
    // headers: {'X-Custom-Header': 'foobar'}
});

export const getProducts = () => {

    return api.get(`/data`);
}

export const search = (params) => {
    return api.get(`/data`, { params })
}

///////////////////cart
export const api_cart = axios.create({
    baseURL: 'https://63e1d068f59c591411a6e1bb.mockapi.io/',
    // baseURL: 'http://localhost:3000/',
    timeout: 30000,
    // headers: {'X-Custom-Header': 'foobar'}
});


export const getcart = () => {
    // const res = await api_cart.get('/cart');
    // console.log('ay', res.data)

    return api_cart.get(`/cart`)

}

export const delete_cart_api = (param) => {
    return api_cart.delete(`/cart/${param}`)
}

//////////wish




export const getwish = () => {
    // const res = await api_cart.get('/cart');
    // console.log('ay', res.data)

    return api_cart.get(`/wish`)

}

export const delete_wish_api = (param) => {
    return api_cart.delete(`/wish/${param}`)
}