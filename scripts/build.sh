#!/bin/bash

for i in "$@"
do
case $i in
    -f=*|--format=*) # Any string beginning with h or H: HTML
	# Any string beginning with l or L: LaTeX
	# (including calling pdflatex)
	# Any string beginning with e or E: EPUB (with SVG math)
	# Any string beginning with k or K: Kindle (EPUB with MathML math)
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
	rm -rf ${OUTDIR}
	install -d ${OUTDIR}
	${PTX}/pretext/pretext -c all -f html -o ${OUTDIR} -x\
	      exercise.divisional.statement yes exercise.divisional.hint yes\
	      exercise.divisional.answer no\
	      exercise.divisional.solution no -p ${PUBFILE}\
	      -d ${OUTDIR} ${ACDIR}/src/index.ptx 
	;;
    [lL]*)
	install -d ${OUTDIR}
	cd ${OUTDIR}
	xsltproc -o IBL-modernalgebra.tex -stringparam publisher ${PUBFILE} -xinclude ${PTX}/xsl/mathbook-latex.xsl ${ACDIR}/ptx/index.ptx
	xelatex app-comb
	xelatex app-comb
	xelatex app-comb
	;;
    [eE]*)
	install -d ${OUTDIR}	
	${PTX}/pretext/pretext -c all -f epub-svg -p ${PUBFILE} -x\
	      exercise.divisional.statement yes exercise.divisional.hint yes\
	      exercise.divisional.answer no\
	      exercise.divisional.solution no -d ${OUTDIR} -o appcomb-svg.epub ${ACDIR}/src/index.ptx
	;;
    [kK]*)
	install -d ${OUTDIR}	
	cd ${OUTDIR}
	${PTX}/pretext/pretext -c all -f epub-kindle -p ${PUBFILE} -x\
	      exercise.divisional.statement yes exercise.divisional.hint yes\
	      exercise.divisional.answer no\
	      exercise.divisional.solution no -d ${OUTDIR} -o appcomb-kindle.epub ${ACDIR}/src/index.ptx
	;;
    *)
	echo "Invalid format: ${FORMAT}"
esac

