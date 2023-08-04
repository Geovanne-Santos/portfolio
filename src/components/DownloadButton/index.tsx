import React from 'react'

const DownloadButton = ({file, children}: {file: string, children: any}) => (
    <a href={file} className='downloadBtn' download>
        {children}
    </a>
  )

export default DownloadButton;