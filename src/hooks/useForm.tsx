import { useState } from 'react';

export const useForm = <T extends Object>(fieldsForm: T) => {

  const [form, setForm] = useState(fieldsForm);
  const onChange = (value: string, field: keyof T) =>
    setForm(prevForm => ({
      ...prevForm,
      [field]: value
    }));
  return {
    ...form,
    onChange, form
  };
};
