import React from 'react'
import 'styled-components/macro'
import { Colours, Icons } from '../../components'

export default function FileChooser({ onDone, image, id }) {
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
        display: grid;
        align-items: center;
        grid-template-columns: max-content max-content;
      `}
    >
      <label
        css={`
          padding: 8px;
          border-radius: 3px;
          color: white;
          font-weight: 500;
          background-color: ${image !== '' ? Colours.green : Colours.red};
          cursor: pointer;
          font-size: 12px;
          display: grid;
          place-items: center;
          margin-right: 5px;
          width: max-content;
        `}
        htmlFor={id}
      >
        <Icons.PhotoCameraRoundedIcon />
      </label>
      {image !== '' && (
        <section>
          <Icons.CheckCircleRoundedIcon
            style={{ color: Colours.green, fontSize: '30px' }}
          />
        </section>
      )}
      <input
        css={`
          height: 40px;
          width: 40px;
          display: none;
        `}
        id={id}
        type="file"
        name="file"
        accept="image/*"
        capture="environment"
        onChange={handleChange}
      />
    </div>
  )
}
