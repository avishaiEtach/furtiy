import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/he";
import { TextFieldMui } from "../../TextFieldMui/TextFieldMui";
import { MenuItem, Select } from "@mui/material";
interface SignUpForm {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  postcode: string;
  streetName: string;
  streetNumber: string;
  city: string;
  state: string;
  country: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: "male" | "female" | "";
  date: string | null;
  [key: string]: string | null;
}

interface Filed {
  name: string;
  onChange: (ev: any) => void;
  required: boolean;
  placeholder: string;
  fullWidth: boolean;
  value: string | null;
  handleError: boolean;
  inputType: "text" | "select" | "date" | "password";
  [key: string]: boolean | ((ev: any) => void) | string | null;
}

interface error {
  postcode: boolean;
  streetNumber: boolean;
  email: boolean;
  confirmPassword: boolean;
  date: boolean;
  dateCheck: boolean;
  massage: string;
  [key: string]: string | boolean;
}

interface useSignUpUIProps {
  setSignUpForm: React.Dispatch<React.SetStateAction<SignUpForm>>;
  signUpForm: SignUpForm;
  error: error;
  setFocusDate: (value: boolean) => void;
  setError: React.Dispatch<React.SetStateAction<error>>;
  focusDate: boolean;
}

export const useSignUpUI = ({
  setSignUpForm,
  signUpForm,
  error,
  setFocusDate,
  setError,
  focusDate,
}: useSignUpUIProps) => {
  const onChange = (ev: any) => {
    const { name, value } = ev.target;
    setSignUpForm({ ...signUpForm, [name]: value });
  };

  const renderValue = (selected: "male" | "female") => {
    if (selected !== "male" && selected !== "female") {
      return (
        <>
          <span className="dynamic__placeholder__text">gender</span>
          <span className="dynamic__placeholder__icon">*</span>
        </>
      );
    } else {
      return selected;
    }
  };

  const onChangeDate = (newValue: dayjs.Dayjs | null) => {
    if (dayjs(newValue).isValid()) {
      setSignUpForm(
        (prev) =>
          (prev = {
            ...prev,
            ["date"]: dayjs(newValue).toISOString(),
          })
      );
    } else if (newValue === null) {
      setSignUpForm(
        (prev) =>
          (prev = {
            ...prev,
            ["date"]: null,
          })
      );
    }
  };

  const fields: (Filed | Filed[])[] = [
    [
      {
        name: "firstName",
        onChange: onChange,
        required: true,
        placeholder: "first name",
        fullWidth: true,
        value: signUpForm.firstName,
        handleError: false,
        inputType: "text",
      },
      {
        name: "lastName",
        onChange: onChange,
        required: true,
        placeholder: "last name",
        fullWidth: true,
        value: signUpForm.lastName,
        handleError: false,
        inputType: "text",
      },
    ],
    {
      name: "email",
      onChange: onChange,
      required: true,
      placeholder: "email",
      fullWidth: true,
      value: signUpForm.email,
      handleError: true,
      inputType: "text",
    },
    [
      {
        name: "gender",
        onChange: onChange,
        required: true,
        placeholder: "",
        fullWidth: false,
        value: signUpForm.gender,
        handleError: false,
        inputType: "select",
      },
      {
        name: "date",
        onChange: onChangeDate,
        required: true,
        placeholder: "",
        fullWidth: false,
        value: signUpForm.date,
        handleError: false,
        inputType: "date",
      },
    ],
    [
      {
        name: "password",
        onChange: onChange,
        required: true,
        placeholder: "password",
        fullWidth: false,
        value: signUpForm.password,
        handleError: false,
        inputType: "password",
      },
      {
        name: "confirmPassword",
        onChange: onChange,
        required: true,
        placeholder: "confirm password",
        fullWidth: false,
        value: signUpForm.confirmPassword,
        handleError: true,
        inputType: "password",
      },
    ],
    [
      {
        name: "phoneNumber",
        onChange: onChange,
        required: true,
        placeholder: "phone number",
        fullWidth: true,
        value: signUpForm.phoneNumber,
        handleError: false,
        inputType: "text",
      },
      {
        name: "postcode",
        onChange: onChange,
        required: true,
        placeholder: "postcode",
        fullWidth: true,
        value: signUpForm.postcode,
        handleError: true,
        inputType: "text",
      },
    ],
    [
      {
        name: "streetName",
        onChange: onChange,
        required: false,
        placeholder: "street name",
        fullWidth: true,
        value: signUpForm.streetName,
        handleError: false,
        inputType: "text",
      },
      {
        name: "streetNumber",
        onChange: onChange,
        required: false,
        placeholder: "street number",
        fullWidth: true,
        value: signUpForm.streetNumber,
        handleError: true,
        inputType: "text",
      },
    ],
    {
      name: "city",
      onChange: onChange,
      required: false,
      placeholder: "city",
      fullWidth: true,
      value: signUpForm.city,
      handleError: false,
      inputType: "text",
    },
    {
      name: "state",
      onChange: onChange,
      required: false,
      placeholder: "state",
      fullWidth: true,
      value: signUpForm.state,
      handleError: false,
      inputType: "text",
    },
    {
      name: "country",
      onChange: onChange,
      required: false,
      placeholder: "country",
      fullWidth: true,
      value: signUpForm.country,
      handleError: false,
      inputType: "text",
    },
  ];

  const lastDateOfLast20Year = (): Date => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const lastYear = currentYear - 20;
    const lastDate = new Date(lastYear, 11, 31);
    return lastDate;
  };

  const getFieldsToShow = (field: Filed, index: number) => {
    if (
      (field.inputType === "text" || field.inputType === "password") &&
      field.handleError
    ) {
      return (
        <div key={index} style={{ position: "relative" }}>
          <TextFieldMui
            externalValue={field.value as string}
            fullWidth={field.fullWidth}
            name={field.name}
            onChange={field.onChange}
            required={field.required}
            placeholder={field.placeholder}
            type={field.inputType}
          />
          <div
            className={`sign__up__form__error__massage ${
              error[field.name] ? "active" : ""
            }`}
          >
            {error.massage}
          </div>
        </div>
      );
    }
    if (field.inputType === "text" || field.inputType === "password") {
      return (
        <TextFieldMui
          key={index}
          externalValue={field.value as string}
          fullWidth={field.fullWidth}
          name={field.name}
          onChange={field.onChange}
          required={field.required}
          placeholder={field.placeholder}
          type={field.inputType}
        />
      );
    }
    if (field.inputType === "select") {
      return (
        <Select
          key={index}
          className="sign__up__details__select"
          required={field.required}
          name={field.name}
          value={field.value as "" | "male" | "female" | undefined}
          displayEmpty
          onChange={(ev) => {
            field.onChange(ev);
          }}
          renderValue={renderValue}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value={"female"}>Female</MenuItem>
          <MenuItem value={"male"}>Male</MenuItem>
        </Select>
      );
    }
    if (field.inputType === "date") {
      return (
        <LocalizationProvider
          key={index}
          dateAdapter={AdapterDayjs}
          adapterLocale="he"
        >
          <div
            onFocus={() => {
              setFocusDate(true);
            }}
            onBlur={() => {
              setFocusDate(false);
            }}
            className="sign__up__date__container"
          >
            <DatePicker
              className="sign__up__date__input__mui"
              name={"date"}
              maxDate={dayjs(lastDateOfLast20Year())}
              onError={(err) => {
                if (err === "invalidDate") {
                  setError({ ...error, dateCheck: true });
                }
              }}
              onChange={field.onChange}
              slotProps={{
                textField: {
                  placeholder: "",
                  required: field.required,
                },
              }}
              value={field.value ? dayjs(field.value) : null}
            />
            {!focusDate && !field.value && !error.dateCheck && (
              <div className="sign__up__placeholder__container">
                <span className="dynamic__placeholder__text">Day of birth</span>
                <span className="dynamic__placeholder__icon">*</span>
              </div>
            )}
            <div
              className={`sign__up__form__error__massage ${
                error[field.name] ? "active" : ""
              }`}
            >
              {error.massage}
            </div>
          </div>
        </LocalizationProvider>
      );
    }
  };

  const getFields = () => {
    return fields.map((item, index) => {
      if (Array.isArray(item)) {
        return (
          <div key={index} className="flex g20">
            {item.map((field, index) => getFieldsToShow(field, index))}
          </div>
        );
      } else {
        return getFieldsToShow(item, index);
      }
    });
  };

  return { getFields };
};
