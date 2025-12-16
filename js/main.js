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

var data_ing;

const get_data_from_csv = (source) => {
  d3.json(`/api/v1/data?source=${encodeURIComponent(source)}`).then((data) => {
    console.log(data);
    data_ing = data;
    // call other functions here after the callback executes
  });
};

const func_test = () => {
  d3.select("body")
    .selectAll("p")
    .data(data_ing)
    .enter()
    .append("p")
    .text(function (d) {
      return d.bye;
    });
};

// window.get_data_from_csv = get_data_from_csv;
