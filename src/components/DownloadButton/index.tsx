import React from 'react'

const DownloadButton = ({file, children}) => (
    <a href={file} className='downloadBtn' download>
        {children}
    </a>
  )

export default DownloadButton;