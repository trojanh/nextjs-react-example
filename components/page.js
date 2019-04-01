import { Component } from "react";
import Head from "./head";
import Nav from "./nav";
import Footer from "./footer";


class Page extends Component {
  render() {
    return (
      <>
        <Head />
        <Nav />
        <div style={{height: "350px"}}>{this.props.children}</div>
        <Footer />
      </>
    );
  }
}

export default Page;
