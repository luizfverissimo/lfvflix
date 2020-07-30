import React from 'react';
import PropTypes from 'prop-types';

const FormField = ({
  label, value, onChange, type, name, textArea,
}) => {
  const fieldId = `id_${name}`;
  return (
    <div>
      <label htmlFor={fieldId}>
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
      </label>
    </div>
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
