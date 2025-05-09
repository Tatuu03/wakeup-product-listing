import React, {
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
  RefObject
} from 'react';

interface Props {
  loadMore: (page: number) => Promise<boolean>;
  rootRef?: RefObject<HTMLDivElement | null>;
  resetKey?: any;
}

export function InfiniteScroll({
  loadMore,
  rootRef,
  resetKey,
  children
}: PropsWithChildren<Props>) {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const sentinel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPage(1);
    setHasMore(true);
  }, [resetKey]);

  useEffect(() => {
    let isCancelled = false;
    const fetch = async () => {
      if (!hasMore) return;
      const more = await loadMore(page);
      if (!isCancelled) setHasMore(more);
    };
    fetch();
    return () => { isCancelled = true };
  }, [page, loadMore]);

  useEffect(() => {
    const rootEl = rootRef?.current || null;
    const target = sentinel.current;
    if (!target || !hasMore) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setPage(prev => prev + 1);
      }
    }, {
      root: rootEl,
      rootMargin: '200px',
      threshold: 0.1,
    });

    obs.observe(target);
    return () => obs.disconnect();
  }, [rootRef?.current, hasMore]);

  return (
    <>
      {children}
      <div style={{ height: 100 }} />
      <div ref={sentinel} style={{ height: 1 }} />
    </>
  );
}
