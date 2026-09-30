# JavaScript Refresher Reflection

### 00_script_in_html.html

Ang module ay ginagamit para ma-isolate ang isang JavaScript file. For example, kung may dalawang JS files ka at pareho silang may variable na `name`, kapag hindi sila naka-module, possible na mag-conflict ang variables dahil parehong nasa global scope. Kapag gumamit naman ng module, bawat file ay may sariling scope, kaya hindi basta-basta maa-access ng isang file ang variables ng ibang file. Mas organized at mas safe gamitin ang modules lalo na kapag marami nang files ang project.

### 01_base_syntax.js

I learned that when you print in JavaScript, you use `console.log()`.

I also learned that JavaScript is case sensitive. In this file, the output of `myName` and `myname` is different even though they have the same value.

### 02_variables.js

There are rules in JavaScript for naming variables: the name should start with a letter, `$`, or `_`, but never a digit. JavaScript is also case sensitive.

`typeof` tells you what type the value of your input is in the code.

Ang `==` ay nagco-convert muna ng type bago mag-compare, habang ang `===` ay chine-check ang parehong value at data type, kaya puwedeng magkaiba ang result nila.

### 03_functions.js

Na-realize ko na mas madali pala gumawa ng reusable code gamit ang functions. Halimbawa, sa `greet()` function, puwede ko itong gamitin para bumati ng different names without writing the same code again. Mas naintindihan ko rin kung paano ginagamit ang `return` para makuha ang result, at nalaman ko rin na may regular function at arrow function na parehong useful depende sa gagawin. Para sa akin, mas madali gamitin ang function kesa sa arrow function, kahit halos pareho lang sila ng ginagawa, mas madali kasi tandaan ang `function`.

### 04_objects.js

In objects, methods, and `this`, the code looks cleaner if the data are bundled through an object, since they are related data. When it is an object, we use curly braces.

### 05_arrays.js

While objects are related data using curly braces, arrays are a list of objects and we use square brackets.

### 06_control_structures.js

Control structures are common in most programming languages, especially the `>` and `<` symbols. They are very important because they allow us to have conditions in our code. I also learned that these control structures are read by the computer from top to bottom.

### 07_dom.html

The lesson about the DOM was explained in our previous discussion. In React, it is considered one of the best because of its DOM, and the DOM works like a browser's live representation of the page. By using the built-in functions of JavaScript, it is easier to update the page using Vanilla JS.

### 08_essential_features.js

In the essential features, the spread operator is represented by `...`, and we also have destructuring, which pulls values directly from an object, so we don't have to write a lot of variables.

### 09_tricky_parts.js

Magkaiba pala ang behavior ng regular function at arrow function kapag gumagamit ng `this`. Noong una, nagtaka ako kung bakit lumalabas yung name sa regular function pero `undefined` naman sa arrow function. Naging curious ako kung bakit ganun ang result kahit pareho naman silang nasa loob ng same object. After ko siyang pag-aralan, naintindihan ko na ang regular function ay kumukuha ng `this` depende sa kung paano siya tinawag, habang ang arrow function naman ay gumagamit ng `this` mula sa surrounding scope. Kaya kapag `this.name` ang ginamit sa arrow function, `undefined` ang lumalabas at hindi `null`, dahil hindi niya nakukuha yung name mula sa object.

### 10_let_const.js

Nag-error nung sinubukan kong palitan ang value ng `const`. Ginagamit ko ang `let` kapag gusto ko pang mapalitan ang value ng variable, pero kapag hindi na siya papalitan, `const` ang gamit.

### 11_arrow_functions.js

Madali i-convert ang `greet`, pero medyo nakalito sa akin ang `square`. Nalaman ko na kapag may curly braces sa arrow function, hindi automatic na mare-return ang value, kaya kailangan ng `return`. Kapag walang `{}`, automatic na nire-return ang expression.

Mas gusto ko pa rin ang regular function kasi mas familiar ako doon, haha. Hindi ko pa talaga nakikita agad yung importance ng arrow functions. But upon checking the internet and trying some examples, i learned na useful pala siya kapag gumagawa ng short and simple functions. Mas concise din ang syntax niya, kaya mas convenient gamitin sa ibang situations. 

### 12_destructuring.js

Nung una kailangan ko pang isa-isahin ang pagkuha ng values, pero mas umikli ang code nung gumamit ako ng destructuring.

Sa object, based sa property name ang pagkuha ng value. Sa array, based sa position o order.

Napansin ko sa parameter list na hindi ko na kailangang gumawa ng separate variable para sa `name`. Direkta ko nang makukuha ang `name` mula sa object na ipinasa sa function. Mas clean siya lalo na kapag object ang parameter.

### 13_spread_rest.js

Ang spread operator na `...` ay ginagamit para i-copy o i-spread out ang values ng array o properties ng object. Halimbawa, kapag may original array ako, pwede akong gumawa ng bagong array gamit ang spread nang hindi binabago ang original.

Ang rest operator naman ay kumukuha ng maraming values at pinagsasama sila into one array. 

Yung spread, binubuksan o hinihiwa-hiwalay niya ang values, habang yung rest, kinokolekta niya ang maraming values into one array

i think may ganito para hindi mabago ang original data para maiwasan ang unexpected changes sa program. Mas madaling i-track kung saan nanggaling ang original data 

### 14_classes_inheritance.js

Ang `constructor` ay ginagamit para mag-set ng initial values kapag gumagawa ako ng bagong object. Ang `super()` naman ay ginagamit sa child class para tawagin ang constructor ng parent class.

at first, medyo confusing sa akin ung `extends` at `super()` kasi hindi agad clear kung bakit kailangan pa silang gamitin. After trying the code, mas naintindihan ko na yunb `extends` ay para mag-inherit ng features from another class, while `super()` ay ginagamit para matawag ang constructor ng parent class. 

### 15_modules_export.js

Ang `export default` ay para sa main o default value na gusto kong i-export. Kapag ini-import siya, natutunan kop din na hindi naman hindi required na pareho ang pangalan, parang yung napag aralann namin sa reast nung midterm.

Mas okay na hiwalay ang files para organized ang code. Halimbawa, ang functions na related sa isang topic ay nasa isang file, then pwede ko silang i-import kapag kailangan. Mas madaling maghanap ng code, mag-edit, tapos mas madali i-maintain ng project kaysa isang malaking file na lahat nandoon.

### 16_modules_import.js

Noong una, akala ko may mali sa import path kasi hindi ko agad makita kung saan naka-connect ang JavaScript files. Chineck ko ang code at ang HTML file, tapos na-realize ko na nandoon na pala ang `type="module"` sa script tag. Akala ko kailangan ko pang idagdag o ayusin ang path, pero okay naman pala ang setup. After checking everything, mas naintindihan ko kung paano connected ang HTML file sa JavaScript module.

Natutunan ko na mas organized kapag hinahati ang code sa iba't ibang files. Ang isang file pwedeng mag-export ng functions o variables, tapos pwede ko silang i-import sa ibang file kapag kailangan. Nakatulong din sa akin ang activity para maintindihan ko na kailangan ko ring i-check ang HTML file kapag gumagamit ng JavaScript modules, kasi doon pala naka-set kung paano tatakbo ang JavaScript file.

### 17_logical_operators.js

The logical operators are familiar to me because they are the same as in our Math Logic subject in our 2nd year. Also, there is a difference between `null` and `undefined`.

### 18_ternary_nullish.js

I learned that optional chaining (`?.`) is a JavaScript feature that lets you safely access a property without an error. Kapag hindi ka gumamit ng optional chaining at `null` or `undefined` ang value, hindi niya ito mababasa at magkakaroon ng error. Pero kapag gumamit ka ng optional chaining, ilalabas niya lang sa console mo na `undefined` or `null` ang value without error.

### 19_strings_numbers.js

I learned that in JavaScript, the cleanest way to build strings with variables is by using template literals.

I also learned that `parseInt()` is a function in JS that lets you convert a string into an integer, and `toFixed()` is used when you are going to round a decimal. When you get a result of `NaN`, for example when you divide a string by a number, it won't work, so it is output as `NaN`.

### 20_array_methods.js

I learned how different array methods can be used to work with data inside an array of objects. The `filter()` function is used to get all the students who meet a certain condition. The `find()` function is used when I want to find a specific item. I also learned that `some()` checks if at least one item meets the condition. `sort()` is used to arrange the values in the array.

### 21_errors_json.js

I learned that instead of letting the program stop when an error happens, I can display a friendly message to the user.

I also learned that `JSON.stringify()` turns an object into a string.

### 22_async_javascript.js

This helped me understand how callbacks work with asynchronous operations in JavaScript. I learned that `setTimeout()` can simulate waiting for data, while the callback handles the result after the delay. This showed me how JavaScript can perform tasks without immediately stopping the rest of the program.

I learned that a Promise can either succeed or fail, while `async/await` makes the code easier to read and understand.

Nag-explore din ako ng Promises gamit ang `resolve()` at `async/await`. Mas naintindihan ko na ang Promise ay ginagamit para maghintay ng result, habang ang `await` ay naghihintay na matapos ang operation bago mag proceed ang code. 

One problem I encountered was understanding why the output does not always appear in the same order as the code. At first, medyo confusing kung bakit nauuna ang ibang `console.log()` kaysa sa messages inside `setTimeout()`. Na-realize ko na asynchronous ang `setTimeout()` at `fetch()`, kaya hindi sila agad nage-execute kahit na nasa earlier part sila ng code. Nahirapan din ako sa pag-intindi ng difference between callbacks, Promises, and `async/await` dahil pare-pareho silang ginagamit para sa asynchronous tasks pero magkaiba ang syntax at flow.

### 23_closures_scope.js

I learned that a variable declared inside an `if` block cannot be accessed outside that block. When I tried to use `insideBlock` outside the `if`, it caused a `ReferenceError`, which I was able to catch using `try/catch`. This helped me understand why block scope is important when declaring variables.

This also helped me understand how closures work in JavaScript. At first, medyo confusing sa akin kung paano naaalala ng function yung `count` kahit tapos na yung `createCounter()`. Na-realize ko na yung returned function ay may access pa rin sa `count`, kaya nag-i-increase siya every time na tinatawag ko yung counter. One problem I encountered was understanding why `counterB()` starts at 1 kahit na nag-call na ako ng `counterA()` twice. Akala ko noong una, pareho silang gumagamit ng same `count` variable. After testing the code, naintindihan ko na separate yung `count` ng bawat counter because each call to `createCounter()` creates its own closure.