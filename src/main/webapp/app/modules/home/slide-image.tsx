import './home.scss';

import React, { useState, useEffect  } from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Row } from 'reactstrap';


export const SlideWedding = () => {
    const images = [
        'content/images/slides/PNA_001.jpg',
        'content/images/slides/PNA_002.jpg',
        'content/images/slides/PNA_003.jpg',
        'content/images/slides/PNA_004.jpg',
        'content/images/slides/PNA_005.jpg',
        'content/images/slides/PNA_006.jpg'
      ];

    return (
        <Row style={{height: '100%', alignItems: 'center'}} >
            <Zoom 
            scale={0.5} 
            autoplay={true} 
            arrows={false}
            >
            {
                images.map((each, index) => 
                <img key={index} 
                    style={{objectFit: 'scale-down',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'auto',
                    // minHeight: '',
                    // maxHeight: '600px', 
                    height: 'auto',
                    width: '100%'}} 
                    src={each} 
                />)
            }
            </Zoom>
      </Row>
      
    );
}