export default function bs_list(haystack: number[], needle: number): boolean {
    // search(arr, lo, hi) needle
    // do {
    // mid = lo + (hi - lo) / 2
    // value = arr[mid]
    // if v = needle
    // return true
    // else if v > needle
    // hi = mid
    // else
    // lo = mid + 1
    // } while (lo < hi)

    let lo = 0;
    let hi = haystack.length;

    do {
        // finds where the mid is at
        let mid = Math.floor(lo + (hi - lo) / 2);
        // keeps track of each new mid
        let value = haystack[mid];

        if (value === needle) {
            // return true || the current index
            return true;
        } else if (value > needle) {
            hi = mid;
        } else {
            // lo is inclusive (+1) high is exclusive
            lo = mid + 1;
        }
    } while (lo < hi);
    // return false || -1
    return false;
}
