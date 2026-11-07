# ATELIER 3D — Next-Gen 3D Clothes Studio & E-Commerce Platform

A production-grade, fullstack 3D fashion studio and bespoke clothing customizer built with **React**, **Three.js (WebGL PBR)**, **Tailwind CSS**, and **Express / Node.js**.

---

## 🌟 Key Features

### 1. Interactive 3D Fashion Studio & Garment Engine
- **Procedural 3D Garment Models**:
  - **Aetheric Cyber-Hoodie**: Exaggerated drop-shoulder silhouette, sculptural double-layered hood, kangaroo pocket, ribbed cuffs, and swaying drawstrings with metal aglets.
  - **Solstice Drop-Shoulder Heavy Tee**: 280 GSM combed cotton drape, chunky 1.25" bound rib collar, boxy fit.
  - **Neo-Tokyo Techwear Windbreaker Jacket**: 3-layer weatherproof shell, storm funnel collar, waterproof YKK zipper, reflective forearm bands, dual chest utility pockets.
  - **Apex Structured Tailored Blazer**: Precision notch lapels, structured soft shoulders, cross-stitched horn buttons, and contrast silk satin lining.
  - **Vanguard Tactical Cargo Trousers**: Modular 3D bellows pockets, articulated knee darts, and cinch cord-lock ankles.
  - **Zenith Distressed 6-Panel Cap**: Curved visor brim, structured crown with embroidered eyelets, rear brass clasp, and 3D patch zone.
- **Physical Based Rendering (PBR) Materials**:
  - Procedural micro-weave textures, normal maps, roughness, and metalness calibrated for: Heavyweight French Terry (480 GSM), Brushed Fleece, 3-Layer Hydrophobic Ripstop, Italian Virgin Wool, Suede / Nubuck Leather, and Luxe Crushed Velour.
- **Custom Decal & Artwork Studio**:
  - Live graphic upload (PNG, JPG, SVG, WebP) with instant projection onto garments.
  - Curated graphic library (*Cyber Kanji 未来*, *Chromatic Vortex*, *Atelier Bauhaus Typo*, *Solar Eclipse*, *Dystopian Skull*, *Monogram Crest*).
  - Transform controls: position on front, back, or chest-left pocket, plus scale, angle rotation, and opacity sliders.
- **Studio Lighting & Viewport Controls**:
  - 4 Dynamic Lighting Presets: **Softbox Studio**, **Cyber Neon**, **Golden Hour**, and **Dark Runway**.
  - Camera View Presets: Front, Back, Left, Right, Close-Up, and Orbit Controls (360° rotate, pan, zoom).
  - Turntable 360° auto-spin and floating organic breathing / cloth flutter animation.
  - Stylized Runway Mannequin Avatar toggle.
  - Display modes: Shaded PBR, Clay Sculpt, and Wireframe topology inspection.
- **Interactive 3D Tailoring Hotspots**:
  - Clickable 3D markers anchored to key garment details with technical tailoring popovers.
- **High-Res 3D Snapshot Export**:
  - Captures high-res WebGL canvas renders with Atelier studio branding watermark for mockups and social sharing.

### 2. Full E-Commerce Shopping Experience
- **Collections Catalog**:
  - Filter by category (Hoodies, T-Shirts, Jackets, Blazers, Pants, Headwear) and real-time search.
  - Interactive product cards with 3D configurator quick-launch.
- **Dynamic Pricing Calculator**:
  - Real-time price updates based on fabric selections and custom print additions.
- **Slide-Over Bag & Promo Codes**:
  - Persistent shopping bag with custom 3D specs, quantity management, and promo discounts (`DRIP20` for 20% off, `FREESHIP` for free shipping).
- **Multi-Step Checkout & Mockup Payment**:
  - Shipping address capture, simulated credit card with virtual card visualization, Apple Pay, and Klarna.
  - Confetti celebration, order generation with unique ID (e.g. `TC-94821`), and instant transition to order tracking.
- **Real-Time Order Tracking**:
  - Production timeline tracker: *Confirmed* ➔ *Laser Cut* ➔ *3D Print & Stitch* ➔ *Quality Inspection* ➔ *Dispatched*.
- **Personal Wardrobe / Saved Designs**:
  - Save custom creations to the backend archive, reload them directly into the 3D Studio, or dispatch to bag.
- **Admin Studio Operations Dashboard**:
  - Revenue, orders, and custom designs metrics.
  - Real-time order dispatch queue with status management.
  - New garment catalog generator.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 18, Three.js, Tailwind CSS, Lucide React, Canvas Confetti, Vite |
| **3D Rendering** | Three.js WebGL Renderer, ACESFilmicToneMapping, PCFSoftShadowMap, Procedural Canvas Textures & Bump Maps |
| **Backend** | Express 4, Node.js, Multer, CORS, File-backed Persistent JSON Store |
| **Styling** | Dark luxury streetwear aesthetic (Plus Jakarta Sans, Syne, JetBrains Mono) |

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm run install:all
```

### 2. Run in Development Mode
Starts both the Express API (port 5000) and the Vite frontend (port 5173 with proxy):
```bash
npm run dev
```

### 3. Production Build & Start
```bash
npm run build
npm start
```
The full application will be live at `http://localhost:5000`.

---

## 📡 REST API Reference

- `GET /api/products` — List catalog products (supports `?category=...&search=...`)
- `GET /api/products/:id` — Get single product with 3D specs
- `POST /api/products` — Create new garment model
- `GET /api/presets` — Retrieve curated graphic presets
- `GET /api/custom-designs` — Get all saved custom 3D designs
- `POST /api/custom-designs` — Save a customized garment configuration
- `DELETE /api/custom-designs/:id` — Delete a saved design
- `POST /api/upload` — Upload custom logo/artwork (multipart or base64)
- `GET /api/orders` — List orders
- `GET /api/orders/:orderId` — Get order status and tracking timeline
- `POST /api/orders` — Submit checkout order
- `GET /api/admin/metrics` — Studio revenue and operational metrics
- `GET /api/health` — Server health check
