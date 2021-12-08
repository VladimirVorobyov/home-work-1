import React from 'react';
import montoToStr from '../util';

class ProfileC extends React.Component{
  render() {
    return(<>
    <div>Привет <b>{this.props.name.replace(/ [\s\S]+/, '')}!</b></div>
    <div>Дата регистрации:{this.props.registredAt.getDate()} {montoToStr(this.props.registredAt.getMonth())} {this.props.registredAt.getFullYear()}</div>
  </>)
  }
  
}

export default ProfileC;