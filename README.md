This is the beginning of a tool dealing with
polyforms using sveltekit.
It currently only show the twelve pentaminos.


Next step. Dragging, flipping and rotating pentominos
into a rectangle. For people to manually solve
the 3x20, 4x15, 5x12, 6x10 tiling problems.

As usual I have gone sideways. I have written a [note](implementation.README.md) on implementing
more than pentominos.

To see how to install [sveltekit-README.md](./sveltekit-README.md)

implementation details:

A pentamino perimeter is generated and implemented
as a polyline. This simplifies the code of the user 
interface. 
The routine `cacPerimeter` in `pentomino.ts`which calcultates the
perimeter will be a starting point to caculate
n-ominos. I hope it is general enough to support
other polyforms with a few tweaks

