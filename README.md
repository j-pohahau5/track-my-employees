# track-my-employees

## Description 

I created this project so an employer can track their employees using a command line for inputs. This application solves the issue that an employer can't track their employees and what role and department they are in, also to be able to add employee, roles, departments, and update employees.

Youtube Video Link: (https://youtu.be/1vvTnV1LMbc)


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Badges](#badges  )


## Installation

Steps:
1. open terminal and direct your self to my project
2. do a "npm i" in your command line in order to install my project.
3. once it is installed do a "mysql -u root -p" Password is password.
4. A) do a "source ./db/schema.sql;" for table and database to be created
4. B) if you want pre data to see if this works do a "source ./db/seeds.sql;" if not type exit then enter
5. once it is installed do a "npm start" to start prompt

## Usage 

Steps:
1. once you have run "npm start" you will be prompted with question and a drop down list of choices
2. once your are prompted with a choice select what you would like todo if view: department, role, or employee they it should display a table in command line. if add or update then answer prompts to do so
3. once you don do a control C to exit prompt


## Credits

https://www.w3schools.com/
https://developer.mozilla.org/en-US/
https://getbootstrap.com/
https://choosealicense.com/licenses/mit/


## License

MIT License

Copyright (c) [2023] [Jonathan Pohahau]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
## Badges

![badge](https://img.shields.io/badge/license-MIT-orange)
![badge](https://img.shields.io/badge/language-JavaScript-green)
![badge](https://img.shields.io/badge/language-Nodejs-brightgreen)
![badge](https://img.shields.io/badge/language-MySQL-blueviolet)
![badge](https://img.shields.io/badge/language-inquirer-blue)