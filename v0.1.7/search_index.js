var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = CloseOpenIntervals","category":"page"},{"location":"#CloseOpenIntervals","page":"Home","title":"CloseOpenIntervals","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for CloseOpenIntervals.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [CloseOpenIntervals]","category":"page"},{"location":"#CloseOpenIntervals.AbstractCloseOpen","page":"Home","title":"CloseOpenIntervals.AbstractCloseOpen","text":"CloseOpen([start=0], U) <: AbstractUnitRange{Int}\nSafeCloseOpen([start=0], U) <: AbstractUnitRange{Int}\n\nDefine close-open unit ranges, i.e. CloseOpen(0,10) iterates from from 0:9. Close-open ranges can be more convenient in some circumstances, e.g. when partitioning a larger array.\n\n\nfunction foo(x)\n  nt = Threads.nthreads()\n  d, r = divrem(length(x), nt)\n  i = firstindex(x)  \n  Threads.@sync for j in 1:nt\n    stop = i + d + (r >= j)\n    Threads.@spawn bar!($(@view(x[CloseOpen(i, stop)])))\n    i = stop\n  end\nend\n\nThis saves a few -1s on the ends of the ranges if using a normal unit range.\n\nSafeCloseOpen will not iterate if U <= start, while CloseOpen doesn't check for this, and thus the behavior is undefined in that case.\n\n\n\n\n\n","category":"type"},{"location":"#CloseOpenIntervals.CloseOpen","page":"Home","title":"CloseOpenIntervals.CloseOpen","text":"CloseOpen([start=0], U) <: AbstractUnitRange\n\nIterates over the range start:U-1. Guaranteed to iterate at least once, skipping initial empty check. See ?AbstractCloseOpen for more information.\n\n\n\n\n\n","category":"type"},{"location":"#CloseOpenIntervals.SafeCloseOpen","page":"Home","title":"CloseOpenIntervals.SafeCloseOpen","text":"SafeCloseOpen([start=0], U) <: AbstractUnitRange\n\nIterates over the range start:U-1. Will not iterate if it isempty, like a typical range, making it generally the preferred choice over CloseOpen. See ?AbstractCloseOpen for more information.\n\n\n\n\n\n","category":"type"}]
}
