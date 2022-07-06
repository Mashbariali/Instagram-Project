import React, { useEffect } from 'react'
import { useState } from 'react'


import {Card,Button, Container,Row,Col } from "react-bootstrap";

export default function Home() {
    const [counter , setCounter] = useState(0)
    const [counter1 , setCounter1] = useState(0)
    const [counter2 , setCounter2] = useState(0)


    const [img, setImg] = useState();

    const onImageChange = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
    };

   const clickMe = ()=>{
        
        setCounter(counter+1)   
    }
    const clickMe1 = ()=>{
        
        setCounter1(counter1+1)   
    }
    const clickMe2 = ()=>{
        
        setCounter2(counter2+1)   
    }
    

    
  return (
    <div>


<input  class="inputChoose" type="file" onChange={onImageChange}/>


        



        
<Container className='Col'>
    {/* <Row> */}
  <Col>
<Card style={{ width: '24rem' }}>
<Container className='Profile'>
    
<img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_nF97CSsqJIjQQuBJX5M0wHU4zQYfKsQX2A&usqp=CAU' className='img1'></img>
<Card.Title className='name'><p>Ali</p></Card.Title>
</Container>
    
      <Card.Img variant="top"  src="data:image/jpeg;base64,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"/>
 
      <Card.Body>
      <Card.Text>
        <i class="fa-regular fa-bookmark"></i>
        </Card.Text>
        <Container className='icons'>
        <Card.Title><i class="fa-regular fa-heart" onClick={clickMe}></i> <i class="fa-regular fa-comment"></i></Card.Title>
        </Container>
       <Card.Text className='like'>{counter} like</Card.Text>
        <Card.Text>
        عيد اضحى مبارك
        </Card.Text>
        {/* <Button variant="primary"></Button> */}
      </Card.Body>
    </Card>
    <Card style={{ width: '24rem' }}>
<Container className='Profile'>
    
<img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_nF97CSsqJIjQQuBJX5M0wHU4zQYfKsQX2A&usqp=CAU' className='img1'></img>
<Card.Title className='name'><p>Ali</p></Card.Title>
</Container>
    
      <Card.Img variant="top"  src='https://media.discordapp.net/attachments/973476321470607390/992072998490226718/IMG_2385.jpg?width=562&height=422' alt=""/>
 
      <Card.Body>
      <Card.Text>
        <i class="fa-regular fa-bookmark"></i>
        </Card.Text>
        <Container className='icons'>
        <Card.Title><i class="fa-regular fa-heart" onClick={clickMe1}></i> <i class="fa-regular fa-comment"></i></Card.Title>
        </Container>
       <Card.Text className='like'>{counter1} like</Card.Text>
        <Card.Text>
        اثناء زيارة مركز ذكاء
        </Card.Text>
        {/* <Button variant="primary"></Button> */}
      </Card.Body>
    </Card>
    <Card style={{ width: '24rem' }}>
<Container className='Profile'>
    
<img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_nF97CSsqJIjQQuBJX5M0wHU4zQYfKsQX2A&usqp=CAU' className='img1'></img>
<Card.Title className='name'><p>Ali</p></Card.Title>
</Container>
    
      <Card.Img variant="top"  src={img} alt=""/>
 
      <Card.Body>
      <Card.Text>
        <i class="fa-regular fa-bookmark"></i>
        </Card.Text>
        <Container className='icons'>
        <Card.Title><i class="fa-regular fa-heart" onClick={clickMe2}></i> <i class="fa-regular fa-comment"></i></Card.Title>
        </Container>
       <Card.Text className='like'>{counter2} like</Card.Text>
        <Card.Text>
        </Card.Text>
        {/* <Button variant="primary"></Button> */}
      </Card.Body>
    </Card>
   
    </Col>
    {/* </Row> */}
   
    </Container>
    </div>
  )
}
