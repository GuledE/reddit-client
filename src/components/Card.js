import React from 'react'
   
  export default function Cards(props) {
    const { post } = props;
    return (
        <div>
      <h1>{post.userId} {post.title}</h1>
      <section>
        {post.body}
      </section>
      {post.id}
      </div>
    );
  }