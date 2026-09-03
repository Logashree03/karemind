 import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import './Stat.css';

import {
  faDesktop,
  faCode,
  faChartLine,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';


// Images
import pic from '../assets/ClientLogo/apex.png';
import pic1 from '../assets/ClientLogo/karuna_hospital.png';
import pic2 from '../assets/ClientLogo/omega.png';
import pic3 from '../assets/ClientLogo/rajaclinic.png';
import pic4 from '../assets/ClientLogo/sree_clinc.png';
import pic5 from '../assets/ClientLogo/kranium.png';

export default function Stat() {
  return (
    <div className="w-full py-10">
      <div className="Stats-section container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="Stat-content flex flex-col items-center justify-center p-8 rounded-3xl shadow-lg shadow-slate-950/20">
          <h1>10K+</h1>
          <p>Active Users</p>
        </div>

        <div className="Stat-content flex flex-col items-center justify-center p-8 rounded-3xl shadow-lg shadow-slate-950/20">
          <h1>500</h1>
          <p>Healthcare Facilities</p>
        </div>

        <div className="Stat-content flex flex-col items-center justify-center p-8 rounded-3xl shadow-lg shadow-slate-950/20">
          <h1>99.9%</h1>
          <p>System Uptime</p>
        </div>
      </div>
    </div>
  );
 }