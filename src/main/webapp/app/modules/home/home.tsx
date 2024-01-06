import './home.scss';
import Avatar from 'react-avatar';
import React, {useState} from 'react';
import { Row, Col } from 'reactstrap';
import {CountDown} from 'app/modules/home/countdown';
import {SlideWedding} from 'app/modules/home/slide-image'
import {TimeLineEvent} from 'app/modules/home/timeline-event'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Home = () => {
  // const account = useAppSelector(state => state.authentication.account);
  // 1 GD, 2 ban
  const pathname = decodeURI(window.location.pathname);
  let structs = pathname?.split('/');
  return (
    <Row>
      <Col>
        <Row style={{justifyContent: 'center'}}>
          <Col sm="12" md= "12" lg="12" className='test1'>
            <SlideWedding/>
          </Col>
        </Row>
        <Row style={{
          justifyContent: 'center', 
          fontFamily: 'Carattere',
          marginTop: 15,
          display: 'flex', 
          fontSize: 25,
          textAlign: 'center',
          whiteSpace:'nowrap'}}>
            Phạm Hiền 
            <FontAwesomeIcon style={{width: 'auto'}} icon="heart" color='red'/> Lê Thảo
        </Row>
        <Row style={{
          justifyContent: 'center', 
          display: 'flex', 
          fontSize: 22,
          textAlign: 'center',
          whiteSpace:'nowrap',
          }}>
            <Col></Col>
            <Col 
             xl={5} sm={5} md={5} xs="5"
            style={{fontFamily: 'Gravitas+One',
                  backgroundRepeat: 'round',
                  backgroundSize: 'cover',
                  width: '50%',
                  height:150,
                  backgroundImage:'url(content/images/wellcome.jpg)'}}>
                    <br></br>
                    <br></br>
              20&nbsp;|&nbsp;01
                <br></br>
              2024
              </Col>
            <Col></Col>
        </Row>
        <Row sm="12" md= "12" lg="12">
          <Col sm="12" style={{margin: '10px 5px'}}>
            <CountDown/>
          </Col>
        </Row>
        <Row sm="12" md= "12" lg="12" style={{
          justifyContent: 'center', 
          fontFamily: 'Carattere',
          margin: '20px 0px',
          display: 'flex', 
          fontSize: 16,
          height:140,
          textAlign: 'center',
          whiteSpace:'nowrap',
          backgroundRepeat: 'round',
          backgroundSize: 'cover',
          backgroundImage: 'url(content/images/back_2.jpg)',
          alignItems: 'center'
        }}
          >
          {pathname ? 'Kính mời: '+ structs[1] : ''}

        </Row>
        <Row style={{whiteSpace: 'nowrap'}}>
          <Col xl={6} sm={6} md={6} xs="6" style={{display:'flex', justifyContent: 'center'}}>
            <Avatar 
                size="145" round={true} 
                facebook-id="invalidfacebookusername" 
                src="content/images/hien.jpg"
                value="Phạm Hữu Hiền"
                />
          </Col>
          <Col xl={6} sm={6} md={6} xs="6" style={{display:'flex', justifyContent: 'center'}}>
          <Avatar size="145" 
              round={true} 
              facebook-id="invalidfacebookusername" 
              src="content/images/person.jpg" 
              title="Lê Thị Thảo"
            />
          </Col>
        </Row>
        <Row style={{marginTop: 5}}>
          <Col style={{justifyContent: 'center',textAlign: 'center', fontFamily: 'Inter' }}>Trưởng nam</Col>
          <Col style={{justifyContent: 'center', textAlign: 'center', fontFamily: 'Inter'}}>Thứ nữ</Col>
        </Row>
        <Row sm="12" md= "12" lg="12"> 
          <Col sm="12" style={{marginTop: 15}}>
            <TimeLineEvent/>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
