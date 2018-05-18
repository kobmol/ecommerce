import React, { Component } from 'react';
import '../style/footer.css';
import axios from 'axios';
import { apiURL } from '../config.json'

class Detail extends Component{
    state = {
        dataProduct: {},
        product: {}
    }

    getProduct(id) {
        axios.get(`${apiURL}/product/read/${id}`)
        .then(res => {
            this.setState({
                product: res.data[0]
            })
        })
    }

    getProductDetail(id) {
        axios.get(`${apiURL}/productdetail/read/${id}`)
        .then(res => {
            this.setState({
                dataProduct: res.data[0]
            })
        })
    }

    componentWillMount() {
        this.getProductDetail(this.props.idProduct)
        this.getProduct(this.props.idProduct)
    }

    render(){
        return(
            <div class="container">
            <div class="card">
                <div class="container-fliud">
                    <div class="wrapper row">
                        <div class="preview col-md-6">
                            
                            <div class="preview-pic tab-content">
                              <div class="tab-pane active" id="pic-1"><img src={this.state.product.url} style={{height:300,width:400}} /></div>
                            </div>  
                            
                        </div>
                        <div class="details col-md-6">
                            <h3 class="product-title">Your product:</h3>
                            <div class="rating">
                            </div>
                            <p class="product-description">{this.state.dataProduct.description}</p>
                            <h4 class="price">current price: <span>{this.state.dataProduct.Price}</span></h4>
                            <div class="action">
                                <button class="add-to-cart btn btn-default" type="button">add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        )
    }
}

export default Detail;