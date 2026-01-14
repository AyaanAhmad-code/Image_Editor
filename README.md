# 🎨 Browser-Based Image Editor

A fully functional **browser-based image editor** built using **HTML, CSS, and JavaScript**, powered by the **HTML5 Canvas API**.  
Edit images in real time with multiple filters and presets — all **100% client-side**.

---

## 🚀 Features

- 📤 Upload images from your device
- 🎚️ Real-time filter controls
- 🎞️ One-click preset filters
- ♻️ Reset all edits instantly
- ⬇️ Download edited image as PNG
- 🌙 Modern dark UI with CSS variables
- ⚡ Fast & lightweight (no backend)
- 🔐 Privacy-friendly (images never leave your browser)

---

## 🎚️ Available Filters

- Brightness  
- Contrast  
- Saturation  
- Hue Rotation  
- Blur  
- Grayscale  
- Sepia  
- Opacity  
- Invert  

All filters are applied dynamically using:


---

## 🎞️ Preset Filters

- Normal  
- Drama  
- Vintage  
- Old School  
- Black & White  
- Cinematic  
- Faded  
- Cool Tone  
- Warm Tone  
- Glitch  

Each preset automatically updates all sliders and redraws the canvas.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|----------|--------|
| HTML5 | Structure |
| CSS3 | Styling & Theme |
| JavaScript (ES6) | Logic & Interactivity |
| Canvas API | Image Processing |
| Remix Icon | Icons |

---

## 📁 Project Structure

```bash
image-editor/
│
├── index.html        # Main HTML structure
├── style.css         # Layout & component styling
├── theme.css         # CSS variables & dark theme
├── script.js         # Image editor logic
├── favicon.ico       # App icon
└── README.md         # Documentation
```

---
⚙️ How It Works
```
1.User selects an image from their device

2.Image is loaded into an HTML <canvas>

3.Filters are applied using ctx.filter

4.Presets update filter values dynamically

5.Canvas is redrawn in real time

6.Final image can be downloaded instantly
```
---

▶️ Run Locally

No installation or build tools required.
```
Method 1: Direct Open
Open index.html in any modern browser

Method 2: Live Server (Recommended)
Right-click index.html → Open with Live Server
```
---

🔄 Reset & Download
```
1. Reset Button
Restores all filters to default values

2. Download Button
Exports the edited image as edited-image.png
```
---

📚 What I Learned
```
▪️Working with HTML5 Canvas

▪️Real-time image manipulation

▪️Dynamic UI generation with JavaScript

▪️Filter chaining & performance handling

▪️Clean UI design using CSS variables

▪️Structuring scalable frontend projects
```
---

🚧 Future Improvements

▪️Crop & rotate tools

▪️Undo / redo functionality

▪️Zoom & pan support

▪️Drag & drop image upload

▪️Mobile touch gestures

▪️Export as JPG / WebP

---

🤝 Contributing

▪️Contributions are welcome!

▪️Fork the repository

▪️Create a new branch

▪️Make your changes

▪️Submit a pull request

---

📜 License

This project is licensed under the MIT License.

---

👨‍💻 Author

Ayaan Ahmad
Frontend Developer

Passionate about JavaScript & UI/UX

Focused on building real-world projects

Constantly learning & improving

---

⭐ Support

If you found this project useful:

⭐ Star the repository

🧠 Share feedback

🤝 Suggest improvements

Happy Coding 🚀
