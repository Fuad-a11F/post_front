import { RootState } from "../store";

export const getPostsSelector = (store: RootState) => store.post;
export const getPostsFilterSearch = (state) => state.post.filter.search;
export const getPostsFilterSort = (state) => state.post.filter.sort;
export const getIsAuth = (state) => state.auth.isAuth;
export const getTooltip = (state) => state.tooltip;
