var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "notes-strings-2",
  "level": "1",
  "url": "notes-strings-2.html",
  "type": "Handout",
  "number": "2.1",
  "title": "Combinatorial Proofs",
  "body": " Combinatorial Proofs    Let's go back to license plates allowing any three uppercase letters followed by any three numbers.     How many license plates start with a vowel followed by a consonant?      How many license plates end with a -digit number divisible by ? (Here we allow leading zeros in -digit numbers, unlike in the previous three questions.)      How many license plates start with a vowel followed by a consonant and end with a -digit number divisible by ?      How many license plates start with a vowel followed by a consonant or end with a -digit number divisible by ?        How many ways are there to form a string of length 10 using symbols from the 26-letter uppercase English alphabet if exactly three characters in the string are to elements of the set ? Write a sentence or two to explain your reasoning.      How does your answer change if the characters from the set must be distinct?      Peer instruction question 1   We saw this sum on the handout during our last class:      A square grid of dots. There are 7 rows, each containing 7 dots. There is a box surrounding the dots lying on the diagonal that runs from the upper-left corner of the grid to the lower-right corner of the grid.                   Dots below the box:    Total dots:    Dots in the box:    Dots outside the box:    Dots below the box:    How do the answers to the five bullets above change when the grid is ?        We just saw that . Can we find a proof that counts -element subsets?  Discuss with your group: How many -element subsets of have each number below as the smallest element of ?   1    2    3               for    How can you use this to explain the identity?    There are options that can be paired with 1 to make a 2-element set with as the least element since the largest option we have is . Working through in general, we see that there are 2-element subsets of having as the least element, and that least element can be anything from to . Since each 2-element subset has a unique element, if we sum , we are counting the 2-element subsets of grouped by their smallest element, so the sum equals .     Peer instruction question 2    Peer instruction question 3    Peer instruction question 4   "
},
{
  "id": "ex-plate-vowel-consonant",
  "level": "2",
  "url": "notes-strings-2.html#ex-plate-vowel-consonant",
  "type": "Problem",
  "number": "2.1",
  "title": "",
  "body": "  Let's go back to license plates allowing any three uppercase letters followed by any three numbers.     How many license plates start with a vowel followed by a consonant?      How many license plates end with a -digit number divisible by ? (Here we allow leading zeros in -digit numbers, unlike in the previous three questions.)      How many license plates start with a vowel followed by a consonant and end with a -digit number divisible by ?      How many license plates start with a vowel followed by a consonant or end with a -digit number divisible by ?    "
},
{
  "id": "notes-strings-2-3",
  "level": "2",
  "url": "notes-strings-2.html#notes-strings-2-3",
  "type": "Activity",
  "number": "2.1.1",
  "title": "",
  "body": "   How many ways are there to form a string of length 10 using symbols from the 26-letter uppercase English alphabet if exactly three characters in the string are to elements of the set ? Write a sentence or two to explain your reasoning.      How does your answer change if the characters from the set must be distinct?    "
},
{
  "id": "notes-strings-2-7",
  "level": "2",
  "url": "notes-strings-2.html#notes-strings-2-7",
  "type": "Activity",
  "number": "2.1.2",
  "title": "",
  "body": "  We just saw that . Can we find a proof that counts -element subsets?  Discuss with your group: How many -element subsets of have each number below as the smallest element of ?   1    2    3               for    How can you use this to explain the identity?    There are options that can be paired with 1 to make a 2-element set with as the least element since the largest option we have is . Working through in general, we see that there are 2-element subsets of having as the least element, and that least element can be anything from to . Since each 2-element subset has a unique element, if we sum , we are counting the 2-element subsets of grouped by their smallest element, so the sum equals .   "
},
{
  "id": "notes-strings-3",
  "level": "1",
  "url": "notes-strings-3.html",
  "type": "Handout",
  "number": "2.2",
  "title": "Ubiquitous Nature of Binomial Coefficients",
  "body": " Ubiquitous Nature of Binomial Coefficients     Find a simple formula for . By a simple formula, I mean one without a summation in it. One way to do this is to think about something that's being counted and find a \"better\" way to count it.       Think of a committee (or team) with a chair (or captain).    Remember that        We start by rewriting the summation as . Now we can think of this as a situation where we have students from Wisconsin and students from Minnesota. We need to choose a team of size , and there is some obscure state law requiring that the captain of the team be from Wisconsin. The summation groups the ways of choosing such a team by the number of students from Wisconsin on the team. Looking at the final formulation, we see that there are ways to choose Wisconsinites for the team, then ways to choose one of those students to be the captain, and then we still need another students for the team chosen from the Minnesotans in one of ways. An alternative way to think of this is to first choose the Wisconsinite to be captain, which can be done in ways, and then just choosing any of the remaining students to be on the team. There are ways to make that choice, and thus the summation must be equal to .  If you prefer thinking about strings, we can take a different approach. Suppose we wish to make strings of length with the restriction that the string contain a single that must appear in the first positions of the string along with positions that are and positions that are . In this model, there are choices for where the goes and then we must choose of the other positions to fill in with (and then the rest get filled with ). That can be done in ways. We can connect this to the summation by having represent the number of positions in the first positions of the string that are nonzero. Once we choose which of those are nonzero, we have to pick one of those positions to make a and fill the others with s. We then choose of the positions in the second half of the string to fill with s so that we have a total of positions that are .     Peer instruction questions 1 4.       We want to count the number of solutions to where each is an integer. For each of the following scenarios, determine the number of solutions.     Each       Each       Each and       Each but change to .      Each but change to .      "
},
{
  "id": "notes-strings-3-2-1",
  "level": "2",
  "url": "notes-strings-3.html#notes-strings-3-2-1",
  "type": "Activity",
  "number": "2.2.1",
  "title": "",
  "body": "  Find a simple formula for . By a simple formula, I mean one without a summation in it. One way to do this is to think about something that's being counted and find a \"better\" way to count it.       Think of a committee (or team) with a chair (or captain).    Remember that        We start by rewriting the summation as . Now we can think of this as a situation where we have students from Wisconsin and students from Minnesota. We need to choose a team of size , and there is some obscure state law requiring that the captain of the team be from Wisconsin. The summation groups the ways of choosing such a team by the number of students from Wisconsin on the team. Looking at the final formulation, we see that there are ways to choose Wisconsinites for the team, then ways to choose one of those students to be the captain, and then we still need another students for the team chosen from the Minnesotans in one of ways. An alternative way to think of this is to first choose the Wisconsinite to be captain, which can be done in ways, and then just choosing any of the remaining students to be on the team. There are ways to make that choice, and thus the summation must be equal to .  If you prefer thinking about strings, we can take a different approach. Suppose we wish to make strings of length with the restriction that the string contain a single that must appear in the first positions of the string along with positions that are and positions that are . In this model, there are choices for where the goes and then we must choose of the other positions to fill in with (and then the rest get filled with ). That can be done in ways. We can connect this to the summation by having represent the number of positions in the first positions of the string that are nonzero. Once we choose which of those are nonzero, we have to pick one of those positions to make a and fill the others with s. We then choose of the positions in the second half of the string to fill with s so that we have a total of positions that are .   "
},
{
  "id": "notes-strings-3-3-1",
  "level": "2",
  "url": "notes-strings-3.html#notes-strings-3-3-1",
  "type": "Activity",
  "number": "2.2.2",
  "title": "",
  "body": "  We want to count the number of solutions to where each is an integer. For each of the following scenarios, determine the number of solutions.     Each       Each       Each and       Each but change to .      Each but change to .    "
},
{
  "id": "notes-lattice-binomial-multinomial",
  "level": "1",
  "url": "notes-lattice-binomial-multinomial.html",
  "type": "Handout",
  "number": "2.3",
  "title": "Lattice Paths, Binomial Theorem, Multinomial Theorem",
  "body": " Lattice Paths, Binomial Theorem, Multinomial Theorem     A lattice path is a sequence of ordered pairs of integers so that for all , either    and , or     and .         A grid of dots. There are 13 columns of dots and 8 rows of dots. The dot in the lower left corner is labeled . The dot in the upper right corner is labeled . There is a path marked on the grid between these dots. The path moves only to the right and up. It consists of three moves to the right, two moves up, one move right, one move up, one move right, three moves up, five moves right, one move up, one move right, one move up, and two moves right.          The town of Mascotville is laid out as a grid. There are seven parallel streets ( through ) that run north-south and five parallel avenues ( through ) that run east-west.     Buzz starts at the intersection of Street and Avenue and wants to get to Bucky's burrow at the intersection of Street and Avenue traveling only on streets\/avenues, and always moving toward Bucky's burrow. How many ways can he do this?           The Varsity is at the intersection of Street and Avenue. How many ways can Buzz get to Bucky's burrow if he insists on stopping at The Varsity?           Suppose Buzz is put on a diet and prohibited from eating at The Varsity. He knows if he goes by it, he'll stop and eat, so he must avoid it completely. How many ways are there for him to get to Bucky's burrow that avoid The Varsity?    We count all the lattice paths and subtract those that go through The Varsity, so we have .      How many lattice paths are there from to that do not cross the line ? (Lattice paths are allowed to touch the line.)      Peer instruction question 1         Find a - correspondence between the set of good lattice paths and each of the following sets:     Sequences of  's and  's in which the sum of the first terms is non-negative for all .    Construct a lattice path by reading the sequence from left to right and writing an H when you see a 1 and writing a V when you see a .      Full-parenthesizations of a product of factors as if the multiplication operation were not associative. Examples:    factors:      factors: and      factors: , , , , and        Construct a lattice path by reading the product from left to right and writing an H whenever you encounter a left parenthesis and a V whenever you encounter a right parenthesis.      Binomial Theorem   Let and be real numbers to that , , and are all nonzero. For every nonnegative integer ,        Peer instruction question 3.       How many rearrangements of the string are there if all letters must be used?    Length of string is 48 characters.                       A  P  L  I  E  D  C  O  M  B  N  T  R  S  H  G  V  K    2  2  1  6  6  1  2  5  2  2  3  5  3  4  1  1  1  1            Multinomial Theorem   Let be nonzero real numbers with . Then for every nonnegative integer ,         How many terms are there in the summation from the multinomial theorem for ?    This is a folder distribution problem! We have 17 folders and four recipients. Each recipient could get 0, so we need 4 artificial folders. Thus, we have folders, which gives us 20 gaps. We need to choose 3, so there are terms in the sum.    Let's take another look at a class prep question. What is the coefficient on in ?     Peer instruction question 4       Consider the expansion of . Find the coefficient on each of the following terms.          The Multinomial Theorem tells us that . Thus, we need and . Hence, the only options are or . When , we would have , which is not an integer. Thus, we must have , which means that and . Since we must also have , we thus have . Therefore, the coefficient on is .           Relying on the information from the first part of the activity, we must have and . The first equation requires and , but then the second equation would need , which is impossible. Therefore, the coefficient on is .           Relying on the information from the first part of the activity, we must have and . These equations can be rewritten as and . Since all variables must be nonnegative, we see that from the first equation and from the second equation . Thus, we need only consider and . When , we have , , and thus . When , we have , , and thus . Therefore, the coefficient on is .      "
},
{
  "id": "def-lattice-path",
  "level": "2",
  "url": "notes-lattice-binomial-multinomial.html#def-lattice-path",
  "type": "Definition",
  "number": "2.2",
  "title": "",
  "body": "  A lattice path is a sequence of ordered pairs of integers so that for all , either    and , or     and .      "
},
{
  "id": "notes-lattice-binomial-multinomial-3-1",
  "level": "2",
  "url": "notes-lattice-binomial-multinomial.html#notes-lattice-binomial-multinomial-3-1",
  "type": "Activity",
  "number": "2.3.1",
  "title": "",
  "body": "  The town of Mascotville is laid out as a grid. There are seven parallel streets ( through ) that run north-south and five parallel avenues ( through ) that run east-west.     Buzz starts at the intersection of Street and Avenue and wants to get to Bucky's burrow at the intersection of Street and Avenue traveling only on streets\/avenues, and always moving toward Bucky's burrow. How many ways can he do this?           The Varsity is at the intersection of Street and Avenue. How many ways can Buzz get to Bucky's burrow if he insists on stopping at The Varsity?           Suppose Buzz is put on a diet and prohibited from eating at The Varsity. He knows if he goes by it, he'll stop and eat, so he must avoid it completely. How many ways are there for him to get to Bucky's burrow that avoid The Varsity?    We count all the lattice paths and subtract those that go through The Varsity, so we have .    "
},
{
  "id": "notes-lattice-binomial-multinomial-3-2",
  "level": "2",
  "url": "notes-lattice-binomial-multinomial.html#notes-lattice-binomial-multinomial-3-2",
  "type": "Question",
  "number": "2.3",
  "title": "",
  "body": " How many lattice paths are there from to that do not cross the line ? (Lattice paths are allowed to touch the line.)  "
},
{
  "id": "notes-lattice-binomial-multinomial-4-1",
  "level": "2",
  "url": "notes-lattice-binomial-multinomial.html#notes-lattice-binomial-multinomial-4-1",
  "type": "Activity",
  "number": "2.3.2",
  "title": "",
  "body": "  Find a - correspondence between the set of good lattice paths and each of the following sets:     Sequences of  's and  's in which the sum of the first terms is non-negative for all .    Construct a lattice path by reading the sequence from left to right and writing an H when you see a 1 and writing a V when you see a .      Full-parenthesizations of a product of factors as if the multiplication operation were not associative. Examples:    factors:      factors: and      factors: , , , , and        Construct a lattice path by reading the product from left to right and writing an H whenever you encounter a left parenthesis and a V whenever you encounter a right parenthesis.    "
},
{
  "id": "thm-binomial",
  "level": "2",
  "url": "notes-lattice-binomial-multinomial.html#thm-binomial",
  "type": "Theorem",
  "number": "2.4",
  "title": "Binomial Theorem.",
  "body": " Binomial Theorem   Let and be real numbers to that , , and are all nonzero. For every nonnegative integer ,    "
},
{
  "id": "notes-lattice-binomial-multinomial-5-1",
  "level": "2",
  "url": "notes-lattice-binomial-multinomial.html#notes-lattice-binomial-multinomial-5-1",
  "type": "Activity",
  "number": "2.3.3",
  "title": "",
  "body": "  How many rearrangements of the string are there if all letters must be used?    Length of string is 48 characters.                       A  P  L  I  E  D  C  O  M  B  N  T  R  S  H  G  V  K    2  2  1  6  6  1  2  5  2  2  3  5  3  4  1  1  1  1          "
},
{
  "id": "thm-multinomial",
  "level": "2",
  "url": "notes-lattice-binomial-multinomial.html#thm-multinomial",
  "type": "Theorem",
  "number": "2.5",
  "title": "Multinomial Theorem.",
  "body": " Multinomial Theorem   Let be nonzero real numbers with . Then for every nonnegative integer ,    "
},
{
  "id": "notes-lattice-binomial-multinomial-5-4",
  "level": "2",
  "url": "notes-lattice-binomial-multinomial.html#notes-lattice-binomial-multinomial-5-4",
  "type": "Activity",
  "number": "2.3.4",
  "title": "",
  "body": "  How many terms are there in the summation from the multinomial theorem for ?    This is a folder distribution problem! We have 17 folders and four recipients. Each recipient could get 0, so we need 4 artificial folders. Thus, we have folders, which gives us 20 gaps. We need to choose 3, so there are terms in the sum.   "
},
{
  "id": "notes-lattice-binomial-multinomial-6-1",
  "level": "2",
  "url": "notes-lattice-binomial-multinomial.html#notes-lattice-binomial-multinomial-6-1",
  "type": "Activity",
  "number": "2.3.5",
  "title": "",
  "body": "  Consider the expansion of . Find the coefficient on each of the following terms.          The Multinomial Theorem tells us that . Thus, we need and . Hence, the only options are or . When , we would have , which is not an integer. Thus, we must have , which means that and . Since we must also have , we thus have . Therefore, the coefficient on is .           Relying on the information from the first part of the activity, we must have and . The first equation requires and , but then the second equation would need , which is impossible. Therefore, the coefficient on is .           Relying on the information from the first part of the activity, we must have and . These equations can be rewritten as and . Since all variables must be nonnegative, we see that from the first equation and from the second equation . Thus, we need only consider and . When , we have , , and thus . When , we have , , and thus . Therefore, the coefficient on is .    "
},
{
  "id": "notes-induction-2",
  "level": "1",
  "url": "notes-induction-2.html",
  "type": "Handout",
  "number": "3.1",
  "title": "Recursive Counting",
  "body": " Recursive Counting  How can we interpret the notation ?   Peer instruction question 1        Suppose that is a function defined on the positive integers. You know that and for all , . What is ?     Peer instruction question 2   Let be the number of regions determined by lines in the plane drawn so that each pair intersects but no three lines intersect at a single point.         0     1     2     3     4           "
},
{
  "id": "notes-induction-2-5",
  "level": "2",
  "url": "notes-induction-2.html#notes-induction-2-5",
  "type": "Activity",
  "number": "3.1.1",
  "title": "",
  "body": "  Suppose that is a function defined on the positive integers. You know that and for all , . What is ?   "
},
{
  "id": "notes-induction-3",
  "level": "1",
  "url": "notes-induction-3.html",
  "type": "Handout",
  "number": "3.2",
  "title": "Principle of Mathematical Induction",
  "body": " Principle of Mathematical Induction   Principle of Mathematical Induction   Let be an open statement involving a positive integer . If is true, and for every positive integer , the statement is true whenever is true, then is true for every positive integer .     Key Parts of an Inductive Proof  When trying to prove an open statement is true for all positive integers by mathematical induction, the key steps are   Basis Step  Show that is true.    Inductive step  Show that if for some , is true, then is true.       PI questions: getting started, after basis step, after IH.     For all positive integers , .           Recall that we have defined to be the number of regions in the plane determined by lines arranged so that (1) each pair of lines intersects and (2) no three lines intersect at a single point and argued that and for , . Prove that for all positive integers , .     We will prove this by induction. For the base case, let . By definition, . We also see that , which completes the verification of the base case.  Now assume that for some that . We will show that . Since , we have that . Therefore, the recursive formula for applies to , and we have . Therefore, by the Principle of Mathematical Induction, for all positive integers .       We say that an integer  divides an integer provided that there exists an integer such that . Prove that for all integers , divides .     We will prove this by induction. The basis step is , for which we have . Therefore, we can see that divides as required.  Now assume that for some positive integer , we have that divides . This means that there exists an integer so that . We can rearrange this to say that . Now we consider for the induction step. We can write as , so we have by the induction hypothesis. Using algebra, we now have that this equals . Since is an integer, is also an integer. Therefore, is four times an integer, which is what it means for to divide . Hence, by the Principle of Mathematical Induction, divides for all positive integers .       Let , , and for all integers , Prove that an explict formula for is given by .     We will prove this using strong induction. Because the recursive formula only applies for , we will need to address and as base cases. We are given that and . The formula , when considered for and , yields and , respectively. Thus, the basis step is complete.  Now assume that for some integer and all integers with that . We must prove that . Since , we have that , and thus the recursive formula for applies. Therefore, . This is what we needed to show. Therefore, by the Principle of Mathematical Induction, we have that for all integers , .      "
},
{
  "id": "axiom-induction",
  "level": "2",
  "url": "notes-induction-3.html#axiom-induction",
  "type": "Axiom",
  "number": "3.1",
  "title": "Principle of Mathematical Induction.",
  "body": " Principle of Mathematical Induction   Let be an open statement involving a positive integer . If is true, and for every positive integer , the statement is true whenever is true, then is true for every positive integer .   "
},
{
  "id": "thm-ind-example",
  "level": "2",
  "url": "notes-induction-3.html#thm-ind-example",
  "type": "Theorem",
  "number": "3.2",
  "title": "",
  "body": "  For all positive integers , .       "
},
{
  "id": "notes-induction-3-6",
  "level": "2",
  "url": "notes-induction-3.html#notes-induction-3-6",
  "type": "Activity",
  "number": "3.2.1",
  "title": "",
  "body": "   Recall that we have defined to be the number of regions in the plane determined by lines arranged so that (1) each pair of lines intersects and (2) no three lines intersect at a single point and argued that and for , . Prove that for all positive integers , .     We will prove this by induction. For the base case, let . By definition, . We also see that , which completes the verification of the base case.  Now assume that for some that . We will show that . Since , we have that . Therefore, the recursive formula for applies to , and we have . Therefore, by the Principle of Mathematical Induction, for all positive integers .       We say that an integer  divides an integer provided that there exists an integer such that . Prove that for all integers , divides .     We will prove this by induction. The basis step is , for which we have . Therefore, we can see that divides as required.  Now assume that for some positive integer , we have that divides . This means that there exists an integer so that . We can rearrange this to say that . Now we consider for the induction step. We can write as , so we have by the induction hypothesis. Using algebra, we now have that this equals . Since is an integer, is also an integer. Therefore, is four times an integer, which is what it means for to divide . Hence, by the Principle of Mathematical Induction, divides for all positive integers .       Let , , and for all integers , Prove that an explict formula for is given by .     We will prove this using strong induction. Because the recursive formula only applies for , we will need to address and as base cases. We are given that and . The formula , when considered for and , yields and , respectively. Thus, the basis step is complete.  Now assume that for some integer and all integers with that . We must prove that . Since , we have that , and thus the recursive formula for applies. Therefore, . This is what we needed to show. Therefore, by the Principle of Mathematical Induction, we have that for all integers , .     "
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
