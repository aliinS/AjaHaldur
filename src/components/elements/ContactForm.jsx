import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, like sending the data to your server
    console.log(formData);
    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (

    <form onSubmit={handleSubmit}>
      <div className='text-textInLight mx-3 mb-8'>
        <div className="mb-4">
          <label htmlFor="name" className="block pb-1">Nimi:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-footer rounded focus:border-none w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-bgDark"
            placeholder="Nimi"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block pb-1">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className=" border  border-footer rounded focus:border-none w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-bgDark"
            placeholder="Teie email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block pb-1">Sõnum:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className=" border  border-footer rounded focus:border-none w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-bgDark h-20"
            placeholder="Küsimus või teade"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-footer hover:bg-bgDark hover:text-textInLight text-textInDark font-bold py-2 px-4 rounded-md"
        >
          Saada
        </button>
      </div>
    </form>
  );
}

export default ContactForm;