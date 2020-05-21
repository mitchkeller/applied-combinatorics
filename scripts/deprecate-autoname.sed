# PreTeXt deprecations of xref/@autoname attribute
# Robert Beezer, 2017-07-25
# Mitchel T. Keller 2017-08-01
# Modified to totally remove autoname="yes" in order to set type-global
# as the document-wide default.

# Sample usage on directory of *.xml files
# Converts from current directory to "newdir" subdirectory
#
# for f in *.xml; do echo $f; sed -f mathbook/xsl/utilities/deprecate-autoname.sed $f > newdir/$f; done


s/autoname="no"/text="global"/g
s/autoname = "no"/text = "global"/g

s/autoname="yes"//g
s/autoname = "yes"//g

s/autoname="title"/text="title"/g
s/autoname = "title"/text = "title"/g