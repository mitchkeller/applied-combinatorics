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

IBLMADIR=`pwd`


case $FORMAT in
    [hH]*)
	cp ${IBLMLADIR}/xsl/ibl-modernalgebra-html.xsl ${PTX}/user
	cd ${OUTDIR}
	xsltproc -stringparam publisher ${PUBFILE} -xinclude ${PTX}/user/ibl-modernalgebra-html.xsl ${IBLMADIR}/ptx/index.ptx
	;;
    [lL]*)
	cd ${OUTDIR}
	xsltproc -o IBL-modernalgebra.tex -stringparam publisher ${PUBFILE} -xinclude ${PTX}/xsl/mathbook-latex.xsl ${IBLMADIR}/ptx/index.ptx
	pdflatex IBL-modernalgebra
	pdflatex IBL-modernalgebra
	pdflatex IBL-modernalgebra
	;;
    *)
	echo "Invalid format: ${FORMAT}"
esac

