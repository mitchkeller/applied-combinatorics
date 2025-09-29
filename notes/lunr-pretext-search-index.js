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
},
{
  "id": "appcomb-notes-4-3",
  "level": "1",
  "url": "appcomb-notes-4-3.html",
  "type": "Handout",
  "number": "3.2",
  "title": "Principle of Mathematical Induction",
  "body": " Principle of Mathematical Induction   Principle of Mathematical Induction   Let be an open statement involving a positive integer . If is true, and for every positive integer , the statement is true whenever is true, then is true for every positive integer .     Key Parts of an Inductive Proof  When trying to prove an open statement is true for all positive integers by mathematical induction, the key steps are   Basis Step  Show that is true.    Inductive step  Show that if for some , is true, then is true.       PI questions: getting started, after basis step, after IH.     For all positive integers , .           Recall that we have defined to be the number of regions in the plane determined by lines arranged so that (1) each pair of lines intersects and (2) no three lines intersect at a single point and argued that and for , . Prove that for all positive integers , .     We will prove this by induction. For the base case, let . By definition, . We also see that , which completes the verification of the base case.  Now assume that for some that . We will show that . Since , we have that . Therefore, the recursive formula for applies to , and we have . Therefore, by the Principle of Mathematical Induction, for all positive integers .       We say that an integer  divides an integer provided that there exists an integer such that . Prove that for all integers , divides .     We will prove this by induction. The basis step is , for which we have . Therefore, we can see that divides as required.  Now assume that for some positive integer , we have that divides . This means that there exists an integer so that . We can rearrange this to say that . Now we consider for the induction step. We can write as , so we have by the induction hypothesis. Using algebra, we now have that this equals . Since is an integer, is also an integer. Therefore, is four times an integer, which is what it means for to divide . Hence, by the Principle of Mathematical Induction, divides for all positive integers .       Let , , and for all integers , Prove that an explict formula for is given by .     We will prove this using strong induction. Because the recursive formula only applies for , we will need to address and as base cases. We are given that and . The formula , when considered for and , yields and , respectively. Thus, the basis step is complete.  Now assume that for some integer and all integers with that . We must prove that . Since , we have that , and thus the recursive formula for applies. Therefore, . This is what we needed to show. Therefore, by the Principle of Mathematical Induction, we have that for all integers , .      "
},
{
  "id": "axiom-induction",
  "level": "2",
  "url": "appcomb-notes-4-3.html#axiom-induction",
  "type": "Axiom",
  "number": "3.1",
  "title": "Principle of Mathematical Induction.",
  "body": " Principle of Mathematical Induction   Let be an open statement involving a positive integer . If is true, and for every positive integer , the statement is true whenever is true, then is true for every positive integer .   "
},
{
  "id": "thm-ind-example",
  "level": "2",
  "url": "appcomb-notes-4-3.html#thm-ind-example",
  "type": "Theorem",
  "number": "3.2",
  "title": "",
  "body": "  For all positive integers , .       "
},
{
  "id": "appcomb-notes-4-3-6",
  "level": "2",
  "url": "appcomb-notes-4-3.html#appcomb-notes-4-3-6",
  "type": "Activity",
  "number": "3.2.1",
  "title": "",
  "body": "   Recall that we have defined to be the number of regions in the plane determined by lines arranged so that (1) each pair of lines intersects and (2) no three lines intersect at a single point and argued that and for , . Prove that for all positive integers , .     We will prove this by induction. For the base case, let . By definition, . We also see that , which completes the verification of the base case.  Now assume that for some that . We will show that . Since , we have that . Therefore, the recursive formula for applies to , and we have . Therefore, by the Principle of Mathematical Induction, for all positive integers .       We say that an integer  divides an integer provided that there exists an integer such that . Prove that for all integers , divides .     We will prove this by induction. The basis step is , for which we have . Therefore, we can see that divides as required.  Now assume that for some positive integer , we have that divides . This means that there exists an integer so that . We can rearrange this to say that . Now we consider for the induction step. We can write as , so we have by the induction hypothesis. Using algebra, we now have that this equals . Since is an integer, is also an integer. Therefore, is four times an integer, which is what it means for to divide . Hence, by the Principle of Mathematical Induction, divides for all positive integers .       Let , , and for all integers , Prove that an explict formula for is given by .     We will prove this using strong induction. Because the recursive formula only applies for , we will need to address and as base cases. We are given that and . The formula , when considered for and , yields and , respectively. Thus, the basis step is complete.  Now assume that for some integer and all integers with that . We must prove that . Since , we have that , and thus the recursive formula for applies. Therefore, . This is what we needed to show. Therefore, by the Principle of Mathematical Induction, we have that for all integers , .     "
},
{
  "id": "appcomb-notes-5-2",
  "level": "1",
  "url": "appcomb-notes-5-2.html",
  "type": "Handout",
  "number": "4.1",
  "title": "Notation and Terminology",
  "body": " Notation and Terminology    Peer instruction questions 1 3.    Two graphs    Two graphs    Two graphs       Suppose is an induced spanning subgraph of a graph . Discuss with your group what this would mean.     Peer instruction questions 4 5.    Two graphs    Two graphs      On the Complexity of Graph Isomorphism     Let denote the degree of vertex in graph . Then .      In any graph, the number of vertices of odd degree is even.       Walk      Path      Cycle           A vertex in a graph is called a leaf provided that      Every tree on at least two vertices has at least two leaves.      If is a tree, then for every pair of distinct vertices , there exists a unique path from to in .          With your neighbors, use mathematical induction to prove that every tree on vertices has exactly edges.  How many edges would an -vertex forest consisting of trees have?       "
},
{
  "id": "appcomb-notes-5-2-3-1",
  "level": "2",
  "url": "appcomb-notes-5-2.html#appcomb-notes-5-2-3-1",
  "type": "Activity",
  "number": "4.1.1",
  "title": "",
  "body": "  Suppose is an induced spanning subgraph of a graph . Discuss with your group what this would mean.   "
},
{
  "id": "thm-first-thm-gt",
  "level": "2",
  "url": "appcomb-notes-5-2.html#thm-first-thm-gt",
  "type": "Theorem",
  "number": "4.1",
  "title": "",
  "body": "  Let denote the degree of vertex in graph . Then .   "
},
{
  "id": "cor-num-odd-vts",
  "level": "2",
  "url": "appcomb-notes-5-2.html#cor-num-odd-vts",
  "type": "Corollary",
  "number": "4.2",
  "title": "",
  "body": "  In any graph, the number of vertices of odd degree is even.   "
},
{
  "id": "def-tree",
  "level": "2",
  "url": "appcomb-notes-5-2.html#def-tree",
  "type": "Definition",
  "number": "4.3",
  "title": "",
  "body": "  A vertex in a graph is called a leaf provided that   "
},
{
  "id": "thm-tree-leaves",
  "level": "2",
  "url": "appcomb-notes-5-2.html#thm-tree-leaves",
  "type": "Theorem",
  "number": "4.4",
  "title": "",
  "body": "  Every tree on at least two vertices has at least two leaves.   "
},
{
  "id": "thm-tree-unique-path",
  "level": "2",
  "url": "appcomb-notes-5-2.html#thm-tree-unique-path",
  "type": "Theorem",
  "number": "4.5",
  "title": "",
  "body": "  If is a tree, then for every pair of distinct vertices , there exists a unique path from to in .   "
},
{
  "id": "appcomb-notes-5-2-6-1",
  "level": "2",
  "url": "appcomb-notes-5-2.html#appcomb-notes-5-2-6-1",
  "type": "Activity",
  "number": "4.1.2",
  "title": "",
  "body": "    With your neighbors, use mathematical induction to prove that every tree on vertices has exactly edges.  How many edges would an -vertex forest consisting of trees have?     "
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
