#### Understanding Shadowing:

In Solidity, when a contract inherits another contract, it inherits both its functions and state variables. However, if the child contract declares a state variable with the same name as the inherited variable, it does not actually override the original variable. This phenomenon is known as “shadowing” of state variables.

#### The Disallowed Shadowing — Solidity 0.6 and Earlier:

Prior to Solidity version 0.6, shadowing was disallowed. If you attempted to shadow a state variable by re-declaring it in a child contract, you would encounter a compilation error. This restriction was implemented to maintain consistency and prevent confusion.

#### Correctly Overriding Inherited State Variables:

To correctly override an inherited state variable, we need to adopt a different approach. Let’s examine a new contract, Contract C, which inherits from Contract A, and see the proper method in action.

```solidity
contract A {
  string public name = "Contract A";
  function getName() public view returns (string memory) {
    return name;
  }
}
contract C is A {
  constructor() {
    name = "Contract C";
  }
// C.getName returns "Contract C"
}
```

In this example, Contract C overrides the inherited `name` state variable correctly. Inside the constructor of Contract C, we simply assign a new value to `name` using the statement `name = “Contract C”;`. Consequently, when we create an instance of Contract C, the value of `name` will be “Contract C”. By following this approach, we can successfully override inherited state variables and achieve the desired behavior in our smart contracts.

#### Analyzing and Comparing the Smart Contracts:

Now, let’s take a closer look at the smart contracts A and C, analyze their behavior, and compare the results.

```solidity
contract A {
  string public name = "Contract A";
  function getName() public view returns (string memory) {
    return name;
  }
}
contract C is A {
  constructor() {
    name = "Contract C";
  }
// C.getName returns "Contract C"
}
```

Contract A defines a state variable `name` with an initial value of “Contract A”. It also provides a function `getName()` that returns the value of `name`.

Contract C inherits from Contract A and correctly overrides the `name` state variable inside its constructor. When we call `C.getName()`, it returns the overridden value “Contract C”.

#### Sample Code to Solidify the Concept:

To reinforce our understanding, let’s explore a couple of sample code examples involving shadowing inherited state variables.

Shadowing with Different Variable Type:

```solidity
contract A {
  uint256 public number = 42;
  function getNumber() public view returns (uint256) {
    return number;
  }
}
contract D is A {
  constructor() {
    number = 24;
  }
// D.getNumber returns 24
}
```

In this example, contract D inherits the `number` state variable from contract A and shadows it with a new value. Although the variable type has changed to `uint256`, the concept of shadowing remains the same. Contract D assigns the value 24 to `number` inside its constructor. Consequently, when we call `D.getNumber()`, it returns the overridden value 24.

##### 2️⃣ Shadowing with Modifier:

```solidity
contract E is A {
  constructor() {
    name = "Contract E";
  }
  modifier overrideName() {
    name = "Modified Name";
    \_;
  }
  function getName() public view overrideName returns (string memory) {
    return name;
  }
}
```

In this example, contract E overrides the `getName()` function inherited from contract A. The `overrideName` modifier is used to modify the behavior of the function. Inside the modifier, we assign a new value “Modified Name” to `name`. When we call `E.getName()`, it returns the overridden value “Modified Name”.
