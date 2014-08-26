$(function() {
   var jqconsole = $('#console').jqconsole('Challenge 1: Getting Started\n\nMake the console return "Hello World!" (type reset to clear console)\n', 'irb> ');
   var startPrompt = function () {
        // Start the prompt with history enabled.
        jqconsole.Prompt(true, function (input) {
            // Output input with the class jqconsole-output.
            jqconsole.Write(input + '\n', 'jqconsole-output');
            // Restart the prompt.
            startPrompt();
        });
    };
    startPrompt();
});
