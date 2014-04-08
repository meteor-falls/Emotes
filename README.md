Emotes
======

Meteor Falls' emote collection.

The repository is MIT licensed (for the work of the community), but any work remains property of their author(s).

Please do not request any Nintendo-related emotes.

Formats
=======

Sources of many of the emotes are available in [source/](source/). These are mostly 50x50, can be of any format (but usually gif), and are not optimized.

[emotes/](emotes/) is probably what you're looking for: everything's in png format, usually 50x50, and hopefully optimized as best we can.

Tools
=====

In the `scripts` directory:
* `$ node generate-emotes` to generate a json file of all the emotes. Hotlink to this for the most recent version.
* `$ node add-emote [name]` to add an emote. This expects the source to be in the `source` directory and an entry to be available in `emotes.names.json`.
* `$ node remove-emote [name]` to remove an emote. This doesn't delete any files, it only edits emotes.json (and **not** `emotes.names.json`)
