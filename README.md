Emotes
======

Meteor Falls' emote collection.

The repository is MIT licensed (for the work of the community), but any work remains property of their author(s).

Please do not request any Nintendo-related emotes.

Formats
=======

Sources of many of the emotes are available in [source/](source/). These are all 50x50, can be of any format (but usually gif), and are not optimized.

[emotes/](emotes/) is probably what you're looking for: everything's in png format, 50x50, and hopefully optimized as best we can.

[base64/](base64/) contains the emotes' base64. This is what's used in MF's scripts.

Tools
=====

* Convert the images to png using [BulkImageConverter](http://sourceforge.net/projects/bulkimageconver/?source=directory). You can use any other tool if you'd like, but this is preferred. `BulkImageConverter.exe` is gitignored, so feel free to place it in the root of the repository. You will have to copy the files manually to [emotes/](emotes/), but that's not a big deal.

* Next, use [TruePNG](http://x128.ho.ua/clicks/clicks.php?uri=TruePNG_0411.zip) to crush down the images. Just place it in the repo, `TruePNG.exe` is gitignored. Open a command prompt here and type `truepng emotes/emote.png`. The default settings will be used, don't use any other settings, we're trying to be consistent!

* Finally, convert the images to base64 (sort of manual) with [Base64Encoder](http://sourceforge.net/projects/base64encoder/files/v2.1/Setup_v2.1.exe/download) (requires .NET 2.0). Install the files here, the `Base64Encoder` directory is gitignored. The preferred format is _image_.txt. Since the tool seems to create a lot of linebreaks, use a [tool of your choice](http://textmechanic.com/Add-Remove-Line-Breaks.html) that can remove them.
