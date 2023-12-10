import { useEffect } from 'react';
import './time.css';
import { FaArrowDown, FaQuoteRight } from "react-icons/fa";

const Time = () => {
  useEffect(() => {
    const updateClock = () => {
      const hr = document.querySelector('#hr');
      const mn = document.querySelector('#mn');
      const sc = document.querySelector('#sc');

      const day = new Date();
      const hh = day.getHours() * 30;
      const mm = day.getMinutes() * 6;
      const ss = day.getSeconds() * 6;

      hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      mn.style.transform = `rotateZ(${mm}deg)`;
      sc.style.transform = `rotateZ(${ss}deg)`;

      const hours = document.getElementById('hours');
      const minutes = document.getElementById('minutes');
      const seconds = document.getElementById('seconds');
      const ampm = document.getElementById('ampm');

      const h = day.getHours();
      const m = day.getMinutes();
      const s = day.getSeconds();

      // add zero before single digit number
      hours.innerHTML = h < 10 ? `0${h}` : h;
      minutes.innerHTML = m < 10 ? `0${m}` : m;
      seconds.innerHTML = s < 10 ? `0${s}` : s;

      ampm.innerHTML = h >= 12 ? 'PM' : 'AM';
    };

    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
  <div className='flex flex-col lg:flex-row-reverse justify-evenly items-center'>
    <div className='pb-20'>
        <div className='text-6xl flex justify-end'> <FaQuoteRight /></div>
        <h1 className='text-4xl'>Time and tide wail for none</h1>
        <h1 className='text-6xl my-16'>Do not waste your time</h1>
        <div className='text-6xl flex justify-end'><FaArrowDown /></div>
    </div>
    <div className="bodyy">
      <div className="container">
        <div className="clock">
          <div className="circle" id="sc" style={{ '--clr': '#04fc43' }}><i /></div>
          <div className="circle circle_tow" id="mn" style={{ '--clr': '#fee800' }}><i /></div>
          <div className="circle circle_three" id="hr" style={{ '--clr': '#ff2972' }}><i /></div>

          {[...Array(12)].map((_, index) => (
            <span key={index + 1} style={{ '--i': index + 1 }}><b>{index + 1}</b></span>
          ))}
        </div>

        <div id="time">
          <div id="hours" style={{ '--clr': '#ff2972' }}>00</div>
          <div id="minutes" style={{ '--clr': '#fee800' }}>00</div>
          <div id="seconds" style={{ '--clr': '#04fc43' }}>00</div>
          <div id="ampm">AM</div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Time;
