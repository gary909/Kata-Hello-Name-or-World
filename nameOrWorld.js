/*
https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript

Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

hello "john"   => "Hello, John!"
hello "aliCE"  => "Hello, Alice!"
hello          => "Hello, World!" # name not given
hello ''       => "Hello, World!" # name is an empty String

function hello(name) {
  return '';
}

Test.assertSimilar(hello('johN'), 'Hello, John!', "returns 'Hello, John!' when given 'johN'")
Test.assertSimilar(hello('alice'), 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'")
Test.assertSimilar(hello(), 'Hello, World!', "returns 'Hello, World!' when name is not given")
Test.assertSimilar(hello(''), 'Hello, World!', "returns 'Hello, World!' when name is an empty String" )

*/

function hello(name) {
    if (name === '' || name === undefined) {
      return 'Hello, World!';
    } else {
      var lowName = name.toLowerCase();
    return 'Hello, ' + lowName.charAt(0).toUpperCase() + lowName.slice(1) + '!';
    }
  }
  
  console.log(hello());