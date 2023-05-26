import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';


const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
  <div className='container_form'>
    <form onSubmit={handleSubmit((data) => console.log(data))} className='myform'>
      <input {...register('firstName')}  placeholder='Фамилия' className='myinput'/>
      <input {...register('lastName', { required: true })} placeholder='Имя' className='myinput'/>
      <input {...register('firstName')}  placeholder='Отчество' className='myinput'/>
      <input {...register('age', { pattern: /\d+/ })}  placeholder='Email' className='myinput'/>
      <Button variant="outline-primary">Отправить</Button>
      {errors.lastName && <p>Last name is required.</p>}
      {errors.age && <p>Please enter number for age.</p>}
    </form>
  </div>

  );
}

export default Form