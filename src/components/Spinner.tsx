import React from 'react'

const Spinner: React.FC<{}> = () => {
  return (
    <div
      className="sk-center"
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <div className="sk-wave">
        <div className="sk-wave-rect" />
        <div className="sk-wave-rect" />
        <div className="sk-wave-rect" />
        <div className="sk-wave-rect" />
        <div className="sk-wave-rect" />
      </div>
    </div>
  )
}

export default Spinner
