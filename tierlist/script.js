const imageInput = document.getElementById("imageUpload");
const previewContainer = document.getElementById("preview");

let imageIdCounter = 0;

imageInput.addEventListener("change", () => {
  const files = Array.from(imageInput.files);

  files.forEach((file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.draggable = true;
      img.id = `img-${imageIdCounter++}`;

      img.addEventListener("dragstart", (ev) => {
        ev.dataTransfer.setData("text", img.id);
      });

      previewContainer.appendChild(img);
    };

    reader.readAsDataURL(file);
  });
  imageInput.value = "";
});

const tierzones = document.querySelectorAll(".tierzone");

tierzones.forEach((zones) => {
  zones.addEventListener("dragover", (e) => e.preventDefault());

  zones.addEventListener("drop", (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    const dragged = document.querySelector(`img[id="${id}"]`);
    if (dragged) {
      zones.appendChild(dragged);
    }
  });
});
