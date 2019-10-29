import React from "react";

export default function withHandlers(handlers) {
  return function (Component) {
    class WithHandlers extends React.Component {
      handlers = Object.keys(handlers).reduce((acc, handlerName) => {
        const handler = handlers[handlerName];
        if (typeof handler !== "function") {
          throw new Error(`Handler ${handlerName} should be function`)
        }
        acc[handlerName] = handler(this.props);
        return acc;
      }, {});

      render() {
        return <Component {...this.props} {...this.handlers}/>
      }
    }
    return WithHandlers;
  }
}
