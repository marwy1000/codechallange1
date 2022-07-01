# Introduction
I saw this Medium Google Coding Interview With Ben Awad on Youtube, held by Clément Mihailescu and wanted to try to solve it myself using Javascript.

You can check out the video [here](https://www.youtube.com/watch?v=4tYoVx0QoN0)
# Running
To run this type "node app.js" in the terminal, no input required.

# Requirements
Make sure that node is installed. This was developed with v 14, but newer and older versions should work.

# Problem statement
_A array of arrays, a matrix, that represents an image is the input. 1 represents black pixels. 0 represents white pixels. 
Transform the image so black pixels that are not connected are transformed to white pixels.
A connected black pixel is a pixel that is connected to the edges, or neighbour with another connected pixel. 
The neighbours are in 4 directions: up, down, left and right._

# Example data

### Input sample image
|  input  | 0 | 1 | 2 | 3 | 4 | 5 |
| ------- |---|---|---|---|---|---|
|    0    | 1 | 0 | 0 | 0 | 0 | 0 |
|    1    | 0 | 1 | 0 | 1 | 1 | 1 |
|    2    | 0 | 0 | 1 | 0 | 1 | 0 |
|    3    | 1 | 1 | 0 | 0 | 1 | 0 |
|    4    | 1 | 0 | 1 | 1 | 0 | 0 |
|    5    | 1 | 0 | 0 | 0 | 0 | 1 |

### Output image
| output  | 0 | 1 | 2 | 3 | 4 | 5 |
| ------- |---|---|---|---|---|---|
|    0    | 1 | 0 | 0 | 0 | 0 | 0 |
|    1    | 0 | 0 | 0 | 1 | 1 | 1 |
|    2    | 0 | 0 | 0 | 0 | 1 | 0 |
|    3    | 1 | 1 | 0 | 0 | 1 | 0 |
|    4    | 1 | 0 | 0 | 0 | 0 | 0 |
|    5    | 1 | 0 | 0 | 0 | 0 | 1 |

### Difference between input and output
| change  | 0 | 1 | 2 | 3 | 4 | 5 |
| ------- |---|---|---|---|---|---|
|    0    |   |   |   |   |   |   |
|    1    |   | X |   |   |   |   |
|    2    |   |   | X |   |   |   |
|    3    |   |   |   |   |   |   |
|    4    |   |   | X | X |   |   |
|    5    |   |   |   |   |   |   |