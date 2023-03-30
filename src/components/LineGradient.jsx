function LineGradient({ width = "w-full" }) {
  return (
    <div
      className={`h-1  ${width} bg-gradient-to-r from-darkSecondary via-darkViteGradient to-darkSecondary`}
    ></div>
  );
}

export default LineGradient;
