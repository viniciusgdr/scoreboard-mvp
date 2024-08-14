import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";

export class MyWindowPortal extends React.Component {
  containeEl: HTMLDivElement;
  externalWindow: Window | null;

  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    // Step 1: create a container <div>
    this.containeEl = document.createElement("div");
    this.externalWindow = null;
  }

  render() {
    // Step 2: append props.children to the container <div> that isn't mounted yet
    // @ts-ignore
    return ReactDOM.createPortal(this.props.children, this.containeEl);
  }

  componentDidMount() {
    this.externalWindow = window.open(
      "",
      "",
      "width=500,height=400,left=200,top=200"
    );  


    if (this.externalWindow) {
      // add tailwindcss to the external window
      const link = this.externalWindow.document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/tailwind.css";
      this.externalWindow.document.head.appendChild(link);
      
      this.externalWindow.document.body.appendChild(this.containeEl);
    }
  }

  componentWillUnmount() {
    // Step 5: This will fire when this.state.showWindowPortal in the parent componentDidMount
    // become false. So we tidy up by closing the window
    console.log("unmounting...");
  }
}
