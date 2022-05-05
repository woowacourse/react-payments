import React from "react";
import styled from "styled-components";

export const Form = ({ children }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = e.target;

    console.log(formData.elements);
    for (let element of formData.elements) {
      console.log(element);
    }

    handleInputFocus(e);
  };

  const handleInputFocus = (e) => {
    console.log(e);
  };

  return (
    <FormStyle onSubmit={handleFormSubmit} onKeyDown={handleInputFocus}>
      {children}
    </FormStyle>
  );
};

const FormStyle = styled.form``;
