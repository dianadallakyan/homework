import React from 'react';

export const Form = ({data}) => {
  return <div>
    {data.map(element => <div>
      <p>name: {element.name} {!element.surName ? 
          '' : element.surName}</p>
      <p>mail: {element.mail}</p>
      <p>tel: {element.tel}</p>
    </div>)}
  </div>
}

export default Form;