const { expect } = require("chai");

describe("MyContract", () => {
  it("should return text", async () => {
    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract = await MyContract.deploy();

    await myContract.deployed();
    expect(await myContract.getText()).to.equal("Hello, World!");
  });
});
