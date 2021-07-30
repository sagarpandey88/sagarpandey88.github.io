export function scrollToElement(id: string) {
  const elem: HTMLElement = document.getElementById(id) as HTMLElement;
  var elementOffset = elem.offsetTop - 50;
  var scrolledHeight = window.scrollY;
  timedScroll(scrolledHeight, elementOffset);
}

export function timedScroll(scrolledHeight: number, elementOffset: number) {
  requestAnimationFrame(function () {

    if (scrolledHeight < elementOffset) {
      scrolledHeight = scrolledHeight + 30;
      window.scrollTo(0, scrolledHeight);
      if (scrolledHeight < elementOffset)
        timedScroll(scrolledHeight, elementOffset);
    } else {
      scrolledHeight = scrolledHeight - 30;
      window.scrollTo(0, scrolledHeight);
      if (scrolledHeight > elementOffset)
        timedScroll(scrolledHeight, elementOffset);
    }
  });
}
