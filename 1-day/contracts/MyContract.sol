// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract MyContract {
    string private text;

    constructor() {
        text = "Hello, World!";
    }

    function getText() public view returns (string memory) {
        return text;
    }
}