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
  "body": " Principle of Mathematical Induction   Principle of Mathematical Induction   Let be an open statement involving a positive integer . If is true, and for every positive integer , the statement is true whenever is true, then is true for every positive integer .       Key Parts of an Inductive Proof  When trying to prove an open statement is true for all positive integers by mathematical induction, the key steps are   Basis Step  Show that is true.    Inductive step  Show that if for some , is true, then is true.       PI questions: getting started, after basis step, after IH.     For all positive integers , .           Recall that we have defined to be the number of regions in the plane determined by lines arranged so that (1) each pair of lines intersects and (2) no three lines intersect at a single point and argued that and for , . Prove that for all positive integers , .     We will prove this by induction. For the base case, let . By definition, . We also see that , which completes the verification of the base case.  Now assume that for some that . We will show that . Since , we have that . Therefore, the recursive formula for applies to , and we have . Therefore, by the Principle of Mathematical Induction, for all positive integers .       We say that an integer  divides an integer provided that there exists an integer such that . Prove that for all integers , divides .     We will prove this by induction. The basis step is , for which we have . Therefore, we can see that divides as required.  Now assume that for some positive integer , we have that divides . This means that there exists an integer so that . We can rearrange this to say that . Now we consider for the induction step. We can write as , so we have by the induction hypothesis. Using algebra, we now have that this equals . Since is an integer, is also an integer. Therefore, is four times an integer, which is what it means for to divide . Hence, by the Principle of Mathematical Induction, divides for all positive integers .       Let , , and for all integers , Prove that an explict formula for is given by .     We will prove this using strong induction. Because the recursive formula only applies for , we will need to address and as base cases. We are given that and . The formula , when considered for and , yields and , respectively. Thus, the basis step is complete.  Now assume that for some integer and all integers with that . We must prove that . Since , we have that , and thus the recursive formula for applies. Therefore, . This is what we needed to show. Therefore, by the Principle of Mathematical Induction, we have that for all integers , .      "
},
{
  "id": "axiom-induction",
  "level": "2",
  "url": "notes-induction-3.html#axiom-induction",
  "type": "Axiom",
  "number": "3.1",
  "title": "Principle of Mathematical Induction.",
  "body": " Principle of Mathematical Induction   Let be an open statement involving a positive integer . If is true, and for every positive integer , the statement is true whenever is true, then is true for every positive integer .     "
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
},
{
  "id": "ch-php-notes",
  "level": "1",
  "url": "ch-php-notes.html",
  "type": "Chapter",
  "number": "4",
  "title": "Placeholder",
  "body": " Placeholder  This is a placeholder for a chapter for which there are not currently notes.  "
},
{
  "id": "graphs-notation-term",
  "level": "1",
  "url": "graphs-notation-term.html",
  "type": "Handout",
  "number": "5.1",
  "title": "Notation and Terminology",
  "body": " Notation and Terminology    Peer instruction questions 1 3.             Suppose is an induced spanning subgraph of a graph . Discuss with your group what this would mean.    Here we must have that and are the same graph. The spanning property implies that has all of the vertices of . Being induced then forces all of the edges of to be in since contains all edges of that have both their endpoints in , which has all of the vertices of .       Peer instruction questions 4 5.          On the Complexity of Graph Isomorphism    The First Theorem of Graph Theory   Let denote the degree of vertex in graph . Then .         In any graph, the number of vertices of odd degree is even.       Walk      Path      Cycle             A tree is  A vertex in a tree is called a leaf provided that        Every tree on at least two vertices has at least two leaves.      If is a tree, then for every pair of distinct vertices , there exists a unique path from to in .          With your neighbors, use mathematical induction to prove that every tree on vertices has exactly edges.  How many edges would an -vertex forest consisting of trees have?       For the base case, when , the tree has only one vertex and thus no edges. Since , we have the desired relationship. Now assume that for some , every tree with vertices has exactly edges. Let be a tree with vertices. The tree has a leaf . Form from by deleting and its edge. Then has vertices, so by the induction hypothesis, has edges. However, has one more edge (incident with ) than , so has edges.   Notice in the proof above that it was essential to delete a leaf, as otherwise we would not know that the new graph is still a tree (it might be a forest).  A forest is a graph with no cycles, meaning that each component of a forest is itself a tree. Thus, we would need to have edges.     "
},
{
  "id": "graphs-notation-term-3-1",
  "level": "2",
  "url": "graphs-notation-term.html#graphs-notation-term-3-1",
  "type": "Activity",
  "number": "5.1.1",
  "title": "",
  "body": "  Suppose is an induced spanning subgraph of a graph . Discuss with your group what this would mean.    Here we must have that and are the same graph. The spanning property implies that has all of the vertices of . Being induced then forces all of the edges of to be in since contains all edges of that have both their endpoints in , which has all of the vertices of .   "
},
{
  "id": "thm-first-thm-gt",
  "level": "2",
  "url": "graphs-notation-term.html#thm-first-thm-gt",
  "type": "Theorem",
  "number": "5.1",
  "title": "The First Theorem of Graph Theory.",
  "body": " The First Theorem of Graph Theory   Let denote the degree of vertex in graph . Then .   "
},
{
  "id": "cor-num-odd-vts",
  "level": "2",
  "url": "graphs-notation-term.html#cor-num-odd-vts",
  "type": "Corollary",
  "number": "5.2",
  "title": "",
  "body": "  In any graph, the number of vertices of odd degree is even.   "
},
{
  "id": "def-tree",
  "level": "2",
  "url": "graphs-notation-term.html#def-tree",
  "type": "Definition",
  "number": "5.3",
  "title": "",
  "body": "    A tree is  A vertex in a tree is called a leaf provided that     "
},
{
  "id": "thm-tree-leaves",
  "level": "2",
  "url": "graphs-notation-term.html#thm-tree-leaves",
  "type": "Theorem",
  "number": "5.4",
  "title": "",
  "body": "  Every tree on at least two vertices has at least two leaves.   "
},
{
  "id": "thm-tree-unique-path",
  "level": "2",
  "url": "graphs-notation-term.html#thm-tree-unique-path",
  "type": "Theorem",
  "number": "5.5",
  "title": "",
  "body": "  If is a tree, then for every pair of distinct vertices , there exists a unique path from to in .   "
},
{
  "id": "graphs-notation-term-7-1",
  "level": "2",
  "url": "graphs-notation-term.html#graphs-notation-term-7-1",
  "type": "Activity",
  "number": "5.1.2",
  "title": "",
  "body": "    With your neighbors, use mathematical induction to prove that every tree on vertices has exactly edges.  How many edges would an -vertex forest consisting of trees have?       For the base case, when , the tree has only one vertex and thus no edges. Since , we have the desired relationship. Now assume that for some , every tree with vertices has exactly edges. Let be a tree with vertices. The tree has a leaf . Form from by deleting and its edge. Then has vertices, so by the induction hypothesis, has edges. However, has one more edge (incident with ) than , so has edges.   Notice in the proof above that it was essential to delete a leaf, as otherwise we would not know that the new graph is still a tree (it might be a forest).  A forest is a graph with no cycles, meaning that each component of a forest is itself a tree. Thus, we would need to have edges.   "
},
{
  "id": "notes-eulerham",
  "level": "1",
  "url": "notes-eulerham.html",
  "type": "Handout",
  "number": "5.2",
  "title": "Eulerian and Hamiltonian Graphs",
  "body": " Eulerian and Hamiltonian Graphs  Let be a graph without isolated vertices. We say that is eulerian  graph  eulerian  provided that there is a sequence of vertices from , with repetition allowed, so that  ;  for every , is an edge of ;  for every edge , there is a unique integer with for which .    When is eulerian, a sequence satisfying these three conditions is called an eulerian circuit  eulerian  circuit  . A sequence of vertices is called a circuit  circuit  when it satisfies only the first two of these conditions.    A graph is eulerian if and only if     Eulerian Circuit Finder      Input  A graph     Output  An eulerian circuit in , a vertex of odd degree in , or a connected component of and an edge of that is not in that connected component.        Initialize .    While not every edge of is traversed, determine if any vertex of is incident with an edge that has not been traversed.   If all vertices of have all their edges traversed, then return the vertices of as a connected component of with an edge not traversed by demonstrating that is not connected.    If has a vertex incident with an edge that has not been traversed, call that vertex . Construct a walk starting from . From vertex , follow the edge traversed by neither nor going to the neighbor of with smallest label.    The construction of halts at a vertex for which all edges have been traversed.   If , then return as a vertex of odd degree, showing that is not eulerian.    If , update the circuit by replacing in with the walk . Continue iterating by returning to step .          Return .           graph={0:[6,9],1:[4,5,9,13],2:[7,11],3:[4,5],5:[6,8],6:[10,11],7:[8,11,13],8:[11,12],9:[11,12],10:[11]}             Eulerian graphs   Every group should have two pieces of paper. Each group must draw at least two graphs with vertices. Put your two graphs on separate pieces of paper.   One eulerian.    One not eulerian.    Label vertices with the integers from to .       Exchange graphs with another group.    Determine which graph is which.    Use our algorithm to find an eulerian circuit in the eulerian graph.    If finish early, draw some more graphs and swap with another group.    A graph is said to be hamiltonian  graph  hamiltonian  if there exists a sequence so that  every vertex of appears exactly once in the sequence;  is an edge of ; and  for each , is an edge in .  Such a sequence of vertices is called a hamiltonian cycle .  hamiltonian  cycle     Eulerian vs Hamiltonian   Review responses on Canvas to class prep responses about difference between eulerian and hamiltonian.    Formulate an improved group explanation of the difference. Be careful in your use of the words circuit , cycle , and path .      Hamiltonian or Not?   The handout contains drawings of five graphs. Find a hamiltonian cycle or explain why there isn't one. Don't spend too much time on any one graph.     Peer instruction questions 1 5.    Dirac's Theorem   If is a graph on vertices and each vertex in has at least neighbors, then is hamiltonian.    "
},
{
  "id": "notes-eulerham-2",
  "level": "2",
  "url": "notes-eulerham.html#notes-eulerham-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "eulerian "
},
{
  "id": "notes-eulerham-3",
  "level": "2",
  "url": "notes-eulerham.html#notes-eulerham-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "eulerian circuit circuit "
},
{
  "id": "thm-eulerian",
  "level": "2",
  "url": "notes-eulerham.html#thm-eulerian",
  "type": "Theorem",
  "number": "5.6",
  "title": "",
  "body": "  A graph is eulerian if and only if   "
},
{
  "id": "alg-eulerian",
  "level": "2",
  "url": "notes-eulerham.html#alg-eulerian",
  "type": "Algorithm",
  "number": "5.7",
  "title": "Eulerian Circuit Finder.",
  "body": " Eulerian Circuit Finder      Input  A graph     Output  An eulerian circuit in , a vertex of odd degree in , or a connected component of and an edge of that is not in that connected component.        Initialize .    While not every edge of is traversed, determine if any vertex of is incident with an edge that has not been traversed.   If all vertices of have all their edges traversed, then return the vertices of as a connected component of with an edge not traversed by demonstrating that is not connected.    If has a vertex incident with an edge that has not been traversed, call that vertex . Construct a walk starting from . From vertex , follow the edge traversed by neither nor going to the neighbor of with smallest label.    The construction of halts at a vertex for which all edges have been traversed.   If , then return as a vertex of odd degree, showing that is not eulerian.    If , update the circuit by replacing in with the walk . Continue iterating by returning to step .          Return .      "
},
{
  "id": "notes-eulerham-7",
  "level": "2",
  "url": "notes-eulerham.html#notes-eulerham-7",
  "type": "Activity",
  "number": "5.2.1",
  "title": "Eulerian graphs.",
  "body": " Eulerian graphs   Every group should have two pieces of paper. Each group must draw at least two graphs with vertices. Put your two graphs on separate pieces of paper.   One eulerian.    One not eulerian.    Label vertices with the integers from to .       Exchange graphs with another group.    Determine which graph is which.    Use our algorithm to find an eulerian circuit in the eulerian graph.    If finish early, draw some more graphs and swap with another group.   "
},
{
  "id": "notes-eulerham-8",
  "level": "2",
  "url": "notes-eulerham.html#notes-eulerham-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hamiltonian hamiltonian cycle "
},
{
  "id": "notes-eulerham-9",
  "level": "2",
  "url": "notes-eulerham.html#notes-eulerham-9",
  "type": "Activity",
  "number": "5.2.2",
  "title": "Eulerian vs Hamiltonian.",
  "body": " Eulerian vs Hamiltonian   Review responses on Canvas to class prep responses about difference between eulerian and hamiltonian.    Formulate an improved group explanation of the difference. Be careful in your use of the words circuit , cycle , and path .    "
},
{
  "id": "notes-eulerham-10",
  "level": "2",
  "url": "notes-eulerham.html#notes-eulerham-10",
  "type": "Activity",
  "number": "5.2.3",
  "title": "Hamiltonian or Not?",
  "body": " Hamiltonian or Not?   The handout contains drawings of five graphs. Find a hamiltonian cycle or explain why there isn't one. Don't spend too much time on any one graph.   "
},
{
  "id": "thm_graphs_dirac",
  "level": "2",
  "url": "notes-eulerham.html#thm_graphs_dirac",
  "type": "Theorem",
  "number": "5.8",
  "title": "Dirac’s Theorem.",
  "body": " Dirac's Theorem   If is a graph on vertices and each vertex in has at least neighbors, then is hamiltonian.   "
},
{
  "id": "notes-graphs-coloring",
  "level": "1",
  "url": "notes-graphs-coloring.html",
  "type": "Handout",
  "number": "5.3",
  "title": "Graph Coloring",
  "body": " Graph Coloring   Peer instruction questions 1 3.   Let be a graph. Then is a proper coloring of if    is one-to-one     implies      uses as few colors from as possible    None of the above     Let be a graph and be a proper coloring of . Let be all vertices colored . How many edges does the subgraph of induced by contain?   0    1         Any number is possible.     What is the chromatic number of the complete graph on vertices ?                  There is no fixed formula depending on .           z  y_1  y_2  y_3  y_4  y_5  x_1  x_2  x_3  x_4  x_5    1  2  3  4  2  5  4  1  5  3  1          A graph is bipartite provided that its chromatic number is .      A graph is bipartite if and only if it does not contain any odd cycles.     Peer instruction question 4.    First Fit         v_1  v_3  v_5  v_7  v_2  v_4  v_6  v_8            v_1  v_2  v_3  v_4  v_5  v_6  v_7  v_8        "
},
{
  "id": "notes-graphs-coloring-7",
  "level": "2",
  "url": "notes-graphs-coloring.html#notes-graphs-coloring-7",
  "type": "Definition",
  "number": "5.9",
  "title": "",
  "body": "  A graph is bipartite provided that its chromatic number is .   "
},
{
  "id": "notes-graphs-coloring-8",
  "level": "2",
  "url": "notes-graphs-coloring.html#notes-graphs-coloring-8",
  "type": "Theorem",
  "number": "5.10",
  "title": "",
  "body": "  A graph is bipartite if and only if it does not contain any odd cycles.   "
},
{
  "id": "planar",
  "level": "1",
  "url": "planar.html",
  "type": "Handout",
  "number": "5.4",
  "title": "Planar Graphs",
  "body": " Planar Graphs      A drawing of a graph is a way of associating the graph's vertices with points in the plane and its edges with simple polygonal arcs between the points corresponding to the edge's endpoints.    A planar drawing of a graph is one in which the polygonal arcs corresponding to edges intersect only at the points corresponding to the endpoints of the appropriate edges.    A graph is planar if it has a planar drawing.       Polyhedron  Vertices  Edges  Faces    Tetrahedron          Octahedron          Cube          Icosahedron          Dodecahedron              The plane of polyhedra    Polyhedra zoomed in so that axis scales are visible          Takeaways from the handout:                 Kuratowski's Theorem   A graph is planar if and only if it does not contain a subdivision of or .       The Four Color Theorem   If is a planar graph, then .     "
},
{
  "id": "planar-2-1",
  "level": "2",
  "url": "planar.html#planar-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "drawing planar drawing planar "
},
{
  "id": "thm-kuratowski",
  "level": "2",
  "url": "planar.html#thm-kuratowski",
  "type": "Theorem",
  "number": "5.11",
  "title": "Kuratowski’s Theorem.",
  "body": " Kuratowski's Theorem   A graph is planar if and only if it does not contain a subdivision of or .   "
},
{
  "id": "thm-four-color",
  "level": "2",
  "url": "planar.html#thm-four-color",
  "type": "Theorem",
  "number": "5.12",
  "title": "The Four Color Theorem.",
  "body": " The Four Color Theorem   If is a planar graph, then .   "
},
{
  "id": "graphs-prufer",
  "level": "1",
  "url": "graphs-prufer.html",
  "type": "Handout",
  "number": "5.5",
  "title": "Counting Labeled Trees",
  "body": " Counting Labeled Trees    Labeled vs Unlabeled Trees (and Graphs) and Counting    Big Idea                     Labeled Tree Prüfer Code  Assume is a labeled tree with at least vertices.   is defined recursively by   If , return the empty string.    Else, let be the leaf of with the smallest label and let be its unique neighbor. Let be the label of . Return .       Peer instruction question 1 followed by Activity 5.5.1.    Peer instruction questions 2 3.    Prüfer Code Labeled Tree     Keep track of three things   Prüfer code    Labels remaining    Edge added       Smallest remaining label not in code and first label of code determine edge to add    Remove first entry of Prüfer code. Remove label just used from label set.    Repeat until Prüfer code is empty (remaining labels are edge).    Build tree reading edges from bottom to top.       Peer Instruction Question 4.           Prüfer code  Label set  Edge added    8431875                                                                     Prüfer code  Label set  Edge added    8431875          431875          31875          1875          875          75          5          (empty string)           "
},
{
  "id": "graphs-prufer-3-1",
  "level": "2",
  "url": "graphs-prufer.html#graphs-prufer-3-1",
  "type": "Algorithm",
  "number": "5.13",
  "title": "Labeled Tree <span class=\"process-math\">\\(\\longrightarrow\\)<\/span> Prüfer Code.",
  "body": " Labeled Tree Prüfer Code  Assume is a labeled tree with at least vertices.   is defined recursively by   If , return the empty string.    Else, let be the leaf of with the smallest label and let be its unique neighbor. Let be the label of . Return .     "
},
{
  "id": "graphs-prufer-3-4",
  "level": "2",
  "url": "graphs-prufer.html#graphs-prufer-3-4",
  "type": "Algorithm",
  "number": "5.14",
  "title": "Prüfer Code <span class=\"process-math\">\\(\\longrightarrow\\)<\/span> Labeled Tree.",
  "body": " Prüfer Code Labeled Tree     Keep track of three things   Prüfer code    Labels remaining    Edge added       Smallest remaining label not in code and first label of code determine edge to add    Remove first entry of Prüfer code. Remove label just used from label set.    Repeat until Prüfer code is empty (remaining labels are edge).    Build tree reading edges from bottom to top.     "
},
{
  "id": "posets-notation",
  "level": "1",
  "url": "posets-notation.html",
  "type": "Handout",
  "number": "6.1",
  "title": "Notation and Terminology",
  "body": " Notation and Terminology    Definition Parts    A poset is an ordered pair with a set and a binary relation on that is reflexive, antisymmetric, and transitive.       Binary relation: Ordered pairs (subset of )    Reflexive: For all , .    in        Antisymmetric: If and , then .   If in and in , then .       Transitive: If and , then .   If in and in , then in .         Peer instruction question 1    The Critic:   Saving Private Ryan    Life is Beautiful    Forrest Gump    Braveheart    Good Will Hunting    Titanic    Jurassic Park     Alice:   Life is Beautiful    Saving Private Ryan    Good Will Hunting    Titanic    Braveheart    Forrest Gump    Jurassic Park             Key Concepts for Posets  Let be a poset.   If in or in , then and are comparable .    If in and there does not exist so that in , then  covers      If and neither in nor in , then and are incomparable .    A set is an antichain if no pair of distinct points in is comparable in .    A set is a chain if every pair of distinct points in is comparable in .      Peer instruction questions 2 3.     The order diagram of a poset with 34 points. The points are labeled from 1 to 34.     graph={1:[2,25], 2:[14,22,23], 3:[25], 4:[19,31,26,13], 5:[25], 6:[27,31,35], 7:[8,13], 9:[14,33], 10:[25], 11:[30], 12:[17,29], 13:[34], 15:[19,28], 16:[17,21,27], 18:[21], 19:[27], 20:[31], 22:[25], 24:[26,29,32], 27:[30]}                                                Maximal vs Maximum    A chain is maxim al  if there is no chain so that .      A chain is maxim um  if there is no chain so that .         An antichain is maxim al  if there is no antichain so that .      An antichain is maxim um  if there is no antichain so that .     Peer instruction questions 4 6.     Maximal and Minimal Elements    Let be a poset. An element is maximal if there is no with in .      Let be a poset. An element is minimal if there is no with in .         With your group, list the set of maximal elements and the set of minimal elements for this poset.    The order diagram of a poset with 34 points. The points are labeled from 1 to 34.     graph={1:[2,25], 2:[14,22,23], 3:[25], 4:[19,31,26,13], 5:[25], 6:[27,31,35], 7:[8,13], 9:[14,33], 10:[25], 11:[30], 12:[17,29], 13:[34], 15:[19,28], 16:[17,21,27], 18:[21], 19:[27], 20:[31], 22:[25], 24:[26,29,32], 27:[30]}                                                 Height and Width    The height of a poset is the number of points in a maxim um chain in       The width of a poset is the number of points in a maxim um antichain in      Peer instruction question 7.     "
},
{
  "id": "posets-notation-2-1-2",
  "level": "2",
  "url": "posets-notation.html#posets-notation-2-1-2",
  "type": "Definition",
  "number": "6.1",
  "title": "",
  "body": "  A poset is an ordered pair with a set and a binary relation on that is reflexive, antisymmetric, and transitive.   "
},
{
  "id": "posets-notation-3-1-2",
  "level": "2",
  "url": "posets-notation.html#posets-notation-3-1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "comparable covers incomparable antichain chain "
},
{
  "id": "posets-notation-4-1-2",
  "level": "2",
  "url": "posets-notation.html#posets-notation-4-1-2",
  "type": "Definition",
  "number": "6.2",
  "title": "",
  "body": "  A chain is maxim al  if there is no chain so that .   "
},
{
  "id": "posets-notation-4-1-3",
  "level": "2",
  "url": "posets-notation.html#posets-notation-4-1-3",
  "type": "Definition",
  "number": "6.3",
  "title": "",
  "body": "  A chain is maxim um  if there is no chain so that .   "
},
{
  "id": "posets-notation-4-1-5",
  "level": "2",
  "url": "posets-notation.html#posets-notation-4-1-5",
  "type": "Definition",
  "number": "6.4",
  "title": "",
  "body": "  An antichain is maxim al  if there is no antichain so that .   "
},
{
  "id": "posets-notation-4-1-6",
  "level": "2",
  "url": "posets-notation.html#posets-notation-4-1-6",
  "type": "Definition",
  "number": "6.5",
  "title": "",
  "body": "  An antichain is maxim um  if there is no antichain so that .   "
},
{
  "id": "posets-notation-4-2-2",
  "level": "2",
  "url": "posets-notation.html#posets-notation-4-2-2",
  "type": "Definition",
  "number": "6.6",
  "title": "",
  "body": "  Let be a poset. An element is maximal if there is no with in .   "
},
{
  "id": "posets-notation-4-2-3",
  "level": "2",
  "url": "posets-notation.html#posets-notation-4-2-3",
  "type": "Definition",
  "number": "6.7",
  "title": "",
  "body": "  Let be a poset. An element is minimal if there is no with in .   "
},
{
  "id": "posets-notation-5-1",
  "level": "2",
  "url": "posets-notation.html#posets-notation-5-1",
  "type": "Activity",
  "number": "6.1.1",
  "title": "",
  "body": "  With your group, list the set of maximal elements and the set of minimal elements for this poset.    The order diagram of a poset with 34 points. The points are labeled from 1 to 34.     graph={1:[2,25], 2:[14,22,23], 3:[25], 4:[19,31,26,13], 5:[25], 6:[27,31,35], 7:[8,13], 9:[14,33], 10:[25], 11:[30], 12:[17,29], 13:[34], 15:[19,28], 16:[17,21,27], 18:[21], 19:[27], 20:[31], 22:[25], 24:[26,29,32], 27:[30]}                                             "
},
{
  "id": "posets-notation-6-1-2",
  "level": "2",
  "url": "posets-notation.html#posets-notation-6-1-2",
  "type": "Definition",
  "number": "6.8",
  "title": "",
  "body": "  The height of a poset is the number of points in a maxim um chain in    "
},
{
  "id": "posets-notation-6-1-3",
  "level": "2",
  "url": "posets-notation.html#posets-notation-6-1-3",
  "type": "Definition",
  "number": "6.9",
  "title": "",
  "body": "  The width of a poset is the number of points in a maxim um antichain in    "
},
{
  "id": "posets-partitioning",
  "level": "1",
  "url": "posets-partitioning.html",
  "type": "Handout",
  "number": "6.2",
  "title": "Antichain and Chain Partitioning",
  "body": " Antichain and Chain Partitioning    Duals, Cover Graphs, and Comparability Graphs    Dual of is denoted   Comparability Graph    Cover Graph  Incomparability Graph    Bob's Claims:   Only linear orders have paths as cover graphs.    A poset and its dual have the same cover graph and the same comparability graph.    Any two posets with the same cover graph have the same height and the same width.    Any two posets with the same comparability graph have the same height and the same width.      Handout page 1.       Height and Antichain Partitioning   Dual of Dilworth's Theorem   A poset has height if and only if is the smallest number so that there exist disjoint antichains with .    Proof by algorithm     Let . Place minimal elements of in . Let be formed from by deleting the points in . Place minimal elements of in .    General step: Form by removing from . Let be the minimal elements of .    Continue until every point is in an antichain.          The order diagram of a poset with 7 points. The points are labeled with letters from to .       a  b  c  d  e  f  g            Handout page 2.       Chain Partitioning and Width  Let's look back at the Dual of Dilworth's Theorem. What would be a similar result for width?   Dilworth's Theorem   Let be a poset. Then is the width of if and only if is the smallest number so that there exist disjoint chains with          "
},
{
  "id": "thm-dual-dilworth",
  "level": "2",
  "url": "posets-partitioning.html#thm-dual-dilworth",
  "type": "Theorem",
  "number": "6.10",
  "title": "Dual of Dilworth’s Theorem.",
  "body": " Dual of Dilworth's Theorem   A poset has height if and only if is the smallest number so that there exist disjoint antichains with .    Proof by algorithm     Let . Place minimal elements of in . Let be formed from by deleting the points in . Place minimal elements of in .    General step: Form by removing from . Let be the minimal elements of .    Continue until every point is in an antichain.      "
},
{
  "id": "posets-partitioning-4-1-3",
  "level": "2",
  "url": "posets-partitioning.html#posets-partitioning-4-1-3",
  "type": "Theorem",
  "number": "6.11",
  "title": "Dilworth’s Theorem.",
  "body": " Dilworth's Theorem   Let be a poset. Then is the width of if and only if is the smallest number so that there exist disjoint chains with    "
},
{
  "id": "notes-subset-lattice-width",
  "level": "1",
  "url": "notes-subset-lattice-width.html",
  "type": "Handout",
  "number": "6.3",
  "title": "Linear Extensions and the Subset Lattice",
  "body": " Linear Extensions and the Subset Lattice   Linear Extensions    Let be a poset. A total order on is a linear extension of provided that if in , then in .     Intuition : A linear extension can't change the order from , but it can put incomparable elements in either way.     A poset with six points. There is a four-point chain shown centrally. The other cover relations depicted are and .     graph={0:[1],1:[2],2:[3],4:[2],5:[1]}  labels={0:'x',1:'y',2:'z',3:'w',4:'a',5:'b'}                 Three linear orderings with six points in each.       x  y  a  b  z  w  a  x  y  z  w  b  x  y  b  z  a  w         Why care?     When intersecting linear orders to form a poset, the linear orders are linear extensions of the resulting poset.    Sorting problems can be viewed as trying to find a particular linear extension of a poset.    Finding a linear extension of a poset is a common need. Lots of settings require ranked lists. Can we make them fair(-ish)?      The Subset Lattice    Let be a positive integer. The subset lattice  is the poset where is the set of all subsets of and in if and only if .     Peer instruction questions 1 3.    "
},
{
  "id": "notes-subset-lattice-width-2-2",
  "level": "2",
  "url": "notes-subset-lattice-width.html#notes-subset-lattice-width-2-2",
  "type": "Definition",
  "number": "6.12",
  "title": "",
  "body": "  Let be a poset. A total order on is a linear extension of provided that if in , then in .   "
},
{
  "id": "notes-subset-lattice-width-3-2",
  "level": "2",
  "url": "notes-subset-lattice-width.html#notes-subset-lattice-width-3-2",
  "type": "Definition",
  "number": "6.13",
  "title": "",
  "body": "  Let be a positive integer. The subset lattice  is the poset where is the set of all subsets of and in if and only if .   "
},
{
  "id": "notes-posets-intords",
  "level": "1",
  "url": "notes-posets-intords.html",
  "type": "Handout",
  "number": "6.4",
  "title": "Interval Orders",
  "body": " Interval Orders      An interval order is a special type of poset .    Each is associated with an interval      in if and only if     's interval stops     's interval is completely       We call the collection of intervals an interval representation of .     Sketch of an example, then peer instruction questions 1 2 and handout activity .    The poset below is denoted , which we read as two plus two . Draw an interval representation for this poset or explain why it is not possible.     The order diagram of a poset with four points. The points are labeled . There are two cover relations: and .       x  y  z  w             There are four incomparabilities we must check when confirming a    Peer instruction question 3    Fishburn's Theorem   A poset is an interval order if and only if it does not contain as a subposet.     Intransitive Indifference with Unequal Indifference Intervals by Peter C. Fishburn of the Research Analysis Corporation, McLean, Virginia. Masthead indicates Journal of Mathematical Psychology , volume 7, pages 144 149 (1970).      Can we find a representation?     The order diagram of a poset with 10 points. The points are labeled from 1 to 10.                          For a poset , we define the following notation:   Down-set (or down set): .    Up-set (or up set): .     : the set of all down-sets.     : the set of all up-sets.       Find the down-sets and as well as the up-sets , , , and for the poset shown below.     The order diagram of a poset with 10 points. The points are labeled from 1 to 10.                                   Let be a poset. Then the following are equivalent:    is an interval order.    Any two distinct sets in are ordered by inclusion.    Any two distinct sets in are ordered by inclusion.         If is an interval order, then .        Poset to Interval Representation   Input: An interval order .   Determine for each .    Write down as .    Determine for each .    Write down as .    For each , find and . Then let .    (Optional unless instructed) Draw the interval representation.        Peer instruction questions 4 5.    "
},
{
  "id": "notes-posets-intords-2-1",
  "level": "2",
  "url": "notes-posets-intords.html#notes-posets-intords-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "interval order interval representation "
},
{
  "id": "notes-posets-intords-2-3",
  "level": "2",
  "url": "notes-posets-intords.html#notes-posets-intords-2-3",
  "type": "Activity",
  "number": "6.4.1",
  "title": "",
  "body": "  The poset below is denoted , which we read as two plus two . Draw an interval representation for this poset or explain why it is not possible.     The order diagram of a poset with four points. The points are labeled . There are two cover relations: and .       x  y  z  w            "
},
{
  "id": "thm-fishburn",
  "level": "2",
  "url": "notes-posets-intords.html#thm-fishburn",
  "type": "Theorem",
  "number": "6.14",
  "title": "Fishburn’s Theorem.",
  "body": " Fishburn's Theorem   A poset is an interval order if and only if it does not contain as a subposet.   "
},
{
  "id": "notes-posets-intords-3-1-4",
  "level": "2",
  "url": "notes-posets-intords.html#notes-posets-intords-3-1-4",
  "type": "Activity",
  "number": "6.4.2",
  "title": "",
  "body": "  Find the down-sets and as well as the up-sets , , , and for the poset shown below.     The order diagram of a poset with 10 points. The points are labeled from 1 to 10.                                "
},
{
  "id": "notes-posets-intords-3-1-5",
  "level": "2",
  "url": "notes-posets-intords.html#notes-posets-intords-3-1-5",
  "type": "Proposition",
  "number": "6.15",
  "title": "",
  "body": "  Let be a poset. Then the following are equivalent:    is an interval order.    Any two distinct sets in are ordered by inclusion.    Any two distinct sets in are ordered by inclusion.      "
},
{
  "id": "notes-posets-intords-3-1-6",
  "level": "2",
  "url": "notes-posets-intords.html#notes-posets-intords-3-1-6",
  "type": "Proposition",
  "number": "6.16",
  "title": "",
  "body": "  If is an interval order, then .   "
},
{
  "id": "notes-posets-intords-4-1",
  "level": "2",
  "url": "notes-posets-intords.html#notes-posets-intords-4-1",
  "type": "Algorithm",
  "number": "6.17",
  "title": "Poset to Interval Representation.",
  "body": " Poset to Interval Representation   Input: An interval order .   Determine for each .    Write down as .    Determine for each .    Write down as .    For each , find and . Then let .    (Optional unless instructed) Draw the interval representation.      "
},
{
  "id": "notes-posets-intord-algs",
  "level": "1",
  "url": "notes-posets-intord-algs.html",
  "type": "Handout",
  "number": "6.5",
  "title": "Algorithms for Interval Orders",
  "body": " Algorithms for Interval Orders    Poset to Interval Representation   Input: An interval order .   Determine for each .    Write down as .    Determine for each .    Write down as .    For each , find and . Then let .    (Optional unless instructed) Draw the interval representation.        Peer instruction question 1.   This algorithm has benefits and drawbacks:   Benefit  Uses the smallest number of endpoints possible (because ).    Drawback  Creates lots of trivial intervals of the form .        Use the algorithm to determine if the posets on your handout are interval orders (and find an interval representation if they are).      Suppose you learn that the down sets and up sets are totally ordered by inclusion and that there are down sets (and thus up sets). If the poset has a point that is incomparable to every other point, what interval would the algorithm assign?        Greedy or First Fit Algorithms     The simplest algorithms for many problems are greedy in the sense that they look at in some predetermined order and assign them to something by trying to use as few as possible at the moment.    There's usually an order for which a greedy algorithm gives an optimal result, but finding that order is often hard.    First Fit can often succeed if there's a natural order to use.      First Fit for Chain Partitioning Interval Orders      Fix an order in which intervals will be considered.    Assign intervals to chains .    When considering a new interval, determine which chains it can be added to.    Add it to chain with smallest subscript.    If cannot add to any existing chain, make a new one with subscript as small as possible.        Peer instruction question 2       Optimal First Fit for Chain Partitioning Interval Orders      Consider the intervals in order by left endpoint.   Break ties by choosing interval with smallest label.       Assign intervals to chains .    When considering a new interval, determine which chains it can be added to.    Add it to chain with smallest subscript.    If cannot add to any existing chain, make a new one with subscript as small as possible.        Peer instruction question 3.     Let's use First Fit (optimally) to find a chain partition of this interval order and the width of the interval order.   An interval order           Use First Fit to find the width of the interval orders whose interval representations are on your handout. Also find a partition into as few chains as possible.     "
},
{
  "id": "notes-posets-intord-algs-2-1",
  "level": "2",
  "url": "notes-posets-intord-algs.html#notes-posets-intord-algs-2-1",
  "type": "Algorithm",
  "number": "6.18",
  "title": "Poset to Interval Representation.",
  "body": " Poset to Interval Representation   Input: An interval order .   Determine for each .    Write down as .    Determine for each .    Write down as .    For each , find and . Then let .    (Optional unless instructed) Draw the interval representation.      "
},
{
  "id": "notes-posets-intord-algs-2-4",
  "level": "2",
  "url": "notes-posets-intord-algs.html#notes-posets-intord-algs-2-4",
  "type": "Activity",
  "number": "6.5.1",
  "title": "",
  "body": "   Use the algorithm to determine if the posets on your handout are interval orders (and find an interval representation if they are).      Suppose you learn that the down sets and up sets are totally ordered by inclusion and that there are down sets (and thus up sets). If the poset has a point that is incomparable to every other point, what interval would the algorithm assign?    "
},
{
  "id": "alg-first-fit-chain",
  "level": "2",
  "url": "notes-posets-intord-algs.html#alg-first-fit-chain",
  "type": "Algorithm",
  "number": "6.19",
  "title": "First Fit for Chain Partitioning Interval Orders.",
  "body": " First Fit for Chain Partitioning Interval Orders      Fix an order in which intervals will be considered.    Assign intervals to chains .    When considering a new interval, determine which chains it can be added to.    Add it to chain with smallest subscript.    If cannot add to any existing chain, make a new one with subscript as small as possible.      "
},
{
  "id": "alg-first-fit-optimal",
  "level": "2",
  "url": "notes-posets-intord-algs.html#alg-first-fit-optimal",
  "type": "Algorithm",
  "number": "6.20",
  "title": "Optimal First Fit for Chain Partitioning Interval Orders.",
  "body": " Optimal First Fit for Chain Partitioning Interval Orders      Consider the intervals in order by left endpoint.   Break ties by choosing interval with smallest label.       Assign intervals to chains .    When considering a new interval, determine which chains it can be added to.    Add it to chain with smallest subscript.    If cannot add to any existing chain, make a new one with subscript as small as possible.      "
},
{
  "id": "notes-posets-intord-algs-4-3",
  "level": "2",
  "url": "notes-posets-intord-algs.html#notes-posets-intord-algs-4-3",
  "type": "Example",
  "number": "6.21",
  "title": "",
  "body": "  Let's use First Fit (optimally) to find a chain partition of this interval order and the width of the interval order.   An interval order        "
},
{
  "id": "notes-posets-intord-algs-4-4",
  "level": "2",
  "url": "notes-posets-intord-algs.html#notes-posets-intord-algs-4-4",
  "type": "Activity",
  "number": "6.5.2",
  "title": "",
  "body": "  Use First Fit to find the width of the interval orders whose interval representations are on your handout. Also find a partition into as few chains as possible.   "
},
{
  "id": "notes-pie-intro-surjections",
  "level": "1",
  "url": "notes-pie-intro-surjections.html",
  "type": "Handout",
  "number": "7.1",
  "title": "Introduction; Counting Surjections",
  "body": " Introduction; Counting Surjections    Overcounting. No, undercounting. Wait, overcounting! Hmm, undercounting?   Revisiting an Old Problem   How many lattice paths from to do not pass through or ?    We count all lattice paths from to and subtract those that path through either or . We do this by first subtracting those that pass through and then subtracting those that pass through ). However, this subtracts those that pass through both intermediate points twice, so we need to add back that number. This gives us .    We need to introduce some notation:   A property  is something that an element of a set either satisfies or does not satisfy.    If is a family of properties and , then is the number of objects that satisfy for every .   If , then is the number of objects satisfying         Principle of Inclusion-Exclusion   Let be a set and a family of properties. The number of elements of which satisfy none of the properties in is given by .     Peer instruction question 1.     A class of students was polled to determine the programming languages in which they were proficient.                   Language(s)     Language(s)     Language(s)    32  ALGOL60  12  ALGOL60 + PL\/I  2  All 3    17  PL\/I  17  ALGOL60 + COBOL        26  COBOL  3  PL\/I + COBOL        How many of the students are proficient in none of the languages? Answer this question by doing the following:     Identify properties.    Let be that a student knows ALGOL60, be that a student knows PL\/I, and be that a student knows COBOL.      Write out inclusion-exclusion sum.              Counting Surjections    A function is called a surjection provided that for every , there is at least one such that . Surjections are also called onto functions .      The range of a function is the set .     Peer instruction question 2.     Let be the set of all functions from to . We say satisfies property if is not in the range of .     Peer instruction questions 3 4 followed by activity handout.     The number of surjections from to is given by .       Formula will be provided to you on Test II and the Final Exam.    You will not be expected to derive this formula.    You will be expected to recognize when a counting problem calls for surjections and to use the formula in answers.       "
},
{
  "id": "notes-pie-intro-surjections-2-1-2",
  "level": "2",
  "url": "notes-pie-intro-surjections.html#notes-pie-intro-surjections-2-1-2",
  "type": "Example",
  "number": "7.1",
  "title": "Revisiting an Old Problem.",
  "body": " Revisiting an Old Problem   How many lattice paths from to do not pass through or ?    We count all lattice paths from to and subtract those that path through either or . We do this by first subtracting those that pass through and then subtracting those that pass through ). However, this subtracts those that pass through both intermediate points twice, so we need to add back that number. This gives us .   "
},
{
  "id": "notes-pie-intro-surjections-2-1-3",
  "level": "2",
  "url": "notes-pie-intro-surjections.html#notes-pie-intro-surjections-2-1-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "property "
},
{
  "id": "notes-pie-intro-surjections-2-1-4",
  "level": "2",
  "url": "notes-pie-intro-surjections.html#notes-pie-intro-surjections-2-1-4",
  "type": "Theorem",
  "number": "7.2",
  "title": "Principle of Inclusion-Exclusion.",
  "body": " Principle of Inclusion-Exclusion   Let be a set and a family of properties. The number of elements of which satisfy none of the properties in is given by .   "
},
{
  "id": "notes-pie-intro-surjections-2-1-6",
  "level": "2",
  "url": "notes-pie-intro-surjections.html#notes-pie-intro-surjections-2-1-6",
  "type": "Activity",
  "number": "7.1.1",
  "title": "",
  "body": "  A class of students was polled to determine the programming languages in which they were proficient.                   Language(s)     Language(s)     Language(s)    32  ALGOL60  12  ALGOL60 + PL\/I  2  All 3    17  PL\/I  17  ALGOL60 + COBOL        26  COBOL  3  PL\/I + COBOL        How many of the students are proficient in none of the languages? Answer this question by doing the following:     Identify properties.    Let be that a student knows ALGOL60, be that a student knows PL\/I, and be that a student knows COBOL.      Write out inclusion-exclusion sum.         "
},
{
  "id": "notes-pie-intro-surjections-3-1-2",
  "level": "2",
  "url": "notes-pie-intro-surjections.html#notes-pie-intro-surjections-3-1-2",
  "type": "Definition",
  "number": "7.3",
  "title": "",
  "body": "  A function is called a surjection provided that for every , there is at least one such that . Surjections are also called onto functions .   "
},
{
  "id": "notes-pie-intro-surjections-3-1-3",
  "level": "2",
  "url": "notes-pie-intro-surjections.html#notes-pie-intro-surjections-3-1-3",
  "type": "Definition",
  "number": "7.4",
  "title": "",
  "body": "  The range of a function is the set .   "
},
{
  "id": "notes-pie-intro-surjections-3-1-5",
  "level": "2",
  "url": "notes-pie-intro-surjections.html#notes-pie-intro-surjections-3-1-5",
  "type": "Definition",
  "number": "7.5",
  "title": "",
  "body": "  Let be the set of all functions from to . We say satisfies property if is not in the range of .   "
},
{
  "id": "notes-pie-intro-surjections-3-1-7",
  "level": "2",
  "url": "notes-pie-intro-surjections.html#notes-pie-intro-surjections-3-1-7",
  "type": "Theorem",
  "number": "7.6",
  "title": "",
  "body": "  The number of surjections from to is given by .   "
},
{
  "id": "notes-pie-derangements-euler-phi",
  "level": "1",
  "url": "notes-pie-derangements-euler-phi.html",
  "type": "Handout",
  "number": "7.2",
  "title": "Counting Derangements and Euler’s <span class=\"process-math\">\\(\\phi\\)<\/span> Function",
  "body": " Counting Derangements and Euler's Function    Counting Derangements  Suppose we randomly distributed name table tents corresponding only to students here today. How many ways can we do this in which no one gets their own table tent?  A permutation of is a bijection from to .   Peer instruction question 1.   A derangement of is a permutation of if for all .  A permutation of satisfies property provided that .  To frame your discussion, think about how to fill in this blank: With inclusion-exclusion, our goal is to count the objects that satisfy of the properties.   Peer instruction question 2.     Let's count derangements of .     How many properties are in ?    There are properties, one for each element of the set being permuted.      How many permutations satisfy ? What about ?    In both cases, there are permutations since a single value is fixed and the other can be arranged in any possible way.      How many permutations satisfy  and  ?    Here two values are fixed, so there are permutations.      Let with . How many permutations satisfy all properties with subscript in ?    Here we have fixed values, so there are permutations.      Let with . How many permutations satisfy all properties with subscript in ?    Here we have fixed values, so there are permutations.      How many subsets of have size ?           Use inclusion-exclusion to find , the number of derangements of                  Euler function    Let and be integers. The greatest common divisor of and is an integer such that divides both and and if also divides and , then . We say that and are relatively prime provided that .     Peer instruction question 3.     If is an integer, define the Euler function (sometimes Euler totient function ) .      With your group, find the following by listing the integers counted by each:                         because only and in are relatively prime to .     because are the integers in that are relatively prime to .    Since is prime, all of the integers from to are relatively prime to and thus .       We can also say that two integers are relatively prime if and only if they do not have any common prime factors.    Use inclusion-exclusion to find by excluding those numbers having a common prime factor with .        2  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30    3  3, 6, 9, 12, 15, 18, 21, 24, 27, 30    5  5, 10, 15, 20, 25, 30                Let , , and let be distinct primes each of which divide . The number of integers from which are divisible by each of these primes is       Let be a positive integer and suppose that has distinct prime factors: , . Then       Use the fact that to compute .              Find for each of the following integers . (Use reliable technology such as WolframAlpha to factor!)                         .     .     because is prime.         Suppose you need to find where . Why might this be hard, despite the information we have learned today?    We need the prime factors of .      Would knowing that for primes help?    Yes! Now we can just apply the formula arrived at through inclusion-exclusion.       What's wrong with this exercise?   A graduate student eats lunch in the campus food court every Tuesday over the course of a 15-week semester. He is joined each week by some subset of a group of six friends from across campus. Over the course of a semester, he ate lunch with each friend 11 times, each pair 9 times, and each triple 6 times. He ate lunch with each group of four friends 4 times and each group of five friends 4 times. All seven of them ate lunch together only once that semester. Did the graduate student ever eat lunch alone? If so, how many times?      "
},
{
  "id": "notes-pie-derangements-euler-phi-2-1-3",
  "level": "2",
  "url": "notes-pie-derangements-euler-phi.html#notes-pie-derangements-euler-phi-2-1-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "permutation "
},
{
  "id": "notes-pie-derangements-euler-phi-2-1-5",
  "level": "2",
  "url": "notes-pie-derangements-euler-phi.html#notes-pie-derangements-euler-phi-2-1-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "derangement "
},
{
  "id": "notes-pie-derangements-euler-phi-2-1-9",
  "level": "2",
  "url": "notes-pie-derangements-euler-phi.html#notes-pie-derangements-euler-phi-2-1-9",
  "type": "Activity",
  "number": "7.2.1",
  "title": "",
  "body": "  Let's count derangements of .     How many properties are in ?    There are properties, one for each element of the set being permuted.      How many permutations satisfy ? What about ?    In both cases, there are permutations since a single value is fixed and the other can be arranged in any possible way.      How many permutations satisfy  and  ?    Here two values are fixed, so there are permutations.      Let with . How many permutations satisfy all properties with subscript in ?    Here we have fixed values, so there are permutations.      Let with . How many permutations satisfy all properties with subscript in ?    Here we have fixed values, so there are permutations.      How many subsets of have size ?           Use inclusion-exclusion to find , the number of derangements of          "
},
{
  "id": "notes-pie-derangements-euler-phi-3-2-2",
  "level": "2",
  "url": "notes-pie-derangements-euler-phi.html#notes-pie-derangements-euler-phi-3-2-2",
  "type": "Definition",
  "number": "7.7",
  "title": "",
  "body": "  Let and be integers. The greatest common divisor of and is an integer such that divides both and and if also divides and , then . We say that and are relatively prime provided that .   "
},
{
  "id": "notes-pie-derangements-euler-phi-3-2-4",
  "level": "2",
  "url": "notes-pie-derangements-euler-phi.html#notes-pie-derangements-euler-phi-3-2-4",
  "type": "Definition",
  "number": "7.8",
  "title": "",
  "body": "  If is an integer, define the Euler function (sometimes Euler totient function ) .   "
},
{
  "id": "notes-pie-derangements-euler-phi-3-2-5",
  "level": "2",
  "url": "notes-pie-derangements-euler-phi.html#notes-pie-derangements-euler-phi-3-2-5",
  "type": "Activity",
  "number": "7.2.2",
  "title": "",
  "body": "  With your group, find the following by listing the integers counted by each:                         because only and in are relatively prime to .     because are the integers in that are relatively prime to .    Since is prime, all of the integers from to are relatively prime to and thus .      "
},
{
  "id": "notes-pie-derangements-euler-phi-3-2-7",
  "level": "2",
  "url": "notes-pie-derangements-euler-phi.html#notes-pie-derangements-euler-phi-3-2-7",
  "type": "Activity",
  "number": "7.2.3",
  "title": "",
  "body": "  Use inclusion-exclusion to find by excluding those numbers having a common prime factor with .        2  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30    3  3, 6, 9, 12, 15, 18, 21, 24, 27, 30    5  5, 10, 15, 20, 25, 30          "
},
{
  "id": "notes-pie-derangements-euler-phi-4-1",
  "level": "2",
  "url": "notes-pie-derangements-euler-phi.html#notes-pie-derangements-euler-phi-4-1",
  "type": "Proposition",
  "number": "7.9",
  "title": "",
  "body": "  Let , , and let be distinct primes each of which divide . The number of integers from which are divisible by each of these primes is    "
},
{
  "id": "notes-pie-derangements-euler-phi-4-2",
  "level": "2",
  "url": "notes-pie-derangements-euler-phi.html#notes-pie-derangements-euler-phi-4-2",
  "type": "Theorem",
  "number": "7.10",
  "title": "",
  "body": "  Let be a positive integer and suppose that has distinct prime factors: , . Then    "
},
{
  "id": "notes-pie-derangements-euler-phi-4-3",
  "level": "2",
  "url": "notes-pie-derangements-euler-phi.html#notes-pie-derangements-euler-phi-4-3",
  "type": "Example",
  "number": "7.11",
  "title": "",
  "body": "  Use the fact that to compute .        "
},
{
  "id": "notes-pie-derangements-euler-phi-5-1",
  "level": "2",
  "url": "notes-pie-derangements-euler-phi.html#notes-pie-derangements-euler-phi-5-1",
  "type": "Activity",
  "number": "7.2.4",
  "title": "",
  "body": "   Find for each of the following integers . (Use reliable technology such as WolframAlpha to factor!)                         .     .     because is prime.         Suppose you need to find where . Why might this be hard, despite the information we have learned today?    We need the prime factors of .      Would knowing that for primes help?    Yes! Now we can just apply the formula arrived at through inclusion-exclusion.    "
},
{
  "id": "notes-pie-derangements-euler-phi-5-2",
  "level": "2",
  "url": "notes-pie-derangements-euler-phi.html#notes-pie-derangements-euler-phi-5-2",
  "type": "Activity",
  "number": "7.2.5",
  "title": "",
  "body": "  What's wrong with this exercise?   A graduate student eats lunch in the campus food court every Tuesday over the course of a 15-week semester. He is joined each week by some subset of a group of six friends from across campus. Over the course of a semester, he ate lunch with each friend 11 times, each pair 9 times, and each triple 6 times. He ate lunch with each group of four friends 4 times and each group of five friends 4 times. All seven of them ate lunch together only once that semester. Did the graduate student ever eat lunch alone? If so, how many times?    "
},
{
  "id": "genfunction-intro-ogf",
  "level": "1",
  "url": "genfunction-intro-ogf.html",
  "type": "Handout",
  "number": "8.1",
  "title": "Introduction to Ordinary Generating Functions",
  "body": " Introduction to Ordinary Generating Functions    Formal Power Series     Sequence     Formal power series     Convergence tests?    Interval and radius of convergence?    Representing as functions?    In combinatorics, we call formal power series generating functions .       Let and be generating functions. Then is the generating function of the sequence whose coefficient on is given by      PAINFUL!     Handing stuff out again  Suppose you wanted to make a really boring fruit basket that contains only apples. Let's also say that you have only (identical) apples available. For aesthetic reasons, you insist that the basket contain exactly , , or apples.   Peer instruction questions 1 2.   The generating function for the number of fruit baskets with apples subject to these rules is  Now we've got oranges, too! We have six (identical) oranges to use in fruit baskets, and we don't care about aesthetics for oranges. (Still only allow 1, 3, or 4 apples.)  How many ways to make a fruit basket with    piece of fruit?     pieces of fruit?     pieces of fruit?           Suppose we now have bananas to add and that we must place at least one banana in a fruit basket. This introduces which factor? Peer instruction question 3     Find the generating function in which the coefficient on is the number of fruit baskets containing pieces of fruit subject to the following restrictions:   Pears: at least     Peaches: an even number    Kiwi: at least and no more than     Grapefruit: either none or at least                              The generating function is thus .     Peer instruction question 4.     Find the generating function in which the coefficient on is the number of fruit baskets containing pieces of fruit subject to the following restrictions:   Apples: , , or     Oranges: At most six    Bananas: At least one    Peaches: An odd number                             The generating function is thus .        Suppose in the country Combinatoria, they use coins with values 1, 2, 5, 10, 50, and 100. If you would like to write a generating function in which the coefficient on is the number of ways to form a collection of coins worth subject to the restriction that the number of coins of value is one, three, four, or five, what factor would you introduce into your generating function?            My Own Journey with Generating Functions   Keller and Young 2020   The ordinary generating function for the number of hereditary unit interval orders with points, , is and is asymptotically .     OEIS A293499 ( New! )    Keller and Young 2020   The generating function for the number of unit interval orders of dimension at most with points, , is and is asymptotically .     OEIS A293498 ( New! )    "
},
{
  "id": "genfunction-intro-ogf-2-1-2",
  "level": "2",
  "url": "genfunction-intro-ogf.html#genfunction-intro-ogf-2-1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "generating functions "
},
{
  "id": "genfunction-intro-ogf-2-1-3",
  "level": "2",
  "url": "genfunction-intro-ogf.html#genfunction-intro-ogf-2-1-3",
  "type": "Proposition",
  "number": "8.1",
  "title": "",
  "body": "  Let and be generating functions. Then is the generating function of the sequence whose coefficient on is given by    "
},
{
  "id": "genfunction-intro-ogf-3-3",
  "level": "2",
  "url": "genfunction-intro-ogf.html#genfunction-intro-ogf-3-3",
  "type": "Activity",
  "number": "8.1.1",
  "title": "",
  "body": "  Find the generating function in which the coefficient on is the number of fruit baskets containing pieces of fruit subject to the following restrictions:   Pears: at least     Peaches: an even number    Kiwi: at least and no more than     Grapefruit: either none or at least                              The generating function is thus .   "
},
{
  "id": "genfunction-intro-ogf-3-5",
  "level": "2",
  "url": "genfunction-intro-ogf.html#genfunction-intro-ogf-3-5",
  "type": "Activity",
  "number": "8.1.2",
  "title": "",
  "body": "  Find the generating function in which the coefficient on is the number of fruit baskets containing pieces of fruit subject to the following restrictions:   Apples: , , or     Oranges: At most six    Bananas: At least one    Peaches: An odd number                             The generating function is thus .   "
},
{
  "id": "genfunction-intro-ogf-4-1",
  "level": "2",
  "url": "genfunction-intro-ogf.html#genfunction-intro-ogf-4-1",
  "type": "Activity",
  "number": "8.1.3",
  "title": "",
  "body": "  Suppose in the country Combinatoria, they use coins with values 1, 2, 5, 10, 50, and 100. If you would like to write a generating function in which the coefficient on is the number of ways to form a collection of coins worth subject to the restriction that the number of coins of value is one, three, four, or five, what factor would you introduce into your generating function?        "
},
{
  "id": "genfunction-intro-ogf-5-1-2",
  "level": "2",
  "url": "genfunction-intro-ogf.html#genfunction-intro-ogf-5-1-2",
  "type": "Theorem",
  "number": "8.2",
  "title": "Keller and Young 2020.",
  "body": " Keller and Young 2020   The ordinary generating function for the number of hereditary unit interval orders with points, , is and is asymptotically .   "
},
{
  "id": "genfunction-intro-ogf-5-1-4",
  "level": "2",
  "url": "genfunction-intro-ogf.html#genfunction-intro-ogf-5-1-4",
  "type": "Theorem",
  "number": "8.3",
  "title": "Keller and Young 2020.",
  "body": " Keller and Young 2020   The generating function for the number of unit interval orders of dimension at most with points, , is and is asymptotically .   "
},
{
  "id": "genfunction-partitions-newton",
  "level": "1",
  "url": "genfunction-partitions-newton.html",
  "type": "Handout",
  "number": "8.2",
  "title": "Partitions and Newton’s Binomial Theorem",
  "body": " Partitions and Newton's Binomial Theorem    Partitions of Integers    A partition of the positive integer is a way of writing as a sum of nonincreasing positive integers.      A partition of a positive integer is said to be a partition into odd parts if every term (also referred to as a part ) in the sum is odd.      A partition of a positive integer is said to be a partition into distinct parts if each integer appears in the sum at most once.      List the partitions of . Count the number of partitions into odd parts. Count the number of partitions into distinct parts.    Be systematic! One way to do this is by grouping partitions by their largest part.          How would we write a generating function in which the coefficient on is the number of partitions of ?       Write a generating function in which the coefficient on is the number of partitions of into distinct parts.    This is conveniently done as a product of simple generating functions.           Write a generating function in which the coefficient on is the number of partitions of into odd parts.    A convenient form is a product of rational functions, but you might want to start with a product of power series and rewrite it.           Show that your generating functions above are actually equal to one another.          by cancelling all the factors from the numerator with the factors in the denominator that have odd powers of .        Newton's Binomial Theorem    For all real numbers and nonnegative integers , the number is defined by    for all real numbers and     for all real numbers and integers .         For all real numbers and nonnegative integers , .      Compute .          Newton's Binomial Theorem   For all real with , .      For each , .      Use mathematical induction to show that for all , .     Use Newton's Binomial Theorem and the step above to write as a formal power series in which the coefficient on is a binomial coefficient in which both numbers are integers .            "
},
{
  "id": "genfunction-partitions-newton-2-1-2",
  "level": "2",
  "url": "genfunction-partitions-newton.html#genfunction-partitions-newton-2-1-2",
  "type": "Definition",
  "number": "8.4",
  "title": "",
  "body": "  A partition of the positive integer is a way of writing as a sum of nonincreasing positive integers.   "
},
{
  "id": "genfunction-partitions-newton-2-1-3",
  "level": "2",
  "url": "genfunction-partitions-newton.html#genfunction-partitions-newton-2-1-3",
  "type": "Definition",
  "number": "8.5",
  "title": "",
  "body": "  A partition of a positive integer is said to be a partition into odd parts if every term (also referred to as a part ) in the sum is odd.   "
},
{
  "id": "genfunction-partitions-newton-2-1-4",
  "level": "2",
  "url": "genfunction-partitions-newton.html#genfunction-partitions-newton-2-1-4",
  "type": "Definition",
  "number": "8.6",
  "title": "",
  "body": "  A partition of a positive integer is said to be a partition into distinct parts if each integer appears in the sum at most once.   "
},
{
  "id": "genfunction-partitions-newton-2-1-5",
  "level": "2",
  "url": "genfunction-partitions-newton.html#genfunction-partitions-newton-2-1-5",
  "type": "Activity",
  "number": "8.2.1",
  "title": "",
  "body": "  List the partitions of . Count the number of partitions into odd parts. Count the number of partitions into distinct parts.    Be systematic! One way to do this is by grouping partitions by their largest part.   "
},
{
  "id": "genfunction-partitions-newton-4-1",
  "level": "2",
  "url": "genfunction-partitions-newton.html#genfunction-partitions-newton-4-1",
  "type": "Activity",
  "number": "8.2.2",
  "title": "",
  "body": "   Write a generating function in which the coefficient on is the number of partitions of into distinct parts.    This is conveniently done as a product of simple generating functions.           Write a generating function in which the coefficient on is the number of partitions of into odd parts.    A convenient form is a product of rational functions, but you might want to start with a product of power series and rewrite it.           Show that your generating functions above are actually equal to one another.          by cancelling all the factors from the numerator with the factors in the denominator that have odd powers of .    "
},
{
  "id": "genfunction-partitions-newton-5-1-2",
  "level": "2",
  "url": "genfunction-partitions-newton.html#genfunction-partitions-newton-5-1-2",
  "type": "Definition",
  "number": "8.7",
  "title": "",
  "body": "  For all real numbers and nonnegative integers , the number is defined by    for all real numbers and     for all real numbers and integers .      "
},
{
  "id": "genfunction-partitions-newton-5-1-3",
  "level": "2",
  "url": "genfunction-partitions-newton.html#genfunction-partitions-newton-5-1-3",
  "type": "Definition",
  "number": "8.8",
  "title": "",
  "body": "  For all real numbers and nonnegative integers , .   "
},
{
  "id": "genfunction-partitions-newton-5-1-4",
  "level": "2",
  "url": "genfunction-partitions-newton.html#genfunction-partitions-newton-5-1-4",
  "type": "Activity",
  "number": "8.2.3",
  "title": "",
  "body": "  Compute .        "
},
{
  "id": "genfunction-partitions-newton-5-1-5",
  "level": "2",
  "url": "genfunction-partitions-newton.html#genfunction-partitions-newton-5-1-5",
  "type": "Theorem",
  "number": "8.9",
  "title": "Newton’s Binomial Theorem.",
  "body": " Newton's Binomial Theorem   For all real with , .   "
},
{
  "id": "genfunction-partitions-newton-5-1-6",
  "level": "2",
  "url": "genfunction-partitions-newton.html#genfunction-partitions-newton-5-1-6",
  "type": "Lemma",
  "number": "8.10",
  "title": "",
  "body": "  For each , .   "
},
{
  "id": "genfunction-partitions-newton-5-1-7",
  "level": "2",
  "url": "genfunction-partitions-newton.html#genfunction-partitions-newton-5-1-7",
  "type": "Activity",
  "number": "8.2.4",
  "title": "",
  "body": "  Use mathematical induction to show that for all , .     Use Newton's Binomial Theorem and the step above to write as a formal power series in which the coefficient on is a binomial coefficient in which both numbers are integers .         "
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
