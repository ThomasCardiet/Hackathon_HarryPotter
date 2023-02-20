"use strict";
exports.__esModule = true;
function PrimaryButton(props) {
    return (React.createElement("button", { className: "button__primary", type: "submit", role: props.type }, props.text));
}
exports["default"] = PrimaryButton;
