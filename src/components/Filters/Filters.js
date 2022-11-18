import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'


const Filters = ({setStatus, setPageNumber, setGender, setSpecies}) => {
  let clear = () => {
    setStatus("");
    setPageNumber("");
    setGender("");
    setSpecies("");
    window.location.reload(false);
  }; 

  return (
    <div className='col-3'>
      <div className='text-center fw-bold fs-4 mb-4'>Filters</div>
        <div onClick={clear} style={{cursor:"pointer"}} className='text-center text-primary text-decoration-underline'>
        Clear Filters
        </div>
        <div className="accordion" id="accordionExample">
          <Gender setPageNumber={setPageNumber} setGender={setGender}/>
          <Status setPageNumber={setPageNumber} setStatus={setStatus}/>
          <Species setPageNumber={setPageNumber} setSpecies={setSpecies}/>
        </div>
    </div>
  )
}

export default Filters