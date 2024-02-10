import { useDropzone } from "react-dropzone";
import { FC } from "react";
import styles from "./Dropzone.module.scss";

type DropzoneProps = {
  onDrop: Function;
  onChange: Function;
  preview: null | string;
};

const Dropzone: FC<DropzoneProps> = ({ onDrop, onChange, preview }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  if (preview) {
    return (
      <div className={styles.preview}>
        <img src={preview} alt="preview" />
      </div>
    );
  }

  return (
    <div {...getRootProps()}>
      <input {...getInputProps({ onChange })} />
      {isDragActive && (
        <div className={styles.drag__active}>
          <p>Отпустите, чтобы загрузить</p>
        </div>
      )}

      {!isDragActive && (
        <div className={styles.drag__inactive}>
          <p>Перетяните сюда файлы или нажмите сюда, чтобы выбрать вручную</p>
        </div>
      )}
    </div>
  );
};

export default Dropzone;
