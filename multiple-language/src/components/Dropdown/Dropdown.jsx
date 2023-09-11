import React from 'react'

function Dropdown(props) {
  return (
    <div style={{marginTop:'40px'}}>
            <select onChange={props.onChange}>
                <option value={'en'}>English</option>
                <option value={'hi'}>Hindi</option>
                <option value={'ko'}>Korean</option>
            </select>
        </div>
  )
}

export default Dropdown
