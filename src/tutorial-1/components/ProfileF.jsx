import montoToStr from '../util';

function ProfileF ({name, registredAt}){
  return(<>
    <div>Привет <b>{name.replace(/ [\s\S]+/, '')}!</b></div>
    <div>Дата регистрации:{registredAt.getDate()} {montoToStr(registredAt.getMonth())} {registredAt.getFullYear()}</div>
  </>)
}

export default ProfileF;
