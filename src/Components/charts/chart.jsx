import React from 'react';

const SpeedometerChart = () => {
  const radius = 120;
  const strokeWidth = 30;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (72 / 100) * circumference;

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative flex justify-center items-center">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform rotate-90"
        >
          {/* <circle
            stroke="#e6e6e6"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          /> */}
          <circle
            stroke="url(#gradient)"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="50%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#f87171" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold">72%</span>
          <span className="text-gray-500">Completed</span>
        </div>
      </div>
      
      <div className="flex justify-between mt-4 text-center">
        <div>
          <p className="text-2xl font-semibold">95</p>
          <p className="text-sm text-gray-500">Total projects</p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-green-500">26</p>
          <p className="text-sm text-gray-500">Completed</p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-yellow-500">35</p>
          <p className="text-sm text-gray-500">Delayed</p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-red-500">35</p>
          <p className="text-sm text-gray-500">On going</p>
        </div>
      </div>
    </div>
  );
};

export default SpeedometerChart;