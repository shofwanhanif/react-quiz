import { useState } from 'react';
import Modal from './Modal';
import { cssForm } from './style';

const Test8 = () => {
  const [form, setForm] = useState({
    name: '',
    age: '',
    address: ''
  })
  const [showModal, setShowModal] = useState(false)

  // ONLY ONE HANDLE METHOD ALLOWED
  const handleInput = (e) => {
    const formName = e.target.name
    const value = e.target.value
    
    setForm({ ...form, [formName]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  const handleReset = () => {
    setForm({
      name: '',
      age: '',
      address: ''
    })
    setShowModal(false)
  }

  return(
    <div>
      <ul>
        <li>User can input the form - only 1 handle method is allowed</li>
        <li>When submit display the modal</li>
        <li>Show the form value inside the modal</li>
        <li>Reset the form and close the modal when user click the reset button</li>
      </ul>
      <form className={cssForm} onSubmit={handleSubmit}>
        <input type="text" placeholder="name" name='name' value={form.name} onChange={handleInput}/>
        <input type="text" placeholder="age" name='age' value={form.age} onChange={handleInput}/>
        <textarea type="text" placeholder="address" name='address' value={form.address} onChange={handleInput}/>
        <button>Submit</button>
      </form>
      { showModal && <Modal form={form} onReset={handleReset}/> }
      
    </div>
  )
}

export default Test8;