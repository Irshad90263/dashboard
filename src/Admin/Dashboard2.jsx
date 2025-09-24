import React, { useState } from "react";
import './Dashboard.css';
import ChangePass  from "./ChangePass";

//mock data for the dashboard
const userData = {
    name: "Irsahd Ali",
    email: "Mern@gmail.com",
    roll: "administration"
}

const user = "https://cdn-icons-png.flaticon.com/128/456/456212.png";
const revenue = "https://cdn-icons-png.flaticon.com/128/3358/3358690.png";
const orders = "https://cdn-icons-png.flaticon.com/128/6713/6713660.png";
const tickeks = "https://cdn-icons-png.flaticon.com/128/13656/13656157.png";

const storeData = [
    {
        title: 'Total user',
        value: '2,842',
        change: '+12%',
        icon: `${user}`
    },
    {
        title: 'Total Revenue',
        value: '$2400',
        change: '+18%',
        icon: `${revenue}`
    },
    {
        title: 'New Orders',
        value: '1456',
        change: '-3%',
        icon: `${orders}`
    },
    {
        title: 'support tickets',
        value: '56',
        change: '+4%',
        icon: `${tickeks}`
    }
];

const recentActiviteis = [
    {
        user: "John-doe",
        action: "place anew order",
        time: "2 min ago"
    },
    {
        user: "Abhay",
        action: "Updated payment methods",
        time: "1 min ago"
    },
    {
        user: "Jay",
        action: "Completd a purchase",
        time: "5 min ago"
    },
    {
        user: "Adarsh",
        action: "Submitted a support ticket",
        time: "3 min ago"
    }
];

export const Dashboard2 = () => {
    const [sidebarOpen, setsidebar] = useState(true);
    const [activePage, setactivePage] = useState('dashboard');

    const toggleSidbar = () => {
        setsidebar(!sidebarOpen);
    }

    // by me start
  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return (
         <>
         {/* stats card */}
                <div className="stats-grid">
                    {storeData.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-info">
                                <img src={stat.icon} height={'30px'} width={'30px'} />
                                <p>{stat.title}</p>
                            </div>
                            <div className="stat-analysis">
                                <div className="stat-value">
                                    {stat.value}
                                </div>
                                <div className={`stat-change ${stat.change.includes('+') ? 'positive' : 'negative'}`}>
                                    {stat.change}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* cahrts and additional content */}

                <div className="content-grid">
                    {/* chart section */}
                    <div className="chart-container">
                        <div className="chart-header">
                            <h3>Revenue Overview</h3>
                            <select defaultValue="Last-week">
                                <option value="Last-week">Last Week</option>
                                <option value="Last-Month">Last Month</option>
                                <option value="Last-Year">Last Year</option>
                            </select>
                        </div>
                        <div className="chart-placeholder">
                            <div className="chart-bars">
                                <div className="bar" style={{ height: '60%' }}></div>
                                <div className="bar" style={{ height: '45%' }}></div>
                                <div className="bar" style={{ height: '75%' }}></div>
                                <div className="bar" style={{ height: '50%' }}></div>
                                <div className="bar" style={{ height: '65%' }}></div>
                                <div className="bar" style={{ height: '80%' }}></div>
                                <div className="bar" style={{ height: '70%' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* recent activity */}

                    <div className="activity-container">
                        <div className="activity-header">
                            <h3>Recent Activity</h3>
                            <a href="#view -all">View All</a>
                        </div>
                        <div className="activity-list">
                            {recentActiviteis.map((activity, index) => (
                                <div key={index} className="activity-item">
                                    <div className="activity-avtar">
                                        {activity.user.charAt(0)}
                                    </div>
                                    <div className="activity-details">
                                        <p>
                                            <span className="activity-user">{activity.user}</span> <br /><span>{activity.action}</span>
                                        </p>
                                        <span className="activity-time">{activity.time}</span>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                <div className="additional-section">
                    <div className="quick-actions">
                        <h3>Quick action </h3>
                        <div className="action-buttons">
                            <button className="action-btn">Add Product</button>
                            <button className="action-btn">Generate Report</button>
                            <button className="action-btn">Send Message</button>
                            <button className="action-btn">Manage Users</button>
                        </div>
                    </div>
                    <div className="upcoming-events">
                        <h3>Upcoming Events</h3>
                        <div className="event-item">
                            <div className="event-date">
                                <span className="event-day">15</span>
                                <span className="event-month">sep</span>
                            </div>
                            <div className="event-details">
                                <p>team meating</p>
                                <span>10:00 AM - confrence-room</span>
                            </div>
                        </div>
                        <div className="event-item">
                            <div className="event-date">
                                <span className="event-day">18</span>
                                <span className="event-month">sep</span>
                            </div>
                            <div className="event-details">
                                <p>Product lounch</p>
                                <span>2:00 main-hall</span>
                            </div>
                        </div>
                    </div>
                </div>
         </>
        );
      case 'ChangePass':
        return(
          <>
            <ChangePass />
          </>
        );
    }
  };
  // by me end

    return (
        <div className={` dashboard-container ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
            <div className="sidebar">
                <div className="sidebar-header">
                    <h2>Dashboard</h2>
                    <button className="sidebar-toogle" onClick={toggleSidbar}>☰</button>
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        <li className={activePage === 'dashboard' ? 'active' : ''}>
                            <a href="#dashboard" onClick={() => setactivePage('dashboard')}>Dashboard</a>
                        </li>
                        <li className={activePage === 'users' ? 'active' : ''}>
                            <a href="#users" onClick={() => setactivePage('users')}>Users</a>
                        </li>
                        <li className={activePage === 'orders' ? 'active' : ''}>
                            <a href="#orders" onClick={() => setactivePage('orders')}>Orders</a>
                        </li>
                        <li className={activePage === 'products' ? 'active' : ''}>
                            <a href="#products" onClick={() => setactivePage('products')}>Products</a>
                        </li>
                        <li className={activePage === 'setting' ? 'active' : ''}>
                            <a href="#setting" onClick={() => setactivePage('setting')}>Setting</a>
                        </li>
                        <li className={activePage === 'logout' ? 'active' : ''}>
                            <a href="#login" onClick={() => setactivePage('logout')}>LogOut</a>
                        </li>
                        <li className={activePage === 'ChangePass' ? 'active' : ''}>
                            <a href="#ChangePass" onClick={() => setactivePage('ChangePass')}>Change_password</a>
                        </li>
                    </ul>
                </nav>

            </div>

            {/* main content */}

            <div className="main-content">
                {/* header */}
                <header className="dashboard-header">
                    <div className="header-left">
                        <h1>Welcome back, <span className="admin">{userData.name}</span></h1>
                        <p>Here's what's happening with your store today</p>
                    </div>

                    <div className="header-right">
                        <div className="search-bar">
                            <input type="text" placeholder="Search..." />
                        </div>
                        <div className="user-menu">
                            <div className="user-info">
                                <span className="username">{userData.name}</span>
                                <span className="user-role">{userData.email}</span>
                            </div>
                            <div className="user-avtar">
                                {userData.name.charAt(0)}
                            </div>
                        </div>
                    </div>
                </header>
                
                {renderContent()}
            </div>
        </div>

    )
}