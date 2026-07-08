"use client";

import { useParams } from "next/navigation";

import PostCommentWriteAndList from "./_components/PostCommentWriteAndList";
import PostInfo from "./_components/PostInfo";
import usePost from "./_hooks/usePost";
import usePostComments from "./_hooks/usePostComments";

export default function Page() {
  const { id: idStr } = useParams<{ id: string }>();
  const id = Number(idStr);

  const postState = usePost(id);
  const postCommentsState = usePostComments(id);

  return (
    <>
      <h1>글 상세페이지</h1>

      <PostInfo postState={postState} />

      <PostCommentWriteAndList postCommentsState={postCommentsState} />
    </>
  );
}
