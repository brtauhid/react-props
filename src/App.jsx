
import './App.css';
import Todo from './components/Todo';

const App = () => {
  return (
    <>
    
    {/* <Developer></Developer> */}
    {/* <User></User> */}
    {/* <Device name='Mobile' brand ='Samsung'></Device>
    <Device name='Laptop' brand ='Asus'></Device>
    <Device name='Web Cam' brand ='Logitec'></Device> */}
    </>
  );
};

function Developer(){
 return(
  <div className='student'>
    <h1>Developer Name</h1>
    <h2>Developer Contact: </h2>
  </div>
 )
}

function User(){
  const userClass ={
    margin:'20px',
    padding: '20px',
    border: '2px solid red',
    borderRadius: '10px'
  }

  return(
    <div style={userClass}>
  <h1>User Name</h1>
  <h2>User Contact: </h2>
  </div>
  )
}

function Device(props){
  const {name,brand} = props
  return(
    <div>
    <h1>Device Name: {name}, Device Brand: {brand}</h1>
  </div>
  )
}

export default App;
