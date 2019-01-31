import React from 'react';
import Nav from '../components/Nav'
import posts from '../data/posts'
import Error from 'next/error'

export default ({ url: { query: { id } } }) => (
  (posts[id]) ? (
    <div>
      <Nav />
      <hr />
      <h1>Second {posts[id].title} page</h1>
    </div>
  ) : (
      <Error statusCode={404} />
    )
)