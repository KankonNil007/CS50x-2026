const allQuestions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Preprocessor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"],
        correct: 1,
        category: "HTML",
        difficulty: "Easy"
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<css>", "<script>", "<style>", "<design>"],
        correct: 2,
        category: "HTML",
        difficulty: "Easy"
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        options: ["<heading>", "<h6>", "<h1>", "<head>"],
        correct: 2,
        category: "HTML",
        difficulty: "Easy"
    },
    {
        question: "Which element is used for a line break?",
        options: ["<br>", "<lb>", "<break>", "<newline>"],
        correct: 0,
        category: "HTML",
        difficulty: "Easy"
    },
    {
        question: "Who is making the Web standards?",
        options: ["MicroSoft", "Mozilla", "Google", "The World Wide Web Consortium"],
        correct: 3,
        category: "HTML",
        difficulty: "Easy"
    },
    {
        question: "Choose the correct HTML element to define important text",
        options: ["<b>", "<i>", "<strong>", "<important>"],
        correct: 2,
        category: "HTML",
        difficulty: "Easy"
    },
    {
        question: "Which character is used to indicate an end tag?",
        options: ["*", "/", "<", "^"],
        correct: 1,
        category: "HTML",
        difficulty: "Easy"
    },
    {
        question: "Inline elements are normally displayed without starting a new line.",
        options: ["True", "False"],
        correct: 0,
        category: "HTML",
        difficulty: "Easy"
    },
    {
        question: "How can you make a numbered list?",
        options: ["<dl>", "<ol>", "<ul>", "<list>"],
        correct: 1,
        category: "HTML",
        difficulty: "Easy"
    },
    {
        question: "How can you make a bulleted list?",
        options: ["<dl>", "<ol>", "<ul>", "<list>"],
        correct: 2,
        category: "HTML",
        difficulty: "Easy"
    },

    {
        question: "What is the correct HTML for adding a background color?",
        options: ["<body bg='yellow'>", "<body style='background-color:yellow;'>", "<background>yellow</background>", "<body background='yellow'>"],
        correct: 1,
        category: "HTML",
        difficulty: "Medium"
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        options: ["title", "src", "alt", "longdesc"],
        correct: 2,
        category: "HTML",
        difficulty: "Medium"
    },
    {
        question: "Which doctype is correct for HTML5?",
        options: ["<!DOCTYPE html>", "<!DOCTYPE HTML5>", "<!DOCTYPE html PUBLIC...>", "<!DOCTYPE html SYSTEM...>"],
        correct: 0,
        category: "HTML",
        difficulty: "Medium"
    },
    {
        question: "Which HTML element defines navigation links?",
        options: ["<nav>", "<navigate>", "<navigation>", "<menu>"],
        correct: 0,
        category: "HTML",
        difficulty: "Medium"
    },
    {
        question: "In HTML5, which element is used to specify a footer for a document or section?",
        options: ["<bottom>", "<footer>", "<section>", "<end>"],
        correct: 1,
        category: "HTML",
        difficulty: "Medium"
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        options: ["<a name='http://www.w3schools.com'>W3Schools.com</a>", "<a href='http://www.w3schools.com'>W3Schools.com</a>", "<a>http://www.w3schools.com</a>", "<a url='http://www.w3schools.com'>W3Schools.com</a>"],
        correct: 1,
        category: "HTML",
        difficulty: "Medium"
    },
    {
        question: "Which HTML element is used to specify a header for a document or section?",
        options: ["<top>", "<head>", "<header>", "<section>"],
        correct: 2,
        category: "HTML",
        difficulty: "Medium"
    },
    {
        question: "What is the correct HTML for making a checkbox?",
        options: ["<input type='check'>", "<check>", "<checkbox>", "<input type='checkbox'>"],
        correct: 3,
        category: "HTML",
        difficulty: "Medium"
    },
    {
        question: "What is the correct HTML for making a text input field?",
        options: ["<input type='text'>", "<textfield>", "<textinput>", "<input type='textfield'>"],
        correct: 0,
        category: "HTML",
        difficulty: "Medium"
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["font", "style", "class", "styles"],
        correct: 1,
        category: "HTML",
        difficulty: "Medium"
    },

    {
        question: "Which input type defines a slider control?",
        options: ["slider", "range", "controls", "scroll"],
        correct: 1,
        category: "HTML",
        difficulty: "Hard"
    },
    {
        question: "Which HTML element is used to display a scalar measurement within a range?",
        options: ["<gauge>", "<range>", "<measure>", "<meter>"],
        correct: 3,
        category: "HTML",
        difficulty: "Hard"
    },
    {
        question: "Which HTML element is used to specify a list of pre-defined options for input controls?",
        options: ["<datalist>", "<list>", "<dropdown>", "<optionlist>"],
        correct: 0,
        category: "HTML",
        difficulty: "Hard"
    },
    {
        question: "The <canvas> element is used to:",
        options: ["manipulate data in MySQL", "display database records", "draw graphics", "create draggable elements"],
        correct: 2,
        category: "HTML",
        difficulty: "Hard"
    },
    {
        question: "In HTML, what does the <aside> element define?",
        options: ["Content aside from the page content", " A navigation list to be shown at the left side of the page", "The ASCII character-set; to send information between computers on the Internet", "Parentheses around text"],
        correct: 0,
        category: "HTML",
        difficulty: "Hard"
    },
    {
        question: "Which HTML element is used to define a caption for a <figure> element?",
        options: ["<caption >", "<figcaption>", "<figurecaption>", "<title>"],
        correct: 1,
        category: "HTML",
        difficulty: "Hard"
    },
    {
        question: "Which element is commonly used to identify independent, self-contained content?",
        options: ["<article>", "<section>", "<aside>", "<nav>"],
        correct: 0,
        category: "HTML",
        difficulty: "Hard"
    },
    {
        question: "How do you specify that an input field must be filled out?",
        options: ["placeholder", "validate", "required", "formvalidate"],
        correct: 2,
        category: "HTML",
        difficulty: "Hard"
    },
    {
        question: "Which input type defines a week and year control (no time zone)?",
        options: ["date", "week", "year", "time"],
        correct: 1,
        category: "HTML",
        difficulty: "Hard"
    },
    {
        question: "Which global attribute specifies if the user can edit the element's content?",
        options: ["editable", "contenteditable", "clickable", "changeable"],
        correct: 1,
        category: "HTML",
        difficulty: "Hard"
    },

    {
        question: "Which CSS property is used to control the spacing between elements?",
        options: ["margin", "padding", "spacing", "border"],
        correct: 0,
        category: "CSS",
        difficulty: "Easy"
    },
    {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        options: ["In the <head> section", "At the end of the document", "In the <body> section", "Between <script> tags"],
        correct: 0,
        category: "CSS",
        difficulty: "Easy"
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<style>", "<script>", "<css>", "<design>"],
        correct: 0,
        category: "CSS",
        difficulty: "Easy"
    },
    {
        question: "Which property is used to change the background color?",
        options: ["color", "bgcolor", "background-color", "bg-color"],
        correct: 2,
        category: "CSS",
        difficulty: "Easy"
    },
    {
        question: "Which property is used to change the text color of an element?",
        options: ["font-color", "fgcolor", "color", "text-color"],
        correct: 2,
        category: "CSS",
        difficulty: "Easy"
    },
    {
        question: "How do you add a comment in a CSS file?",
        options: ["// this is a comment", "/* this is a comment */", "' this is a comment", "<!-- this is a comment -->"],
        correct: 1,
        category: "CSS",
        difficulty: "Easy"
    },
    {
        question: "Which ISO standard does CSS adhere to?",
        options: ["None", "ISO 9001", "SGML", "HTML"],
        correct: 0,
        category: "CSS",
        difficulty: "Easy"
    },
    {
        question: "How do you select an element with id 'demo'?",
        options: ["#demo", ".demo", "demo", "*demo"],
        correct: 0,
        category: "CSS",
        difficulty: "Easy"
    },
    {
        question: "How do you select elements with class name 'test'?",
        options: ["#test", ".test", "test", "*test"],
        correct: 1,
        category: "CSS",
        difficulty: "Easy"
    },
    {
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correct: 1,
        category: "CSS",
        difficulty: "Easy"
    },

    {
        question: "Which property is used to change the font of an element?",
        options: ["font-style", "font-weight", "font-family", "text-style"],
        correct: 2,
        category: "CSS",
        difficulty: "Medium"
    },
    {
        question: "How do you make each word in a text start with a capital letter?",
        options: ["text-transform: capitalize", "text-style: capitalize", "transform: capitalize", "font-transform: capitalize"],
        correct: 0,
        category: "CSS",
        difficulty: "Medium"
    },
    {
        question: "Which property is used to set the left margin?",
        options: ["padding-left", "indent", "margin-left", "left-margin"],
        correct: 2,
        category: "CSS",
        difficulty: "Medium"
    },
    {
        question: "When using the padding property; are you allowed to use negative values?",
        options: ["Yes", "No"],
        correct: 1,
        category: "CSS",
        difficulty: "Medium"
    },
    {
        question: "How do you make a list that lists its items with squares?",
        options: ["list-type: square;", "list-style-type: square;", "list: square;", "type: square;"],
        correct: 1,
        category: "CSS",
        difficulty: "Medium"
    },
    {
        question: "How do you select all p elements inside a div element?",
        options: ["div + p", "div p", "div.p", "div > p"],
        correct: 1,
        category: "CSS",
        difficulty: "Medium"
    },
    {
        question: "How do you group selectors?",
        options: ["Separate each selector with a space", "Separate each selector with a comma", "Separate each selector with a plus sign", "Separate each selector with a hyphen"],
        correct: 1,
        category: "CSS",
        difficulty: "Medium"
    },
    {
        question: "What is the default value of the position property?",
        options: ["relative", "fixed", "absolute", "static"],
        correct: 3,
        category: "CSS",
        difficulty: "Medium"
    },
    {
        question: "Which property is used to center text?",
        options: ["text-align", "align-text", "text-center", "center-align"],
        correct: 0,
        category: "CSS",
        difficulty: "Medium"
    },
    {
        question: "Which property is used to control the state of an element when a mouse hovers over it?",
        options: [":active", ":hover", ":link", ":visited"],
        correct: 1,
        category: "CSS",
        difficulty: "Medium"
    },

    {
        question: "The z-index property specifies the ____ order of an element.",
        options: ["stack", "width", "height", "depth"],
        correct: 0,
        category: "CSS",
        difficulty: "Hard"
    },
    {
        question: "Which CSS property controls the size of the element's content box?",
        options: ["box-sizing", "content-box", "width", "display"],
        correct: 0,
        category: "CSS",
        difficulty: "Hard"
    },
    {
        question: "How do you display a border like this: The top border = 10px, The bottom border = 5px, The left border = 20px, The right border = 1px?",
        options: ["border-width: 10px 1px 5px 20px;", "border-width: 10px 20px 5px 1px;", "border-width: 5px 20px 10px 1px;", "border-width: 10px 5px 20px 1px;"],
        correct: 0,
        category: "CSS",
        difficulty: "Hard"
    },
    {
        question: "Which property specifies the stack order of an element?",
        options: ["z-index", "s-index", "stack-order", "position"],
        correct: 0,
        category: "CSS",
        difficulty: "Hard"
    },
    {
        question: "What does the 'clear' property do?",
        options: ["Clears all styles", "Removes an element from the document", "Specifies on which sides of an element floating elements are not allowed", "Makes an element transparent"],
        correct: 2,
        category: "CSS",
        difficulty: "Hard"
    },
    {
        question: "Which property allows you to set the transparency of an element?",
        options: ["transparent", "opacity", "filter", "visibility"],
        correct: 1,
        category: "CSS",
        difficulty: "Hard"
    },
    {
        question: "What is the correct CSS syntax for making all the <p> elements bold?",
        options: ["p {text-size:bold;}", "p {font-weight:bold;}", "<p style='font-size:bold;'>", "p {style:bold;}"],
        correct: 1,
        category: "CSS",
        difficulty: "Hard"
    },
    {
        question: "How do you select an element with a specific attribute?",
        options: ["element[attribute]", "element.attribute", "element#attribute", "element(attribute)"],
        correct: 0,
        category: "CSS",
        difficulty: "Hard"
    },
    {
        question: "Which newer CSS framework is known for its utility-first approach?",
        options: ["Bootstrap", "Tailwind CSS", "Foundation", "Bulma"],
        correct: 1,
        category: "CSS",
        difficulty: "Hard"
    },
    {
        question: "CSS Grid Layout is a ____-dimensional layout system.",
        options: ["One", "Two", "Three", "Multi"],
        correct: 1,
        category: "CSS",
        difficulty: "Hard"
    },

    {
        question: "What is the correct syntax for referring to an external script called 'app.js'?",
        options: ["<script href='app.js'>", "<script name='app.js'>", "<script src='app.js'>", "<script file='app.js'>"],
        correct: 2,
        category: "JavaScript",
        difficulty: "Easy"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        options: ["msg('Hello World');", "alertBox('Hello World');", "msgBox('Hello World');", "alert('Hello World');"],
        correct: 3,
        category: "JavaScript",
        difficulty: "Easy"
    },
    {
        question: "How do you create a function in JavaScript?",
        options: ["function myFunction()", "function:myFunction()", "create myFunction()", "def myFunction()"],
        correct: 0,
        category: "JavaScript",
        difficulty: "Easy"
    },
    {
        question: "How do you call a function named 'myFunction'?",
        options: ["call myFunction()", "call function myFunction()", "myFunction()", "Call.myFunction()"],
        correct: 2,
        category: "JavaScript",
        difficulty: "Easy"
    },
    {
        question: "How can you add a comment in a JavaScript?",
        options: ["'This is a comment", "//This is a comment", "<!--This is a comment-->", "#This is a comment"],
        correct: 1,
        category: "JavaScript",
        difficulty: "Easy"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onchange", "onclick", "onmouseclick", "onmouseover"],
        correct: 1,
        category: "JavaScript",
        difficulty: "Easy"
    },
    {
        question: "How do you declare a JavaScript variable?",
        options: ["variable carName;", "v carName;", "var carName;", "val carName;"],
        correct: 2,
        category: "JavaScript",
        difficulty: "Easy"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        options: ["*", "-", "=", "x"],
        correct: 2,
        category: "JavaScript",
        difficulty: "Easy"
    },
    {
        question: "What is the correct file extension for JavaScript files?",
        options: [".java", ".js", ".javascript", ".xml"],
        correct: 1,
        category: "JavaScript",
        difficulty: "Easy"
    },
    {
        question: "Is JavaScript case-sensitive?",
        options: ["No", "Yes"],
        correct: 1,
        category: "JavaScript",
        difficulty: "Easy"
    },

    {
        question: "How to write an IF statement in JavaScript?",
        options: ["if i = 5 then", "if i == 5 then", "if (i == 5)", "if i = 5"],
        correct: 2,
        category: "JavaScript",
        difficulty: "Medium"
    },
    {
        question: "How does a WHILE loop start?",
        options: ["while (i <= 10)", "while i = 1 to 10", "while (i <= 10; i++)", "until (i <= 10)"],
        correct: 0,
        category: "JavaScript",
        difficulty: "Medium"
    },
    {
        question: "What will the following code return: Boolean(10 > 9)",
        options: ["NaN", "false", "true", "undefined"],
        correct: 2,
        category: "JavaScript",
        difficulty: "Medium"
    },
    {
        question: "What is the output of '2' + 2 in JavaScript?",
        options: ["4", "22", "NaN", "Error"],
        correct: 1,
        category: "JavaScript",
        difficulty: "Medium"
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        options: ["Math.ceil(x, y)", "Math.max(x, y)", "Math.high(x, y)", "ceil(x, y)"],
        correct: 1,
        category: "JavaScript",
        difficulty: "Medium"
    },
    {
        question: "How can you detect the client's browser name?",
        options: ["navigator.appName", "browser.name", "client.navName", "window.browser"],
        correct: 0,
        category: "JavaScript",
        difficulty: "Medium"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        options: ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'"],
        correct: 2,
        category: "JavaScript",
        difficulty: "Medium"
    },
    {
        question: "Example of a ternary operator:",
        options: ["condition ? expr1 : expr2", "condition : expr1 ? expr2", "condition ? expr1 ? expr2", "condition ? expr1, expr2"],
        correct: 0,
        category: "JavaScript",
        difficulty: "Medium"
    },
    {
        question: "Which method converts a JSON string into a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.toObj()", "JSON.convert()"],
        correct: 0,
        category: "JavaScript",
        difficulty: "Medium"
    },
    {
        question: "Which method adds a new element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correct: 0,
        category: "JavaScript",
        difficulty: "Medium"
    },

    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        options: ["Refers to the current function", "Refers to the current object", "Refers to the global object", "Refers to the previous object"],
        correct: 1,
        category: "JavaScript",
        difficulty: "Hard"
    },
    {
        question: "Which statement cannot be used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "int"],
        correct: 3,
        category: "JavaScript",
        difficulty: "Hard"
    },
    {
        question: "What is the correct way to check if a property exists in an object?",
        options: ["'key' in obj", "obj.has('key')", "obj.contains('key')", "obj.exists('key')"],
        correct: 0,
        category: "JavaScript",
        difficulty: "Hard"
    },
    {
        question: "What is Closure in JavaScript?",
        options: ["A combination of a function and the lexical environment", "A method to close the window", "A way to end a loop", "A design pattern"],
        correct: 0,
        category: "JavaScript",
        difficulty: "Hard"
    },
    {
        question: "Which method is used to remove the last element from an array?",
        options: ["push()", "pop()", "shift()", "remove()"],
        correct: 1,
        category: "JavaScript",
        difficulty: "Hard"
    },
    {
        question: "What will `console.log(typeof NaN)` output?",
        options: ["number", "NaN", "undefined", "object"],
        correct: 0,
        category: "JavaScript",
        difficulty: "Hard"
    },
    {
        question: "Which of these is NOT a valid JavaScript data type?",
        options: ["undefined", "boolean", "float", "number"],
        correct: 2,
        category: "JavaScript",
        difficulty: "Hard"
    },
    {
        question: "How do you define an arrow function?",
        options: ["() => {}", "-> {}", "func => {}", "=> {}"],
        correct: 0,
        category: "JavaScript",
        difficulty: "Hard"
    },
    {
        question: "What is the result of `0.1 + 0.2 === 0.3`?",
        options: ["true", "false", "undefined", "NaN"],
        correct: 1,
        category: "JavaScript",
        difficulty: "Hard"
    },
    {
        question: "Which function is used to schedule a function to run after a certain amount of time?",
        options: ["setInterval", "setTimeout", "setTimer", "timeOut"],
        correct: 1,
        category: "JavaScript",
        difficulty: "Hard"
    },

    {
        question: "Who is the father of C language?",
        options: ["Steve Jobs", "James Gosling", "Dennis Ritchie", "Rasmus Lerdorf"],
        correct: 2,
        category: "C",
        difficulty: "Easy"
    },
    {
        question: "C programs are converted into machine language with the help of:",
        options: ["An Editor", "A Compiler", "An Operating System", "None of the above"],
        correct: 1,
        category: "C",
        difficulty: "Easy"
    },
    {
        question: "Which symbol is used to terminate a statement in C?",
        options: [".", ":", ";", ","],
        correct: 2,
        category: "C",
        difficulty: "Easy"
    },
    {
        question: "Which of the following is not a valid C variable name?",
        options: ["int number;", "float rate;", "int variable_count;", "int $main;"],
        correct: 3,
        category: "C",
        difficulty: "Easy"
    },
    {
        question: "Which keyword is used to prevent any changes in the variable within a C program?",
        options: ["immutable", "mutable", "const", "volatile"],
        correct: 2,
        category: "C",
        difficulty: "Easy"
    },
    {
        question: "What is the format specifier for printing an integer?",
        options: ["%d", "%c", "%f", "%s"],
        correct: 0,
        category: "C",
        difficulty: "Easy"
    },
    {
        question: "Which function is used to read formatted input from the standard input?",
        options: ["printf()", "scanf()", "getch()", "puts()"],
        correct: 1,
        category: "C",
        difficulty: "Easy"
    },
    {
        question: "How many bytes does an integer take in a 32-bit compiler?",
        options: ["2", "4", "8", "1"],
        correct: 1,
        category: "C",
        difficulty: "Easy"
    },
    {
        question: "Which header file is required to use printf() and scanf()?",
        options: ["conio.h", "stdio.h", "stdlib.h", "math.h"],
        correct: 1,
        category: "C",
        difficulty: "Easy"
    },
    {
        question: "Which operator is used to find the memory address of a variable?",
        options: ["*", "&", "@", "#"],
        correct: 1,
        category: "C",
        difficulty: "Easy"
    },
    // C - Medium
    {
        question: "What is the output of `printf('%d', 10 + 20);`?",
        options: ["1020", "30", "10 + 20", "Error"],
        correct: 1,
        category: "C",
        difficulty: "Medium"
    },
    {
        question: "Which loop is guaranteed to execute at least once?",
        options: ["for", "while", "do-while", "None"],
        correct: 2,
        category: "C",
        difficulty: "Medium"
    },
    {
        question: "What is an array in C?",
        options: ["A collection of different data types", "A collection of similar data types", "A pointer", "None of the above"],
        correct: 1,
        category: "C",
        difficulty: "Medium"
    },
    {
        question: "Which operator is used to access structure members?",
        options: [".", "->", "&", "*"],
        correct: 0,
        category: "C",
        difficulty: "Medium"
    },
    {
        question: "What is output? `int a=10; printf('%d', a++);`",
        options: ["10", "11", "Error", "12"],
        correct: 0,
        category: "C",
        difficulty: "Medium"
    },
    {
        question: "The `break` statement is used to exit from:",
        options: ["A loop", "A function", "Comparison", "Main"],
        correct: 0,
        category: "C",
        difficulty: "Medium"
    },
    {
        question: "Can we have a pointer to a function in C?",
        options: ["Yes", "No", "Only in C++", "Compiler dependent"],
        correct: 0,
        category: "C",
        difficulty: "Medium"
    },
    {
        question: "Which function is used to allocate memory dynamically?",
        options: ["malloc()", "alloc()", "memalloc()", "create()"],
        correct: 0,
        category: "C",
        difficulty: "Medium"
    },
    {
        question: "What is `NULL` in C?",
        options: ["0", "Void pointer to 0", "A keyword", "A function"],
        correct: 1,
        category: "C",
        difficulty: "Medium"
    },
    {
        question: "Recursion is a process where:",
        options: ["Function calls itself", "Loop calls itself", "Two functions call each other", "None"],
        correct: 0,
        category: "C",
        difficulty: "Medium"
    },
    // C - Hard
    {
        question: "What is the size of `void`?",
        options: ["0", "1", "2", "Compiler dependent"],
        correct: 3,
        category: "C",
        difficulty: "Hard"
    },
    {
        question: "Which operator has the highest precedence?",
        options: ["*", "+", "()", "="],
        correct: 2,
        category: "C",
        difficulty: "Hard"
    },
    {
        question: "Structure padding is done by:",
        options: ["User", "Compiler", "Operating System", "Linker"],
        correct: 1,
        category: "C",
        difficulty: "Hard"
    },
    {
        question: "Which of the following creates a dangling pointer?",
        options: ["Deallocating memory but not setting pointer to NULL", "Using an uninitialized pointer", "Pointer pointing to a local variable of a returned function", "All of the above"],
        correct: 3,
        category: "C",
        difficulty: "Hard"
    },
    {
        question: "What does `main(int argc, char *argv[])` arguments representing?",
        options: ["Command line arguments", "Function variables", "Global variables", "Return values"],
        correct: 0,
        category: "C",
        difficulty: "Hard"
    },
    {
        question: "Bitwise operators work on:",
        options: ["Integer", "Float", "Double", "Char"],
        correct: 0,
        category: "C",
        difficulty: "Hard"
    },
    {
        question: "What is memory leak?",
        options: ["Memory corruption", "Failure to release allocated memory", "Stack overflow", "Buffer overflow"],
        correct: 1,
        category: "C",
        difficulty: "Hard"
    },
    {
        question: "Union members share:",
        options: ["Same memory location", "Different memory locations", "Heap memory", "Stack memory"],
        correct: 0,
        category: "C",
        difficulty: "Hard"
    },
    {
        question: "Which keyword is used to define an alias for a data type?",
        options: ["def", "typedef", "alias", "name"],
        correct: 1,
        category: "C",
        difficulty: "Hard"
    },
    {
        question: "Predict output: `int x=5; printf('%d %d %d', x, x++, ++x);`",
        options: ["5 5 7", "7 6 7", "Undefined/Compiler Dependent", "5 6 7"],
        correct: 2,
        category: "C",
        difficulty: "Hard"
    },

    {
        question: "Who developed Python?",
        options: ["Guido van Rossum", "Elon Musk", "Bill Gates", "Mark Zuckerberg"],
        correct: 0,
        category: "Python",
        difficulty: "Easy"
    },
    {
        question: "Which keyword is used to define a function in Python?",
        options: ["func", "defin", "def", "function"],
        correct: 2,
        category: "Python",
        difficulty: "Easy"
    },
    {
        question: "How do you insert comments in Python?",
        options: ["// comment", "# comment", "/* comment */", "-- comment"],
        correct: 1,
        category: "Python",
        difficulty: "Easy"
    },
    {
        question: "Which file extension is used for Python files?",
        options: [".pyt", ".pt", ".py", ".python"],
        correct: 2,
        category: "Python",
        difficulty: "Easy"
    },
    {
        question: "How do you output text to the screen in Python?",
        options: ["printf()", "echo()", "print()", "write()"],
        correct: 2,
        category: "Python",
        difficulty: "Easy"
    },
    {
        question: "Which of these is NOT a core data type in Python?",
        options: ["List", "Dictionary", "Tuple", "Class"],
        correct: 3,
        category: "Python",
        difficulty: "Easy"
    },
    {
        question: "How do you create a variable e.g. x equals 5?",
        options: ["x = 5", "int x = 5", "variable x = 5", "x : 5"],
        correct: 0,
        category: "Python",
        difficulty: "Easy"
    },
    {
        question: "Which operator is used for exponentiation?",
        options: ["^", "**", "exp", "pow"],
        correct: 1,
        category: "Python",
        difficulty: "Easy"
    },
    {
        question: "Boolean values in Python are:",
        options: ["true/false", "True/False", "1/0", "TRUE/FALSE"],
        correct: 1,
        category: "Python",
        difficulty: "Easy"
    },
    {
        question: "What is correct syntax to checking if 5 is greater than 2?",
        options: ["if 5 > 2:", "if 5 > 2 then:", "if (5 > 2)", "if 5 > 2"],
        correct: 0,
        category: "Python",
        difficulty: "Easy"
    },
    // Python - Medium
    {
        question: "Which collection is ordered, changeable, and allows duplicate members?",
        options: ["Tuple", "Set", "Dictionary", "List"],
        correct: 3,
        category: "Python",
        difficulty: "Medium"
    },
    {
        question: "How do you start a for loop?",
        options: ["for x in y:", "for each x in y:", "for x in y", "loop x in y:"],
        correct: 0,
        category: "Python",
        difficulty: "Medium"
    },
    {
        question: "Which function returns the length of a list?",
        options: ["count()", "length()", "len()", "size()"],
        correct: 2,
        category: "Python",
        difficulty: "Medium"
    },
    {
        question: "How do you handle exceptions in Python?",
        options: ["try...catch", "do...catch", "try...except", "run...except"],
        correct: 2,
        category: "Python",
        difficulty: "Medium"
    },
    {
        question: "Which statement is used to import a module?",
        options: ["include", "import", "require", "using"],
        correct: 1,
        category: "Python",
        difficulty: "Medium"
    },
    {
        question: "In Python 'Hello' is the same as \"Hello\"",
        options: ["False", "True"],
        correct: 1,
        category: "Python",
        difficulty: "Medium"
    },
    {
        question: "Which method removes whitespace from beginning or end?",
        options: ["strip()", "trim()", "cut()", "len()"],
        correct: 0,
        category: "Python",
        difficulty: "Medium"
    },
    {
        question: "How do you create an empty dictionary?",
        options: ["{}", "[]", "()", "dict.new()"],
        correct: 0,
        category: "Python",
        difficulty: "Medium"
    },
    {
        question: "Is Python interpreted or compiled?",
        options: ["Compiled", "Interpreted", "Both", "None"],
        correct: 1,
        category: "Python",
        difficulty: "Medium"
    },
    {
        question: "What is the keyword `pass` use for?",
        options: ["Terminate loop", "Skip iteration", "Do nothing", "Pass value"],
        correct: 2,
        category: "Python",
        difficulty: "Medium"
    },
    // Python - Hard
    {
        question: "What is a lambda function?",
        options: ["A named function", "An anonymous function", "A recursive function", "A loop"],
        correct: 1,
        category: "Python",
        difficulty: "Hard"
    },
    {
        question: "Which of the following is mutable?",
        options: ["Tuple", "String", "List", "Integer"],
        correct: 2,
        category: "Python",
        difficulty: "Hard"
    },
    {
        question: "What is the output of `print(type([]))`?",
        options: ["<class 'list'>", "<class 'array'>", "<class 'tuple'>", "<class 'dict'>"],
        correct: 0,
        category: "Python",
        difficulty: "Hard"
    },
    {
        question: "Which module in Python supports regular expressions?",
        options: ["regex", "pyregex", "re", "string"],
        correct: 2,
        category: "Python",
        difficulty: "Hard"
    },
    {
        question: "What is a decorator?",
        options: ["A function that modifies another function", "A visual style", "A class attribute", "A variable"],
        correct: 0,
        category: "Python",
        difficulty: "Hard"
    },
    {
        question: "What is `__init__`?",
        options: ["A constructor method", "A destructor method", "A module", "A variable"],
        correct: 0,
        category: "Python",
        difficulty: "Hard"
    },
    {
        question: "What does `*args` do in a function definition?",
        options: ["Passes a variable number of non-keyword arguments", "Passes a keyword arguments", "Passes a list", "None"],
        correct: 0,
        category: "Python",
        difficulty: "Hard"
    },
    {
        question: "What does `**kwargs` do?",
        options: ["Passes variable number of keyword arguments", "Passes non-keyword arguments", "Exponentiation", "Pointer"],
        correct: 0,
        category: "Python",
        difficulty: "Hard"
    },
    {
        question: "What is list comprehension?",
        options: ["A way to create lists based on existing lists", "Understanding lists", "Printing lists", "Sorting lists"],
        correct: 0,
        category: "Python",
        difficulty: "Hard"
    },
    {
        question: "Global variables are created:",
        options: ["Inside a function", "Outside a function", "Inside a class", "In a loop"],
        correct: 1,
        category: "Python",
        difficulty: "Hard"
    }
];
