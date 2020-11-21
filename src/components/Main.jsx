import React from 'react'
import  './Main.css'
const Main = () => {
    return (
        <div className='container-fluid'>
          <div className="card m-5 pb-5 bg-info h-100 shadow-lg p-3 mb-5 bg-white rounded">
              <div className="row">
                  <div className="col-md-4">
                      logo
                  </div>
                  <div className="col-md-8">
                     <nav className="navbar navbar-expand-lg navbar-light bg-light float-right">
                            <ul className="navbar-nav">
                            <li className="nav-item active  mr-5">
                               About me
                            </li>
                            <li className="nav-item mr-5">
                              Work
                            </li>
                            <li className="nav-item  mr-5">
                               Blog
                            </li>
                            <li className="nav-item  mr-5">
                               Service
                            </li>
                            <li className="nav-item  mr-5">
                               Contact
                            </li>
                            </ul>
                        </nav>
                  </div>
              </div>
          </div>
        </div>
    )
}

export default Main
