/// <reference types="Cypress" />

describe("checking title", () => {
  it("Title is OK?", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQ");

    cy.log("Something was wrong!");
  });
  it("Title is OK?", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "Tools");

    cy.log("Something was wrong!");
  });
  it("Title is OK?", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "Tooool");

    cy.log("Something was wrong!");
  });
  it("Title is OK?", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "Tool");

    cy.log("Something was wrong!");
  });
  it("Title is OK?", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "Too");

    cy.log("Something was wrong!");
  });
  it("Title is OK?", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "T");

    cy.log("Something was wrong!");
  });
  it("Title is OK?", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "o");

    cy.log("Something was wrong!");
  });
  it("Title is OK?", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");

    cy.log("Something was wrong!");
  });
});
