type BinaryNode<T> = {
    value: T
    left: BinaryNode<T>
    right: BinaryNode<T>
}

function walk(curr: BinaryNode<number> | null, path: number[]): void {
    if (!curr) {
        return
    }

    // do the 3 stepf of a recursion
    
    //  1. pre
    path.push(curr.value)
    
    //  2. recurse
    walk(curr.left, path)
    walk(curr.right, path)

    //  3. post
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    const path: number[] =  []
    walk(head, [])
    
    return path
}
