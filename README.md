# Applied Combinatorics

This repository contains the source code for the body of the text and all figure files for the text Applied Combinatorics by Mitchel T. Keller and William T. Trotter. This text is copyright 2006-2020 by Mitchel T. Keller and William T. Trotter. Please see LICENSE.md for license details.

As of May 2022, the PreTeXt CLI is the offical way to build the HTML for Applied Combinatorics. After installing the CLI, run `pretext build html`. You can then view your local copy of the HTML with `pretext view html`, which will give you a local URL to open.

The LaTeX build is considered frozen until a full new edition is released.

Building EPUB and Kindle is experimental and not recommended. This is not yet supported via the CLI, but `scripts/build.sh` may be used to attempt to create EPUB and Kindle output:

`scripts/build.sh -f=EPUB -p=publication/publication.ptx -x=/path/to/pretext -o=output/epub2022`
