import React from 'react'
import { useRouter } from "next/router";
import { route } from 'next/dist/server/router';

const PostDetail = () => {
    const router = useRouter();
    const { postId } = route.query;
    
     console.log(router);

  return (
    <div>PostDetail - {postId} </div>
  )  
};


export default PostDetail;