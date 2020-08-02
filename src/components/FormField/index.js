import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormFieldWrapper = styled.input`

`;

const Label = styled.label`

`;

const FormField = ({
  label, value, onChange, type, name, textArea,
}) => {
  const fieldId = `id_${name}`;
  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        {label}
        {textArea ? (
          <textarea
            id={fieldId}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
          />
        ) : (
          <input
            id={fieldId}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
          />
        )}
      </Label>
    </FormFieldWrapper>
  );
};

FormField.defaultProps = {
  type: 'text',
  value: '',
  textArea: false,
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  textArea: PropTypes.bool,
};

export default FormField;
