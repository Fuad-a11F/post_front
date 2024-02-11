import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Post } from "../../shared/models/post";

type Filter = {
  search: string;
  sort: "old" | "new";
};

type FilterUpdate = {
  field: string;
  value: number;
};

type Pagination = {
  limit: number;
};

type PostSlice = {
  partOfPosts: Post;
  allPosts: Post;
  filter: Filter;
  pagination: Pagination;
};

const initialState: PostSlice = {
  partOfPosts: [],
  allPosts: [],
  filter: { search: "", sort: "old" },
  pagination: { limit: 6 },
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    savePosts(state, action: PayloadAction<Post[]>) {
      const data = [...action.payload];

      if (state.filter.sort === "old") {
        state.partOfPosts = data.slice(0, state.pagination.limit);
        state.allPosts = data;
      } else if (state.filter.sort === "new") {
        state.partOfPosts = data.reverse().slice(0, state.pagination.limit);
        state.allPosts = data;
      }
    },

    pagination(state) {
      state.pagination.limit += 6;

      state.partOfPosts = [...state.allPosts.slice(0, state.pagination.limit)];
    },

    searchPost(state) {
      if (state.filter.search === "") {
        state.partOfPosts = state.allPosts.slice(0, state.pagination.limit);
        return;
      }

      state.partOfPosts = state.allPosts.filter((item) =>
        item.title.includes(state.filter.search),
      );
    },

    sortPost(state) {
      state.allPosts.reverse();
      state.partOfPosts = [...state.allPosts.slice(0, state.pagination.limit)];
    },

    filterUpdate(state, action: PayloadAction<FilterUpdate>) {
      state.filter[action.payload.field] = action.payload.value;
    },

    resetFilter(state) {
      state.filter.search = "";
      state.filter.sort = "old";
    },
  },
});

export const {
  savePosts,
  searchPost,
  sortPost,
  filterUpdate,
  pagination,
  resetFilter,
} = postSlice.actions;
export default postSlice.reducer;
