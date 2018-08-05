import easings from "../styles/easing";

// Created by xiaoqiang on 30/05/2018.
/**
 * @param {numeber} currentY 需要移动的dom当前位置离网页顶端的距离
 * @param {number} targetY 需要移动的dom当前位置离要移到的位置的距离
 * @param {number} step 每次移动的距离
 */
function scroll(currentY, targetY, step) {
  // 计算需要移动的距离
  const stepPX = step || 10;
  const needScrollTop = targetY - currentY;
  let _currentY = currentY;
  setTimeout(() => {
    // 一次调用滑动帧数，每次调用会不一样
    const dist = Math.ceil(needScrollTop / stepPX);
    _currentY += dist;
    window.scrollTo(_currentY, currentY);
    // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
    if (needScrollTop > stepPX || needScrollTop < -stepPX) {
      scroll(_currentY, targetY);
    } else {
      window.scrollTo(_currentY, targetY);
    }
  }, 1);
}

/**
 * @param {numeber} ele 需要移动的dom
 * @param {numeber} currentST 需要移动的dom的 ScrollTop
 * @param {number} targetST 需要移动的dom最终 ScrollTop目标
 * @param {number} step 每次移动的距离
 */

function scrollToEle(ele, currentST, targetST, step) {
  // 计算需要移动的距离
  const stepPX = step || 10;
  const needScrollTop = targetST - currentST;
  let _currentST = currentST;
  setTimeout(() => {
    // 一次调用滑动帧数，每次调用会不一样
    const dist = Math.ceil(needScrollTop / stepPX);
    _currentST += dist;
    ele.scrollTop = _currentST;
    console.log(`${ele.scrollTop} -> Scroll to -> ${_currentST}`, ele);

    // window.scrollTo(_currentST, currentST);
    // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
    if (needScrollTop > stepPX || needScrollTop < -stepPX) {
      scroll(_currentST, targetST);
    } else {
      // window.scrollTo(_currentST, targetST);
      ele.scrollTop = targetST;
    }
  }, 1);
}

scrollAnime(startTime, duration, easing) {
  const { scrollTop } = this.props;
  const start = window.pageYOffset;
  const now = 'now' in window.performance ? performance.now() : new Date().getTime();
  const time = Math.min(1, ((now - startTime) / duration));
  const timeFunction = easings[easing](time);
  // window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));
  window.scroll(0, Math.ceil((timeFunction * (scrollTop - start)) + start));

  requestAnimationFrame(this.scroll, startTime, duration, easing);
}
// 暴露此方法
export { scroll, scrollToEle, scrollAnime };
