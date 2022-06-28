import React from 'react';
import './Footer.css'
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <div>
    
               <MDBFooter className='text-center ' color='white' bgColor='dark' >
        <MDBContainer className='p-4'>
          <section className='mb-4'>
            <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
              <MDBIcon fab icon='facebook-f' />
            </a>

            <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
              <MDBIcon fab icon='twitter' />
            </a>

            <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
              <MDBIcon fab icon='google' />
            </a>

            <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
              <MDBIcon fab icon='instagram' />
            </a>

            <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
              <MDBIcon fab icon='linkedin-in' />
            </a>

            <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
              <MDBIcon fab icon='github' />
            </a>
          </section>

          <section className=''>
            <form action=''>
              <div className='row d-flex justify-content-center'>
                <div className='col-auto'>
                  <p className='pt-2'>
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <MDBCol md='5' start='12'>
                  <MDBInput contrast type='email' label='Email address' className='mb-4' />
                </MDBCol>

                <div className='col-auto'>
                  <MDBBtn outline color='light' type='submit' className='mb-4'>
                    Subscribe
                  </MDBBtn>
                </div>
              </div>
            </form>
          </section>

        </MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright:
          <a className='text-white' href='https://google.com/'>
            SaraMahmoud.com
          </a>
        </div>

      </MDBFooter>
    
    </div>
  );
}
