import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as BookServices from "../../../../services/BookService"
function Shop() {
    const [apiData, setApiData] = useState([])
    const [searchString, setSearchString] = useState('');
    const fetchApiData = async () => {
        const [data, err] = await BookServices.getAllAndLimit();
        if (data) {
            console.log(data);
            setApiData(data);
        }
        if (err) {
            console.log(err);
        }
    }

    const handleSearch = async () => {
        console.log(searchString);
        const [data, err] = await BookServices.getBookByName(searchString);
        if (data) {
            console.log(data);
            setApiData(data);
        }
        if (err) {
            console.log(err);
        }
    }
    const handleClear = () => {
        fetchApiData();
        setSearchString('');
        document.getElementById("searchInp").reset()
    }

    useEffect(() => {
        fetchApiData()
    }, [])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="iq-card-transparent mb-0">
                        <div className="d-block text-center">
                            <div className="w-100 iq-search-filter">
                                <ul
                                    className="list-inline p-0 m-0 row justify-content-center search-menu-options"
                                >

                                    <li className="search-menu-opt">
                                        <div
                                            className="iq-search-bar search-book d-flex align-items-center"
                                        >
                                            <form action="#" id='searchInp' className="searchbox">
                                                <input
                                                    type="text"
                                                    className="text search-input"
                                                    placeholder="search here..."
                                                    name='search'
                                                    onChange={e => setSearchString(e.target.value)}
                                                />
                                                <a className="search-link" href="#">
                                                    <i className="ri-search-line"></i>
                                                </a>
                                            </form>
                                            <button
                                                type="button"
                                                onClick={() => handleSearch()}
                                                className="btn btn-primary search-data ml-2"
                                            >
                                                Search
                                            </button>
                                            {
                                                searchString && <button
                                                    type="button"
                                                    onClick={() => handleClear()}
                                                    className="btn btn-warning search-data ml-2"
                                                >
                                                    Reset
                                                </button>
                                            }

                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="iq-card">
                        <div className="iq-card-body">
                            <div className="row">
                                {
                                    apiData && apiData.map((e, i) => {
                                        return (
                                            <div className="col-sm-6 col-md-4 col-lg-3" key={i}>
                                                <div className="iq-card iq-card-block iq-card-stretch iq-card-height browse-bookcontent">
                                                    <div className="iq-card-body p-0">
                                                        <div className="d-flex align-items-center">
                                                            <div className="col-6 p-0 position-relative image-overlap-shadow">
                                                                <a href="#">
                                                                    <img
                                                                        className="img-fluid rounded w-100"
                                                                        src={e.image} alt={e.title}
                                                                    />
                                                                </a>
                                                                <div className="view-book">
                                                                    <Link to={`/details/${e._id}`} className="btn btn-sm btn-white">Đọc Ngay</Link>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="mb-2">
                                                                    <h6 className="mb-1">{e.title}</h6>
                                                                    <p className="font-size-13 line-height mb-1">Author: {e.author}</p>
                                                                    <p className="font-size-13 line-height mb-1">{e.category.name}</p>
                                                                </div>
                                                                <div className="price d-flex align-items-center">
                                                                    <h6><b>$ {e.price}</b></h6>
                                                                </div>
                                                                <div className="iq-product-action">
                                                                    <a href="#" className="ml-2">
                                                                        <i className="ri-heart-line text-danger"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Shop