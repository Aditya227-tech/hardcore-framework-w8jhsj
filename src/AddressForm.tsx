import React from "react";
import FormWrapper from "./FormWrapper";

type UserData = {
  street: string;
  qualification: string;
  state: string;
  languages: string;
};

type AddressFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const AddressForm = ({
  street,
  qualification,
  state,
  languages,
  updateFields,
}: AddressFormProps) => {
  return (
    <FormWrapper title="User Information">
      <label>Class</label>
      <input
        autoFocus
        required
        type="text"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
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
          }}
        />
      </label>
      <label>Educational Qualitifications of Parents</label>
      <input
        required
        type="text"
        value={qualification}
        onChange={(e) => updateFields({ qualification: e.target.value })}
      />
      <label>State</label>
      <input
        required
        type="text"
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <label>Spoken Languages</label>
      <input
        required
        type="text"
        value={languages}
        onChange={(e) => updateFields({ languages: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AddressForm;
