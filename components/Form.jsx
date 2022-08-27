import { useState } from "react";
import { FormInput } from ".";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";

const Form = ({ products }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    city: "",
    postalcode: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

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

  const isFirstNameValid = (value) => {
    const regex = /^[a-zA-Z0-9]{3,16}$/;
    return regex.test(value);
  };
  const isLastNameValid = (value) => {
    const regex = /^[a-zA-Z0-9]{5,16}$/;
    return regex.test(value);
  };
  const isCityValid = (value) => {
    const regex = /^[^0-9]+$/;
    return regex.test(value);
  };
  const isPostalCodeValid = (value) => {
    const regex = /^[0-9]{2}-[0-9]{3}$/;
    return regex.test(value);
  };

  const isFormValid = () => {
    return isFirstNameValid(values.firstName) &&
      isLastNameValid(values.lastName) &&
      isCityValid(values.city) &&
      isPostalCodeValid(values.postalcode)
      ? true
      : false;
  };
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
    dispatch(reset());

    router.push("/success");
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
      ))}
      <div class="mt-5 text-center">
        <button
          disabled={!isFormValid()}
          class="w-1/2 px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900 "
          onClick={handleSubmit}
        >
          Process
        </button>
      </div>
    </form>
  );
};

export default Form;
