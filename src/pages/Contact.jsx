import { useState } from 'react';
import { validateEmail } from '../utils/helpers.js';

const [email, setEmail] = useState('');
const [name, setName] = useState('');
const [text, setText] = useState('');

const handleInputChange = (e) => {
  const { target } = e;
  const inputType = target.name;
  const inputValue = target.value;

  if (inputType === 'email') {
    setEmail(inputValue);
  } else if (inputType === 'name') {
    setName(inputValue);
  } else if (inputType === 'text') {
    setText(inputValue);
  }
};


export default function ContactPage() {
    return (
      <div className="container pt-4">

        <h1 className="title">Contact Me</h1>

        <div className="cf-container">

          <h2>I am best reached through email or phone call!</h2>
          <h3>matthew@mmroberts.com • 925-350-1818 • mmroberts.com</h3>

          <input id="name">
          </input>

          <input id="email">
          </input>

          <input id="text">
          </input>

          <button>
            Submit!
          </button>

        </div>


      </div>
    );
  }