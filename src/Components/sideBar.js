import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class sideBar extends Component {
    render() {
        return (
            <div className='sideBar d-flex flex-column justify-content-between bg-dark text-white p-4 vh-100 w-25'>
                <div>
                    <a href="d-flex align-items-center" />
                    <i className='bi bi-bootstrap fs-4 me-2'></i>
                    <span className='fs-4'>Nitin</span>

                    <hr className='text-secondary mt-2' />
                    <ul className='new nav-piils flex-column p-0 m-0'>
                        <li className='nav-item p-1'>
                            <Link to="/" className='nav-link text-white' />
                            <i className='bi bi-table me-2 fs-5'></i>
                            <span className='fs-5'>Dashboard</span>

                        </li>
                        <li className='nav-item p-1'>
                            <a href='' className='nav-link text-white' />
                            <i className='bi bi-speedometer me-2 fs-5'></i>
                            <span className='fs-5'>Dashboard</span>

                        </li>
                        <li className='nav-item p-1'>
                            <a href='' className='nav-link text-white' />
                            <i className='bi bi-speedometer me-2 fs-5'></i>
                            <span className='fs-5'>Dashboard</span>

                        </li>
                    </ul>
                </div>
                <div>
                    <hr className='text-secondary' />
                    <i className='bi bi-user'></i>
                    <span>Nitin</span>
                </div>
            </div>

        )
    }
}
