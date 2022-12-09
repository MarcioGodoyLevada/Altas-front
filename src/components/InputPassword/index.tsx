import { useState } from 'react';
import InputText, { InputTextProps } from '../InputText';
import { IconEye, IconEyeOff } from '../Icons';

const InputPassword = ({
  name,
  placeholder,
  value,
  label,
  errorMessage,
  className,
  type = 'password',
  ...props
}: InputTextProps) => {
  const [showPassword, setShowPassword] = useState(type);

  return (
    <InputText
      className={className}
      name={name}
      label={label}
      icon={showPassword === 'password' ? <IconEye /> : <IconEyeOff />}
      type={showPassword}
      iconClick={() => {
        showPassword === 'password'
          ? setShowPassword('text')
          : setShowPassword('password');
      }}
      value={value}
      placeholder={placeholder}
      errorMessage={errorMessage}
      {...(label ? { id: name } : {})}
      {...props}
    />
  );
};

export default InputPassword;
