import {getDatabase, ref ,set} from 'firebase/database'
import {app} from './firebase'
import logo from './logo.svg';
import './App.css';

const db = getDatabase(app)
// const db = 'test'
function App() {

  const putData = () =>{
    set(ref(db, 'users/depanshu'), {
      username: 'Depanshu Sahu',
      email: 'depanshusahu057@gmail.com',
      profile_picture : 'imageUrlofDepanshu',
      message:'The web app has been deployed successfully'
    })
  }

  return (
    <div className="App">
      <h1>Press the button</h1>
      <button onClick={putData}>Click me</button>
    </div>
  );
}

export default App;
