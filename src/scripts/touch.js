export default (function() {
	if (!window.location.pathname.includes("touch.html")) return // guard clause

  const DIV = document.querySelector(".touchDiv")

  DIV.addEventListener("touchstart", touchHandler)
  DIV.addEventListener("touchend", touchHandler)

  function touchHandler(event) {
    console.log(event.changedTouches[0].clientX)
  }

})()