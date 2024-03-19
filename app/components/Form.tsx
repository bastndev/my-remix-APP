import { Form, useNavigate } from '@remix-run/react';

export default function ContactForm({ error }: { error: string }) {
  return (
    <Form method='post' className='flex flex-col'>
      <TextField
        label='Name:'
        placeholder='Name please'
        name='name'
      />
      <TextField
        label='Email:'
        placeholder='Email please'
        name='email'
        error={error}
      />
      <TextField
        label='Message here:'
        placeholder='Rite a message'
        name='message'
        type='textarea'
      />

      <Button to="/some/path">Submit</Button>
    </Form>
  );
}

const TextField = ({
  name,
  placeholder,
  type = 'text',
  label,
  error,
}: {
  name: string;
  placeholder?: string;
  type?: string;
  label: string;
  error?: string;
}) => {
  return (
    <>
      <label className='text-lg mb-4' htmlFor='name'>
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          className='border border-blue-500 px-4 py-2 text-lg text-slate-700 rounded-md mb-8'
          placeholder={placeholder}
          name={name}
          id={name}
          cols={30}
          rows={10}
        ></textarea>
      ) : (
        <input
          className='border border-blue-500 px-4 py-2 text-lg text-slate-700 rounded-md mb-8'
          type={type}
          name={name}
          placeholder={placeholder}
          id={name}
        />
      )}
      {error && <p className='text-red-500 text-lg'>{error}</p>}
    </>
  );
};

const Button = ({ children, to }: { children: React.ReactNode, to: string }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button 
      className="py-2 px-4 bg-orange-500 text-white rounded-full font-semibold my-3 hover:bg-blue-600 transition-all duration-300 ease-in-out active:scale-95"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};