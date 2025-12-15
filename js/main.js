d3.select("#chart")
  .append("p")
  .on("mouseover", function () {
    this.style.backgroundColor = "yellow";
  })
  .on("mouseleave", function () {
    this.style.backgroundColor = "";
  })
  .text("D3 is working!");

const hello = () => {
  console.log("hello function");
};

const circle_op = (id) => {
  d3.select("#" + id)
    .attr("fill", "rgba(255, 242, 0, 0.5)")
    .attr("stroke", "orange")
    .attr("stroke-width", "5px");
};

const get_data_from_csv = (source) => {
  d3.json(`/api/v1/data?source=${encodeURIComponent(source)}`).then((data) => {
    console.log(data);
  });
};

window.hello = hello;
window.circle_op = circle_op;
window.get_data_from_csv = get_data_from_csv;
