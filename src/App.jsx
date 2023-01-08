import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    birthday: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      label: "password",
      errorMessage:
        "uesrname should be 3 - 16 characters and should include any character",
    },
    {
      id: 2,
      name: "username",
      type: "email",
      placeholder: "email",
      label: "email",
      errorMessage: "it should be a valid email address",
      required: true,
    },
    {
      id: 3,
      name: "username",
      type: "date",
      placeholder: "username",
      label: "Birthday",
      errorMessage: "",
    },
    {
      id: 4,
      name: "Password",
      type: "password",
      placeholder: "password",
      label: "password",
      errorMessage:
        "password should be 8 - 16 character and it should be 1, letters, 1 number, 1 special character",
      required: true,
      pattern: " ^(?=.*d)(?=.*[a-zA-Z])(?=.*[W_]).{3,}$",
    },
    {
      id: 5,
      name: "username",
      type: "text",
      placeholder: "username",
      label: "password",
      errorMessage: "password dont match",
      pattern: values.password,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  const onChange = (e) =>
    setValues({ ...values, [e.target.name]: [e.target.value] });

  return (
    <div className="App">
      <h1>Register</h1>
      <form className="w-[500px] bg-sky-500" onSubmit={handleSubmit}>
        {inputs.length
          ? inputs?.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))
          : null}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
