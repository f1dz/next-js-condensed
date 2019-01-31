import React from 'react';
import Link from 'next/link'
import Btn from './Btn'
import './Nav.css'

export default () => (
  <nav>
    <span className="logo logo-css"/>
    <Link href='/' passHref><Btn>Index</Btn></Link>
    <Link href='/second' passHref><Btn>Second</Btn></Link>
  </nav>
)