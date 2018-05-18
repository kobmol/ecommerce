import React, { Component } from 'react';
import gambar1 from '../img/benang2.jpg'
import gambar2 from '../img/benang.jpg'
import gambar3 from '../img/benag3.jpg'



class Caraousel extends Component{
    render(){
        return(
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
            
            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <img src={gambar1} style={{height:600, width:1600}} alt="Image" />
                <div class="carousel-caption">
                </div>      
              </div>
        
              <div class="item">
                <img src={gambar2} style={{height:600, width:1600}} alt="Image"/>
                <div class="carousel-caption">
                </div>      
              </div>

              <div class="item">
                <img src={gambar3} style={{height:600, width:1600}} alt="Image"/>
                <div class="carousel-caption">
                </div>      
              </div>

            </div>
        
    
            <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
        </div>
        
        
        )
    }
}

export default Caraousel;