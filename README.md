# Whole Slide Image Viewer — Artigence Internship

An interactive, responsive Whole Slide Image (WSI) Viewer built with React.js as part of the Artigence Internship Program.

This application provides an efficient and user-friendly interface to visualize high-resolution pathology images along with detection data, bounding boxes, and detailed analysis panels.

---

## Live Demo

▶️ [View Deployed Application](https://artigenceinternhemanth.netlify.app/)

---

## Tech Stack

- React.js (Vite)
- Custom CSS
- JSON-based Detection Data
- Modern Component-based Architecture
- Responsive Web Design

---

## Features

### 🖼️ Whole Slide Image Viewer
- Interactive viewer for large WSI images
- Smooth zooming and panning
- Maintains image clarity at all zoom levels

### 🔲 Dynamic Bounding Boxes
- Bounding boxes rendered from `output.json`
- Displays:
  - Detection ID
  - Finding Label
- Real-time positioning based on zoom & pan

### 📋 Findings Panel (Left Sidebar)
- Lists all detected findings
- Displays:
  - ID
  - Label
  - Confidence score
- Blood cell counts for:
  - RBC
  - WBC
  - Platelets

### 🗺️ Hub View (Mini Map)
- Top-right corner zoomed-out preview
- Shows current visible region of Main Viewer
- Real-time pointer sync with main view

### ➕➖ Zoom Controls
- Zoom In
- Zoom Out
- Optional Reset View Button

### 🎨 Clean & Responsive UI
- Light & minimalistic design
- Fully responsive for Desktop, Tablet & Mobile
- Smooth animations for better user experience
- Custom CSS with consistent design patterns

---


