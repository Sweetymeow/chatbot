const scrollAnime = (container, currentST, targetST, step) => {
  // 计算需要移动的距离
  const stepPX = step || 10;
  const needScrollTop = targetST - currentST;
  let _currentST = currentST;

  setTimeout(() => { // 一次调用滑动帧数，每次调用会不一样
    const dist = Math.ceil(needScrollTop / stepPX);
    _currentST += dist;
    container.scrollTop = _currentST;
    // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
    if (needScrollTop > stepPX || needScrollTop < -stepPX) {
      scrollAnime(container, _currentST, targetST, step);
    } else {
      container.scrollTop = targetST;
    }
  }, 10);
};

export default scrollAnime;
