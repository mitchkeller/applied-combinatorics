#!/bin/bash

for i in "$@"
do
case $i in
    -f=*|--format=*) # Any string beginning with h or H: HTML
	# Any string beginning with l or L: LaTeX
	# (including calling pdflatex)
	# Any other string: Error
    FORMAT="${i#*=}"
    shift # past argument=value
    ;;
    -p=*|--pubfile=*)
    PUBFILE="${i#*=}"
    shift # past argument=value
    ;;
    -x=*|--pretext=*)
    PTX="${i#*=}"
    shift # past argument=value
    ;;
    -o=*|--outdir=*)
    OUTDIR="${i#*=}"
    shift # past argument=value
    ;;
    *)
          # unknown option
    ;;
esac
done

ACDIR=`pwd`


case $FORMAT in
    [hH]*)
	cp ${ACDIR}/xsl/applied-combinatorics-html.xsl ${PTX}/user
	cd ${OUTDIR}
	xsltproc -stringparam publisher ${PUBFILE} -xinclude ${PTX}/user/applied-combinatorics-html.xsl ${ACDIR}/src/index.ptx
	;;
    [lL]*)
	cd ${OUTDIR}
	xsltproc -o IBL-modernalgebra.tex -stringparam publisher ${PUBFILE} -xinclude ${PTX}/xsl/mathbook-latex.xsl ${ACDIR}/ptx/index.ptx
	xelatex app-comb
	xelatex app-comb
	xelatex app-comb
	;;
    *)
	echo "Invalid format: ${FORMAT}"
esac

