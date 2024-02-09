import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import Textarea from "../../ui/textarea/Textarea";
import Tooltip from "../../ui/tooltip/Tooltip";
import Spinner from "../../ui/spinner/Spinner";
import styles from "./Ui.module.scss";

const Ui = () => {
  return (
    <div className={styles.column}>
      <Input value={"dfsd"} setValue={() => {}} />

      <Textarea value={"sdsd"} setValue={() => {}} />

      <div className={styles.column__button}>
        <Button text={"Тест"} />
      </div>

      <Tooltip text={"dfdfdf"} isError isOpen={true} />

      <div className={styles.column__spinner}>
        <Spinner />
      </div>
    </div>
  );
};

export default Ui;
