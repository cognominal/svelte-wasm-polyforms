This is the beginning of a sveltekit based tool dealing with
polyforms using sveltekit.
It currently only show the twelve pentaminos.
Eventually the future solvers will be ported from typescript to assemblyscript
using vector extension but I don't anticipate major improvement of speed.
The speed will come with good data structure and algorithm.s


Next step. Dragging, flipping and rotating pentominos
into a rectangle. For people to manually solve
the 3x20, 4x15, 5x12, 6x10 tiling problems.


To see how to install [sveltekit-README.md](./sveltekit-README.md)

implementation details:

A pentamino perimeter is generated and implemented
as a polyline. This simplifies the code of the user 
interface. 

The routine `cacPerimeter` in `pentomino.ts` which calcultates the
perimeter will be a starting point to caculate
n-ominos (now n-polyforms). I hope it is general enough to support
other polyforms with a few tweaks.
I discuss permiter calculation difficulty in the implementation note. Ii is
a nice have but can be omitted because they  to are not the easiest way
to calculte polyforms.

