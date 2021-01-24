import {
  useRef,
  useMemo,
  useState,
  useEffect,
  MutableRefObject,
  SyntheticEvent,
} from 'react';
import { useSize } from 'shooks';

export interface OptionType {
  itemHeight: number | ((index: number) => number); // 每列的高度
  overscan?: number;
}

/**
 * 虚拟列表氛围外层固定高度框架盒子container ，和内层撑高盒子 wrapper
 * @param {Array} list
 * @param { OptionType } option
 */
const useVirtualList = <T = any>(list: T[], options: OptionType) => {
  // 初始化
  const containerRef = useRef<HTMLElement | null>();
  const size = useSize(containerRef as MutableRefObject<HTMLElement>);
  const [state, setState] = useState({ start: 0, end: 5 });
  const { itemHeight, overscan = 5 } = options;

  if (!itemHeight) {
    console.warn('please enter a valid itemHeight');
  }

  useEffect(() => {
    calculateRange();
  }, [state.start, state.end]);

  // 计算显示区域数据长度，计算start 和 end
  const calculateRange = () => {
    const element = containerRef.current;
    if (element) {
      const offset = getOffset(element.scrollTop);
      const viewCapacity = getViewCapacity(element.clientHeight);
      const from = offset - overscan;
      const to = offset + viewCapacity + overscan;

      setState({
        start: from < 0 ? 0 : from,
        end: to > list.length ? list.length : to,
      });
    }
  };

  // 获取可视区容量
  const getViewCapacity = (containerHeight: number) => {
    if (typeof itemHeight === 'number')
      return Math.ceil(containerHeight / itemHeight);

    const { start = 0 } = state;
    let sum = 0;
    let capacity = 0;
    for (let i = start; i <= list.length; i++) {
      const height = itemHeight(i);
      sum += height;
      if (sum > containerHeight) {
        capacity = i;
        break;
      }
    }
    return capacity - start;
  };

  // 计算从上偏移数量
  const getOffset = (scrollTop: number) => {
    if (typeof itemHeight === 'number')
      return Math.ceil(scrollTop / itemHeight);

    let sum = 0;
    let offset = 0;
    for (let i = 0; i <= list.length; i++) {
      const height = itemHeight(i);
      sum += height;
      if (sum > scrollTop) {
        offset = i;
        break;
      }
    }
    return offset + 1;
  };

  // 根据下表获取offsetTop
  const getDistanceTop = (index: number) => {
    if (typeof itemHeight === 'number') return index * itemHeight;
    return list
      .slice(0, index)
      .reduce((sum, _, index) => sum + itemHeight(index), 0);
  };

  // 计算总高度
  const totalHeight = useMemo(() => {
    if (typeof itemHeight === 'number') return list.length * itemHeight;
    return list.reduce((sum, _, index) => sum + itemHeight(index), 0);
  }, [list.length]);

  // 计算起始位置的 offsetTop
  const offsetTop = useMemo(() => getDistanceTop(state.start), [state.start]);

  // 滚动到
  const scrollTo = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTop = getDistanceTop(index);
      calculateRange();
    }
  };

  return {
    list: list.slice(state.start, state.end).map((ele, index) => ({
      data: ele,
      index: index + state.start,
    })),
    scrollTo,
    containerProps: {
      ref: (ele: HTMLElement) => (containerRef.current = ele),
      onScroll: (e: SyntheticEvent) => {
        e.preventDefault();
        calculateRange();
      },
    },
    wrapperProps: {
      style: {
        width: '100%',
        height: totalHeight - offsetTop,
        marginTop: offsetTop,
      },
    },
  };
};

export default useVirtualList;
