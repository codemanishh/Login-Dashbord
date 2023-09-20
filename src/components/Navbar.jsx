import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FaRegBell } from 'react-icons/fa';
import { LiaMoneyBillWaveAltSolid } from 'react-icons/lia';
import {AiOutlineYoutube,AiOutlinePhone,AiOutlineInstagram, AiOutlineTransaction, AiFillSetting, AiOutlineLike, AiOutlineSchedule } from 'react-icons/ai';
import { IoPeopleOutline } from 'react-icons/io5';
import { TbLayoutDashboard } from 'react-icons/tb';
import { CgMail } from 'react-icons/cg';
import { GrAdd } from 'react-icons/gr';
import './navbar.css';
import Chart from './Chart';
import Piechart from './Piechart';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth0();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    youtube:'',
  });
  const [profileData, setProfileData] = useState(null);

  const handleAddProfileClick = () => {
    setShowForm(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can handle the submission of data here, e.g., sending it to a server or storing it locally.
    console.log('Submitted data:', formData);

    // Update the profileData state with the submitted data
    setProfileData(formData);

    // Reset the form and hide it
    setFormData({
      name: '',
      email: '',
      phone: '',
      youtube:'',
    });
    setShowForm(false);
  };

  return (
    <div className='login-main-div'>
      <div className='login-main-div-child1'>
        <div className='right-main'>
          <strong className='board'>Board.</strong>
          <div className='alignment'>
            <div className='tb'> <TbLayoutDashboard /> Dashboard</div>
          </div>
          <div>
            <div className='tb'><AiOutlineTransaction /> Transactions</div>
          </div>
          <div>
            <div className='tb'><AiOutlineSchedule /> Schedules</div>
          </div>
          <div>
            <div className='tb'><IoPeopleOutline /> Users</div>
          </div>
          <div>
            <div className='tb'> <AiFillSetting />Settings</div>
          </div>
        </div>

      </div>
      <div className='login-main-div-child'>
        <div className='nav'>
          <p>Dashboard</p>
          <div className='search-parent'>
            <div>
              <input className='search' type="text" placeholder='Search....' />
            </div>
            <FaRegBell />
            {isAuthenticated && <img className='userimg' src={user.picture} alt={user.name} />}
            <button className='buttonlogout' onClick={() => logout()}>Logout</button>
          </div>
        </div>
        <div className="cards">
          <div className="card1">
            <div className='green'><LiaMoneyBillWaveAltSolid /></div>
            <div>Total Revenues</div>
            <div>$2,129,430</div>
          </div>
          <div className="card1">
            <div className='yellow'><AiOutlineTransaction /></div>
            <div>Total Revenues</div>
            <div>$2,129,430</div>
          </div>
          <div className="card1">
            <div className='red'><AiOutlineLike /></div>
            <div>Total Revenues</div>
            <div>$2,129,430</div>
          </div>
          <div className="card1">
            <div className='voilate'><IoPeopleOutline /></div>
            <div>Total Revenues</div>
            <div>$2,129,430</div>
          </div>
        </div>
        <div className='chart-main'>
          <div className="chart-css">
            <div>
              <div className='activity'>Activities</div>
              <div className='myjune'>My-June 2021</div>
            </div>
            <div className='chart-gph'>
              <Chart />
            </div>

          </div>
        </div>
        <div className="circle">
          <div className='new-pi-card'>
            <Piechart />
          </div>
          <div className='no-class'>
            {/* Display the profile data if it exists */}
            {profileData && (
              <div className="card2">
                <div className='green'><GrAdd /></div>
                <div><AiOutlineInstagram/>: {profileData.name}</div>
                <div><CgMail/>: {profileData.email}</div>
                <div><AiOutlinePhone/>: {profileData.phone}</div>
                <div><AiOutlineYoutube/>: {profileData.youtube}</div>
              </div>
            )}
            
            {/* Display the form or the "Add Profile" button */}
            {showForm ? (
              <div>
                <form className='card2' onSubmit={handleFormSubmit}>
                  <div>
                    <label htmlFor="name">Instagram:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                    />
                  </div>
                   <div>
                    <label htmlFor="youtube">youtube:</label>
                    <input
                      type="text"
                      id="youtube"
                      name="youtube"
                      value={formData.youtube}
                      onChange={handleFormChange}
                    />
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </div>
            ) : (
              <div className='new-pi-card'>
                <GrAdd onClick={handleAddProfileClick} />
                Add Profile
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
