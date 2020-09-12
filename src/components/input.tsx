import React from "react"

interface InputRowProps {
  label: string
}

export const InputRow: React.FC<InputRowProps> = ({ label, children }) => (
  <div className="input-box">
    <label htmlFor={label}>
      {label}
    </label>
    {children}
  </div>
)

export default InputRow
