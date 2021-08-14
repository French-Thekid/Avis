import React from 'react'
import { TextField, withStyles } from '@material-ui/core'
import 'styled-components/macro'
import InputMask from 'react-input-mask'

//OUR UI Styles
const CustomTextField = withStyles({
  // disabled: {},
  root: {
    '& input': {
      color: '#4756a1',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#d1cae8',
        borderRadius: '5px',
      },
      '&:hover fieldset': {
        borderColor: '#5570f6',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#5570f6',
      },
    },
  },
})(TextField)

export default function Input(props) {
  const {
    min,
    max,
    mask = '',
    disabled,
    multiline = false,
    rows,
    ...rest
  } = props
  return multiline ? (
    <CustomTextField
      id="outlined-multiline-static"
      variant="outlined"
      multiline={multiline}
      rows={rows}
      InputProps={{
        inputProps: { min, max },
      }}
      {...rest}
      fullWidth
    />
  ) : (
    <InputMask mask={mask} {...rest} disabled={disabled} maskChar=" ">
      {() => (
        <CustomTextField
          variant="outlined"
          disabled={disabled}
          InputProps={{
            inputProps: { min, max },
          }}
          InputLabelProps={{
            shrink: props.type === 'date' ? true : props.isFocussed,
          }}
          {...rest}
          fullWidth
        />
      )}
    </InputMask>
  )
}
