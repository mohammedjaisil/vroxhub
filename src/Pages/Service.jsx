import React, { Component } from 'react'
import Services from '../Components/Services/Services';
export class Service extends Component {
  static propTypes = {}

  render() {
    return (
      <>
        <div style={{ marginTop: '80px' }}>
          <Services />
        </div>
      </>
    )
  }
}


export default Service