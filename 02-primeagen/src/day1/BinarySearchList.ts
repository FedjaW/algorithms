// my own solution
export default function bs_list(haystack: number[], needle: number): boolean {
    // Remember: the haystack must be (is) sorted!
    // 0 ........x......... N
    // lo + ((hi - lo) / 2)
    var l = 0;
    var h = haystack.length;

    do {
        var mid = Math.floor(l + (h - l) / 2);
        var value = haystack[mid];

        if (value === needle) {
            return true;
        }
        if (value > needle) {
            h = mid;
        } else {
            l = mid + 1;
        }
    } while (l < h);

    return false;
}
