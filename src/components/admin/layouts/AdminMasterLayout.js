import React from 'react'
import AdminHeader from './header/AdminHeader'
import AdminFooter from './footer/AdminFooter'
import AdminSidebar from './sidebar/AdminSidebar'

function AdminMasterLayout({ child }) {
    return (
        <div className='wrapper'>
            <AdminSidebar />
            <AdminHeader />
            <div id='content-page' className='content-page'>
                {child}
            </div>
            <AdminFooter />
        </div>
    )
}

export default AdminMasterLayout