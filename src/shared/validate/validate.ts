export const passwordValidate = {
  required: "Обязательное поле",
  minLength: { value: 6, message: "Минимум 6 символов" },
};

export const usernameValidate = {
  required: "Обязательное поле",
  minLength: { value: 4, message: "Минимум 4 символа" },
};

export const emailValidate = {
  required: "Обязательное поле",
  pattern:
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
};

export const requiredFieldValidate = {
  required: "Обязательное поле",
};
