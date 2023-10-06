import React, { useState } from 'react';
import './Dashboard.css';
import scheduleIcon from "../../images/schedule_icon.svg"
import searchIcon from '../../images/Search icon.svg';
import bellIcon from '../../images/Vector.svg';
import maskGroup from '../../images/Mask Group.png';
import dashboardIcon from '../../images/dashboard_icon.svg';
import transactionIcon from '../../images/transaction_icon.svg';
import settingIcon from '../../images/setting_icon.svg';
import userIcon from '../../images/user_icon.svg';
import plusIcon from '../../images/Controls.svg';
import Frames from '../../components/frames/Frames';
import Chart from '../../components/chart/Chart';
import TopProducts from '../../components/topProducts/TopProducts';
import NewComponent from '../../components/newComponent/NewComponent';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="dashboard">
      <div className="navbar">
        <div className="navbar-title">
            Board.
        </div>
        <div className="navbar-content">
            <div className="navbar-content-top">
                <div>
                    <img src = {dashboardIcon} alt = ""/>
                    <div className='text'>Dashboard</div>
                </div>
                <div>
                    <img src = {transactionIcon} alt = ""/>
                    <div>Transactions</div>
                </div>
                <div>
                    <img src = {scheduleIcon} alt = ""/>
                    <div>Schedules</div>
                </div>
                <div>
                    <img src = {userIcon} alt = ""/>
                    <div>Users</div>
                </div>
                <div>
                    <img src = {settingIcon} alt = ""/>
                    <div>Settings</div>
                </div>
            </div>
            <div className="navbar-content-bottom">
                <span>Help</span>
                <span>Contact Us</span>
            </div>
        </div>
      </div>
      <div className="dashboard-component">
      <div className="header">
            <div>Dashboard</div>
            <div className="header-right">
                <div className="search-container">
                    <div>Search...</div>
                    <img style = {{padding: 0}} src = {searchIcon} alt = "search Icon"/>
                </div>
                <img style = {{padding: 0}} src = {bellIcon} alt = "bell Icon"/>
                <img style = {{padding: 0, objectFit: "cover", width: "2rem", height: "2rem"}} src = {maskGroup} alt = "mask group"/>
            </div>
        </div>
        <Frames />
        <Chart />
        <div
          style={{
            height: 'fit-content',
            width: '100%',
            display: 'flex',
          }}
        >
          <TopProducts />
          <div className="addComponent" onClick={openModal}>
            <div className="icon-container">
              <img src={plusIcon} alt="plusIcon" />
            </div>
            <h1>Add Profile</h1>
          </div>
        </div>
      </div>
      {/* Transparent overlay */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}></div>
      )}
      
      {/* NewComponent */}
      {isModalOpen && (
        <NewComponent onClose={closeModal} />
      )}
    </div>
  );
}





