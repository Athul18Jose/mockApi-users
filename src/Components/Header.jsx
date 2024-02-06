import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
    return (
        <>
            <MDBNavbar light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>
                        <img
                            src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
                            height='30'
                            alt=''
                            loading='lazy'
                        />
                        <span className='mt-1'>Users</span>
                    </MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>
        </>
    )
}

export default Header