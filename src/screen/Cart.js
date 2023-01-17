import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import Fooder from '../component/Fooder'
import Header2 from '../component/Header2'
import Header from '../component/Header'
import { products } from '../data/data'
import { store } from '../Redux/Store'
// import { set } from 'immer/dist/internal'

function Cart({ states }) {



    // const ay = () => {
    //     const as = typeof data
    //     if (as === 'undefined')
    //         check = false



    // }
    // console.log(check)

    const [as, setAs] = useState('')
    useEffect(() => {
        var scroller = document.querySelector("#scroller");
        scroller.addEventListener("scroll", (event) => {
            // output.textContent = `scrollTop: ${scroller.scrollTop}`;
            setAs(scroller.scrollTop)
        }, [as]);
    })


    const delete_on_wish = (id) => {
        let ay = { type: 'delete_cart', id: id }
        store.dispatch(ay)
    }







    return (
        <div>
            <Header />
            <div
                id='scroller' style={{
                    // // border: '3px solid #00ff00',
                    width: '100%',
                    height: '660px',
                    // overflowX: 'hidden',
                    overflowY: 'auto',
                    // backgroundColor: '#f3f4f6'

                }}>

                <Header2 scrol={as} />
                {states.cart?.length == 0 ?
                    <div>
                        <div className='patch_product'>
                            HOME / SHOP PRODUCT
                        </div>
                        <div className='no_wishlish'>
                            <iconify-icon icon="bi:heart" style={{ color: 'black' }} width="80"></iconify-icon>
                            No items found in cart
                            <button>
                                add all item
                            </button>
                        </div>
                    </div>
                    :
                    <div className='lish_item'>
                        <div className='body_lish_item'>
                            your lish item
                            <table width='100%'>
                                <tr style={{ backgroundColor: '#f9f9f9' }} >
                                    <th className='th_panding'>
                                        IMAGE
                                    </th>
                                    <th className='th_panding'>
                                        PRODUCT NAME
                                    </th>
                                    <th className='th_panding'>
                                        UNIT PRICE
                                    </th>
                                    <th className='th_panding'>
                                        ADD TO CART
                                    </th>
                                    <th className='th_panding'>
                                        ACTION
                                    </th>
                                </tr>
                                {states.cart.map((e, i) =>
                                    <tr>
                                        <td>
                                            <img style={{
                                                width: '76px',
                                                aspectRatio: '2/2',
                                                margin: '7px',
                                            }} src={e.data.img1} />
                                        </td>
                                        <td>
                                            {e.data.name}
                                        </td>
                                        <td>
                                            {e.data.gia}
                                        </td>
                                        <td>
                                            hết hàng ?
                                        </td>
                                        <td>
                                            <iconify-icon onClick={() => delete_on_wish(e.id)} icon="bx:x" style={{ color: 'gray' }} width="20"></iconify-icon>
                                        </td>
                                    </tr>
                                )}

                            </table>
                        </div>
                    </div>}
                <Fooder />
            </div >
        </div>
    )
}

const mapStateToProps = state => {
    const states = state;
    // todo: state.counter;
    console.log('test', states)
    return { states }
};

export default connect(mapStateToProps)(Cart);