import React from 'react';
import Nav from '../components/Nav';
import posts from '../data/posts';
import Link from 'next/link'

export default () => (
  <div>
    <Nav />
    <hr />
    <ul>
      {posts.map((post, index) => (
        <li key={index}>
          <Link href={{pathname: '/second', query: {id: index}}}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);