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
  "id": "ch-php-notes",
  "level": "1",
  "url": "ch-php-notes.html",
  "type": "Chapter",
  "number": "4",
  "title": "Placeholder",
  "body": " Placeholder  This is a placeholder for a chapter for which there are not currently notes.  "
},
{
  "id": "appcomb-notes-6-2",
  "level": "1",
  "url": "appcomb-notes-6-2.html",
  "type": "Handout",
  "number": "5.1",
  "title": "Notation and Terminology",
  "body": " Notation and Terminology    Peer instruction questions 1 3.    Two graphs    Two graphs    Two graphs       Suppose is an induced spanning subgraph of a graph . Discuss with your group what this would mean.     Peer instruction questions 4 5.    Two graphs    Two graphs      On the Complexity of Graph Isomorphism     Let denote the degree of vertex in graph . Then .      In any graph, the number of vertices of odd degree is even.       Walk      Path      Cycle           A vertex in a graph is called a leaf provided that      Every tree on at least two vertices has at least two leaves.      If is a tree, then for every pair of distinct vertices , there exists a unique path from to in .          With your neighbors, use mathematical induction to prove that every tree on vertices has exactly edges.  How many edges would an -vertex forest consisting of trees have?       "
},
{
  "id": "appcomb-notes-6-2-3-1",
  "level": "2",
  "url": "appcomb-notes-6-2.html#appcomb-notes-6-2-3-1",
  "type": "Activity",
  "number": "5.1.1",
  "title": "",
  "body": "  Suppose is an induced spanning subgraph of a graph . Discuss with your group what this would mean.   "
},
{
  "id": "thm-first-thm-gt",
  "level": "2",
  "url": "appcomb-notes-6-2.html#thm-first-thm-gt",
  "type": "Theorem",
  "number": "5.1",
  "title": "",
  "body": "  Let denote the degree of vertex in graph . Then .   "
},
{
  "id": "cor-num-odd-vts",
  "level": "2",
  "url": "appcomb-notes-6-2.html#cor-num-odd-vts",
  "type": "Corollary",
  "number": "5.2",
  "title": "",
  "body": "  In any graph, the number of vertices of odd degree is even.   "
},
{
  "id": "def-tree",
  "level": "2",
  "url": "appcomb-notes-6-2.html#def-tree",
  "type": "Definition",
  "number": "5.3",
  "title": "",
  "body": "  A vertex in a graph is called a leaf provided that   "
},
{
  "id": "thm-tree-leaves",
  "level": "2",
  "url": "appcomb-notes-6-2.html#thm-tree-leaves",
  "type": "Theorem",
  "number": "5.4",
  "title": "",
  "body": "  Every tree on at least two vertices has at least two leaves.   "
},
{
  "id": "thm-tree-unique-path",
  "level": "2",
  "url": "appcomb-notes-6-2.html#thm-tree-unique-path",
  "type": "Theorem",
  "number": "5.5",
  "title": "",
  "body": "  If is a tree, then for every pair of distinct vertices , there exists a unique path from to in .   "
},
{
  "id": "appcomb-notes-6-2-6-1",
  "level": "2",
  "url": "appcomb-notes-6-2.html#appcomb-notes-6-2-6-1",
  "type": "Activity",
  "number": "5.1.2",
  "title": "",
  "body": "    With your neighbors, use mathematical induction to prove that every tree on vertices has exactly edges.  How many edges would an -vertex forest consisting of trees have?     "
},
{
  "id": "notes-eulerham",
  "level": "1",
  "url": "notes-eulerham.html",
  "type": "Handout",
  "number": "5.2",
  "title": "Eulerian and Hamiltonian Graphs",
  "body": " Eulerian and Hamiltonian Graphs  Let be a graph without isolated vertices. We say that is eulerian  graph  eulerian  provided that there is a sequence of vertices from , with repetition allowed, so that  ;  for every , is an edge of ;  for every edge , there is a unique integer with for which .    When is eulerian, a sequence satisfying these three conditions is called an eulerian circuit  eulerian  circuit  . A sequence of vertices is called a circuit  circuit  when it satisfies only the first two of these conditions.   Eulerian Circuit Finder      Input  A graph     Output  An eulerian circuit in , a vertex of odd degree in , or a connected component of and an edge of that is not in that connected component.        Initialize .    While not every edge of is traversed, determine if any vertex of is incident with an edge that has not been traversed.   If all vertices of have all their edges traversed, then return the vertices of as a connected component of with an edge not traversed by demonstrating that is not connected.    If has a vertex incident with an edge that has not been traversed, call that vertex . Construct a walk starting from . From vertex , follow the edge traversed by neither nor going to the neighbor of with smallest label.    The construction of halts at a vertex for which all edges have been traversed.   If , then return as a vertex of odd degree, showing that is not eulerian.    If , update the circuit by replacing in with the walk . Continue iterating by returning to step .          Return .         A graph    graph={0:[6,9],1:[4,5,9,13],2:[7,11],3:[4,5],5:[6,8],6:[10,11],7:[8,11,13],8:[11,12],9:[11,12],10:[11]}                 Every group should have two pieces of paper. Each group must draw at least two graphs with at least vertices. Put your two graphs on separate pieces of paper.   One eulerian.    One not eulerian.    Label vertices with letters of the alphabet.       Exchange graphs with another group.    Determine which graph is which.    Use our algorithm to find an eulerian circuit in the eulerian graph.    If finish early, draw some more graphs and swap with another group.       A graph is said to be hamiltonian  graph  hamiltonian  if there exists a sequence so that  every vertex of appears exactly once in the sequence;  is an edge of ; and  for each , is an edge in .  Such a sequence of vertices is called a hamiltonian cycle .  hamiltonian  cycle       Review responses on Canvas to class prep responses about difference between eulerian and hamiltonian.    Formulate an improved group explanation of the difference.    Be very careful in your use of the words circuit , cycle , and path .      Hamiltonian or Not?      Handout contains drawings of five graphs.    Find a hamiltonian cycle or explain why there isn't one.   Don't spend too much time on any one graph.           Peer instruction questions 1 5.   "
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
  "id": "alg-eulerian",
  "level": "2",
  "url": "notes-eulerham.html#alg-eulerian",
  "type": "Algorithm",
  "number": "5.6",
  "title": "Eulerian Circuit Finder.",
  "body": " Eulerian Circuit Finder      Input  A graph     Output  An eulerian circuit in , a vertex of odd degree in , or a connected component of and an edge of that is not in that connected component.        Initialize .    While not every edge of is traversed, determine if any vertex of is incident with an edge that has not been traversed.   If all vertices of have all their edges traversed, then return the vertices of as a connected component of with an edge not traversed by demonstrating that is not connected.    If has a vertex incident with an edge that has not been traversed, call that vertex . Construct a walk starting from . From vertex , follow the edge traversed by neither nor going to the neighbor of with smallest label.    The construction of halts at a vertex for which all edges have been traversed.   If , then return as a vertex of odd degree, showing that is not eulerian.    If , update the circuit by replacing in with the walk . Continue iterating by returning to step .          Return .      "
},
{
  "id": "notes-eulerham-6",
  "level": "2",
  "url": "notes-eulerham.html#notes-eulerham-6",
  "type": "Activity",
  "number": "5.2.1",
  "title": "",
  "body": "     Every group should have two pieces of paper. Each group must draw at least two graphs with at least vertices. Put your two graphs on separate pieces of paper.   One eulerian.    One not eulerian.    Label vertices with letters of the alphabet.       Exchange graphs with another group.    Determine which graph is which.    Use our algorithm to find an eulerian circuit in the eulerian graph.    If finish early, draw some more graphs and swap with another group.      "
},
{
  "id": "notes-eulerham-7",
  "level": "2",
  "url": "notes-eulerham.html#notes-eulerham-7",
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
  "title": "Hamiltonian or Not?",
  "body": " Hamiltonian or Not?      Handout contains drawings of five graphs.    Find a hamiltonian cycle or explain why there isn't one.   Don't spend too much time on any one graph.         "
},
{
  "id": "appcomb-notes-6-4",
  "level": "1",
  "url": "appcomb-notes-6-4.html",
  "type": "Handout",
  "number": "5.3",
  "title": "Graph Coloring",
  "body": " Graph Coloring   Peer instruction questions 1 3.   Let be a graph. Then is a proper coloring of if    is one-to-one     implies      uses as few colors from as possible    None of the above     Let be a graph and be a proper coloring of . Let be all vertices colored . How many edges does the subgraph of induced by contain?   0    1         Any number is possible.     What is the chromatic number of the complete graph on vertices ?                  There is no fixed formula depending on .       A graph with 11 vertices      z  y_1  y_2  y_3  y_4  y_5  x_1  x_2  x_3  x_4  x_5    1  2  3  4  2  5  4  1  5  3  1          A graph is bipartite provided that its chromatic number is .      A graph is bipartite if and only if it does not contain any odd cycles.     Peer instruction question 4.    First Fit    A graph with 8 vertices      v_1  v_3  v_5  v_7  v_2  v_4  v_6  v_8        A graph with 8 vertices      v_1  v_2  v_3  v_4  v_5  v_6  v_7  v_8         "
},
{
  "id": "appcomb-notes-6-4-7",
  "level": "2",
  "url": "appcomb-notes-6-4.html#appcomb-notes-6-4-7",
  "type": "Definition",
  "number": "5.7",
  "title": "",
  "body": "  A graph is bipartite provided that its chromatic number is .   "
},
{
  "id": "appcomb-notes-6-4-8",
  "level": "2",
  "url": "appcomb-notes-6-4.html#appcomb-notes-6-4-8",
  "type": "Theorem",
  "number": "5.8",
  "title": "",
  "body": "  A graph is bipartite if and only if it does not contain any odd cycles.   "
},
{
  "id": "appcomb-notes-6-5",
  "level": "1",
  "url": "appcomb-notes-6-5.html",
  "type": "Handout",
  "number": "5.4",
  "title": "Counting Labeled Trees",
  "body": " Counting Labeled Trees    Labeled vs Unlabeled Trees (and Graphs) and Counting      Big Idea    Two ellipses                   Constructing Prüfer Codes  Assume is a labeled tree with at least vertices.   is defined recursively by   If , return the empty string.    Else, let be the leaf of with the smallest label and let be its unique neighbor. Let be the label of . Return .      Peer instruction question 1 followed by activity.     Peer instruction questions 2 3.    Constructing Labeled Trees from Prüfer Codes     Keep track of three things   Prüfer code    Labels remaining    Edge added       Smallest remaining label not in code and first label of code determine edge to add    Remove first entry of Prüfer code. Remove label just used from label set.    Repeat until Prüfer code is empty (remaining labels are edge).    Build tree reading edges from bottom to top.      Peer Instruction Question 4.     Complete the table (and draw the tree) for the Prüfer code .    Find the tree for the Prüfer code .    Extra time? Make up a Prüfer code and have another group find the tree.               Prüfer code  Label set  Edge added    8431875          431875          31875          1875          875          75          5          (empty string)           "
},
{
  "id": "appcomb-notes-6-5-3-3-4",
  "level": "2",
  "url": "appcomb-notes-6-5.html#appcomb-notes-6-5-3-3-4",
  "type": "Activity",
  "number": "5.4.1",
  "title": "",
  "body": "  Complete the table (and draw the tree) for the Prüfer code .    Find the tree for the Prüfer code .    Extra time? Make up a Prüfer code and have another group find the tree.   "
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
