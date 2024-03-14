import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Header from './header/Header'
import Footer from './footer/Footer'

function UserMasterLayout({ child }) {
    return (
        <>
            <div className='wrapper'>
                <Sidebar />
                <Header />
                <div id="content-page" className="content-page">
                    {child}
                </div>
            </div>
            <Footer />
        </>

    )
}

export default UserMasterLayout