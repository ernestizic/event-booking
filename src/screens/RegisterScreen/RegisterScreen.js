import React, {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import Input from 'react-phone-number-input/input';
import 'react-phone-number-input/style.css';
import { QrCodeContext } from '../../contexts/QrCodeContext';
import { RegisterScreenForm, RegisterScreenContainer } from './RegisterScreen.styled';

const RegisterScreen = () => {
  const {getUserDetailsFromForm} = useContext(QrCodeContext)

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [gender, setGender] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")

  const [nameErr, setNameErr] = useState('')
  const [emailErr, setEmailErr] = useState('')
  const [phoneErr, setPhoneErr] = useState('')
  const [dateErr, setDateErr] = useState('')

  const navigate = useNavigate()

  const handleSubmit =(e)=> {
    e.preventDefault()

    // Check if form field is empty
    if(!fullName){
      setNameErr('Field cannot be empty')
      return
    } else{
      setNameErr('')
    }
    if(!email){
      setEmailErr('Field cannot be empty')
      return
    }else{
      setEmailErr('')
    }
    if(!phone){
      setPhoneErr('Field cannot be empty')
      return
    } else{
      setPhoneErr('')
    }
    if(!dateOfBirth){
      setDateErr('Field cannot be empty')
      return
    } else{
      setDateErr('')
    }

    navigate('/ticket')

    const userDetails = {
      name: fullName,
      email: email,
      phone: phone,
      gender: gender,
      date: dateOfBirth
    }
    
    getUserDetailsFromForm(userDetails)

  }

	return (
    <RegisterScreenContainer>
    <button className='go-back' onClick={()=> navigate(-1)}>Go Back</button>
    
		<RegisterScreenForm>
			<h2>Reserve a Seat</h2>
			<form onSubmit={handleSubmit}>
				<input
					type='name'
					placeholder='Fullname'
          value={fullName}
					onChange={(e) => setFullName(e.target.value)}
          // required
				/>
        {nameErr && <p className='error'>{nameErr}</p>} 

				<input
					type='email'
					placeholder='Email'
          value={email}
					onChange={(e) => setEmail(e.target.value)}
          // required
				/>
        {emailErr && <p className='error'>{emailErr}</p>} 

        <label htmlFor='tel'>
          Phone number <span className='required'>*</span>
        </label>
        <Input
          maxLength='18'
          international
          country='NG'
          withCountryCallingCode
          value={phone}
          onChange={setPhone}
          rules={{ required: true }}
        />
        {phoneErr && <p className='error'>{phoneErr}</p>} 

        <label htmlFor="gender">Gender<span className='required'>*</span></label> <br />
        <select value={gender} onChange={(e)=> setGender(e.target.value)}>
          <option disabled defaultValue>Gender</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </select> <br/>

        <label htmlFor="date of birth">Date Of Birth<span className='required'>*</span></label> <br />
				<input
					type='date'
					placeholder='Date of Birth'
					onChange={(e) => setDateOfBirth(e.target.value)}
          // required
				/>
        {dateErr && <p className='error'>{dateErr}</p>} 

				<button type='submit'>Submit</button>
			</form>
		</RegisterScreenForm>
    </RegisterScreenContainer>
	);
};

export default RegisterScreen;
