import React from 'react';
import './Landing.css'

const Landing = (props) => {
  return (
    <div className='landing-jumbotron'>
      <div>
        Hello World :)
      </div>
      < div >
        {`I'm ${props.name}.`}
      </div>
        {/* {`My passion is people.`} */}
    </div>
  )
}

export default Landing;
