function anchorLinkHandler(e) {
  e.preventDefault();
  const targetAnchor = document.querySelector(this.getAttribute("href"));
  window.scrollBy({ top: targetAnchor.offsetTop - window.scrollY, left: 0, behavior: "smooth" });
  window.history.pushState("", "", this.getAttribute("href"));
}

const linksToAnchors = document.querySelectorAll('a[href^="#"]');
linksToAnchors.forEach(elem => elem.onclick = anchorLinkHandler);
