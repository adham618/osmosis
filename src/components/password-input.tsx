'use client'

import * as React from 'react'
import { useState } from 'react'

interface PasswordInputProps {
  placeholder: string
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  className?: string
}

export function PasswordInput({
  placeholder,
  name,
  value,
  onChange,
  required = false,
  className = ''
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <span className="password-field-show">
      <input
        className={`password-field input-checkmark ${className}`}
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className={`fa fa-fw ${showPassword ? 'fa-eye-slash' : 'fa-eye'} field-icon toggle-password`}
        style={{
          cursor: 'pointer',
          background: 'none',
          border: 'none',
          padding: '0'
        }}
      />
    </span>
  )
}
