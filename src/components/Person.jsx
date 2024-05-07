
const Person = (props) => {
   const {name,age,city} = props;
    if(city==='Dhaka'){
        return <h2>This is from Tauhid</h2>
    }
    else{
        return <h2>This is not Tauhid. Please try again</h2>
    }
  
};

export default Person;