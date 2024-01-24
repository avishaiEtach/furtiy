import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface TextFieldMuiProps {
  type?: "search" | "text" | "password" | "date";
  onChange?: (value: any) => void;
  withIcons?: boolean;
  icons?: any[];
  externalValue: string | number | undefined;
  required: boolean;
  placeholder: string | undefined;
}

export const useTextFieldMui = ({
  type,
  onChange,
  withIcons,
  icons,
  externalValue,
  required,
  placeholder,
}: TextFieldMuiProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const getRequiredPlaceholder = () => {
    return (
      <div
        className={
          externalValue !== ""
            ? `placeholder__none dynamic__placeholder ${
                withIcons ? "withIcons" : ""
              }`
            : `dynamic__placeholder ${withIcons ? "withIcons" : ""}`
        }
      >
        <span className="dynamic__placeholder__text">{placeholder}</span>
        {required ? (
          <span className="dynamic__placeholder__icon">*</span>
        ) : null}
      </div>
    );
  };

  const getInputProps = () => {
    let adornment = {
      endAdornment: <></>,
      startAdornment: <></>,
      placeholder: "",
    };
    if (withIcons) {
      adornment = {
        startAdornment: (
          <InputAdornment position="start">
            {icons?.map((icon, index) =>
              React.cloneElement(icon, { key: index })
            )}
          </InputAdornment>
        ),
        endAdornment: <></>,
        placeholder: "",
      };
    }

    if (type === "search") {
      adornment = {
        ...adornment,
        endAdornment: (
          <InputAdornment className="input__adornment" position="end">
            <IconButton edge="end">
              <FiSearch className="input__adornment_icon" />
            </IconButton>
          </InputAdornment>
        ),
        placeholder: "Search...",
      };
    }

    if (type === "password") {
      adornment = {
        ...adornment,
        endAdornment: (
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        ),
      };
    }
    adornment = {
      ...adornment,
      endAdornment: (
        <>
          {getRequiredPlaceholder()}
          {adornment.endAdornment}
        </>
      ),
    };

    return adornment;
  };

  const changeValue = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (onChange) {
      onChange(ev);
    }
  };

  return { getInputProps, changeValue, showPassword };
};
