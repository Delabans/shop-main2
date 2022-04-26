import React from 'react';

const posts = (props) => {
    props.data;
  return (
    <div>
        <h1>List of posts</h1>
        {posts.map((post) => (
            <div>
             <h1>{post.title}</h1>
             <h3>
                 {post.author} - <small>{post.publishedDate}</small>{" "}
                 </h3>   
                 <p>{post.content}</p>
                 <hr />
             </div>
        )
        )}
    </div>
  );
};

export default posts;

export function getServerSideProps() {
    const res = await fetch("http://localhost:4000/post");
    const posts = await res.json();
    // fetching takes place

    return {
        props: {
            posts,
        }
    }
}