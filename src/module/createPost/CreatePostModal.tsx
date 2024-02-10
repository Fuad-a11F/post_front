import { useForm, Controller, SubmitHandler, Control } from "react-hook-form";
import { FC, useCallback, useState } from "react";
import moment from "moment";

import styles from "./CreatePost.module.scss";
import ModalWrapper from "../../ui/modal/ModalWrapper";
import Input from "../../ui/input/Input";
import Textarea from "../../ui/textarea/Textarea";
import Button from "../../ui/button/Button";
import Dropzone from "../../ui/dropzone/Dropzone";
import useClearForm from "./shared/hook/useClearForm";
import { useCreatePostMutation } from "./api/createPostApi";
import { addNewPost } from "../../store/slice/postSlice";
import { useAppDispatch } from "../../shared/hook/redux";
import { toggleTooltip } from "../../store/slice/tooltipSlice";
import ErrorText from "../../ui/errorText/ErrorText";
import { requiredFieldValidate } from "../../shared/validate/validate";

type FormValues = {
  title: string;
  description: string;
  picture: string;
  time: string;
};

type CreatePostProps = {
  isModalOpened: boolean;
  hideModal: () => void;
};

const CreatePostModal: FC<CreatePostProps> = ({ isModalOpened, hideModal }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [createPost] = useCreatePostMutation();
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
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

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    data.time = moment().format("YYYY-MM-DD HH:mm:ss");
    const result = await createPost(data);

    dispatch(addNewPost(result.data));

    reset();
    hideModal();

    dispatch(
      toggleTooltip({
        isOpen: true,
        message: "Вы успешно создали статью",
        isSuccess: true,
        isError: false,
      }),
    );
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
          rules={requiredFieldValidate}
          render={({ field: { onChange, value } }) => (
            <div>
              <Input
                value={value}
                setValue={onChange}
                placeholder={"Введите заголовок статьи"}
              />

              <ErrorText text={errors?.title?.message} />
            </div>
          )}
        />

        <Controller
          control={control}
          name="description"
          rules={requiredFieldValidate}
          render={({ field: { onChange, value } }) => (
            <div>
              <Textarea
                value={value}
                setValue={onChange}
                placeholder={"Введите описание статьи"}
              />

              <ErrorText text={errors?.description?.message} />
            </div>
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
