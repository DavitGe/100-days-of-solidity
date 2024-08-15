### 🔒 Restricting Access with Modifiers

Modifiers play a vital role in enforcing access control within smart contracts. They enable developers to restrict certain functions or operations to specific individuals or entities.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
contract FunctionModifier {
  address public owner;
  uint public x = 10;
  bool public locked;
  constructor() {
    owner = msg.sender;
  }
  modifier onlyOwner() {
   require(msg.sender == owner, "Not owner");
    _;
  }
  // Rest of the contract…
}
```

Within the `FunctionModifier` contract, we define the `onlyOwner` modifier. This modifier checks whether the caller of a function is the owner of the contract. If the condition fails, the function call will revert with the error message “Not owner.” The underscore (`_`) symbol within the modifier indicates where the remaining function code should execute.

To apply the `onlyOwner` modifier to a function, simply place it before the function definition: ✨

```solidity
function changeOwner(address _newOwner) public onlyOwner {
owner = _newOwner;
}
```

Now, only the contract owner can call the `changeOwner` function and update the `owner` variable. By employing this technique, we can enforce access control and protect sensitive operations within our smart contracts. 🛡️🔐

### ✅ Validating Inputs with Modifiers

Modifiers in Solidity can also accept inputs and perform validations on them. Consider the `validAddress` modifier within the `FunctionModifier` contract: 📝

```solidity
modifier validAddress(address _addr) {
  require(_addr != address(0), “Not valid address”);
  _;
}
```

This modifier ensures that the provided address is not the zero address. If the condition fails, the function call will revert with the error message “Not valid address.” Once again, the `_` symbol indicates where the remaining function code should execute.

To utilize the `validAddress` modifier, include it as a parameter in the function definition: ✨

```solidity
function changeOwner(address _newOwner) public onlyOwner validAddress(_newOwner) {
owner = _newOwner;
}
```

Hence, before executing the `changeOwner` function, the `validAddress` modifier will validate the `_newOwner` address to ensure it is not the zero address. This enhances the reliability and integrity of our smart contracts by preventing unintended operations. 🚫❌

### 🔒⛔ Guarding Against Reentrancy Attacks

Reentrancy attacks represent a serious vulnerability, wherein a malicious contract repeatedly calls back into a vulnerable contract before the previous call completes. Solidity modifiers come to our aid in guarding against such attacks by preventing reentrant function calls.

Within the `FunctionModifier` contract, the `noReentrancy` modifier achieves this protection: 📝

```solidity
modifier noReentrancy() {
require(!locked, “

No reentrancy”);

locked = true;
_;
locked = false;
}
```

The `locked` variable keeps track of the reentrancy state. When a function with the `noReentrancy` modifier is called, it checks whether `locked` is `false`. If `true`, the function call will revert with the error message “No reentrancy.” Otherwise, the `locked` state is set to `true`, the remaining function code executes (`_`), and finally, the `locked` state is reset to `false`.

Let’s examine the `decrement` function in the `FunctionModifier` contract to illustrate the practical usage of the `noReentrancy` modifier: ✨

```solidity
function decrement(uint i) public noReentrancy {
x -= i;

if (i > 1) {
decrement(i — 1);
}
}
```

The `decrement` function subtracts `i` from the `x` variable. If `i` is greater than 1, the function recursively calls itself with `i — 1` as the argument. The `noReentrancy` modifier ensures that no reentrant calls can occur during the execution of the `decrement` function, thus mitigating any potential reentrancy vulnerabilities. 🔄🛡️
