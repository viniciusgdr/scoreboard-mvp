import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";

export class MyWindowPortal extends React.Component {
  containeEl: HTMLDivElement;
  externalWindow: Window | null;

  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.containeEl = document.createElement("div");
    this.externalWindow = null;
  }

  render() {
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
      const link = this.externalWindow.document.createElement("link");

      link.rel = "stylesheet";
      link.href = "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
      this.externalWindow.document.head.appendChild(link);
      
      this.externalWindow.document.body.appendChild(this.containeEl);
    }
  }

  componentWillUnmount() {
    console.log("unmounting...");
  }
}
