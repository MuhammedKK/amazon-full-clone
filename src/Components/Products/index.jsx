import React from 'react';
import {Grid} from '@material-ui/core';
import './Products.css'
import Product from './Product'


const Products = () => {
    

    return (
        <div className="products">
            {/* Product Component */}
            <Grid container justifyContent="space-evenly" spacing={4}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Product id={1} title={'Roku Express 4K+ 2021 | Streaming Media Player HD/4K/HDR with Smooth Wireless Streaming and Roku Voice Remote with TV Controls, Includes Premium HDMI Cable'} price={'30.00'} img="https://m.media-amazon.com/images/I/61DYLoyNRWL._AC_UL320_.jpg" rating={5} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Product id={2} title={'Roku Express 4K+ 2021 | Streaming Media Player HD/4K/HDR with Smooth Wireless Streaming and Roku Voice Remote with TV Controls, Includes Premium HDMI Cable'} price={'80.00'} img="https://m.media-amazon.com/images/I/81CVGNH5rcL._AC_UL320_.jpg" rating={3} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Product id={3} title={'Roku Express 4K+ 2021 | Streaming Media Player HD/4K/HDR with Smooth Wireless Streaming and Roku Voice Remote with TV Controls, Includes Premium HDMI Cable'} price={'160.00'} img="https://m.media-amazon.com/images/I/71tZD9XzZ7L._AC_UL320_.jpg" rating={4}/>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Product id={4} title={'Roku Express 4K+ 2021 | Streaming Media Player HD/4K/HDR with Smooth Wireless Streaming and Roku Voice Remote with TV Controls, Includes Premium HDMI Cable'} price={'160.00'} img="https://m.media-amazon.com/images/I/71tZD9XzZ7L._AC_UL320_.jpg" rating={4}/>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Product id={5} title={'Roku Express 4K+ 2021 | Streaming Media Player HD/4K/HDR with Smooth Wireless Streaming and Roku Voice Remote with TV Controls, Includes Premium HDMI Cable'} price={'160.00'} img="https://m.media-amazon.com/images/I/71tZD9XzZ7L._AC_UL320_.jpg" rating={3}/>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Product id={6} title={'Roku Express 4K+ 2021 | Streaming Media Player HD/4K/HDR with Smooth Wireless Streaming and Roku Voice Remote with TV Controls, Includes Premium HDMI Cable'} price={'160.00'} img="https://m.media-amazon.com/images/I/71tZD9XzZ7L._AC_UL320_.jpg" rating={4}/>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Product id={7} title={'Roku Express 4K+ 2021 | Streaming Media Player HD/4K/HDR with Smooth Wireless Streaming and Roku Voice Remote with TV Controls, Includes Premium HDMI Cable'} price={'160.00'} img="https://m.media-amazon.com/images/I/71tZD9XzZ7L._AC_UL320_.jpg" rating={5}/>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Products
