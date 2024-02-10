import { useForm, Controller, SubmitHandler, Control } from "react-hook-form";
import { FC, useCallback, useState } from "react";

import styles from "./CreatePost.module.scss";
import ModalWrapper from "../../ui/modal/ModalWrapper";
import Input from "../../ui/input/Input";
import Textarea from "../../ui/textarea/Textarea";
import Button from "../../ui/button/Button";
import Dropzone from "../../ui/dropzone/Dropzone";
import useClearForm from "./shared/hook/useClearForm";

type FormValues = {
  title: string;
  description: string;
  picture: string;
};

type CreatePostProps = {
  isModalOpened: boolean;
  hideModal: () => void;
};

const CreatePostModal: FC<CreatePostProps> = ({ isModalOpened, hideModal }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const { control, handleSubmit, setValue, reset } = useForm<FormValues>({
    defaultValues: { title: "", description: "" },
  });

  useClearForm(isModalOpened, reset);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const reader = new FileReader();
    reader.readAsDataURL(acceptedFiles[0]);
    reader.onload = function () {
      setValue("picture", reader.result);
      setPreview(reader.result);
    };
  }, []);

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data);
  };

  return (
    <ModalWrapper isModalOpened={isModalOpened} hideModal={hideModal}>
      <form className={styles.create} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control as Control<FormValues>}
          name="picture"
          render={({ field: { onChange, value } }) => (
            <Dropzone
              onDrop={onDrop}
              onChange={(e) => onChange(e.target.files[0])}
              preview={preview}
            />
          )}
        />

        <Controller
          control={control}
          name="title"
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              setValue={onChange}
              placeholder={"Введите заголовок статьи"}
            />
          )}
        />

        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, value } }) => (
            <Textarea
              value={value}
              setValue={onChange}
              placeholder={"Введите описание статьи"}
            />
          )}
        />

        <div className={styles.create__button}>
          <Button text={"Создать"} />
        </div>
      </form>
    </ModalWrapper>
  );
};

export default CreatePostModal;
