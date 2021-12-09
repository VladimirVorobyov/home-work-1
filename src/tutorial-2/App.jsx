export default function App(){
  const value = {email:'',password:''}
  const getEmail = (e)=>{
    value.email = e.target.value;
  } 
  const getPassword = (e)=>{
    value.password = e.target.value;
  }
  const handleSubmit = (evt)=>{
    evt.preventDefault();
    if(value.email && value.password){
    console.log(value);
    console.log(evt.target);
    value.email ='';
    value.password ='';
    evt.target.reset();
    }else {
      alert("Попробуй еще")
    }
  }
 
  return(<>
    <form onSubmit={handleSubmit}>
      <input id="emailIn" onChange={getEmail}  type='text' placeholder="E-Mail" style={{fontSize:'50px', margin:'100px auto', display:'block'}}/>
      <input  onChange={getPassword} type='password'  placeholder="Пароль" style={{fontSize:'50px', margin:'100px auto', display:'block'}}/>
      <button type='submit' style={{fontSize:'50px', margin:'100px auto', display:'block'}}>Войти</button>
    </form>    
  </>)
} 