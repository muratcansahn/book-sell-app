import { useState } from "react";
import { FormInput } from ".";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Form = ({ products }) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    city: "",
    postalcode: "",
  });
  console.log(products.length);
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const notify = () => toast.success("Order Received");

  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      label: "First Name",
      errorMessage:
        "Firstname is should be 3-16 characters and should not include any special characters",
      required: true,
      pattern: "^[a-zA-Z0-9]{3,16}$", // 3-16 characters, no special characters
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      label: "Last Name",
      required: true,
      errorMessage:
        "Last name is should be 5-16 characters and should not include any special characters",
      pattern: "^[a-zA-Z0-9]{5,16}$", // 5-16 characters, no special characters
    },
    {
      id: 3,
      name: "city",
      type: "text",
      placeholder: "City",
      label: "City",
      required: true,
      errorMessage: "City is cannot contain numbers",
      pattern: "^[^0-9]+$", // no numbers
    },

    {
      id: 4,
      name: "postalcode",
      type: "text",
      placeholder: "Postal Code",
      label: "Postal Code",
      required: true,
      errorMessage: "Postal code must be XX-XXX format",
      pattern: "^[0-9]{2}-[0-9]{3}$", // XX-XXX format
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/order   ", {
        first_name: values.firstName,
        last_name: values.lastName,
        city: values.city,
        zip_code: values.postalcode,
        order: [
          {
            id: products[0].id,
            quantity: products.length,
          },
        ],
      })
      .then((res) => console.log(res.data));
    setValues({
      firstName: "",
      lastName: "",
      city: "",
      postalcode: "",
    });
    notify();
  };
  return (
    <form class="justify-center w-full mx-auto" method="post" action>
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
        />

        // <div class="flex flex-col">
        //   <div>
        //     <label
        //       class="block text-gray-700 text-sm font-bold mb-2"
        //       for={input.name}
        //     >
        //       {input.label}
        //     </label>
        //     <input
        //       {...input}
        //       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight peer"
        //       id={input.id}
        //       type={input.type}
        //       name={input.name}
        //       placeholder={input.placeholder}
        //       onChange={onChange}
        //       value={values[input.name]}
        //       required={input.required}
        //       onBlur={handleFocus}
        //       pattern={input.pattern}
        //     />
        //   </div>
        //   {focused && (
        //     <div class="text-red-500 text-xs italic">{input.errorMessage}</div>
        //   )}
        // </div>
      ))}
      <div class="mt-5 text-center">
        <button
          class="w-1/2 px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900 "
          onClick={handleSubmit}
        >
          Process
        </button>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </form>
  );
};

export default Form;
