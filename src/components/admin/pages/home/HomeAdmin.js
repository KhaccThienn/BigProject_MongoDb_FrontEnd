import React from 'react'

function HomeAdmin() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                        <div className="iq-card-body">
                            <div className="d-flex align-items-center">
                                <div className="rounded-circle iq-card-icon bg-primary"><i className="ri-user-line"></i></div>
                                <div className="text-left ml-3">
                                    <h2 className="mb-0"><span className="counter">7900</span></h2>
                                    <h5 className="">Người dùng</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                        <div className="iq-card-body">
                            <div className="d-flex align-items-center">
                                <div className="rounded-circle iq-card-icon bg-danger"><i className="ri-book-line"></i></div>
                                <div className="text-left ml-3">
                                    <h2 className="mb-0"><span className="counter">4.8</span>K</h2>
                                    <h5 className="">Sách</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                        <div className="iq-card-body">
                            <div className="d-flex align-items-center">
                                <div className="rounded-circle iq-card-icon bg-warning"><i className="ri-shopping-cart-2-line"></i></div>
                                <div className="text-left ml-3">
                                    <h2 className="mb-0"><span className="counter">1.2</span>K</h2>
                                    <h5 className="">Đơn Hàng</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                        <div className="iq-card-body">
                            <div className="d-flex align-items-center">
                                <div className="rounded-circle iq-card-icon bg-info"><i className="ri-radar-line"></i></div>
                                <div className="text-left ml-3">
                                    <h2 className="mb-0"><span className="counter">690</span></h2>
                                    <h5 className="">Chờ Duyệt</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAdmin