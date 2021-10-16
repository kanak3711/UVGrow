import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";
import Header from "./Header";
import styles from './body.module.css';



const Layout = (props) => {
  return (
    <div className ={styles.plz} >
      <Container >
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          ></link>
        </Head>
        <Header />
        {props.children}
      </Container>
    </div>
  );
};
export default Layout;
