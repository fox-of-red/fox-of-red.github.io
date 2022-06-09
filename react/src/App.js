import { Counter } from './components/Couter';
import { Show } from './components/Show';
import { Input } from './components/input';
import './App.css';
// import { InputRef } from './components/InputRef';
import { SignUp } from './components/SignUp';
import { Todos } from './components/Todos';
import { Login } from './components/Login';
function App() {
  return (
    <>
    <Counter/>
    <Show/>
    <Input/>
    {/* <InputRef/> */}
    <SignUp/>
    <Todos/>
    <Login/>
    </>
  );
}

export default App;
