function Form() {
  return (
    <div className="form-container">
      <h2>Contact Form</h2>

      <form>
        <input
          type="text"
          placeholder="Enter your name"
        />

        <input
          type="email"
          placeholder="Enter your email"
        />

        <textarea
          placeholder="Enter your message"
          rows="4"
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
