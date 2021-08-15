import React from 'react'
import { TextField, withStyles } from '@material-ui/core'
import 'styled-components/macro'
import InputMask from 'react-input-mask'
import Autosuggest from 'react-autosuggest'
import '../../index.css'

import * as AutosuggestHighlightMatch from 'autosuggest-highlight/match'
import * as AutosuggestHighlightParse from 'autosuggest-highlight/parse'
import { Vehicles } from '../../pages/main/sections/Vehicles'

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

export function Autofill({
  value,
  setValue,
  suggestions,
  setSuggestions,
  updateDataSet,
}) {
  const handleChange = (event, { newValue, method }) => {
    setValue(newValue.split(' ')[0])
    if (newValue.split(' ')[0].length === 6) {
      Vehicles.map((vehicle, index) => {
        if (vehicle.license === newValue.split(' ')[0].toUpperCase()) {
          updateDataSet((prevState) => {
            return {
              ...prevState,
              make: {
                value: vehicle.make,
                point: vehicle.make === '' ? 0 : 1,
              },
              model: {
                value: vehicle.model,
                point: vehicle.model === '' ? 0 : 1,
              },
              year: {
                value: vehicle.year,
                point: vehicle.year === '' ? 0 : 1,
              },
            }
          })
        }
        return null
      })
    } else {
      updateDataSet((prevState) => {
        return {
          ...prevState,
          make: {
            value: '',
            point: 0,
          },
          model: {
            value: '',
            point: 0,
          },
          year: {
            value: '',
            point: 0,
          },
        }
      })
    }
  }

  // console.log(value)

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value))
  }

  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  }

  const inputProps = {
    placeholder: 'License Number',
    value,
    onChange: handleChange,
  }

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  )
}

//Helper Functions
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function getSuggestionValue(suggestion) {
  return `${suggestion.license} ${suggestion.make} ${suggestion.model}`
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim())

  if (escapedValue === '') {
    return []
  }

  const regex = new RegExp('\\b' + escapedValue, 'i')

  return Vehicles.filter((vehicle) => regex.test(getSuggestionValue(vehicle)))
}

function renderSuggestion(suggestion, { query }) {
  const suggestionText = `${suggestion.license} ${suggestion.make} ${suggestion.model}`
  const matches = AutosuggestHighlightMatch(suggestionText, query)
  const parts = AutosuggestHighlightParse(suggestionText, matches)

  return (
    <span className={'suggestion-content ' + suggestion.twitter}>
      <span className="name">
        {parts.map((part, index) => {
          const className = part.highlight ? 'highlight' : null

          return (
            <span className={className} key={index}>
              {part.text}
            </span>
          )
        })}
      </span>
    </span>
  )
}
