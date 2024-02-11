export type Post = {
  id: string;
  text: string;
  time: string;
  title: string;
  picture: string;
  author: string;
  like: number;
  personsLiked: Array<number>;
};
