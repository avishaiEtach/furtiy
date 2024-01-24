import React, { useEffect, useRef } from "react";
import TextField, { TextFieldVariants } from "@mui/material/TextField";
import { useTextFieldMui } from "./hook/useTextFieldMui";
import "./TextFieldMui.scss";

interface TextFieldMuiProps {
  type?: "search" | "text" | "password" | "date";
  placeholder?: string;
  className?: string;
  variant?: TextFieldVariants;
  externalValue?: string | number;
  onChange?: (value: any) => void;
  externalSetValue?: (value: string) => void;
  name?: string;
  label?: string;
  withBorder?: boolean;
  multiline?: boolean;
  rows?: string | number;
  fullWidth?: boolean;
  withIcons?: boolean;
  icons?: any[];
  onKeyDown?: (value: any) => void;
  autoFocus?: boolean;
  refs?: any;
  InputProps?: any;
  required?: boolean;
}

export const TextFieldMui = ({
  type = "text",
  className = "",
  variant,
  placeholder,
  externalValue,
  onChange,
  name,
  label,
  withBorder = false,
  multiline,
  rows,
  fullWidth,
  withIcons = false,
  icons = [],
  autoFocus,
  onKeyDown,
  refs,
  InputProps,
  required = false,
}: TextFieldMuiProps) => {
  const { getInputProps, changeValue, showPassword } = useTextFieldMui({
    type,
    onChange,
    withIcons,
    icons,
    externalValue,
    required,
    placeholder,
  });

  const ref = useRef<any>(null);

  useEffect(() => {
    if (refs) {
      refs.current = ref.current;
    }
  }, [ref]);

  return (
    <TextField
      // placeholder={
      //   placeholder ? `${placeholder} ${required ? "*" : ""}` : undefined
      // }
      variant={variant}
      className={`${className} input__mui input__${type} ${
        withBorder ? "withBorder" : ""
      }`}
      InputProps={InputProps ?? getInputProps()}
      value={externalValue ?? undefined}
      onChange={changeValue}
      name={name ?? undefined}
      label={label ?? undefined}
      multiline={multiline ?? undefined}
      rows={rows ?? undefined}
      maxRows={rows ?? undefined}
      type={
        type === "search"
          ? undefined
          : type === "password"
          ? showPassword
            ? "text"
            : "password"
          : type
      }
      fullWidth={fullWidth ?? undefined}
      onKeyDown={onKeyDown ?? undefined}
      autoFocus={autoFocus ?? undefined}
      ref={ref ?? undefined}
      required={required ?? undefined}
    />
  );
};
