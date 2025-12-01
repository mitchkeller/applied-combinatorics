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
},
{
  "id": "notes-posets-2",
  "level": "1",
  "url": "notes-posets-2.html",
  "type": "Handout",
  "number": "6.1",
  "title": "Notation and Terminology",
  "body": " Notation and Terminology    Definition Parts    A poset is an ordered pair with a set and a binary relation on that is reflexive, antisymmetric, and transitive.       Binary relation: Ordered pairs (subset of )    Reflexive: For all , .    in        Antisymmetric: If and , then .   If in and in , then .       Transitive: If and , then .   If in and in , then in .         Peer instruction question 1    The Critic:   Saving Private Ryan    Life is Beautiful    Forrest Gump    Braveheart    Good Will Hunting    Titanic    Jurassic Park     Alice:   Life is Beautiful    Saving Private Ryan    Good Will Hunting    Titanic    Braveheart    Forrest Gump    Jurassic Park             Key Concepts for Posets  Let be a poset.   If in or in , then and are comparable .    If and neither in nor in , then and are incomparable .    A set is an antichain if no pair of distinct points in is comparable in .    A set is a chain if every pair of distinct points in is comparable in .      Peer instruction questions 2 3.    A large poset    graph={1:[2,25], 2:[14,22,23], 3:[25], 4:[19,31,26,13], 5:[25], 6:[27,31,35], 7:[8,13], 9:[14,33], 10:[25], 11:[30], 12:[17,29], 13:[34], 15:[19,28], 16:[17,21,27], 18:[21], 19:[27], 20:[31], 22:[25], 24:[26,29,32], 27:[30]}                                                Maximal vs Maximum    A chain is maxim al  if there is no chain so that .      A chain is maxim um  if there is no chain so that .         An antichain is maxim al  if there is no antichain so that .      An antichain is maxim um  if there is no antichain so that .     Peer instruction questions 4 6.     Maximal and Minimal Elements    Let be a poset. An element is maximal if there is no with in .      Let be a poset. An element is minimal if there is no with in .         With your group, list the set of maximal elements and the set of minimal elements for this poset.   A large poset    graph={1:[2,25], 2:[14,22,23], 3:[25], 4:[19,31,26,13], 5:[25], 6:[27,31,35], 7:[8,13], 9:[14,33], 10:[25], 11:[30], 12:[17,29], 13:[34], 15:[19,28], 16:[17,21,27], 18:[21], 19:[27], 20:[31], 22:[25], 24:[26,29,32], 27:[30]}                                                 Height and Width    The height of a poset is the size of a maxim um chain in       The width of a poset is the size of a maxim um antichain in      Peer instruction question 7.     "
},
{
  "id": "notes-posets-2-2-1-2",
  "level": "2",
  "url": "notes-posets-2.html#notes-posets-2-2-1-2",
  "type": "Definition",
  "number": "6.1",
  "title": "",
  "body": "  A poset is an ordered pair with a set and a binary relation on that is reflexive, antisymmetric, and transitive.   "
},
{
  "id": "notes-posets-2-4-1-2",
  "level": "2",
  "url": "notes-posets-2.html#notes-posets-2-4-1-2",
  "type": "Definition",
  "number": "6.2",
  "title": "",
  "body": "  A chain is maxim al  if there is no chain so that .   "
},
{
  "id": "notes-posets-2-4-1-3",
  "level": "2",
  "url": "notes-posets-2.html#notes-posets-2-4-1-3",
  "type": "Definition",
  "number": "6.3",
  "title": "",
  "body": "  A chain is maxim um  if there is no chain so that .   "
},
{
  "id": "notes-posets-2-4-1-5",
  "level": "2",
  "url": "notes-posets-2.html#notes-posets-2-4-1-5",
  "type": "Definition",
  "number": "6.4",
  "title": "",
  "body": "  An antichain is maxim al  if there is no antichain so that .   "
},
{
  "id": "notes-posets-2-4-1-6",
  "level": "2",
  "url": "notes-posets-2.html#notes-posets-2-4-1-6",
  "type": "Definition",
  "number": "6.5",
  "title": "",
  "body": "  An antichain is maxim um  if there is no antichain so that .   "
},
{
  "id": "notes-posets-2-4-2-2",
  "level": "2",
  "url": "notes-posets-2.html#notes-posets-2-4-2-2",
  "type": "Definition",
  "number": "6.6",
  "title": "",
  "body": "  Let be a poset. An element is maximal if there is no with in .   "
},
{
  "id": "notes-posets-2-4-2-3",
  "level": "2",
  "url": "notes-posets-2.html#notes-posets-2-4-2-3",
  "type": "Definition",
  "number": "6.7",
  "title": "",
  "body": "  Let be a poset. An element is minimal if there is no with in .   "
},
{
  "id": "notes-posets-2-5-1",
  "level": "2",
  "url": "notes-posets-2.html#notes-posets-2-5-1",
  "type": "Activity",
  "number": "6.1.1",
  "title": "",
  "body": "  With your group, list the set of maximal elements and the set of minimal elements for this poset.   A large poset    graph={1:[2,25], 2:[14,22,23], 3:[25], 4:[19,31,26,13], 5:[25], 6:[27,31,35], 7:[8,13], 9:[14,33], 10:[25], 11:[30], 12:[17,29], 13:[34], 15:[19,28], 16:[17,21,27], 18:[21], 19:[27], 20:[31], 22:[25], 24:[26,29,32], 27:[30]}                                             "
},
{
  "id": "notes-posets-2-6-1-2",
  "level": "2",
  "url": "notes-posets-2.html#notes-posets-2-6-1-2",
  "type": "Definition",
  "number": "6.8",
  "title": "",
  "body": "  The height of a poset is the size of a maxim um chain in    "
},
{
  "id": "notes-posets-2-6-1-3",
  "level": "2",
  "url": "notes-posets-2.html#notes-posets-2-6-1-3",
  "type": "Definition",
  "number": "6.9",
  "title": "",
  "body": "  The width of a poset is the size of a maxim um antichain in    "
},
{
  "id": "notes-posets-3",
  "level": "1",
  "url": "notes-posets-3.html",
  "type": "Handout",
  "number": "6.2",
  "title": "Antichain and Chain Partitioning",
  "body": " Antichain and Chain Partitioning    Duals, Cover Graphs, and Comparability Graphs    Dual of is denoted   Comparability Graph    Cover Graph  Incomparability Graph    Bob's Claims:   Only linear orders have paths as cover graphs.    A poset and its dual have the same cover graph and the same comparability graph.    Any two posets with the same cover graph have the same height and the same width.    Any two posets with the same comparability graph have the same height and the same width.       Use the small pieces of paper to fill in the grid. Every row in the Poset column will contain exactly one poset term. You will use the rest of the pieces of paper to fill in the Comparability Graph and Incomparability Graph columns as best as you can. It is possible that some squares in those columns will be blank or that some will contain more than one piece of paper. You will use all the pieces of paper, however!        Height and Antichain Partitioning   Dual of Dilworth's Theorem   A poset has height if and only if is the smallest number so that there exist disjoint antichains with .    Proof by algorithm     Let . Place minimal elements of in . Let be formed from by deleting the points in . Place minimal elements of in .    General step: Form by removing from . Let be the minimal elements of .    Continue until every point is in an antichain.         A small poset      a  b  c  d  e  f  g            Handout       Chain Partitioning and Width  Let's look back at the Dual of Dilworth's Theorem. What would be a similar result for width?   Dilworths Theorem   Let be a poset. Then is the width of if and only if is the smallest number so that there exist disjoint chains with          "
},
{
  "id": "notes-posets-3-2-1-4",
  "level": "2",
  "url": "notes-posets-3.html#notes-posets-3-2-1-4",
  "type": "Activity",
  "number": "6.2.1",
  "title": "",
  "body": "  Use the small pieces of paper to fill in the grid. Every row in the Poset column will contain exactly one poset term. You will use the rest of the pieces of paper to fill in the Comparability Graph and Incomparability Graph columns as best as you can. It is possible that some squares in those columns will be blank or that some will contain more than one piece of paper. You will use all the pieces of paper, however!   "
},
{
  "id": "thm-dual-dilworth",
  "level": "2",
  "url": "notes-posets-3.html#thm-dual-dilworth",
  "type": "Theorem",
  "number": "6.10",
  "title": "Dual of Dilworth’s Theorem.",
  "body": " Dual of Dilworth's Theorem   A poset has height if and only if is the smallest number so that there exist disjoint antichains with .    Proof by algorithm     Let . Place minimal elements of in . Let be formed from by deleting the points in . Place minimal elements of in .    General step: Form by removing from . Let be the minimal elements of .    Continue until every point is in an antichain.      "
},
{
  "id": "notes-posets-3-4-1-3",
  "level": "2",
  "url": "notes-posets-3.html#notes-posets-3-4-1-3",
  "type": "Theorem",
  "number": "6.11",
  "title": "Dilworths Theorem.",
  "body": " Dilworths Theorem   Let be a poset. Then is the width of if and only if is the smallest number so that there exist disjoint chains with    "
},
{
  "id": "notes-posets-4",
  "level": "1",
  "url": "notes-posets-4.html",
  "type": "Handout",
  "number": "6.3",
  "title": "Linear Extensions and the Subset Lattice",
  "body": " Linear Extensions and the Subset Lattice   Linear Extensions    Let be a poset. A total order on is a linear extension of provided that if in , then in .     Intuition : A linear extension can’t change the order from , but it can put incomparable elements in either way.   Why care?     When intersecting linear orders to form a poset, the linear orders are linear extensions of the resulting poset.    Sorting problems can be viewed as trying to find a particular linear extension of a poset.    Finding a linear extension of a poset is a common need. Lots of settings require ranked lists. Can we make them fair(-ish)?      The Subset Lattice    Let be a positive integer. The subset lattice  is the poset where is the set of all subsets of and in if and only if .     Peer instruction questions 1 3.    "
},
{
  "id": "notes-posets-4-2-2",
  "level": "2",
  "url": "notes-posets-4.html#notes-posets-4-2-2",
  "type": "Definition",
  "number": "6.12",
  "title": "",
  "body": "  Let be a poset. A total order on is a linear extension of provided that if in , then in .   "
},
{
  "id": "notes-posets-4-3-2",
  "level": "2",
  "url": "notes-posets-4.html#notes-posets-4-3-2",
  "type": "Definition",
  "number": "6.13",
  "title": "",
  "body": "  Let be a positive integer. The subset lattice  is the poset where is the set of all subsets of and in if and only if .   "
},
{
  "id": "notes-posets-5",
  "level": "1",
  "url": "notes-posets-5.html",
  "type": "Handout",
  "number": "6.4",
  "title": "Interval Orders",
  "body": " Interval Orders      An interval order is a special type of poset .    Each is associated with an interval      in if and only if     ’s interval stops     ’s interval is completely       We call the collection of intervals an interval representation of .     Sketch of an example, then peer instruction questions 1 2 and handout activity .    The poset below is denoted , which we read as two plus two . Draw an interval representation for this poset or explain why it is not possible.    Two disjoint chains      x  y  z  w             There are four incomparabilities we must check when confirming a    Peer instruction question 3    Fishburn's Theorem   A poset is an interval order if and only if it does not contain as a subposet.     Screenshot of the title portion of Fishburn's paper  Intransitive Indifference with Unequal Indifference Intervals by Peter C. Fishburn of the Research Analysis Corporation, McLean, Virginia. Masthead indicates Journal of Mathematical Psychology , volume 7, pages 144 149 (1970).      Can we find a representation?    An interval order with 10 points                         For a poset , we define the following notation:   Down-set (or down set): .    Up-set (or up set): .     : the set of all down-sets.     : the set of all up-sets.       Find the down-sets and as well as the up-sets , , , and for the poset shown below.    An interval order with 10 points                             Let be a poset. Then the following are equivalent:    is an interval order.    Any two distinct sets in are ordered by inclusion.    Any two distinct sets in are ordered by inclusion.         If is an interval order, then .        Poset to Interval Representation   Input: An interval order .   Determine for each .    Write down as .    Determine for each .    Write down as .    For each , find and . Then let .    (Optional unless instructed) Draw the interval representation.        Peer instruction questions 4 5.    "
},
{
  "id": "notes-posets-5-2-1",
  "level": "2",
  "url": "notes-posets-5.html#notes-posets-5-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "interval order interval representation "
},
{
  "id": "notes-posets-5-2-3",
  "level": "2",
  "url": "notes-posets-5.html#notes-posets-5-2-3",
  "type": "Activity",
  "number": "6.4.1",
  "title": "",
  "body": "  The poset below is denoted , which we read as two plus two . Draw an interval representation for this poset or explain why it is not possible.    Two disjoint chains      x  y  z  w            "
},
{
  "id": "thm-fishburn",
  "level": "2",
  "url": "notes-posets-5.html#thm-fishburn",
  "type": "Theorem",
  "number": "6.14",
  "title": "Fishburn’s Theorem.",
  "body": " Fishburn's Theorem   A poset is an interval order if and only if it does not contain as a subposet.   "
},
{
  "id": "notes-posets-5-3-1-4",
  "level": "2",
  "url": "notes-posets-5.html#notes-posets-5-3-1-4",
  "type": "Activity",
  "number": "6.4.2",
  "title": "",
  "body": "  Find the down-sets and as well as the up-sets , , , and for the poset shown below.    An interval order with 10 points                          "
},
{
  "id": "notes-posets-5-3-1-5",
  "level": "2",
  "url": "notes-posets-5.html#notes-posets-5-3-1-5",
  "type": "Proposition",
  "number": "6.15",
  "title": "",
  "body": "  Let be a poset. Then the following are equivalent:    is an interval order.    Any two distinct sets in are ordered by inclusion.    Any two distinct sets in are ordered by inclusion.      "
},
{
  "id": "notes-posets-5-3-1-6",
  "level": "2",
  "url": "notes-posets-5.html#notes-posets-5-3-1-6",
  "type": "Proposition",
  "number": "6.16",
  "title": "",
  "body": "  If is an interval order, then .   "
},
{
  "id": "notes-posets-5-4-1",
  "level": "2",
  "url": "notes-posets-5.html#notes-posets-5-4-1",
  "type": "Algorithm",
  "number": "6.17",
  "title": "Poset to Interval Representation.",
  "body": " Poset to Interval Representation   Input: An interval order .   Determine for each .    Write down as .    Determine for each .    Write down as .    For each , find and . Then let .    (Optional unless instructed) Draw the interval representation.      "
},
{
  "id": "notes-posets-6",
  "level": "1",
  "url": "notes-posets-6.html",
  "type": "Handout",
  "number": "6.5",
  "title": "Algorithms for Interval Orders",
  "body": " Algorithms for Interval Orders    Poset to Interval Representation   Input: An interval order .   Determine for each .    Write down as .    Determine for each .    Write down as .    For each , find and . Then let .    (Optional unless instructed) Draw the interval representation.        Peer instruction question 1.   This algorithm has benefits and drawbacks:   Benefit  Uses the smallest number of endpoints possible (because ).    Drawback  Creates lots of degenerate intervals of the form .        Use the algorithm to determine if the posets on your handout are interval orders (and find an interval representation if they are).      Suppose you learn that the down sets and up sets are totally ordered by inclusion and that there are down sets (and thus up sets). If the poset has a point that is incomparable to every other point, what interval would the algorithm assign?        Greedy or First Fit Algorithms     The simplest algorithms for many problems are “greedy” in the sense that they look at in some predetermined order and assign them to something by trying to use as few as possible at the moment.    There’s usually an order for which a greedy algorithm gives an optimal result, but finding that order is often hard.    First Fit can often succeed if there’s a “natural” order to use.      First Fit for Chain Partitioning Interval Orders      Fix an order in which intervals will be considered.    Assign intervals to chains .    When considering a new interval, determine which chains it can be added to.    Add it to chain with smallest subscript.    If cannot add to any existing chain, make a new one with subscript as small as possible.        Peer instruction question 2       Optimal First Fit for Chain Partitioning Interval Orders      Consider the intervals in order by left endpoint.   Break ties by choosing interval with smallest label.       Assign intervals to chains .    When considering a new interval, determine which chains it can be added to.    Add it to chain with smallest subscript.    If cannot add to any existing chain, make a new one with subscript as small as possible.        Peer instruction question 3.     Let's use First Fit (optimally) to find a chain partition of this interval order and the width of the interval order.   An interval order           Use First Fit to find the width of the interval representations given on your handout as well as a partition into as few chains as possible.     "
},
{
  "id": "notes-posets-6-2-1",
  "level": "2",
  "url": "notes-posets-6.html#notes-posets-6-2-1",
  "type": "Algorithm",
  "number": "6.18",
  "title": "Poset to Interval Representation.",
  "body": " Poset to Interval Representation   Input: An interval order .   Determine for each .    Write down as .    Determine for each .    Write down as .    For each , find and . Then let .    (Optional unless instructed) Draw the interval representation.      "
},
{
  "id": "notes-posets-6-2-4",
  "level": "2",
  "url": "notes-posets-6.html#notes-posets-6-2-4",
  "type": "Activity",
  "number": "6.5.1",
  "title": "",
  "body": "   Use the algorithm to determine if the posets on your handout are interval orders (and find an interval representation if they are).      Suppose you learn that the down sets and up sets are totally ordered by inclusion and that there are down sets (and thus up sets). If the poset has a point that is incomparable to every other point, what interval would the algorithm assign?    "
},
{
  "id": "alg-first-fit-chain",
  "level": "2",
  "url": "notes-posets-6.html#alg-first-fit-chain",
  "type": "Algorithm",
  "number": "6.19",
  "title": "First Fit for Chain Partitioning Interval Orders.",
  "body": " First Fit for Chain Partitioning Interval Orders      Fix an order in which intervals will be considered.    Assign intervals to chains .    When considering a new interval, determine which chains it can be added to.    Add it to chain with smallest subscript.    If cannot add to any existing chain, make a new one with subscript as small as possible.      "
},
{
  "id": "alg-first-fit-optimal",
  "level": "2",
  "url": "notes-posets-6.html#alg-first-fit-optimal",
  "type": "Algorithm",
  "number": "6.20",
  "title": "Optimal First Fit for Chain Partitioning Interval Orders.",
  "body": " Optimal First Fit for Chain Partitioning Interval Orders      Consider the intervals in order by left endpoint.   Break ties by choosing interval with smallest label.       Assign intervals to chains .    When considering a new interval, determine which chains it can be added to.    Add it to chain with smallest subscript.    If cannot add to any existing chain, make a new one with subscript as small as possible.      "
},
{
  "id": "notes-posets-6-4-3",
  "level": "2",
  "url": "notes-posets-6.html#notes-posets-6-4-3",
  "type": "Example",
  "number": "6.21",
  "title": "",
  "body": "  Let's use First Fit (optimally) to find a chain partition of this interval order and the width of the interval order.   An interval order        "
},
{
  "id": "notes-posets-6-4-4",
  "level": "2",
  "url": "notes-posets-6.html#notes-posets-6-4-4",
  "type": "Activity",
  "number": "6.5.2",
  "title": "",
  "body": "  Use First Fit to find the width of the interval representations given on your handout as well as a partition into as few chains as possible.   "
},
{
  "id": "notes-inclusion-exclusion-2",
  "level": "1",
  "url": "notes-inclusion-exclusion-2.html",
  "type": "Handout",
  "number": "7.1",
  "title": "Introduction; Counting Surjections",
  "body": " Introduction; Counting Surjections    Overcounting. No, undercounting. Wait, overcounting! Hmm, undercounting?   Revisiting an Old Problem   How many lattice paths from to do not pass through or ?    We need to introduce some notation:   A property  is something that an element of a set either satisfies or does not satisfy.    If is a family of properties and , then is the number of objects that satisfy for every .   If , then is the number of objects satisfying         Principle of Inclusion-Exclusion   Let be a set and a family of properties. The number of elements of which satisfy none of the properties in is given by .     Peer instruction question 1.     A class of students was polled to determine the programming languages in which they were proficient.                   Language(s)     Language(s)     Language(s)    32  ALGOL60  12  ALGOL60 + PL\/I  2  All 3    17  PL\/I  17  ALGOL60 + COBOL        26  COBOL  3  PL\/I + COBOL        How many of the students are proficient in none of the languages? Answer this question by doing the following:     Identify properties.      Write out inclusion-exclusion sum.         Counting Surjections    A function is called a surjection provided that for every , there is at least one such that . Surjections are also called onto functions .      The range of a function is the set .     Peer instruction question 2.     Let be the set of all functions from to . We say satisfies property if is not in the range of .     Peer instruction questions 3 4 followed by activity handout.     The number of surjections from to is given by .       Formula will be provided to you on Test II and the Final Exam.    You will not be expected to derive this formula.    You will be expected to recognize when a counting problem calls for surjections and to use the formula in answers.       "
},
{
  "id": "notes-inclusion-exclusion-2-2-1-2",
  "level": "2",
  "url": "notes-inclusion-exclusion-2.html#notes-inclusion-exclusion-2-2-1-2",
  "type": "Example",
  "number": "7.1",
  "title": "Revisiting an Old Problem.",
  "body": " Revisiting an Old Problem   How many lattice paths from to do not pass through or ?   "
},
{
  "id": "notes-inclusion-exclusion-2-2-1-3",
  "level": "2",
  "url": "notes-inclusion-exclusion-2.html#notes-inclusion-exclusion-2-2-1-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "property "
},
{
  "id": "notes-inclusion-exclusion-2-2-1-4",
  "level": "2",
  "url": "notes-inclusion-exclusion-2.html#notes-inclusion-exclusion-2-2-1-4",
  "type": "Theorem",
  "number": "7.2",
  "title": "Principle of Inclusion-Exclusion.",
  "body": " Principle of Inclusion-Exclusion   Let be a set and a family of properties. The number of elements of which satisfy none of the properties in is given by .   "
},
{
  "id": "notes-inclusion-exclusion-2-2-1-6",
  "level": "2",
  "url": "notes-inclusion-exclusion-2.html#notes-inclusion-exclusion-2-2-1-6",
  "type": "Activity",
  "number": "7.1.1",
  "title": "",
  "body": "  A class of students was polled to determine the programming languages in which they were proficient.                   Language(s)     Language(s)     Language(s)    32  ALGOL60  12  ALGOL60 + PL\/I  2  All 3    17  PL\/I  17  ALGOL60 + COBOL        26  COBOL  3  PL\/I + COBOL        How many of the students are proficient in none of the languages? Answer this question by doing the following:     Identify properties.      Write out inclusion-exclusion sum.    "
},
{
  "id": "notes-inclusion-exclusion-2-3-1-2",
  "level": "2",
  "url": "notes-inclusion-exclusion-2.html#notes-inclusion-exclusion-2-3-1-2",
  "type": "Definition",
  "number": "7.3",
  "title": "",
  "body": "  A function is called a surjection provided that for every , there is at least one such that . Surjections are also called onto functions .   "
},
{
  "id": "notes-inclusion-exclusion-2-3-1-3",
  "level": "2",
  "url": "notes-inclusion-exclusion-2.html#notes-inclusion-exclusion-2-3-1-3",
  "type": "Definition",
  "number": "7.4",
  "title": "",
  "body": "  The range of a function is the set .   "
},
{
  "id": "notes-inclusion-exclusion-2-3-1-5",
  "level": "2",
  "url": "notes-inclusion-exclusion-2.html#notes-inclusion-exclusion-2-3-1-5",
  "type": "Definition",
  "number": "7.5",
  "title": "",
  "body": "  Let be the set of all functions from to . We say satisfies property if is not in the range of .   "
},
{
  "id": "notes-inclusion-exclusion-2-3-1-7",
  "level": "2",
  "url": "notes-inclusion-exclusion-2.html#notes-inclusion-exclusion-2-3-1-7",
  "type": "Theorem",
  "number": "7.6",
  "title": "",
  "body": "  The number of surjections from to is given by .   "
},
{
  "id": "notes-inclusion-exclusion-3",
  "level": "1",
  "url": "notes-inclusion-exclusion-3.html",
  "type": "Handout",
  "number": "7.2",
  "title": "Counting Derangements and Euler’s <span class=\"process-math\">\\(\\phi\\)<\/span> Function",
  "body": " Counting Derangements and Euler's Function    Counting Derangements  Suppose we randomly distributed name table tents corresponding only to students here today. How many ways can we do this in which no one gets their own table tent?  A permutation of is a bijection from to .  A derangement of is a permutation of if for all .   Peer instruction question 1.   A permutation of satisfies property provided that .  To frame your discussion, think about how to fill in this blank: With inclusion-exclusion, our goal is to count the objects that satisfy of the properties.   Peer instruction question 2.     Let's count derangements of .    How many properties are in ?    How many permutations satisfy ? What about ?    How many permutations satisfy  and  ?    Let with . How many permutations satisfy all properties in ?    Let with . How many permutations satisfy all properties in ?    How many subsets of have size ?    Use inclusion-exclusion to find , the number of derangements of            Euler function    Let and be integers. The greatest common divisor of and is an integer such that divides both and and if also divides and , then . We say that and are relatively prime provided that .     Peer instruction question 3.     If is an integer, define the Euler function (sometimes Euler totient function ) .      With your group, find the following by listing the integers counted by each:                     We can also say that two integers are relatively prime if and only if they do not have any common prime factors.    Use inclusion-exclusion to find by excluding those numbers having a common prime factor with .        2  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30    3  3, 6, 9, 12, 15, 18, 21, 24, 27, 30    5  5, 10, 15, 20, 25, 30           Let , , and let be distinct primes each of which divide . The number of integers from which are divisible by each of these primes is       Let be a positive integer and suppose that has distinct prime factors: , . Then       Use the fact that to compute .         Find for each of the following integers . (Use technology to factor!)                       Suppose you need to find where . Why might this be hard, despite the information we have learned today?      Would knowing that for primes help?       What's wrong with this exercise?   A graduate student eats lunch in the campus food court every Tuesday over the course of a 15-week semester. He is joined each week by some subset of a group of six friends from across campus. Over the course of a semester, he ate lunch with each friend 11 times, each pair 9 times, and each triple 6 times. He ate lunch with each group of four friends 4 times and each group of five friends 4 times. All seven of them ate lunch together only once that semester. Did the graduate student ever eat lunch alone? If so, how many times?      "
},
{
  "id": "notes-inclusion-exclusion-3-2-1-3",
  "level": "2",
  "url": "notes-inclusion-exclusion-3.html#notes-inclusion-exclusion-3-2-1-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "permutation "
},
{
  "id": "notes-inclusion-exclusion-3-2-1-4",
  "level": "2",
  "url": "notes-inclusion-exclusion-3.html#notes-inclusion-exclusion-3-2-1-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "derangement "
},
{
  "id": "notes-inclusion-exclusion-3-2-1-9",
  "level": "2",
  "url": "notes-inclusion-exclusion-3.html#notes-inclusion-exclusion-3-2-1-9",
  "type": "Activity",
  "number": "7.2.1",
  "title": "",
  "body": "  Let's count derangements of .    How many properties are in ?    How many permutations satisfy ? What about ?    How many permutations satisfy  and  ?    Let with . How many permutations satisfy all properties in ?    Let with . How many permutations satisfy all properties in ?    How many subsets of have size ?    Use inclusion-exclusion to find , the number of derangements of    "
},
{
  "id": "notes-inclusion-exclusion-3-3-2-2",
  "level": "2",
  "url": "notes-inclusion-exclusion-3.html#notes-inclusion-exclusion-3-3-2-2",
  "type": "Definition",
  "number": "7.7",
  "title": "",
  "body": "  Let and be integers. The greatest common divisor of and is an integer such that divides both and and if also divides and , then . We say that and are relatively prime provided that .   "
},
{
  "id": "notes-inclusion-exclusion-3-3-2-4",
  "level": "2",
  "url": "notes-inclusion-exclusion-3.html#notes-inclusion-exclusion-3-3-2-4",
  "type": "Definition",
  "number": "7.8",
  "title": "",
  "body": "  If is an integer, define the Euler function (sometimes Euler totient function ) .   "
},
{
  "id": "notes-inclusion-exclusion-3-3-2-5",
  "level": "2",
  "url": "notes-inclusion-exclusion-3.html#notes-inclusion-exclusion-3-3-2-5",
  "type": "Activity",
  "number": "7.2.2",
  "title": "",
  "body": "  With your group, find the following by listing the integers counted by each:                    "
},
{
  "id": "notes-inclusion-exclusion-3-3-2-7",
  "level": "2",
  "url": "notes-inclusion-exclusion-3.html#notes-inclusion-exclusion-3-3-2-7",
  "type": "Activity",
  "number": "7.2.3",
  "title": "",
  "body": "  Use inclusion-exclusion to find by excluding those numbers having a common prime factor with .        2  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30    3  3, 6, 9, 12, 15, 18, 21, 24, 27, 30    5  5, 10, 15, 20, 25, 30     "
},
{
  "id": "notes-inclusion-exclusion-3-4-1",
  "level": "2",
  "url": "notes-inclusion-exclusion-3.html#notes-inclusion-exclusion-3-4-1",
  "type": "Proposition",
  "number": "7.9",
  "title": "",
  "body": "  Let , , and let be distinct primes each of which divide . The number of integers from which are divisible by each of these primes is    "
},
{
  "id": "notes-inclusion-exclusion-3-4-2",
  "level": "2",
  "url": "notes-inclusion-exclusion-3.html#notes-inclusion-exclusion-3-4-2",
  "type": "Theorem",
  "number": "7.10",
  "title": "",
  "body": "  Let be a positive integer and suppose that has distinct prime factors: , . Then    "
},
{
  "id": "notes-inclusion-exclusion-3-4-3",
  "level": "2",
  "url": "notes-inclusion-exclusion-3.html#notes-inclusion-exclusion-3-4-3",
  "type": "Example",
  "number": "7.11",
  "title": "",
  "body": "  Use the fact that to compute .   "
},
{
  "id": "notes-inclusion-exclusion-3-5-1",
  "level": "2",
  "url": "notes-inclusion-exclusion-3.html#notes-inclusion-exclusion-3-5-1",
  "type": "Activity",
  "number": "7.2.4",
  "title": "",
  "body": "   Find for each of the following integers . (Use technology to factor!)                       Suppose you need to find where . Why might this be hard, despite the information we have learned today?      Would knowing that for primes help?    "
},
{
  "id": "notes-inclusion-exclusion-3-5-2",
  "level": "2",
  "url": "notes-inclusion-exclusion-3.html#notes-inclusion-exclusion-3-5-2",
  "type": "Activity",
  "number": "7.2.5",
  "title": "",
  "body": "  What's wrong with this exercise?   A graduate student eats lunch in the campus food court every Tuesday over the course of a 15-week semester. He is joined each week by some subset of a group of six friends from across campus. Over the course of a semester, he ate lunch with each friend 11 times, each pair 9 times, and each triple 6 times. He ate lunch with each group of four friends 4 times and each group of five friends 4 times. All seven of them ate lunch together only once that semester. Did the graduate student ever eat lunch alone? If so, how many times?    "
},
{
  "id": "notes-genfunction-2",
  "level": "1",
  "url": "notes-genfunction-2.html",
  "type": "Handout",
  "number": "8.1",
  "title": "Introduction to Ordinary Generating Functions",
  "body": " Introduction to Ordinary Generating Functions    Formal Power Series     Sequence     Formal power series     Convergence tests?    Interval and radius of convergence?    Representing as functions?    In combinatorics, we call formal power series generating functions .       Let and be generating functions. Then is the generating function of the sequence whose coefficient on is given by      PAINFUL!     Handing stuff out again  Suppose you wanted to make a really boring “fruit” basket that contains only apples. Let’s also say that you have only (identical) apples available. For aesthetic reasons, you insist that the basket contain exactly , , or apples.   Peer instruction questions 1 2.   The generating function for the number of fruit baskets with apples subject to these rules is  Now we’ve got oranges, too! We have six (identical) oranges to use in fruit baskets, and we don’t care about aesthetics for oranges. (Still only allow 1, 3, or 4 apples.)  How many ways to make a fruit basket with    piece of fruit?     pieces of fruit?     pieces of fruit?           Suppose we now have bananas to add and that we must place at least one banana in a fruit basket. This introduces which factor? Peer instruction question 3     Find the generating function in which the coefficient on is the number of fruit baskets containing pieces of fruit subject to the following restrictions:   Pears: at least     Peaches: an even number    Kiwi: at least and no more than     Grapefruit: either none or at least         Peer instruction question 4.     Find the generating function in which the coefficient on is the number of fruit baskets containing pieces of fruit subject to the following restrictions:   Apples: , , or     Oranges: At most six    Bananas: At least one    Peaches: An odd number           Suppose in the country Combinatoria, they use coins with values 1, 2, 5, 10, 50, and 100. If you would like to write a generating function in which the coefficient on is the number of ways to form a collection of coins worth subject to the restriction that the number of coins of value is one, three, four, or five, what factor would you introduce into your generating function?       My Own Journey with Generating Functions   Keller and Young 2020   The ordinary generating function for the number of hereditary unit interval orders with points, , is and is asymptotically .     OEIS A293499 ( New! )    Keller and Young 2020   The generating function for the number of unit interval orders of dimension at most with points, , is and is asymptotically .     OEIS A293498 ( New! )    "
},
{
  "id": "notes-genfunction-2-2-1-2",
  "level": "2",
  "url": "notes-genfunction-2.html#notes-genfunction-2-2-1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "generating functions "
},
{
  "id": "notes-genfunction-2-2-1-3",
  "level": "2",
  "url": "notes-genfunction-2.html#notes-genfunction-2-2-1-3",
  "type": "Proposition",
  "number": "8.1",
  "title": "",
  "body": "  Let and be generating functions. Then is the generating function of the sequence whose coefficient on is given by    "
},
{
  "id": "notes-genfunction-2-3-3",
  "level": "2",
  "url": "notes-genfunction-2.html#notes-genfunction-2-3-3",
  "type": "Activity",
  "number": "8.1.1",
  "title": "",
  "body": "  Find the generating function in which the coefficient on is the number of fruit baskets containing pieces of fruit subject to the following restrictions:   Pears: at least     Peaches: an even number    Kiwi: at least and no more than     Grapefruit: either none or at least       "
},
{
  "id": "notes-genfunction-2-3-5",
  "level": "2",
  "url": "notes-genfunction-2.html#notes-genfunction-2-3-5",
  "type": "Activity",
  "number": "8.1.2",
  "title": "",
  "body": "  Find the generating function in which the coefficient on is the number of fruit baskets containing pieces of fruit subject to the following restrictions:   Apples: , , or     Oranges: At most six    Bananas: At least one    Peaches: An odd number      "
},
{
  "id": "notes-genfunction-2-4-1",
  "level": "2",
  "url": "notes-genfunction-2.html#notes-genfunction-2-4-1",
  "type": "Activity",
  "number": "8.1.3",
  "title": "",
  "body": "  Suppose in the country Combinatoria, they use coins with values 1, 2, 5, 10, 50, and 100. If you would like to write a generating function in which the coefficient on is the number of ways to form a collection of coins worth subject to the restriction that the number of coins of value is one, three, four, or five, what factor would you introduce into your generating function?   "
},
{
  "id": "notes-genfunction-2-5-1-2",
  "level": "2",
  "url": "notes-genfunction-2.html#notes-genfunction-2-5-1-2",
  "type": "Theorem",
  "number": "8.2",
  "title": "Keller and Young 2020.",
  "body": " Keller and Young 2020   The ordinary generating function for the number of hereditary unit interval orders with points, , is and is asymptotically .   "
},
{
  "id": "notes-genfunction-2-5-1-4",
  "level": "2",
  "url": "notes-genfunction-2.html#notes-genfunction-2-5-1-4",
  "type": "Theorem",
  "number": "8.3",
  "title": "Keller and Young 2020.",
  "body": " Keller and Young 2020   The generating function for the number of unit interval orders of dimension at most with points, , is and is asymptotically .   "
},
{
  "id": "notes-genfunction-3",
  "level": "1",
  "url": "notes-genfunction-3.html",
  "type": "Handout",
  "number": "8.2",
  "title": "Partitions and Newton’s Binomial Theorem",
  "body": " Partitions and Newton's Binomial Theorem    Partitions of Integers    A partition of the positive integer is a way of writing as a sum of nonincreasing positive integers.      A partition of a positive integer is said to be a partition into odd parts if every term (also referred to as a part ) in the sum is odd.      A partition of a positive integer is said to be a partition into distinct parts if each integer appears in the sum at most once.      List the partitions of . Count the number of partitions into odd parts. Count the number of partitions into distinct parts.    Be systematic! One way to do this is by grouping partitions by their largest part.               Write a generating function in which the coefficient on is the number of partitions of into distinct parts.     Hint : This is conveniently done as a product of simple generating functions.       Write a generating function in which the coefficient on is the number of partitions of into odd parts.     Hint : A convenient form is a product of rational functions, but you might want to start with a product of power series and rewrite it.       Show that your generating functions above are actually equal to one another.     Hint :          Newton's Binomial Theorem    For all real numbers and nonnegative integers , the number is defined by    for all real numbers and     for all real numbers and integers .         For all real numbers and nonnegative integers , .      Compute .      For all real with , .      For each , .      Use mathematical induction to show that for all , .     Use Newton’s Binomial Theorem and the step above to write as a formal power series in which the coefficient on is a binomial coefficient in which both numbers are integers .       "
},
{
  "id": "notes-genfunction-3-2-1-2",
  "level": "2",
  "url": "notes-genfunction-3.html#notes-genfunction-3-2-1-2",
  "type": "Definition",
  "number": "8.4",
  "title": "",
  "body": "  A partition of the positive integer is a way of writing as a sum of nonincreasing positive integers.   "
},
{
  "id": "notes-genfunction-3-2-1-3",
  "level": "2",
  "url": "notes-genfunction-3.html#notes-genfunction-3-2-1-3",
  "type": "Definition",
  "number": "8.5",
  "title": "",
  "body": "  A partition of a positive integer is said to be a partition into odd parts if every term (also referred to as a part ) in the sum is odd.   "
},
{
  "id": "notes-genfunction-3-2-1-4",
  "level": "2",
  "url": "notes-genfunction-3.html#notes-genfunction-3-2-1-4",
  "type": "Definition",
  "number": "8.6",
  "title": "",
  "body": "  A partition of a positive integer is said to be a partition into distinct parts if each integer appears in the sum at most once.   "
},
{
  "id": "notes-genfunction-3-2-1-5",
  "level": "2",
  "url": "notes-genfunction-3.html#notes-genfunction-3-2-1-5",
  "type": "Activity",
  "number": "8.2.1",
  "title": "",
  "body": "  List the partitions of . Count the number of partitions into odd parts. Count the number of partitions into distinct parts.    Be systematic! One way to do this is by grouping partitions by their largest part.   "
},
{
  "id": "notes-genfunction-3-4-1",
  "level": "2",
  "url": "notes-genfunction-3.html#notes-genfunction-3-4-1",
  "type": "Activity",
  "number": "8.2.2",
  "title": "",
  "body": "   Write a generating function in which the coefficient on is the number of partitions of into distinct parts.     Hint : This is conveniently done as a product of simple generating functions.       Write a generating function in which the coefficient on is the number of partitions of into odd parts.     Hint : A convenient form is a product of rational functions, but you might want to start with a product of power series and rewrite it.       Show that your generating functions above are actually equal to one another.     Hint :      "
},
{
  "id": "notes-genfunction-3-5-1-2",
  "level": "2",
  "url": "notes-genfunction-3.html#notes-genfunction-3-5-1-2",
  "type": "Definition",
  "number": "8.7",
  "title": "",
  "body": "  For all real numbers and nonnegative integers , the number is defined by    for all real numbers and     for all real numbers and integers .      "
},
{
  "id": "notes-genfunction-3-5-1-3",
  "level": "2",
  "url": "notes-genfunction-3.html#notes-genfunction-3-5-1-3",
  "type": "Definition",
  "number": "8.8",
  "title": "",
  "body": "  For all real numbers and nonnegative integers , .   "
},
{
  "id": "notes-genfunction-3-5-1-4",
  "level": "2",
  "url": "notes-genfunction-3.html#notes-genfunction-3-5-1-4",
  "type": "Activity",
  "number": "8.2.3",
  "title": "",
  "body": "  Compute .   "
},
{
  "id": "notes-genfunction-3-5-1-5",
  "level": "2",
  "url": "notes-genfunction-3.html#notes-genfunction-3-5-1-5",
  "type": "Theorem",
  "number": "8.9",
  "title": "",
  "body": "  For all real with , .   "
},
{
  "id": "notes-genfunction-3-5-1-6",
  "level": "2",
  "url": "notes-genfunction-3.html#notes-genfunction-3-5-1-6",
  "type": "Lemma",
  "number": "8.10",
  "title": "",
  "body": "  For each , .   "
},
{
  "id": "notes-genfunction-3-5-1-7",
  "level": "2",
  "url": "notes-genfunction-3.html#notes-genfunction-3-5-1-7",
  "type": "Activity",
  "number": "8.2.4",
  "title": "",
  "body": "  Use mathematical induction to show that for all , .     Use Newton’s Binomial Theorem and the step above to write as a formal power series in which the coefficient on is a binomial coefficient in which both numbers are integers .    "
},
{
  "id": "notes-exp-genfn",
  "level": "1",
  "url": "notes-exp-genfn.html",
  "type": "Handout",
  "number": "8.3",
  "title": "Exponential Generating Functions",
  "body": " Exponential Generating Functions   Peer instruction questions 1 3.     Suppose we are making strings using the alphabet . If the number of times appears in the string is at least one and at most four, the number of times appears in the string is a positive even number, and there are at least three occurrences of in the string, write an exponential generating function in which the coefficient on is the number of such strings of length .    "
},
{
  "id": "notes-exp-genfn-3",
  "level": "2",
  "url": "notes-exp-genfn.html#notes-exp-genfn-3",
  "type": "Activity",
  "number": "8.3.1",
  "title": "",
  "body": "  Suppose we are making strings using the alphabet . If the number of times appears in the string is at least one and at most four, the number of times appears in the string is a positive even number, and there are at least three occurrences of in the string, write an exponential generating function in which the coefficient on is the number of such strings of length .   "
},
{
  "id": "notes-recurrence-intro",
  "level": "1",
  "url": "notes-recurrence-intro.html",
  "type": "Handout",
  "number": "9.1",
  "title": "Introduction to Advancement Operators",
  "body": " Introduction to Advancement Operators     Rabbits   , ,     Strings   , ,     Regions   ,       A linear recurrence equation is of the form where is an integer and is a function.  If each is a contant with , then we say the equation has constant coefficients .     Peer instruction question 4.     The linear recurrence equation is called homogeneous if for all .     Peer instruction question 5.    An analogy to calculus (or differential equations)  Let's write for the differential operator . Solve the equation where is a differentiable function of with and        Let . The advancement operator  is defined so that for all .    For a positive integer, denotes applying to  times.       Rewrite each of the following expressions so that it does not use the advancement operator.                             Let . Verify that .      Write each of the following recurrence equations as advancement operator equations.                       "
},
{
  "id": "def-linear-recurrence",
  "level": "2",
  "url": "notes-recurrence-intro.html#def-linear-recurrence",
  "type": "Definition",
  "number": "9.1",
  "title": "",
  "body": "  A linear recurrence equation is of the form where is an integer and is a function.  If each is a contant with , then we say the equation has constant coefficients .   "
},
{
  "id": "def-homog-recurr",
  "level": "2",
  "url": "notes-recurrence-intro.html#def-homog-recurr",
  "type": "Definition",
  "number": "9.2",
  "title": "",
  "body": "  The linear recurrence equation is called homogeneous if for all .   "
},
{
  "id": "notes-recurrence-intro-3-1",
  "level": "2",
  "url": "notes-recurrence-intro.html#notes-recurrence-intro-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "advancement operator "
},
{
  "id": "notes-recurrence-intro-3-2",
  "level": "2",
  "url": "notes-recurrence-intro.html#notes-recurrence-intro-3-2",
  "type": "Activity",
  "number": "9.1.1",
  "title": "",
  "body": "  Rewrite each of the following expressions so that it does not use the advancement operator.                         "
},
{
  "id": "notes-recurrence-intro-3-3",
  "level": "2",
  "url": "notes-recurrence-intro.html#notes-recurrence-intro-3-3",
  "type": "Activity",
  "number": "9.1.2",
  "title": "",
  "body": "   Let . Verify that .      Write each of the following recurrence equations as advancement operator equations.                     "
},
{
  "id": "notes-recurrence-3",
  "level": "1",
  "url": "notes-recurrence-3.html",
  "type": "Handout",
  "number": "9.2",
  "title": "Homogeneous Recurrence Equations",
  "body": " Homogeneous Recurrence Equations   Solving Advancement Operator Equations   Solve the advancement operator equation with the initial condition .     Applying Advancement Operator Polynomials   Let and be constants and define . Compute .      The solution to the advancement operator equation where if is     When solving we’ll focus on . Any factors of in could be dealt with by shifting solutions.   "
},
{
  "id": "notes-recurrence-3-2",
  "level": "2",
  "url": "notes-recurrence-3.html#notes-recurrence-3-2",
  "type": "Example",
  "number": "9.3",
  "title": "Solving Advancement Operator Equations.",
  "body": " Solving Advancement Operator Equations   Solve the advancement operator equation with the initial condition .   "
},
{
  "id": "notes-recurrence-3-3",
  "level": "2",
  "url": "notes-recurrence-3.html#notes-recurrence-3-3",
  "type": "Example",
  "number": "9.4",
  "title": "Applying Advancement Operator Polynomials.",
  "body": " Applying Advancement Operator Polynomials   Let and be constants and define . Compute .   "
},
{
  "id": "prop-adv-op-distinct",
  "level": "2",
  "url": "notes-recurrence-3.html#prop-adv-op-distinct",
  "type": "Proposition",
  "number": "9.5",
  "title": "",
  "body": "  The solution to the advancement operator equation where if is   "
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
