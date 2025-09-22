var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "appcomb-notes-3-2",
  "level": "1",
  "url": "appcomb-notes-3-2.html",
  "type": "Handout",
  "number": "2.1",
  "title": "Combinatorial Proofs",
  "body": " Combinatorial Proofs    Let's go back to license plates allowing any three uppercase letters followed by any three numbers.     How many license plates start with a vowel followed by a consonant?      How many license plates end with a -digit number divisible by ? (Here we allow leading zeros in -digit numbers, unlike in the previous three questions.)      How many license plates start with a vowel followed by a consonant and end with a -digit number divisible by ?      How many license plates start with a vowel followed by a consonant or end with a -digit number divisible by ?       How many ways are there to form a string of length five using the alphabet A, B, C if exactly three characters in the string are to be the letter A? Write a sentence or two to explain your reasoning.     Peer instruction question 1   We saw this sum on the handout during our last class:     A square array of dots with box around those on the diagonal                  Dots below the box:    Total dots:    Dots in the box:    Dots outside the box:    Dots below the box:    How do the answers to the five bullets above change when the grid is ?        We just saw that . Can we find a proof that counts -element subsets?  Discuss with your group: How many -element subsets of have each number below as the smallest element of ?   1    2    3               for    How can you use this to explain the identity?     Peer instruction question 2    Peer instruction question 3    Peer instruction question 4   "
},
{
  "id": "ex-plate-vowel-consonant",
  "level": "2",
  "url": "appcomb-notes-3-2.html#ex-plate-vowel-consonant",
  "type": "Problem",
  "number": "2.1",
  "title": "",
  "body": "  Let's go back to license plates allowing any three uppercase letters followed by any three numbers.     How many license plates start with a vowel followed by a consonant?      How many license plates end with a -digit number divisible by ? (Here we allow leading zeros in -digit numbers, unlike in the previous three questions.)      How many license plates start with a vowel followed by a consonant and end with a -digit number divisible by ?      How many license plates start with a vowel followed by a consonant or end with a -digit number divisible by ?    "
},
{
  "id": "appcomb-notes-3-2-3",
  "level": "2",
  "url": "appcomb-notes-3-2.html#appcomb-notes-3-2-3",
  "type": "Problem",
  "number": "2.2",
  "title": "",
  "body": "  How many ways are there to form a string of length five using the alphabet A, B, C if exactly three characters in the string are to be the letter A? Write a sentence or two to explain your reasoning.   "
},
{
  "id": "appcomb-notes-3-2-7",
  "level": "2",
  "url": "appcomb-notes-3-2.html#appcomb-notes-3-2-7",
  "type": "Activity",
  "number": "2.1.1",
  "title": "",
  "body": "  We just saw that . Can we find a proof that counts -element subsets?  Discuss with your group: How many -element subsets of have each number below as the smallest element of ?   1    2    3               for    How can you use this to explain the identity?   "
},
{
  "id": "appcomb-notes-3-3",
  "level": "1",
  "url": "appcomb-notes-3-3.html",
  "type": "Handout",
  "number": "2.2",
  "title": "Ubiquitous Nature of Binomial Coefficients",
  "body": " Ubiquitous Nature of Binomial Coefficients     Find a simple formula for . By a simple formula, I mean one without a summation in it. One way to do this is to think about something that's being counted and find a \"better\" way to count it.       Think of a committee (or team) with a chair (or captain).    Remember that         Peer instruction questions 1 4.       We want to count the number of solutions to where each is an integer. For each of the following scenarios, determine the number of solutions.     Each            Each            Each and            Each but change to .           Each but change to .           "
},
{
  "id": "appcomb-notes-3-3-2-1",
  "level": "2",
  "url": "appcomb-notes-3-3.html#appcomb-notes-3-3-2-1",
  "type": "Activity",
  "number": "2.2.1",
  "title": "",
  "body": "  Find a simple formula for . By a simple formula, I mean one without a summation in it. One way to do this is to think about something that's being counted and find a \"better\" way to count it.       Think of a committee (or team) with a chair (or captain).    Remember that       "
},
{
  "id": "appcomb-notes-3-3-3-1",
  "level": "2",
  "url": "appcomb-notes-3-3.html#appcomb-notes-3-3-3-1",
  "type": "Activity",
  "number": "2.2.2",
  "title": "",
  "body": "  We want to count the number of solutions to where each is an integer. For each of the following scenarios, determine the number of solutions.     Each            Each            Each and            Each but change to .           Each but change to .         "
},
{
  "id": "appcomb-notes-4-2",
  "level": "1",
  "url": "appcomb-notes-4-2.html",
  "type": "Handout",
  "number": "3.1",
  "title": "Recursive Counting",
  "body": " Recursive Counting  What do you need to know about lattice path problems?  Consider the expansion of . Find the coefficient on each of the following terms.                   How can we interpret the notation ?   Peer instruction question 1       Peer instruction question 2   Let be the number of regions determined by lines in the plane drawn so that each pair intersects but no three lines intersect at a single point.         0     1     2     3     4           "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
