import React from 'react'
import 'styled-components/macro'

import PDF from './pdf/report/PDF'

export default function CustomerReview() {
  const HandleSubmission = (e) => {
    e.preventDefault()
    console.log('Submitting Customer Review')
  }

  return (
    <div
      css={`
        height: calc(100% - 20px);
      `}
    >
      {/* Review */}
      <form
        id="submitReview"
        onSubmit={HandleSubmission}
        css={`
          display: none;
        `}
      />
      <PDF />
    </div>
  )
}
