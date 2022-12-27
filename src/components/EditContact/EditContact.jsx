import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { contactsContext } from '../../ContactsContextProvider';

const EditContact = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();
  const { oneContactInfo, getOneContactInfo, updateContactInfo } =
    useContext(contactsContext);

  const { id } = useParams();

  useEffect(() => {
    getOneContactInfo(id);
  }, []);

  useEffect(() => {
    if (oneContactInfo) {
      setName(oneContactInfo.name);
      setLastName(oneContactInfo.lastName);
      setPhone(oneContactInfo.phone);
    }
  }, [oneContactInfo]);

  const handleValues = () => {
    const editedContact = {
      name,
      lastName,
      phone,
    };

    if (!name.trim() || !lastName.trim() || !phone.trim()) {
      alert('заполните поля');
      return;
    }
    updateContactInfo(id, editedContact);
  };

  return (
    <div className='container d-flex flex-column mt-5 align-items-center'>
      <h1>EDIT CONTACT</h1>
      <Form.Control
        onChange={(e) => setName(e.target.value)}
        className='mb-2 w-50'
        placeholder='name'
        value={name}
      />
      <Form.Control
        onChange={(e) => setLastName(e.target.value)}
        className='mb-2 w-50'
        placeholder='lastName'
        value={lastName}
      />
      <Form.Control
        onChange={(e) => setPhone(e.target.value)}
        className='mb-2 w-50'
        placeholder='phone'
        type='number'
        value={phone}
      />
      <Button
        onClick={() => {
          handleValues();
          navigate('/');
        }}
        className='w-50'
        variant='dark'
      >
        save changes
      </Button>
    </div>
  );
};

export default EditContact;
