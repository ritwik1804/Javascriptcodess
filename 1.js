import java.util.ArrayList;
import java.util.List;

public class PowerOfTwoMaxHeap<T extends Comparable<T>> {
    private final int childDegree;
    private final List<T> heap;

    public PowerOfTwoMaxHeap(int childDegree) {
        if (childDegree <= 0) {
            throw new IllegalArgumentException("Child degree must be a positive integer");
        }
        this.childDegree = childDegree;
        this.heap = new ArrayList<>();
    }

    public void insert(T element) {
        heap.add(element);
        siftUp(heap.size() - 1);
    }

    public T popMax() {
        if (isEmpty()) {
            throw new IllegalStateException("Heap is empty");
        }

        T max = heap.get(0);
        int lastIndex = heap.size() - 1;
        heap.set(0, heap.get(lastIndex));
        heap.remove(lastIndex);
        siftDown(0);
        return max;
    }

    public boolean isEmpty() {
        return heap.isEmpty();
    }

    private void siftUp(int index) {
        T insertedElement = heap.get(index);
        while (index > 0) {
            int parentIndex = (index - 1) / childDegree;
            T parent = heap.get(parentIndex);
            if (insertedElement.compareTo(parent) <= 0) {
                break;
            }
            heap.set(index, parent);
            index = parentIndex;
        }
        heap.set(index, insertedElement);
    }

    private void siftDown(int index) {
        T root = heap.get(index);
        int heapSize = heap.size();
        while (true) {
            int maxChildIndex = getMaxChildIndex(index);
            if (maxChildIndex >= heapSize) {
                break;
            }
            T maxChild = heap.get(maxChildIndex);
            if (root.compareTo(maxChild) >= 0) {
                break;
            }
            heap.set(index, maxChild);
            index = maxChildIndex;
        }
        heap.set(index, root);
    }

    private int getMaxChildIndex(int parentIndex) {
        int startIndex = childDegree * parentIndex + 1;
        int endIndex = Math.min(startIndex + childDegree, heap.size());
        int maxChildIndex = startIndex;
        for (int i = startIndex + 1; i < endIndex; i++) {
            if (heap.get(i).compareTo(heap.get(maxChildIndex)) > 0) {
                maxChildIndex = i;
            }
        }
        return maxChildIndex;
    }
}
