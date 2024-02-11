import { RootState } from "../store";

export const getPostsSelector = (store: RootState) => store.post.partOfPosts;
export const getAllPostsSelector = (store: RootState) => store.post.allPosts;
export const getPostsFilterSearch = (state: RootState) =>
  state.post.filter.search;
export const getPostsFilterSort = (state: RootState) => state.post.filter.sort;
export const getIsAuth = (state: RootState) => state.auth.isAuth;
export const getTooltip = (state: RootState) => state.tooltip;
export const getPostFilter = (state: RootState) => state.post.filter;
