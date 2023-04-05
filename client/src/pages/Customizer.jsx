import React from 'react'

const Customizer = () => {
  return (
    <button className='download-btn' onClick={downloadCanvasToImage}>
    <img
      src={download}
      alt='download_image'
      className='w-3/5 h-3/5 object-contain'
    />
  </button>
  )
}

export default Customizer