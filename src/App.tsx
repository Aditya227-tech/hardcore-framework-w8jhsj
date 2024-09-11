import { FormEvent, useState } from "react";
import AccountForm from "./AccountForm";
import AddressForm from "./AddressForm";
import UserForm from "./UserForm";
import { useMultiStepForm } from "./useMultistepForm";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  qualification: string;
  state: string;
  languages: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  qualification: "",
  state: "",
  languages: "",
  email: "",
  password: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultiStepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (!isLastStep) return next();
    alert("Account created successfully");
  }

  return (
    <div
      style={{
        position: "relative",
        background: "#e1dde1",
        border: "1px solid #2509dbce",
        color: "#0c0c0c",
        padding: "1rem",
        borderRadius: "0.5rem",
        maxWidth: "80%" /* Adjust the max-width as needed */,
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "grid",
            gap: "0.5rem",
            justifyContent: "flex-right",
            gridTemplateColumns: "auto minmax(auto, 880px)",
          }}
        >
          {!isFirstStep && (
            <button
              type="button"
              onClick={back}
              style={{
                backgroundColor: "#f2f2f2",
                color: "#f70c0c",
                border: "1px solid #ccc",
                padding: "10px 15px",
                borderRadius: "10px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Back
            </button>
          )}
          <button
            type="submit"
            style={{
              backgroundColor: "#007bff",
              color: "#0c0c0c",
              border: "none",
              padding: "10px 15px",
              borderRadius: "15px",
              cursor: "pointer",
            }}
          >
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
