import { useState } from 'react';

import MyVerticallyCenteredModal from './Modal';

import Button from 'react-bootstrap/Button'

import styled from "styled-components";

const SectionTag = styled.section`
  {
    background: url(https://www.vets4pets.com/siteassets/species/dog/puppy/husky-puppy-on-dog-walk.jpg?w=585&scale=down) center no-repeat;
    background-size: cover;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
  }

  h1{
      font-size: 5em;
  }

  p{
      width: 30em;
      max-width: 100vw;
  }

  div{
    background-color: rgba(255,165,0, 0.5);
  }

`;
  

function Cover() {
    const [modalShow, setModalShow] = useState(false);


    return (
        <SectionTag>
            <div>
                <h1>Title</h1>
                <p>It is a long established fact that a reader will be distracted 
                by the readable content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
                of letters, as opposed to using 'Content here, content here', making it look 
                like readable English. Many desktop publishing packages and web page editors 
                now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
                will uncover many web sites still in their infancy. Various versions have 
                evolved over the years, sometimes by accident, sometimes on purpose 
                (injected humour and the like).</p>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Launch vertically centered modal
                </Button>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </SectionTag>
    );
  }
  
  export default Cover;