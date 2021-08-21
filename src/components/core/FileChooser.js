import React from 'react'
import 'styled-components/macro'
import { Colours, Core, Icons } from '../../components'

export default function FileChooser({ onDone, fileName, setFileName }) {
  const handleChange = (event) => {
    let files = Array.from(event.target.files)
    let allFiles = []
    let reader = new FileReader()

    files.map((file) => {
      //Convert to Base 64
      reader.readAsDataURL(file)
      reader.onload = () => {
        let fileInfo = {
          name: file.name,
          type: file.type,
          size: Math.round(file.size / 1000) + 'kB',
          base64: reader.result,
          file: file,
        }
        allFiles.push(fileInfo)
        //Set source to current image
        setFileName(allFiles[0].name)
        onDone(allFiles[0])
      }
      return file
    })
  }
  return (
    <div
      css={`
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        height: max-content;
        border: 1px solid ${Colours.border};
        display: grid;
        align-items: center;
        grid-template-columns: max-content 1fr;
      `}
    >
      <label
        css={`
          padding: 10px;
          border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;
          color: white;
          font-weight: 500;
          background-color: ${Colours.blue};
          cursor: pointer;
          font-size: 12px;
        `}
        htmlFor="file"
      >
        <Icons.PhotoCameraRoundedIcon />
      </label>
      <section
        css={`
          padding-left: 5px;
          max-width: 190px;
        `}
      >
        <Core.Text Contained customSize="10px">
          {fileName}
        </Core.Text>
      </section>
      <input
        css={`
          width: 0.1px;
          height: 0.1px;
          opacity: 0;
          overflow: hidden;
          position: absolute;
          z-index: -1;
        `}
        id="file"
        type="file"
        name="file"
        accept="image/*"
        capture="environment"
        onChange={handleChange}
      />
    </div>
  )
}
