// options tiene esta pinta

// [{ label: 'foo', value: 'foo' }]

const Select = ({ name, id, onChange, value, options, error, disabled = false }) => {
  return (
    <select
      className={`form-select ${error ? 'is-invalid' : ''}`}
      name={name}
      onChange={onChange}
      value={value}
      id={id}
      disabled={disabled}
    >
      <option value="">Pick a value</option>
      {options.map(option=> (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  )
}

export default Select;