import React from "react";
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
      const script = this.externalWindow.document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4";
      this.externalWindow.document.head.appendChild(script);

      this.externalWindow.document.body.appendChild(this.containeEl);
    }
  }

  componentWillUnmount() {
    console.log("unmounting...");
  }
}
