/**
 * Angular Truncate - Ellipsis for your templates
 * @version v0.1.3 - 2015-01-09
 * @link https://github.com/penance316/angular-truncate
 * @author Nero Denney
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
angular.module('truncate', [])
    .filter('characters', function() {
        return function(input, chars, breakOnWord, endString) {
            if (isNaN(chars)) return input;
            if (chars <= 0) return '';
            if (!endString) endString = '...';
            if (input && input.length > chars) {
                input = input.substring(0, chars);

                if (!breakOnWord) {
                    var lastspace = input.lastIndexOf(' ');
                    //get last space
                    if (lastspace !== -1) {
                        input = input.substr(0, lastspace);
                    }
                } else {
                    while (input.charAt(input.length - 1) === ' ') {
                        input = input.substr(0, input.length - 1);
                    }
                }
                return input + endString;
            }
            return input;
        };
    })
    .filter('splitcharacters', function() {
        return function(input, chars) {
            if (isNaN(chars)) return input;
            if (chars <= 0) return '';
            if (input && input.length > chars) {
                var prefix = input.substring(0, chars / 2);
                var postfix = input.substring(input.length - chars / 2, input.length);
                return prefix + '...' + postfix;
            }
            return input;
        };
    })
    .filter('words', function() {
        return function(input, words) {
            if (isNaN(words)) return input;
            if (words <= 0) return '';
            if (input) {
                var inputWords = input.split(/\s+/);
                if (inputWords.length > words) {
                    input = inputWords.slice(0, words).join(' ') + '...';
                }
            }
            return input;
        };
    });
