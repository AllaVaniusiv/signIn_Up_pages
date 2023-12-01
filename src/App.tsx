import React, { useState } from 'react';
import './App.css';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

function App() {
  const [currentForm, setCurrentForm] = useState<string>('login');

  const toggleForm = (formName: string) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      {
        currentForm === "login" ? <SignIn  onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
