import React from 'react'
import './App.css';
import ProfileComponent from './profile/profileComponent'
import imgg from './developer.jpg'


const haykel={
  FullName : "ZIED JLIDI",
  Bio : "Goding !!",
  Profession : "jobless"
};

function App() {
  const handleName = (name) => {
    alert(`this is ${name} portfolio`)
  }
  return (
    <div className="App">
      <ProfileComponent FullName={haykel.FullName} Bio={haykel.Bio} Profession={haykel.Profession} handleName={handleName} >
         <div>
         <img src={imgg} />
         </div>
          </ProfileComponent>
      </div>
  );
}


export default App;


