d3.select("#chart")
  .append("p")
  .on("mouseover", function () {
    this.style.backgroundColor = "yellow";
  })
  .on("mouseleave", function () {
    this.style.backgroundColor = "";
  })
  .text("D3 is working!");
