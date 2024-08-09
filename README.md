# Project "Difference Generator"
### Hexlet tests and linter status:
[![Actions Status](https://github.com/slamix/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/slamix/frontend-project-46/actions)
![Build Status](https://github.com/slamix/frontend-project-46/workflows/custom-check/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/7db8e36b8c523f2a58aa/maintainability)](https://codeclimate.com/github/slamix/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7db8e36b8c523f2a58aa/test_coverage)](https://codeclimate.com/github/slamix/frontend-project-46/test_coverage)
### Description
Difference generator determines the difference between two data structures and shows the result in the selected format.
### Features
* Support for JSON and YAML configuration file formats 
* You can select output format: stylish(default), plain or JSON
* Recursive comparison of flat and nested structures
### System requirements
You must have downloaded nodejs, no lower than v21.7.1
### Setup
```
git clone git@github.com:slamix/frontend-project-46.git
make install
```
### Usage
```
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format [type]  output format (default: "stylish")
  -h, --help           output usage information
```
## Examples with flat files
### Data type - JSON, format - stylish
[![asciicast](https://asciinema.org/a/R2FWwfLCeVDFsc1LboZM0Ij0d.svg)](https://asciinema.org/a/R2FWwfLCeVDFsc1LboZM0Ij0d)
### Data type - YML, format - stylish 
[![asciicast](https://asciinema.org/a/tyQI3x9wDcSxEyjAntfx4XlL0.svg)](https://asciinema.org/a/tyQI3x9wDcSxEyjAntfx4XlL0)
## Examples with nested files
### Data type - JSON, format - stylish
[![asciicast](https://asciinema.org/a/4i6IcBUnol8VxeWbu2S1agale.svg)](https://asciinema.org/a/4i6IcBUnol8VxeWbu2S1agale)
### Data type - JSON, format - plain
[![asciicast](https://asciinema.org/a/dkveA7TFSYGCCcAqvUvamb4MC.svg)](https://asciinema.org/a/dkveA7TFSYGCCcAqvUvamb4MC)
### Data type - JSON, format - json
[![asciicast](https://asciinema.org/a/VKlTXnNrT5vwNDXFlD5s1dHtY.svg)](https://asciinema.org/a/VKlTXnNrT5vwNDXFlD5s1dHtY)
### Data type - YML, format - stylish
[![asciicast](https://asciinema.org/a/94T5hd3Skm8UXZoRSFLMUa5zg.svg)](https://asciinema.org/a/94T5hd3Skm8UXZoRSFLMUa5zg)
### Data type - YML, format - plain
[![asciicast](https://asciinema.org/a/fzUBS8Dm4mpS65C8rwDL97pPv.svg)](https://asciinema.org/a/fzUBS8Dm4mpS65C8rwDL97pPv)
### Data type - YML, format - json
[![asciicast](https://asciinema.org/a/cc4hstQYkRfRGobopOhE4hUqx.svg)](https://asciinema.org/a/cc4hstQYkRfRGobopOhE4hUqx)
