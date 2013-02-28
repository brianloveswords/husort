# husort
[![Build Status](https://secure.travis-ci.org/brianloveswords/husort.png?branch=master)](http://travis-ci.org/brianloveswords/husort)

Numerically sort lines that start with human-readable file sizes, e.g. "32.3G ./Movies"

# Install
```bash
$ npm install -g husort
```

# Usage

## CLI

```bash
$ du -h /path/ | husort
```

Options:
* `-r | --reverse`: reverse the order of the sorting.

## Library

### husort(array)

Sort an array of strings where each entry is prefixed by (potentially)
human readable file sizes.

## Why not just use `sort -h`

Because when I wrote this I didn't realize `sort -h` was possible – the
native OS X `sort` doesn't have that option. It turns out you can get a
version that does, though:

```bash
$ brew install coreutils
$ brew link coreutils
$ # now you have a `gsort` bin that supports -h
```

I'll still leave this library/repo kicking around because the library
itself might be useful to someone

(Thanks to [@mrtazz](https://twitter.com/mrtazz), who pointed out the
existence of `sort -h`)

# License

MIT

```
Copyright (c) 2013 Brian J. Brennan

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
