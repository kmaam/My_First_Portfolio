const size = Number(process.argv[2]);

if (Number.isInteger(size) && size > 0) {
  let row = 0;
  while (row < size) {
    console.log("X".repeat(size));
    row++;
  }
} else {
  console.log("Missing size");
}
