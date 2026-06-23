// 06_Identifier_Rules.js
// Demonstrates JavaScript identifier naming rules and conventions

// ==========================================
// RULE 1: Can contain letters, digits, underscores (_), and dollar signs ($)
// ==========================================

let userName = "Sai";
let _count = 0;
let $price = 99.99;
let user_name = "john_doe";
let user$ = "active";
let total123 = 100;
let $$$ = "dollar signs work";
let _ = 42;  // underscore alone is valid but not recommended

console.log("Valid identifiers with allowed characters:");
console.log("userName:", userName);
console.log("_count:", _count);
console.log("$price:", $price);
console.log("user_name:", user_name);
console.log("user$:", user$);
console.log("total123:", total123);
console.log("$$$:", $$$);
console.log("_:", _);


// ==========================================
// RULE 2: Must NOT start with a digit
// ==========================================

// INVALID (would cause SyntaxError):
// let 2cool = "error";        // Starts with digit - INVALID
// let 123abc = 456;           // Starts with digit - INVALID

// VALID alternatives:
let cool2 = "works fine";
let abc123 = 456;
let _123start = "starts with underscore";

console.log("\nIdentifiers starting with digit are INVALID:");
console.log("Instead use: cool2 =", cool2);
console.log("Instead use: abc123 =", abc123);
console.log("Instead use: _123start =", _123start);


// ==========================================
// RULE 3: Cannot contain spaces or special characters
// ==========================================

// INVALID (would cause SyntaxError):
// let my var = 10;            // Contains space - INVALID
// let my-var = 10;            // Contains hyphen - INVALID
// let first@name = "john";    // Contains @ - INVALID
// let total# = 100;           // Contains # - INVALID
// let percent% = 50;          // Contains % - INVALID

// VALID alternatives:
let myVar = 10;
let my_var = 10;
let firstName = "john";
let totalAmount = 100;
let percentValue = 50;

console.log("\nIdentifiers with spaces/special chars are INVALID:");
console.log("Instead use camelCase: myVar =", myVar);
console.log("Instead use snake_case: my_var =", my_var);
console.log("Instead use camelCase: firstName =", firstName);
console.log("Instead use camelCase: totalAmount =", totalAmount);
console.log("Instead use camelCase: percentValue =", percentValue);


// ==========================================
// RULE 4: Case-sensitive
// ==========================================

let myVar = "lowercase m, lowercase v";
let MyVar = "uppercase M, lowercase v";
let MYVAR = "all uppercase";

console.log("\nJavaScript identifiers are case-sensitive:");
console.log("myVar =", myVar);
console.log("MyVar =", MyVar);
console.log("MYVAR =", MYVAR);


// ==========================================
// RESERVED KEYWORDS - Cannot be used as identifiers
// ==========================================

// INVALID (would cause SyntaxError):
// let let = 10;               // 'let' is a reserved keyword
// let const = "value";        // 'const' is a reserved keyword
// let function = () => {};    // 'function' is a reserved keyword
// let class = "Math";         // 'class' is a reserved keyword
// let return = 5;             // 'return' is a reserved keyword
// let if = true;              // 'if' is a reserved keyword
// let for = 1;                // 'for' is a reserved keyword
// let while = 2;              // 'while' is a reserved keyword
// let new = "object";         // 'new' is a reserved keyword
// let this = "context";       // 'this' is a reserved keyword
// let true = 1;               // 'true' is a reserved keyword
// let false = 0;              // 'false' is a reserved keyword
// let null = "nothing";       // 'null' is a reserved keyword

// VALID alternatives:
let letValue = 10;
let constValue = "value";
let myFunction = () => console.log("hello");
let className = "Math";
let returnValue = 5;
let isTrue = true;
let isNull = null;

console.log("\nReserved keywords cannot be used as identifiers:");
console.log("Instead of 'let', use: letValue =", letValue);
console.log("Instead of 'const', use: constValue =", constValue);
myFunction();
console.log("Instead of 'class', use: className =", className);
console.log("Instead of 'return', use: returnValue =", returnValue);
console.log("Instead of 'true', use: isTrue =", isTrue);
console.log("Instead of 'null', use: isNull =", isNull);


// ==========================================
// NAMING CONVENTIONS (Best Practices)
// ==========================================

// camelCase - for variables and functions
let firstName = "John";
let lastName = "Doe";
let totalAmount = 1500;

function calculateTotal(price, quantity) {
    return price * quantity;
}

// PascalCase - for classes (constructor functions)
class UserProfile {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

// UPPER_SNAKE_CASE - for constants
const MAX_SIZE = 100;
const API_KEY = "sk-1234567890";
const PI = 3.14159;

// Leading underscore - for private/internal members (convention)
let _internalCounter = 0;
function _privateHelper() {
    return "This is intended to be private";
}

console.log("\nNaming conventions (best practices):");
console.log("camelCase variables: firstName =", firstName, ", lastName =", lastName);
console.log("camelCase function result: calculateTotal(10, 5) =", calculateTotal(10, 5));

let user = new UserProfile("Jane", "jane@example.com");
console.log("PascalCase class: UserProfile name =", user.name);

console.log("UPPER_SNAKE_CASE constants: MAX_SIZE =", MAX_SIZE, ", PI =", PI);
console.log("Leading underscore (private convention): _internalCounter =", _internalCounter);
console.log("Private helper:", _privateHelper());


// ==========================================
// UNICODE CHARACTERS in identifiers
// ==========================================

// JavaScript allows Unicode letters in identifiers
let \u03c0 = 3.14159;        // π (Greek pi)
let \u4e2d\u6587 = "Chinese"; // 中文 (Chinese characters)
let r\u00e9sum\u00e9 = "my CV"; // résumé

console.log("\nUnicode in identifiers:");
console.log("\u03c0 (pi) =", \u03c0);
console.log("\u4e2d\u6587 (Chinese) =", \u4e2d\u6587);
console.log("r\u00e9sum\u00e9 =", r\u00e9sum\u00e9);

console.log("\n=== End of Identifier Rules Demo ===");
