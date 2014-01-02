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

* Convert the images to **png** using [this website](http://image.online-convert.com/convert-to-png), use `Best Quality` and not `Pretty good` as quality. Take the `[code]-0.png` out of the zip if you convert from gif.

* Next, use [TruePNG](http://x128.ho.ua/clicks/clicks.php?uri=TruePNG_0411.zip) to crush down the images. Just place it in the repo, `TruePNG.exe` is gitignored. Open a command prompt here and type `truepng emotes/emote.png`. The default settings will be used, don't use any other settings, we're trying to be consistent!

* Finally, convert the images to base64 (sort of manual) with [this website](http://www.askapache.com/online-tools/base64-image-converter/). Make sure `compress images (png and jpeg)` is off. The preferred format is _image_.txt.
