<?xml version="1.0" encoding="UTF-8" ?>

<!-- Customizations for HTML runs -->
<!DOCTYPE xsl:stylesheet [
    <!ENTITY % entities SYSTEM "../xsl/entities.ent">
    %entities;
]>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<!-- Conveniences for classes of similar elements -->
  
<!-- Assumes current file is in mathbook/user, so it must be copied there -->
<xsl:import href="../xsl/mathbook-html.xsl" />

<!-- List Chapters and Sections in sidebar Table of Contents -->
<xsl:param name="toc.level" select="'2'" />

<!-- Examples and inline exercises are knowlized by default -->
<!-- We disable this behavior  -->
<xsl:param name="html.knowl.example" select="'no'" />

<!-- Exercises may have hint, answer, and solution -->
<xsl:param name="exercise.divisional.statement" select="'yes'" />
<xsl:param name="exercise.divisional.hint" select="'yes'" />
<xsl:param name="exercise.divisional.answer" select="'no'" />
<xsl:param name="exercise.divisional.solution" select="'no'" />

<!-- Number theorms at level 1 -->
<xsl:param name="numbering.theorems.level" select="'1'" />

</xsl:stylesheet>
