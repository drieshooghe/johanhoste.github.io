import '../../style/style.scss';
import React, { Component } from 'react';
import Head from 'next/head';

export class HeaderTags extends Component {
  render(): JSX.Element {
    return (
      <Head>
        <title>Johan Hoste</title>
        <link href='https://fonts.googleapis.com/css?family=Oswald:200,300,500&display=swap' rel='stylesheet' />
        <link rel='stylesheet' href='style/main.css' />
      </Head>
    );
  }
}
