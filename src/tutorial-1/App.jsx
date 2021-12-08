import ProfileC from "./components/ProfileC";
import ProfileF from "./components/ProfileF";

export default function App(){
  return(
    <div style={{textAlign:'center', fontSize:50}}>
      <ProfileF name="Вася Пупкин" registredAt={new Date(2021, 5, 22)}/>
      <ProfileC name="Вася Пупкин" registredAt={new Date(2021, 5, 22)}/>
    </div>
    
  )
}