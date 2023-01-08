import { useState } from "react";
import FormInput from "./components/FormInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthday: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      label: "Name",
      errorMessage:
        "username should be 3 - 16 characters and should include any character",
        required: true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      label: "Email",
      errorMessage: "it should be a valid email address",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "password",
      label: "password",
      errorMessage:
        "password should be 8 - 16 character and it should be 1, letters, 1 number, 1 special character",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8, 20}`,
    },
    {
      id: 5,
      name: "text",
      type: "text",
      placeholder: "Confirm Password",
      label: "Confirm Password",
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
    <div className="grid place-items-center w-full h-screen bg-yellow ">
      <h1 className="text-center">Register</h1>
      <form
        className="w-full max-w-[400px] mx-[10px] bg-gray-light py-2 h-auto flex flex-col rounded-lg"
        onSubmit={handleSubmit}
      >
        {inputs.length &&
          inputs?.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
        <button className=" text-sm bg-orange w-[100px] m-auto px-[15px] py-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
