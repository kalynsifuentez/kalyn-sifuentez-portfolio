function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { input, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return input === "inquiry" ? setName(value) : setEmail(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Message sent!`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container text-center">
      {" "}
      <h1>Contact Page</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Contact;
