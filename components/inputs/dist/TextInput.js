"use strict";
exports.__esModule = true;
function TextInput(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("label", null, props.placeholder),
        React.createElement("input", { type: "text", name: props.name, placeholder: props.placeholder })));
}
exports["default"] = TextInput;
