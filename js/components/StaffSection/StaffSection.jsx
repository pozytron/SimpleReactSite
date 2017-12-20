import React from 'react';
import Person from "./Person"

class StaffSection extends React.Component{
  render(){
    return <section>
      <Person />
      <Person />
      <Person />
    </section>
  }
}

export default StaffSection
