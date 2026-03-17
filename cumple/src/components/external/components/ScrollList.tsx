import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import "./scroll.scss";

Scrollbar.use(OverscrollPlugin);

const ScrollList = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scrollbar = Scrollbar.init(scrollRef.current, {
      plugins: {
        overscroll: true,
      },
    });

    const listItems = scrollRef.current.querySelectorAll(
      ".js-scroll-list-item"
    ) as NodeListOf<HTMLElement>;

    if (listItems.length > 0) {
      listItems[0].classList.add("item-focus");
      listItems[1]?.classList.add("item-next");
    }

    scrollbar.addListener((status) => {
      const content = scrollRef.current;
      if (!content) return;

      const top = status.offset.y;

      const items = content.querySelectorAll(
        ".js-scroll-list-item"
      ) as NodeListOf<HTMLElement>;

      const parentTop = 1;

      items.forEach((li) => {
        const liTop = li.offsetTop;
        const liRelTop = liTop - parentTop;

        if (liRelTop + content.scrollTop > top) {
          if (!li.classList.contains("item-focus")) {
            li.previousElementSibling?.classList.add("item-hide");

            items.forEach((el) => {
              el.classList.remove("item-focus");
              el.classList.remove("item-next");
            });
          }

          li.classList.remove("item-hide");
          li.classList.add("item-focus");
          li.nextElementSibling?.classList.add("item-next");
        }
      });
    });

    return () => {
      scrollbar.destroy();
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="scroll-list">
        <div
          className="scroll-list__wrp js-scroll-content js-scroll-list"
          ref={scrollRef}
        >
          {Array.from({ length: 56 }).map((_, i) => (
            <div
              key={i}
              className="scroll-list__item js-scroll-list-item"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollList;