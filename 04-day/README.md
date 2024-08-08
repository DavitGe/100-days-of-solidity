# Exploring Local, State, and Global Variables ⚙️

## 1️⃣ Local Variables:
Local variables are declared within functions and are not stored on the blockchain. They have a temporary lifespan and are accessible only within the scope of the function in which they are declared. Local variables are useful for storing intermediate results or data required for computation within a specific function.

## 2️⃣ State Variables:
State variables are declared outside of functions and are stored on the blockchain. These variables persist between function calls and are associated with the contract instance. State variables are suitable for storing contract-specific data that needs to be accessed and modified by multiple functions within the contract.

## 3️⃣ Global Variables:
Global variables in Solidity provide essential information about the blockchain and the current transaction. These variables are available to all functions within a contract and offer crucial context for contract execution. Let’s explore two commonly used global variables:

- `block.timestamp`: This variable returns the current timestamp (in seconds) of the block in which the contract is being executed. It enables contracts to incorporate time-based logic or record the occurrence of specific events.

- `msg.sender`: This variable represents the address of the account (or contract) that called the current function. It can be used to verify the identity of the caller or perform access control checks.