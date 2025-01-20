import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";

function RotatableWheel() {
  const [rotation, setRotation] = useState(0);
  const [topPrize, setTopPrize] = useState(null); // To store the top prize
  const wheelRef = useRef(null);
  const startAngle = useRef(0);
  const currentRotation = useRef(0);

  const data = [
    { label: "Prize 1" },
    { label: "Prize 2" },
    { label: "Prize 3" },
    { label: "Prize 4" },
    { label: "Prize 5" },
    { label: "Prize 6" },
  ];
  const width = 300;
  const height = 300;
  const radius = Math.min(width, height) / 2;
  const colors = d3.schemeCategory10;

  const getAngle = (event) => {
    const rect = wheelRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;
    return Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    startAngle.current = getAngle(event) - currentRotation.current;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event) => {
    const angle = getAngle(event) - startAngle.current;
    setRotation(angle);
    currentRotation.current = angle;
    updateTopPrize(angle); // Update the top prize based on the current angle
  };

  const handleMouseUp = () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  const updateTopPrize = (angle) => {
    // Normalize the angle to be between 0 and 360
    const normalizedAngle = ((angle % 360) + 360) % 360;

    // Calculate the segment's angular width
    const segmentAngle = 360 / data.length;

    // Find the segment that is closest to the top (0 degrees)
    const segmentIndex = Math.floor(
      (normalizedAngle + segmentAngle / 2) / segmentAngle
    );

    // Set the top prize based on the segment index
    console.log("segmentIndex", segmentIndex);
    setTopPrize(data[Math.abs(segmentIndex - 6)].label);
  };

  useEffect(() => {
    const svg = d3
      .select(wheelRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    const pie = d3.pie().sort(null).value(1);

    const arcs = svg
      .selectAll("g.arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    arcs
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => colors[i % colors.length]);

    arcs
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .style("font-size", "12px")
      .text((d) => d.data.label);
  }, [data]);

  return (
    <div>
      <div
        onMouseDown={handleMouseDown}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          cursor: "grab",
          display: "inline-block",
        }}
      >
        <svg
          ref={wheelRef}
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <p>
          {topPrize
            ? `The prize on top is: ${topPrize}`
            : "Spin the wheel to find out the top prize!"}
        </p>
      </div>
    </div>
  );
}

export default RotatableWheel;
