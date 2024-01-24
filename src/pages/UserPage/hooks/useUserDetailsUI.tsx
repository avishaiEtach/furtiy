import { IconButton, MenuItem, Select, Tooltip } from "@mui/material";
import { getDate } from "../../../assets/util";
import UndoIcon from "@mui/icons-material/Undo";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SaveIcon from "@mui/icons-material/Save";
import "dayjs/locale/he";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { TextFieldMui } from "../../../components/TextFieldMui/TextFieldMui";
import { ClassNames } from "@emotion/react";

type UserDetailsForm = {
  phone: {
    value: string;
    chosen: boolean;
    label: string;
    inputName: string;
    inputType: string;
    canDelete: boolean;
  };
  email: {
    value: string;
    chosen: boolean;
    label: string;
    inputName: string;
    inputType: string;
    canDelete: boolean;
  };
  dob: {
    value: string;
    chosen: boolean;
    label: string;
    inputName: string;
    inputType: string;
    canDelete: boolean;
  };
  gender: {
    value: "female" | "male";
    chosen: boolean;
    label: string;
    inputName: string;
    inputType: string;
    canDelete: boolean;
  };
  streetNumber: {
    value: number;
    chosen: boolean;
    label: string;
    inputName: string;
    inputType: string;
    canDelete: boolean;
  };
  streetName: {
    value: string;
    chosen: boolean;
    label: string;
    inputName: string;
    inputType: string;
    canDelete: boolean;
  };
  city: {
    value: string;
    chosen: boolean;
    label: string;
    inputName: string;
    inputType: string;
    canDelete: boolean;
  };
  country: {
    value: string;
    chosen: boolean;
    label: string;
    inputName: string;
    inputType: string;
    canDelete: boolean;
  };
  state: {
    value: string;
    chosen: boolean;
    label: string;
    inputName: string;
    inputType: string;
    canDelete: boolean;
  };
  postcode: {
    value: number;
    chosen: boolean;
    label: string;
    inputName: string;
    inputType: string;
    canDelete: boolean;
  };
  chosenFiled: {
    value: string;
    chosen: boolean;
    label: string;
    inputName: string;
    inputType: string;
    canDelete: boolean;
  };
  [key: string]: {
    value: string | number;
    chosen: boolean;
    label: string;
    inputName: string;
    inputType: string;
    canDelete: boolean;
  }; // Index signature
};
type useUserDetailsUIParamsType = {
  userDetailsForm: UserDetailsForm;
  buttonRef: any;
  setUserDetailsForm: React.Dispatch<React.SetStateAction<UserDetailsForm>>;
  userDetailsFormCopy: UserDetailsForm;
  hasValueChanged: (
    current: UserDetailsForm,
    prev?: UserDetailsForm
  ) => boolean;
  inputRef: any;
  setOpenPicker: React.Dispatch<React.SetStateAction<boolean>>;
  disabled: boolean;
  loading: { save: boolean; Delete: boolean };
  submit: (ev: any, type: "save" | "Delete" | "logout") => Promise<void>;
};

export const useUserDetailsUI = (params: useUserDetailsUIParamsType) => {
  const {
    setUserDetailsForm,
    hasValueChanged,
    userDetailsForm,
    userDetailsFormCopy,
    buttonRef,
    inputRef,
    setOpenPicker,
  } = params;

  const onChange = (ev?: any, inputName?: string, newValue?: any) => {
    if (newValue && inputName) {
      setUserDetailsForm(
        (prev) =>
          (prev = {
            ...prev,
            [inputName]: {
              ...prev[inputName],
              value: dayjs(newValue).millisecond(0).toISOString(),
            },
          })
      );
      hasValueChanged(
        {
          ...userDetailsForm,
          [inputName]: {
            ...userDetailsForm[inputName],
            value: dayjs(newValue).millisecond(0).toISOString(),
          },
        },
        userDetailsFormCopy
      );
    } else {
      const { name, value } = ev.target;
      setUserDetailsForm(
        (prev) =>
          (prev = {
            ...prev,
            [name]: { ...prev[name], value: value },
          })
      );
      hasValueChanged(
        {
          ...userDetailsForm,
          [name]: { ...userDetailsForm[name], value: value },
        },
        userDetailsFormCopy
      );
    }
  };

  const onDoubleClick = (inputName: string) => {
    setUserDetailsForm(
      (prev) =>
        (prev = {
          ...prev,
          [inputName]: { ...prev[inputName], chosen: true },
          chosenFiled: { ...prev["chosenFiled"], value: inputName },
        })
    );
  };

  const onKeyDown = (ev: any, inputName: string) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
      hasValueChanged(userDetailsForm, userDetailsFormCopy);
      setUserDetailsForm(
        (prev) =>
          (prev = {
            ...prev,
            [inputName]: { ...prev[inputName], chosen: false },
            chosenFiled: { ...prev["chosenFiled"], value: "" },
          })
      );
    }
  };

  const getDetailsToShow = (
    key: string,
    inputName: string,
    canDelete: boolean
  ) => {
    if (
      userDetailsForm[key].chosen &&
      userDetailsForm.chosenFiled.value === inputName
    ) {
      const { inputName, inputType, value } = userDetailsForm[key];

      return (
        <div className="flex g20">
          {handleUserDetails(inputType, inputName, value)}
          <div className="flex g10">
            <div>
              <IconButton
                ref={(element) => {
                  const item = buttonRef.current.find(
                    (ref: any) => ref === element
                  );
                  if (!item && element) {
                    buttonRef.current.push(element);
                  }
                  return undefined;
                }}
                onClick={(ev) => {
                  setUserDetailsForm(
                    (prev) =>
                      (prev = {
                        ...prev,
                        [inputName]: {
                          ...prev[inputName],
                          value: userDetailsFormCopy[inputName].value,
                        },
                      })
                  );
                  hasValueChanged(
                    {
                      ...userDetailsForm,
                      [inputName]: {
                        ...userDetailsFormCopy[inputName],
                        value: userDetailsFormCopy[inputName].value,
                      },
                    },
                    userDetailsFormCopy
                  );
                }}
              >
                <Tooltip title="Undo Row">
                  <UndoIcon />
                </Tooltip>
              </IconButton>
            </div>
            {canDelete && (
              <div>
                <IconButton
                  ref={(element) => {
                    const item = buttonRef.current.find(
                      (ref: any) => ref === element
                    );
                    if (!item && element) {
                      buttonRef.current.push(element);
                    }
                    return undefined;
                  }}
                  onClick={(ev) => {
                    ev.stopPropagation();
                    let userDetailsFormCopyForDealate = userDetailsForm;
                    delete userDetailsFormCopyForDealate[inputName];
                    setUserDetailsForm({ ...userDetailsFormCopyForDealate });
                    hasValueChanged(userDetailsForm, userDetailsFormCopy);
                  }}
                >
                  <Tooltip title="Delete Row">
                    <DeleteForeverIcon />
                  </Tooltip>
                </IconButton>
              </div>
            )}
            <div>
              <IconButton
                ref={(element) => {
                  const item = buttonRef.current.find(
                    (ref: any) => ref === element
                  );
                  if (!item && element) {
                    buttonRef.current.push(element);
                  }
                  return undefined;
                }}
                onClick={(ev) => {
                  ev.stopPropagation();
                  hasValueChanged(userDetailsForm, userDetailsFormCopy);
                  setUserDetailsForm(
                    (prev) =>
                      (prev = {
                        ...prev,
                        [inputName]: { ...prev[inputName], chosen: false },
                        chosenFiled: { ...prev["chosenFiled"], value: "" },
                      })
                  );
                }}
              >
                <Tooltip title="Save Row">
                  <SaveIcon />
                </Tooltip>
              </IconButton>
            </div>
          </div>
        </div>
      );
    } else {
      return key === "dob"
        ? getDate(new Date(userDetailsForm[key].value))
        : userDetailsForm[key].value === ""
        ? "-"
        : userDetailsForm[key].value === 0
        ? "-"
        : userDetailsForm[key].value;
    }
  };

  const userDetailsToShow = () => {
    const keys = Object.keys(userDetailsForm);
    return keys.map((key, index) => (
      <div
        key={index}
        className="flex align-center user__details__show__details__container"
      >
        <div className="user__details__show__details__label">
          {userDetailsForm[key].label}
        </div>
        <div
          className="user__details__show__details__value"
          onDoubleClick={() => {
            onDoubleClick(userDetailsForm[key].inputName);
          }}
        >
          {key !== "chosenFiled"
            ? getDetailsToShow(
                key,
                userDetailsForm[key].inputName,
                userDetailsForm[key].canDelete
              )
            : null}
        </div>
      </div>
    ));
  };

  const handleUserDetails = (
    inputType: string,
    inputName: string,
    value: any
  ) => {
    if (inputType === "select") {
      return (
        <Select
          className="user__details__select"
          ref={inputRef}
          MenuProps={{ className: "user__details__menu__paper" }}
          name={inputName}
          value={value}
          onOpen={() => {
            setOpenPicker(true);
          }}
          onClose={() => {
            setOpenPicker(false);
          }}
          onChange={(ev) => {
            onChange(ev);
          }}
          onKeyDown={(ev) => {
            onKeyDown(ev, inputName);
          }}
        >
          <MenuItem value={"female"}>Female</MenuItem>
          <MenuItem value={"male"}>Male</MenuItem>
        </Select>
      );
    }
    if (inputType === "date") {
      return (
        <div
          onKeyDown={(ev) => {
            onKeyDown(ev, inputName);
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="he">
            <DatePicker
              className="user__details__date__input__mui"
              ref={inputRef}
              name={inputName}
              onChange={(newValue) => {
                onChange(null, inputName, newValue);
              }}
              value={dayjs(value)}
              onOpen={() => {
                setOpenPicker(true);
              }}
              onClose={() => {
                setOpenPicker(false);
              }}
            />
          </LocalizationProvider>
        </div>
      );
    }
    return (
      <TextFieldMui
        refs={inputRef}
        onChange={onChange}
        name={inputName}
        externalValue={value}
        onKeyDown={(ev) => {
          onKeyDown(ev, inputName);
        }}
        autoFocus={true}
      />
    );
  };

  return { userDetailsToShow };
};
