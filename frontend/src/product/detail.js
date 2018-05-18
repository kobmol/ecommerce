import React, { Component } from 'react';
import axios from 'axios'
import { Link, Route } from 'react-router-dom'

class productDetail extends Component{
    state = {
      list: []
    }

    show() {
      axios.get('http://localhost:3030/productdetail/read')
      .then(res => {
        let list = res.data.map(el => (
          <div className="col-sm-3"> 
            <img src="https://placehold.it/400x200?text=IMAGE" className="img-responsive" style={{width:1000, height:350 }  }  alt=""/>
            <p>{el.description}</p>
            <p>{el.Price}</p>              
          </div>
        ))
        this.setState({ list })
      })
    }

    componentWillMount() {
      this.show()
    }

    render(){
        return(
        <div className="container text-center">    
            <h3>Our Collection</h3><br/>
            <div className="row">
              {/* <div className="col-sm-6">
                <img src="https://placehold.it/800x400?text=IMAGE" className="img-responsive" style={{width:1000, height:350}} alt=""/>
                <p>Current Project</p>
              </div>
              <div className="col-sm-6"> 
                <img src="https://placehold.it/800x400?text=IMAGE" className="img-responsive" style={{width:1000, height:350 }  }  alt=""/>
                <p>Project 2</p>    
              </div> */}
            {/* {this.state.list} */}
            </div>
        </div>
        )
    }
}

export default productDetail;