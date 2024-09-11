import React from "react";
import FormWrapper from "./FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const UserForm = ({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) => {
  return (
    <FormWrapper title=" ">
      <label>
        <img
          src="https://ci3.googleusercontent.com/mail-sig/AIorK4y17fjEIx7dmGWGmd9lObP79l4DGwkLpEppJ9CuEPQZnF5vZ67Dva7vtnnjoGgiNl4rdGfS7ShOtjZ7"
          alt="Your Logo"
          style={{
            width: "150px",
            height: "auto",
            marginBottom: "20px",
          }}
        />
      </label>
      <label
        style={{ fontFamily: "Arial", fontSize: "18px", fontStyle: "italic" }}
      >
        Welcome To Sign Up Page!!!{"         "}
      </label>

      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />

      <label>
        <img
          src="https://img.freepik.com/premium-photo/geometry-minimalistic-artwork-poster-with-simple-shape-figure_839035-731655.jpg"
          alt="Image"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-20%, -50%)",
            width: "500px",
            height: "450px",
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
            gridTemplateColumns: "1 fr",
            gridTemplateRows: "1 fr",
            gridColumn: "1/2",
            gridRow: "1/2",
            objectPosition: "center",
            borderRadius: "20px",
            minHeight: "10vh",
          }}
        />
      </label>
      <label>Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label>Age</label>
      <input
        required
        min={1}
        type="number"
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  );
};

export default UserForm;
