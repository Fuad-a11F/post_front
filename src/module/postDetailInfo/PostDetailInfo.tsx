import { useNavigate, useParams } from "react-router-dom";

import styles from "./PostDetailInfo.module.scss";
import Button from "../../ui/button/Button";
import Spinner from "../../ui/spinner/Spinner";
import { useGetUsernameQuery } from "../../store/api/userApi";
import AdditionButton from "../../component/createPost/component/additionButton/AdditionButton";
import { useGetPostByIdQuery } from "../../store/api/postApi";
import LikeButton from "../../component/likeButton/LikeButton";
import noImage from "./assets/noImage.jpg";

const PostDetailInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useGetPostByIdQuery(id);
  const { data: username } = useGetUsernameQuery(id);
  const ifCouldHaveAdminButton =
    data?.author.toString() === username?.toString();

  const back = () => {
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className={styles.spinner}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={styles.info}>
      <Button onClick={back} text={"Назад"} />

      <div className={styles.info__img}>
        <img src={data.picture || noImage} alt="post" />
      </div>

      <div>
        <p className={styles.info__title}>{data.title}</p>

        <p className={styles.info__text}>{data.text}</p>

        <div className={styles.info__row}>
          <p className={styles.info__time}>{data.time}</p>

          <div className={styles.info__button}>
            <LikeButton post={data} />

            {ifCouldHaveAdminButton && <AdditionButton id={data.id} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailInfo;
