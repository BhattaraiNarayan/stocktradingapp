import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    return ( 
        <footer>
        <div className='container border-top bg-light mt-5'>
            <div className='row mt-5'>
                <div className='col'>
                    <img src='media/images/logo.png' style={{width:"50%",padding:"10px 0" }} />
                    <p style={{color:"#424242"}}>&copy;2020 - 2025, StocktradingApp pvt. Ltd.All rights reserved.</p>
                </div>
                <div className='col linkPara' style={{textDecoration:"none"}}>
                    <p>Account</p>
                    <Link to="">Open demat account</Link><br/>
                    <Link to="">Minor demat account</Link><br/>
                    <Link to="">NRI demat account</Link><br/>
                    <Link to="">Commodity</Link><br/>
                    <Link to="">Dematerialisation</Link><br/>
                    <Link to="">Fund transfer</Link><br/>
                    <Link to="">MTF</Link><br/>
                    <Link to="">Referral program</Link><br/>
                </div>
                 <div className='col linkPara' style={{textDecoration:"none"}}>
                    <p>Support</p>
                    <Link to="">Contact us</Link><br/>
                    <Link to="">Support portal</Link><br/>
                    <Link to="">How to file a complaint?</Link><br/>
                    <Link to="">Status of your complaints</Link><br/>
                    <Link to="">Bulletin</Link><br/>
                    <Link to="">Circular</Link><br/>
                    <Link to="">Z-Connect blog</Link><br/>
                    <Link to="">Downloads</Link><br/>                      
                </div> <div className='col linkPara' style={{textDecoration:"none"}}>
                    <p>company</p>
                    <Link to="">About</Link><br/>
                    <Link to="">Philosophy</Link><br/>
                    <Link to="">Press & media</Link><br/>
                    <Link to="">Careers</Link><br/>
                    <Link to="">Zerodha Cares (CSR)</Link><br/>
                    <Link to="">Zerodha.tech</Link><br/>
                    Open source
                </div> <div className='col linkPara' style={{textDecoration:"none"}}>
                    <p>Quick Links</p>
                    <Link to="">Upcoming IPOs</Link><br/>
                    <Link to="">Brokerage charges</Link><br/>
                    <Link to="">Market holidays</Link><br/>
                    <Link to="">Economic calendar</Link><br/>
                    <Link to="">Calculators</Link><br/>
                    <Link to="">Markets</Link><br/>
                    <Link to="">Sectors</Link><br/>
                </div>
            </div>
            <div className='mt-5 text-small text-muted fs-6' style={{fontSize:"16px"}}>
            <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

<p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

<p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

<p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

<p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

<p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>

<p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
        </div>
        <div className='footer-link'>
            <ul>
                <li>NSE</li>
                <li>BSE</li>
                <li>MCX</li>
                <li>Terms & conditions</li>
                <li>Policies & procedures</li>
                <li>Privacy policy</li>
                <li>Disclosure</li>
                <li>For investor's attention</li>
                <li>Investor charter</li>
            </ul>
        </div>
</div>
</footer>
     );
}

export default Footer;