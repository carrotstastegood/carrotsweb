export function scaleimage(name, increase) {
  var img = document.getElementById("requirescale");
  img.src = name;

  // Is user on a mobile device? (Also exclude iPad)
  if (
    navigator.userAgent.includes("iPhone") ||
    navigator.userAgent.includes("Android")
  ) {
    /*
      We may run into sizing issues if we always assign a specific
      percentage, but we'll cross that bridge when we get to it.
    */
    img.style.width = increase;
    console.log(img.style.width);
  }
  // If check fails, assume suitable device for rendering.
}
