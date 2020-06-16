import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import '../components/Jumbo.css'



function Jumbo() {
    return (
        <div className='Jumbo'> 
            <Jumbotron fluid>
                <Container>
                <h1>myLife</h1>
                <p>
                This is a modified jumbotron that occupies the entire horizontal space of
                its parent.
                </p>
                </Container>
            </Jumbotron>
        </div>
            
   
    );
  }
  
  export default Jumbo;