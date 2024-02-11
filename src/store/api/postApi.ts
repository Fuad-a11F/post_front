import { Post } from "../../shared/models/post";
import { api } from "./api";

export const postApi = api.injectEndpoints({
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPostById: builder.query<Post, number>({
      query: (id) => `post/${id}`,
      providesTags: ["Post"],
    }),

    deletePost: builder.mutation<Post, number>({
      query: (id) => ({
        url: `post/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),

    getPosts: builder.query<Post[]>({
      query: () => `posts`,
      providesTags: ["Post"],
    }),

    createPost: builder.mutation<Post>({
      query: (body) => ({
        url: `post`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Post"],
    }),

    likeIncrement: builder.mutation({
      query: (id) => ({
        url: `post/${id}/like`,
        method: "PUT",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetPostByIdQuery,
  useDeletePostMutation,
  useGetPostsQuery,
  useCreatePostMutation,
  useLikeIncrementMutation,
} = postApi;
