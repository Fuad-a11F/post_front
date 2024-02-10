import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: [],
  copy_post: [],
  filter: { search: "", sort: "old" },

  offset: 0,
  limit: 6,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    savePosts(state, action) {
      state.post = action.payload.slice(state.offset, state.limit);

      state.copy_post = action.payload;
    },

    pagination(state) {
      state.offset += 6;
      state.limit += 6;

      state.post.push(...state.copy_post.slice(state.offset, state.limit));
    },

    searchPost(state) {
      if (state.filter.search === "") state.post = state.copy_post;

      state.post = state.copy_post.filter((item) =>
        item.title.includes(state.filter.search),
      );
    },

    sortPost(state) {
      state.post.reverse();
    },

    addNewPost(state, action) {
      if (state.filter.sort === "old") state.post.push(action.payload);
      if (state.filter.sort === "new") state.post.unshift(action.payload);
    },

    filterUpdate(state, action) {
      state.filter[action.payload.field] = action.payload.value;
    },
  },
});

export const {
  savePosts,
  searchPost,
  sortPost,
  filterUpdate,
  addNewPost,
  pagination,
} = postSlice.actions;
export default postSlice.reducer;
