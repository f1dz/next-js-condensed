import React from 'react';
import Nav from '../components/Nav';
import posts from '../data/posts';
import Link from 'next/link'
import 'react-vis/dist/style.css'
import {HorizontalGridLines, LineSeries, XAxis, XYPlot, YAxis} from 'react-vis'

export default () => (
  <div>
    <Nav />
    <hr />
    <ul>
      {posts.map((post, index) => (
        <li key={index}>
          <Link as={`/post/${index}`} href={{pathname: '/second', query: {id: index}}}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    <XYPlot
      width={300}
      height={300}>
      <HorizontalGridLines/>
      <LineSeries
        data={[
          {x: 1, y: 10},
          {x: 2, y: 3},
          {x: 3, y: 5},
          {x: 4, y: 17},
          {x: 5, y: 21},
        ]}/>
        <XAxis/>
        <YAxis/>
    </XYPlot>
  </div>
);