let filters = {
  brightness: { value: 100, unit: "%", min: 0, max: 200 },
  contrast: { value: 100, unit: "%", min: 0, max: 200 },
  saturation: { value: 100, unit: "%", min: 0, max: 200 },
  hueRotation: { value: 0, unit: "deg", min: 0, max: 360 },
  blur: { value: 0, unit: "px", min: 0, max: 20 },
  grayscale: { value: 0, unit: "%", min: 0, max: 100 },
  sepia: { value: 0, unit: "%", min: 0, max: 100 },
  opacity: { value: 100, unit: "%", min: 0, max: 100 },
  invert: { value: 0, unit: "%", min: 0, max: 100 },
};
const canvas = document.querySelector("#image-canvas");
const imageInput = document.querySelector("#image-input");
const ctx = canvas.getContext("2d");
const resetBtn = document.querySelector("#reset-btn");
const downloadBtn = document.querySelector("#download-btn");
let file = null;
let image = null;
const filterContainer = document.querySelector(".filters");
const presetsContainer = document.querySelector(".presets");

function createFilterElement(name, unit, value, min, max) {
  const div = document.createElement("div");
  div.classList.add("filter");

  const input = document.createElement("input");
  input.type = "range";
  input.id = name;
  input.min = min;
  input.max = max;
  input.value = value;

  const p = document.createElement("p");
  p.innerText = name;

  div.appendChild(p);
  div.appendChild(input);

  input.addEventListener("input", (event) => {
    filters[name].value = event.target.value;
    applyFilters();
  });
  return div;
}

function createFilter(){
    Object.keys(filters).forEach((filter) => {
  const filterElement = createFilterElement(
    filter,
    filters[filter].unit,
    filters[filter].value,
    filters[filter].min,
    filters[filter].max
  );
  filterContainer.appendChild(filterElement);
});
}

createFilter();

imageInput.addEventListener("change", function (e) {
  file = e.target.files[0];
  const placeholder = document.querySelector(".placeholder");
  placeholder.style.display = "none";
  canvas.style.display = "block";

  const img = new Image();
  img.src = URL.createObjectURL(file);

  img.onload = () => {
    image = img;
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
  };
});

function applyFilters() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.filter = `
        brightness(${filters.brightness.value}${filters.brightness.unit})
        contrast(${filters.contrast.value}${filters.contrast.unit})
        saturate(${filters.saturation.value}${filters.saturation.unit})
        hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit})
        blur(${filters.blur.value}${filters.blur.unit})
        grayscale(${filters.grayscale.value}${filters.grayscale.unit})
        sepia(${filters.sepia.value}${filters.sepia.unit})
        opacity(${filters.opacity.value}${filters.opacity.unit})
        invert(${filters.invert.value}${filters.invert.unit})
    `.trim();
  ctx.drawImage(image, 0, 0);
}

resetBtn.addEventListener("click", () => {
  filters = {
    brightness: { value: 100, unit: "%", min: 0, max: 200 },
    contrast: { value: 100, unit: "%", min: 0, max: 200 },
    saturation: { value: 100, unit: "%", min: 0, max: 200 },
    hueRotation: { value: 0, unit: "deg", min: 0, max: 360 },
    blur: { value: 0, unit: "px", min: 0, max: 20 },
    grayscale: { value: 0, unit: "%", min: 0, max: 100 },
    sepia: { value: 0, unit: "%", min: 0, max: 100 },
    opacity: { value: 100, unit: "%", min: 0, max: 100 },
    invert: { value: 0, unit: "%", min: 0, max: 100 },
  };
  applyFilters();
  filterContainer.innerHTML = "";
  createFilter();
});

downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "edited-image.png";
    link.href = canvas.toDataURL();
    link.click();
});

const presets = {
  normal: {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  drama: {
    brightness: 95,
    contrast: 140,
    saturation: 120,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 10,
    opacity: 100,
    invert: 0,
  },

  vintage: {
    brightness: 110,
    contrast: 90,
    saturation: 80,
    hueRotation: 10,
    blur: 1,
    grayscale: 0,
    sepia: 40,
    opacity: 100,
    invert: 0,
  },

  oldSchool: {
    brightness: 105,
    contrast: 110,
    saturation: 70,
    hueRotation: 0,
    blur: 2,
    grayscale: 10,
    sepia: 60,
    opacity: 100,
    invert: 0,
  },

  blackAndWhite: {
    brightness: 100,
    contrast: 120,
    saturation: 0,
    hueRotation: 0,
    blur: 0,
    grayscale: 100,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  cinematic: {
    brightness: 95,
    contrast: 130,
    saturation: 90,
    hueRotation: -10,
    blur: 0,
    grayscale: 0,
    sepia: 15,
    opacity: 100,
    invert: 0,
  },

  faded: {
    brightness: 115,
    contrast: 80,
    saturation: 85,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 20,
    opacity: 100,
    invert: 0,
  },

  coolTone: {
    brightness: 100,
    contrast: 110,
    saturation: 105,
    hueRotation: -20,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  warmTone: {
    brightness: 105,
    contrast: 110,
    saturation: 110,
    hueRotation: 15,
    blur: 0,
    grayscale: 0,
    sepia: 20,
    opacity: 100,
    invert: 0,
  },

  glitch: {
    brightness: 100,
    contrast: 150,
    saturation: 150,
    hueRotation: 180,
    blur: 1,
    grayscale: 0,
    sepia: 0,
    opacity: 95,
    invert: 10,
  }
};

Object.keys(presets).forEach((presetName) => {
  const Presetbtn = document.createElement("button");
  Presetbtn.classList.add("btn");
  Presetbtn.innerText = presetName;
  presetsContainer.appendChild(Presetbtn);

  Presetbtn.addEventListener("click", () => {
    const preset = presets[presetName];
    Object.keys(preset).forEach((filter) => {
      filters[filter].value = preset[filter];
      console.log(preset[filter]);
    });
    applyFilters();
    filterContainer.innerHTML = "";
    createFilter();
});

});