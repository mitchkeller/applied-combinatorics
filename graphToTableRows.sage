G = Graph({1:[2],2:[3],3:[4,5],4:[5,6,7],5:[6,7],6:[7,10],
                        7:[8,9,10],8:[9,10],9:[10,11],10:[11],11:[14,13,12],12:[13,14]})
labels={1:'k',2:'f',3:'d',4:'h',5:'l',6:'c',
                          7:'e',8:'i',9:'j',10:'p',11:'m',12:'o',13:'n',14:'g'}
for v in sorted(G.vertices()):
    print("<row>\n<cell><m>"+str(labels[v])+"</m></cell>\n<cell>",end='')
    print("<m>"+str(labels[sorted(G[v])[0]])+"</m>",end='')
    for u in sorted(G[v])[1:]:
        print(", <m>"+str(labels[u])+"</m>",end='')
    print("</cell>\n</row>")
