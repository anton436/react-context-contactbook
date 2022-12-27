import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { contactsContext } from '../../ContactsContextProvider';

function ContactCard({ name, lastName, phone, id }) {
  const navigate = useNavigate();
  const { deleteContact } = useContext(contactsContext);
  return (
    <Card
      style={{
        width: '18rem',
        margin: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Card.Body>
        <Card.Title>Name : {name}</Card.Title>
        <Card.Title>Last Name : {lastName}</Card.Title>
        <Button variant='warning'> {phone} </Button>
      </Card.Body>

      <Card.Body>
        <Button
          onClick={() => deleteContact(id)}
          className='mx-3'
          variant='danger'
        >
          Delete
        </Button>
        <Button
          onClick={() => navigate(`/edit/${id}`)}
          className='mx-3'
          variant='success'
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
