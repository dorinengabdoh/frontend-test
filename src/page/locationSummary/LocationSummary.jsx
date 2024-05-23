import React from 'react'
import "./location.css"
import down from "../../assets/icons/down.svg";


const LocationSummary = () => {
  return (
    <>
      <div className="recentActivelocation">
        <div class="table-container">
          <table class="table">
            <thead>
              <tr>
                <th>Recents Active Locations</th>
                <th><button className='last'>Last 30 days <img src={down} alt="" /></button></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bastos, Yaounde</td>
                <td><button className='btn'>Download QRCode</button></td>
              </tr>
              <tr>
                <td>Molyko, Buea</td>
                <td><button className='btn'>Download QRCode</button></td>
              </tr>
              <tr>
                <td>Small soppo, Buea</td>
                <td><button className='btn'>Download QRCode</button></td>
              </tr>
              <tr>
                <td>Simbock, Yaounde</td>
                <td><button className='btn'>Download QRCode</button></td>
              </tr>
              <tr>
                <td>Bundoma, Buea</td>
                <td><button className='btn'>Download QRCode</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="all">
          <div className="popular">
            <span><strong>payroll summary</strong> <br /> <h6>From 1-31 March 2024</h6></span>
            <button className='last'>Last 30 days <img src={down} alt="" /></button>
          </div>
          <div className="popularsummary">
            <div class="circle-container">
              <div class="circle">
                <div class="inner-circle"></div>
                <div class="ring"></div>
              </div>
            </div>
            <div className="allpercent">
              <div className="percent">
                <div className="percentLeft">
                  <div class="vertical-line"></div>
                  <div className="salarie">
                    <h6>Total Salaries</h6>
                    <div className="text">
                      <span className='big'>$734</span>
                      <span className='smalle'>.20</span>
                    </div>
                  </div>
                </div>
                <div className="percentLeft">
                  <div class="vertical-lin"></div>
                  <div className="salarie">
                    <h6>Total Transfered</h6>
                    <div className="text">
                      <span className='big'>$594</span>
                      <span className='smalle'>.86</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="percent">
                <div className="percentLeft">
                  <div class="vertical-li"></div>
                  <div className="salarie">
                    <h6>Deducted Payements</h6>
                    <div className="text">
                      <span className='big'>$181</span>
                      <span className='smalle'>.34</span>
                    </div>
                  </div>
                </div>
                <div className="percentLeft">
                  <div class="vertical-l"></div>
                  <div className="salarie">
                    <h6>Bonus  Payement</h6>
                    <div className="text">
                      <span className='big'>$37</span>
                      <span className='smalle'>.13</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <button className='btne'>View Transactions</button>


    </>
  )
}

export default LocationSummary