/* 
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  JavaScript Mocha/Chai
  FE JS6 Lab
*/
const expect = chai.expect
const assert = chai.assert

/* ----------------------------------------------------- */
// Resources:
// expect Documentation: https://www.chaijs.com/api/bdd/
// assert Documntation: https://www.chaijs.com/api/assert/
//
// assert is very similar to how you use expect, but offers
// extra ways to test.

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/**
 *          YOU MUST 'npm install' IN YOUR TERMINAL TO INSTALL MOCHA/CHAI 
 *          FROM THE DEPENDENCIES IN YOUR PACKAGE.JSON
 * 
 *  Step 1: Create a describe code block that describes what you expect the code to do.
 *  Step 2: Copy/Paste your debugged code from JS6Lab.js into the describe block (exclude the final console.log())
 *  Step 3: Create tests using expect/assert to test for expected outputs. Use multiple cases.
 *          If you're testing against an array/object - read the documentation on .deep/.deepEquals
 *
 *  Note:   Mocha/Chai is currently set up to only run in your given index.html. 
 *          expect/assert are given to you at the top of the code. 
 * 
 *          By default, the tests will pass unless you give it code to test against.
 * 
/*--------------------------------------------------------------------*/

describe('JS6 Lab Tests:', () => {
  describe('Example Question Test: Add Two Numbers', () => {
    it('#Should return the sum of two numbers', () => { // string and function
      // Copy & paste your debugged code from JS6Lab.js
      function addTwoNumbers(num1, num2) {
        return num1 + num2
      }
      // Write tests to ensure it works for multiple examples
      expect(addTwoNumbers(2, 3)).to.equal(5)
      expect(addTwoNumbers(-9, 17)).to.equal(8)
      expect(addTwoNumbers(750, 250)).to.equal(1000)
      expect(addTwoNumbers(132780, 443378)).to.equal(576158)
    })
// Don't really need this section. It's just a demonstration of what a failed test looks like
    describe('Example Failed Test: Add Two Numbers', () => {
      it('#Should fail', () => {
        function sumOfTwoNumbers(num1, num2) {
          num1 + num2
        }

        expect(sumOfTwoNumbers(2, 3)).to.equal(5)
      })
    })
  })

  /*--------------------------NEW TESTS BELOW-------------------------------*/
})
describe('JS6 Lab Tests:', () => {
  describe('Question 1a Test: Sorted Array of Numbers', () => {
    it('#Should return the sorted elements in the array', () => {
      // Copy & paste your debugged code from JS6Lab.js
      function arrayOfNumbers (array) {
        return array.sort((a, b) => a - b)
      }

      // Write tests to ensure it works for multiple examples
      expect(arrayOfNumbers([86, 32, 15, 96, 8])).to.equal([8,15, 32, 86, 96])
      expect(arrayOfNumbers([6, 3, 8, 9])).to.equal([3, 6, 8, 9])
      expect(addTwoNumbers([3, 2, 5])).to.equal([2, 3, 5])
      expect(addTwoNumbers([132780, 443378])).to.equal([132780, 443378])
    });
  });
});
// --------------------QUESTION 1B ----------------------
describe('JS6 Lab Tests:', () => {
  describe('Question 1b Test: My Wallet', () => {
    it('#Should return the amount of money', () => {
      // Copy & paste your debugged code from JS6Lab.js
        class Wallet {
          constructor(startingMoney) {
            this.money = startingMoney
          }
        
          addMoney(amount) {
            this.money += amount
          }
        
          removeMoney(amount) {
            this.money -= amount
          }

          getMoney() {
            return this.money
          }
        }
        
        console.log(myWallet.money)
      // Write tests to ensure it works for multiple examples
      expect(myWallet.getMoney(1000)).to.equal(1000)
      expect(myWallet.removeMoney(800)).to.equal(200)
      expect(myWallet.addMoney(300)).to.equal(500)
      expect(myWallet.addMoney(250)).to.equal(750)
      expect(myWallet.removeMoney(1000)).to.equal(-250)
    });
  });

/*--------------------------QUESTION 1c-------------------------------*/

describe('JS6 Lab Tests:', () => {
  describe('Question 1c: Day of the Week', () => {
    it('#Should return the day of the week', () => {
      // Copy & paste your debugged code from JS6Lab.js
      const dayOfTheWeek = (num) => {
        switch (num) {
          case 1:
            return 'Monday'
          case 2:
            return 'Tuesday'
          case 3:
            return 'Wednesday'
          case 4:
            return 'Thursday'
          case 5:
            return 'Friday'
          case 6:
            return 'Saturday'
          case 7:
            return 'Sunday'
          default:
            console.log('Err. Something went wrong.')
        }
      }
     
      console.log(dayOfTheWeek(5)) // should log Friday
      })
      // Write tests to ensure it works for multiple examples
      expect(dayOfTheWeek(3)).to.equal('Wednesday')
      expect(dayOfTheWeek(1)).to.equal('Monday')
      expect(dayOfTheWeek(6)).to.equal('Saturday')
      expect(dayOfTheWeek(4)).to.equal('Thursday')
    })

    describe('Example Failed Test: Add Two Numbers', () => {
      it('#Should fail', () => {
        const dayOfTheWeek = (num) => {
          switch (num) {
            case 1:
              return 'Monday'
            case 2:
              return 'Tuesday'
            case 3:
              return 'Wednesday'
            case 4:
              return 'Thursday'
            case 5:
              return 'Friday'
            case 6:
              return 'Saturday'
            case 7:
              return 'Sunday'
            default:
              console.log('Err. Something went wrong.')
          }
        }
       
        console.log(dayOfTheWeek(5)) // should log Friday

        expect(dayOfTheWeek(3)).to.equal('Wednesday')
      })
    })
  })
})

/*--------------------------QUESTION 1d-------------------------------*/

describe('JS6 Lab Tests:', () => {
  describe('Question 1d: Only Wizards Shall Pass', () => {
    it('#Should return wizards in the array', () => {
      // Copy & paste your debugged code from JS6Lab.js
      const movieCharacters = [
        {
          name: 'Howl',
          isAWizard: true,
          quote: `You're wearing that hat? After all the magic I used to make your dress pretty?`,
        },
        {
          name: 'Kalcifer',
          isAWizard: false,
          quote: `I don't cook! I'm a scary and powerful fire demon!`,
        },
        {
          name: 'Gandalf',
          isAWizard: true,
          quote: `You shall not pass!`,
        },
        {
          name: 'Luke Skywalker',
          isAWizard: false,
          quote: `May the Force be with you.`,
        },
      ]
     
      function onlyWizards(arrayOfCharacters) {
        return arrayOfCharacters.filter((character) => character.isAWizard === true)
      }
    
      console.table(onlyWizards(movieCharacters))
      })
      // Write tests to ensure it works for multiple examples
      // expect(arrayOfCharacters.filter.name((character) => character.isAWizard === true).to.equal('Howl', 'Gandalf'))
    })

    describe('Example Failed Test: Add Two Numbers', () => {
      it('#Should fail', () => {
        const movieCharacters = [
          {
            name: 'Howl',
            isAWizard: true,
            quote: `You're wearing that hat? After all the magic I used to make your dress pretty?`,
          },
          {
            name: 'Kalcifer',
            isAWizard: false,
            quote: `I don't cook! I'm a scary and powerful fire demon!`,
          },
          {
            name: 'Gandalf',
            isAWizard: true,
            quote: `You shall not pass!`,
          },
          {
            name: 'Luke Skywalker',
            isAWizard: false,
            quote: `May the Force be with you.`,
          },
        ]
       
        function onlyWizards(arrayOfCharacters) {
          return arrayOfCharacters.filter((character) => character.isAWizard === true)
        }
      
        console.table(onlyWizards(movieCharacters))

        expect(onlyWizards(movieCharacters.name)).to.equal('Howl', 'Gandalf')
      })
    })
  })

