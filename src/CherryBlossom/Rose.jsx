import React from 'react';

class Rose extends React.Component {
  render() {
    return (
      <svg width="200" height="200">
        {/* 줄기 */}
        <rect x="95" y="100" width="10" height="100" fill="green" />

        {/* 잎 */}
        <ellipse cx="100" cy="100" rx="50" ry="30" fill="green" />
        <ellipse cx="100" cy="70" rx="40" ry="20" fill="green" />
        <ellipse cx="100" cy="40" rx="30" ry="15" fill="green" />

        {/* 꽃잎 */}
        <path d="M 100 50 Q 90 30 80 50 Q 90 70 100 50" fill="pink" />
        <path d="M 100 50 Q 110 30 120 50 Q 110 70 100 50" fill="pink" />
        <path d="M 100 50 Q 110 70 120 50 Q 110 30 100 50" fill="pink" />
        <path d="M 100 50 Q 90 70 80 50 Q 90 30 100 50" fill="pink" />
      </svg>
    );
  }
}

export default Rose;
