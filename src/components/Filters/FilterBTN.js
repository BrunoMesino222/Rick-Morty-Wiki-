import React from 'react'

const FilterBTN = ({name, index, items, task, setPageNumber}) => {
  return (
<div>
  <style jsx>
    {`
    .x:checked + label {
      background-color: #0b5ed7;
      color: white;
    }

    input[type="radio"] {
      display: none; 
    }
`}
  </style>
    <div className="form-check">
  <input className="form-check-input" 
  onClick={()=>{
    setPageNumber(1);
    task(items);
  }}
  type="radio" 
  name={name} 
  id={`${name}-${index}`}
  />
  <label className="btn btn-outline-primary" for={`${name}-${index}`}>
     {items}
  </label>
</div>

</div>
  )
}

export default FilterBTN