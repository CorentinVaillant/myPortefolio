window.addEventListener(
    "scroll", 
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
      
    },
    false
  );
  window.addEventListener(
    "mouseHover",
    () => {
      document.body.style.setProperty(
        "--mouseHover",
        onmouseover())
    },
    false
  )

