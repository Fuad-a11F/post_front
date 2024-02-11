import { FC, useState } from "react";
import Input from "../../../../ui/input/Input";
import styles from "./InputPassword.module.scss";
import openEye from "./assets/open.svg";
import closeEye from "./assets/close.svg";

type InputPasswordProps = {
  value: string;
  setValue: Function;
  isLoading: boolean;
  placeholder: string;
};

const InputPassword: FC<InputPasswordProps> = ({ ...rest }) => {
  const [type, setType] = useState("password");

  return (
    <div className={styles.password}>
      <Input {...rest} type={type} />

      <div className={styles.icon}>
        {type === "password" && (
          <div onClick={() => setType("text")}>
            <img src={closeEye} alt="" width={25} height={25} />
          </div>
        )}
        {type === "text" && (
          <div onClick={() => setType("password")}>
            <img src={openEye} alt="" width={25} height={25} />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputPassword;
