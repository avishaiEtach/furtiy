import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  openSnackbar,
  setToken,
  setUser,
} from "../../../store/store/products.actions";
import { routesPath } from "../../../routes";
import { usersService } from "../../../services/users.service";
import { configs } from "../../../assets/configs";
import { RootState } from "../../../store/store/store";

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

export const useUserDetailsFunction = () => {
  const { user } = useSelector((state: RootState) => state.productsModel);
  const [loading, setLoading] = useState({
    save: false,
    Delete: false,
  });

  const [userDetailsForm, setUserDetailsForm] = useState<UserDetailsForm>({
    phone: {
      value: "",
      chosen: false,
      label: "Phone",
      inputName: "phone",
      inputType: "text",
      canDelete: false,
    },
    email: {
      value: "",
      chosen: false,
      label: "Email",
      inputName: "email",
      inputType: "text",
      canDelete: false,
    },
    dob: {
      value: "",
      chosen: false,
      label: "Birth Day",
      inputName: "dob",
      inputType: "date",
      canDelete: false,
    },
    gender: {
      value: "female",
      chosen: false,
      label: "Gender",
      inputName: "gender",
      inputType: "select",
      canDelete: false,
    },
    streetNumber: {
      value: 0,
      chosen: false,
      label: "Street Number",
      inputName: "streetNumber",
      inputType: "text",
      canDelete: true,
    },
    streetName: {
      value: "",
      chosen: false,
      label: "Street Name",
      inputName: "streetName",
      inputType: "text",
      canDelete: true,
    },
    city: {
      value: "",
      chosen: false,
      label: "City",
      inputName: "city",
      inputType: "text",
      canDelete: true,
    },
    country: {
      value: "",
      chosen: false,
      label: "Country",
      inputName: "country",
      inputType: "text",
      canDelete: true,
    },
    state: {
      value: "",
      chosen: false,
      label: "State",
      inputName: "state",
      inputType: "text",
      canDelete: true,
    },
    postcode: {
      value: 0,
      chosen: false,
      label: "Postcode",
      inputName: "postcode",
      inputType: "text",
      canDelete: true,
    },
    chosenFiled: {
      value: "",
      chosen: false,
      label: "",
      inputName: "",
      inputType: "",
      canDelete: false,
    },
  });
  const [userDetailsFormCopy, setUserDetailsFormCopy] =
    useState<UserDetailsForm>({
      phone: {
        value: "",
        chosen: false,
        label: "Phone",
        inputName: "phone",
        inputType: "text",
        canDelete: false,
      },
      email: {
        value: "",
        chosen: false,
        label: "Email",
        inputName: "email",
        inputType: "text",
        canDelete: false,
      },
      dob: {
        value: "",
        chosen: false,
        label: "Birth Day",
        inputName: "dob",
        inputType: "date",
        canDelete: false,
      },
      gender: {
        value: "female",
        chosen: false,
        label: "Gender",
        inputName: "gender",
        inputType: "select",
        canDelete: false,
      },
      streetNumber: {
        value: 0,
        chosen: false,
        label: "Street Number",
        inputName: "streetNumber",
        inputType: "text",
        canDelete: true,
      },
      streetName: {
        value: "",
        chosen: false,
        label: "Street Name",
        inputName: "streetName",
        inputType: "text",
        canDelete: true,
      },
      city: {
        value: "",
        chosen: false,
        label: "City",
        inputName: "city",
        inputType: "text",
        canDelete: true,
      },
      country: {
        value: "",
        chosen: false,
        label: "Country",
        inputName: "country",
        inputType: "text",
        canDelete: true,
      },
      state: {
        value: "",
        chosen: false,
        label: "State",
        inputName: "state",
        inputType: "text",
        canDelete: true,
      },
      postcode: {
        value: 0,
        chosen: false,
        label: "Postcode",
        inputName: "postcode",
        inputType: "text",
        canDelete: true,
      },
      chosenFiled: {
        value: "",
        chosen: false,
        label: "",
        inputName: "",
        inputType: "",
        canDelete: false,
      },
    });

  const [openPicker, setOpenPicker] = useState(false);

  const inputRef = useRef<any>(null);
  const buttonRef = useRef<any>([]);

  const [disabled, setDisabled] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        !buttonRef.current.some(
          (ref: any) => ref && ref.contains(event.target as Node)
        ) &&
        !openPicker
      ) {
        setUserDetailsForm((prev) => {
          let object: any = {};
          for (const key in prev) {
            if (key !== "chosenFiled") {
              object = {
                ...object,
                [key]: {
                  ...prev[key],
                  value: prev[key].value,
                  chosen: false,
                },
              };
            } else {
              object = { ...prev, chosenFiled: { value: "" } };
            }
          }
          return object;
        });
        buttonRef.current = [];
        inputRef.current = null;
      }
    };

    document.body.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.body.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userDetailsForm, openPicker]);

  useEffect(() => {
    const userDetailsForm = {
      phone: {
        value: user?.phone ?? "",
        chosen: false,
        label: "Phone",
        inputName: "phone",
        inputType: "text",
        canDelete: false,
      },
      email: {
        value: user?.email ?? "",
        chosen: false,
        label: "Email",
        inputName: "email",
        inputType: "text",
        canDelete: false,
      },
      dob: {
        value:
          dayjs(user?.dob.date).millisecond(0).toISOString() ??
          dayjs(new Date()).millisecond(0).toISOString(),
        chosen: false,
        label: "Birth Day",
        inputName: "dob",
        inputType: "date",
        canDelete: false,
      },
      gender: {
        value: user?.gender ?? "female",
        chosen: false,
        label: "Gender",
        inputName: "gender",
        inputType: "select",
        canDelete: false,
      },
      streetNumber: {
        value: user?.location?.street?.number ?? 0,
        chosen: false,
        label: "Street Number",
        inputName: "streetNumber",
        inputType: "text",
        canDelete: true,
      },
      streetName: {
        value: user?.location?.street?.name ?? "",
        chosen: false,
        label: "Street Name",
        inputName: "streetName",
        inputType: "text",
        canDelete: true,
      },
      city: {
        value: user?.location?.city ?? "",
        chosen: false,
        label: "City",
        inputName: "city",
        inputType: "text",
        canDelete: true,
      },
      country: {
        value: user?.location?.country ?? "",
        chosen: false,
        label: "Country",
        inputName: "country",
        inputType: "text",
        canDelete: true,
      },
      state: {
        value: user?.location?.state ?? "",
        chosen: false,
        label: "State",
        inputName: "state",
        inputType: "text",
        canDelete: true,
      },
      postcode: {
        value: user?.location?.postcode ?? 0,
        chosen: false,
        label: "Postcode",
        inputName: "postcode",
        inputType: "text",
        canDelete: true,
      },
      chosenFiled: {
        value: "",
        chosen: false,
        label: "",
        inputName: "",
        inputType: "",
        canDelete: false,
      },
    };
    setUserDetailsForm(userDetailsForm);
    setUserDetailsFormCopy(userDetailsForm);
  }, [user]);

  const submit = async (ev: any, type: "save" | "Delete" | "logout") => {
    let res: Dictionary | undefined = {};
    setLoading((prev) => (prev = { ...prev, [type]: true }));
    try {
      if (type === "save") {
        res = await onSaveUser();
      } else if (type === "Delete") {
        res = await onDeleteUser(user ? user._id : "");
        if (res) {
          dispatch(setToken());
          navigate(routesPath.home);
        }
      } else {
        res = await usersService.logout();
        if (res) {
          dispatch(setToken());
          navigate(routesPath.home);
        }
      }
    } catch (err: any) {
      await dispatch(
        openSnackbar({
          open: true,
          massage: configs.ERROR_DICTIONARY[res?.text ?? ""],
          severity: "error",
        })
      );
    } finally {
      await dispatch(setUser());
      // await dispatch(setUserWithList());
      await dispatch(
        openSnackbar({
          open: true,
          massage: configs.ERROR_DICTIONARY[res?.text ?? ""],
          severity: "success",
        })
      );
      hasValueChanged(userDetailsForm);
      setLoading({
        save: false,
        Delete: false,
      });
    }
  };

  const onSaveUser = async () => {
    if (user) {
      const { dob, email, gender, phone } = userDetailsForm;
      let savedUser: User = {
        ...user,
        dob: {
          age: user.dob.age,
          date: dayjs(dob.value).toISOString(),
        },
        email: email.value,
        gender: gender.value,
        phone: phone.value,
      };

      const optionFields = [
        "city",
        "country",
        "postcode",
        "state",
        "streetName",
        "streetNumber",
      ];

      if (user.location) {
        let location: any = {};
        let street = {};
        Object.keys(userDetailsForm).forEach((key) => {
          const field = userDetailsForm[key];
          if (optionFields.includes(key)) {
            if (key === "streetName" || key === "streetNumber") {
              if (key === "streetName" && field.value !== undefined) {
                street = { ...street, name: field.value };
              }
              if (key === "streetNumber" && field.value !== undefined) {
                street = { ...street, number: +field.value };
              }
              location = { ...location, street };
            } else {
              location = { ...location, [key]: field.value };
            }
          }
        });

        savedUser = { ...savedUser, location: location };
      }
      return await usersService.saveUser(savedUser);
    }
  };

  const onDeleteUser = async (userId: string) => {
    return await usersService.DeleteUser(userId);
  };

  function hasValueChanged(current: UserDetailsForm, prev?: UserDetailsForm) {
    if (!prev) {
      setDisabled(false);
      return false;
    }
    // Iterate through the properties of the form
    for (const key in prev) {
      if (Object.prototype.hasOwnProperty.call(prev, key)) {
        // Check if the 'value' property exists and has changed
        if (key === "chosenFiled") continue;
        if (!current[key] || !prev[key]) {
          setDisabled(true);
          return true;
        }
        if (prev[key].value !== current[key].value) {
          setDisabled(true);
          return true;
        }
      }
    }
    setDisabled(false);
    return false;
  }

  const params = {
    userDetailsForm,
    buttonRef,
    setUserDetailsForm,
    userDetailsFormCopy,
    hasValueChanged,
    inputRef,
    setOpenPicker,
    disabled,
    loading,
    submit,
  };

  return params;
};
