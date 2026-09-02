<div align="center">

  <img src="assets/images/AppLogo.png" alt="Therapy Nest Logo" width="100" height="100" style="border-radius: 16px; margin-bottom: 16px;" />

  # Therapy Nest — Web Portal & Clinical Showcase

  **Evidence-based, offline-first cognitive & speech therapy companion for stroke, aphasia, TBI, and neuroplastic recovery.**

  [![License: MIT](https://img.shields.io/badge/License-MIT-teal.svg?style=flat-square)](LICENSE)
  [![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)
  [![W3C Validated HTML5](https://img.shields.io/badge/HTML5-Semantic%20%26%20Clean-E34F26?style=flat-square&logo=html5&logoColor=white)](https://validator.w3.org/)
  [![CSS3 BEM Architecture](https://img.shields.io/badge/CSS3-BEM%20%26%20Design%20Tokens-1572B6?style=flat-square&logo=css3&logoColor=white)](css/tokens.css)
  [![JavaScript Vanilla](https://img.shields.io/badge/JavaScript-Vanilla%20ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](js/main.js)
  [![Accessibility WCAG AAA](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AAA-success?style=flat-square)](https://www.w3.org/WAI/standards-guidelines/wcag/)

  <p align="center">
    <a href="#-overview">Overview</a> •
    <a href="#-live-clinical-features">Features</a> •
    <a href="#-the-7-therapy-domains">Therapy Domains</a> •
    <a href="#-project-structure">Structure</a> •
    <a href="#-quick-start--local-development">Quick Start</a> •
    <a href="#-deploy-to-vercel">Deploy to Vercel</a> •
    <a href="#-clinical-science--irt">Clinical Science</a> •
    <a href="#-privacy--offline-architecture">Privacy</a> •
    <a href="#-license">License</a>
  </p>

</div>

---

## 📖 Overview

**Therapy Nest** is a non-profit, open-source digital therapeutic platform engineered to solve the global **dosage gap** in neuro-rehabilitation. 

While clinical evidence proves that neuroplastic recovery after stroke or brain trauma demands **4+ hours of weekly intensive practice**, standard healthcare systems can typically provide less than 45 minutes of weekly in-clinic therapy. Existing commercial software solutions charge upwards of **$30/month**, financially disenfranchising millions of patients worldwide.

This repository (`Therapy-Nest-Web`) hosts the official web portal, interactive on-device ASR simulator, Item Response Theory (IRT) difficulty visualization tool, and open-source documentation.

---

## 🌟 Live Clinical Features

- 🔒 **Zero-Cloud Audio Transmission:** Complete patient privacy. Microphone voice input is captured and transcribed strictly in volatile memory using an on-device Vosk acoustic model. No patient speech is ever uploaded or monetized.
- 📈 **2-Parameter Logistic (2PL) IRT Engine:** Dynamically calculates latent ability ($\theta \in [-3.0, +3.0]$) and item difficulty ($b$), automatically maintaining patient success rates in the clinically optimal **75% Flow Channel** ($70\% - 80\%$).
- 📶 **100% Offline Capability:** Built to support rural and resource-constrained clinics with local SQLite persistence via Drift.
- 🎨 **Warm Editorial Design Aesthetic:** Styled with warm cream surfaces (`#FAF9F5`), refined Cormorant Garamond display typography, and a tailored color palette (`#CC785C` Warm Coral, `#2B7BC8` Calm Blue, `#5DB8A6` Accent Teal, `#E8A55A` Accent Amber).
- ♿ **Neuro-Inclusive Accessibility:** Adheres to WCAG 2.1 AAA contrast benchmarks, touch targets $\ge 48\text{px} \times 48\text{px}$, responsive font scaling ($100\% - 200\%$), and reduced motion query listeners.

---

## 🧠 The 7 Therapy Domains

| Domain | Clinical Target | Key Exercise Types | Primary Color Token |
| :--- | :--- | :--- | :--- |
| **Language & Naming** | Lexical retrieval & WAB-R confrontation naming | Picture confrontation, category fluency, sentence blanks | `var(--color-primary-blue)` |
| **Memory & Recall** | Working memory & associative retention | Visual sequences, word-picture pairs, N-Back continuous stream | `var(--color-accent-teal)` |
| **Attention & Focus** | Sustained scanning & executive control | Symbol matrices, rule-based filtering, dual-channel task switching | `var(--color-accent-amber)` |
| **Speech & Repetition** | Motor speech planning & phonemic accuracy | Vosk speech repetition, conversational script training, oral reading | `var(--color-primary)` |
| **Reading & Writing** | Functional literacy & agraphia recovery | Medication label reading, spelling dictation, word alphabetizing | `var(--color-primary-blue)` |
| **Math & Numeracy** | Daily life numeracy & acalculia support | Analog clock orientation, money/change calculation, concrete arithmetic | `var(--color-accent-amber)` |
| **Daily Living & Executive** | Independence & functional autonomy | Medication scheduling, emergency problem solving, multi-step sequencing | `var(--color-accent-teal)` |

---

## 📂 Project Structure

```text
Therapy-Nest-Web/
├── .gitignore               # Ignored OS, IDE, and temporary files
├── LICENSE                  # Permissive MIT License
├── README.md                # Git-optimized documentation & setup guide
├── vercel.json              # Vercel deployment routes, headers, and caching
├── robots.txt               # SEO search engine crawl policies
├── sitemap.xml              # XML index for search indexing
│
├── index.html               # Homepage with live simulator & domain tabs
├── research.html            # Clinical science, IRT math & cueing whitepaper
├── support.html             # Help Center, FAQ accordions & contact form
├── privacy.html             # Privacy policy (100% on-device ASR guarantee)
├── terms.html               # Terms of service & clinical medical disclaimer
├── licenses.html            # Open-source attributions & third-party licenses
├── 404.html                 # Accessible branded 404 error page
│
├── assets/
│   └── images/
│       └── AppLogo.png      # Official Therapy Nest brand vector logo
│
├── css/
│   ├── tokens.css           # Global design tokens (colors, clamp fonts, spaces, shadows)
│   ├── reset.css            # Modern CSS box-sizing & element reset
│   ├── base.css             # Typography hierarchy, grid containers, surfaces
│   └── components.css       # BEM component styles (buttons, tabs, simulator, cards)
│
└── js/
    ├── main.js              # Sticky header blur, mobile drawer, scroll animations
    ├── interactive-demo.js  # Live Vosk ASR simulator & IRT slider math engine
    └── accordion.js         # Accessible ARIA accordion component for FAQs
```

---

## 🚀 Quick Start & Local Development

No heavy build steps or `node_modules` required! You can run the site immediately using any static web server:

### Option 1: Python 3 Built-in Server (Recommended)
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/Therapy-Nest-Web.git

# Navigate into the project folder
cd Therapy-Nest-Web

# Start local server on port 8080
python -m http.server 8080
```
Open your browser at [http://localhost:8080](http://localhost:8080).

### Option 2: Node.js `serve` / `npx`
```bash
npx serve .
```

### Option 3: VS Code Live Server
Right-click `index.html` inside VS Code and select **"Open with Live Server"**.

---

## ☁️ Deploy to Vercel

This repository is pre-configured with a production-ready [`vercel.json`](vercel.json) supporting instant one-click deployment, asset caching, and security headers.

### Method A: Via Vercel Dashboard (Zero Config)
1. Push this repository to your GitHub account: `https://github.com/YOUR_USERNAME/Therapy-Nest-Web`.
2. Log in to [Vercel](https://vercel.com).
3. Click **"Add New..." &rarr; "Project"**.
4. Select **`Therapy-Nest-Web`** from your GitHub repositories.
5. Keep default settings (Framework Preset: **Other**) and click **"Deploy"**.

### Method B: Via Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy directly from terminal
vercel

# Deploy to production domain
vercel --prod
```

---

## 🔬 Clinical Science & IRT Engine

The adaptive exercise recommendation engine relies on the **2-Parameter Logistic Item Response Theory (2PL IRT)** model:

$$P_i(\theta) = \frac{1}{1 + e^{-1.702 \cdot a_i (\theta - b_i)}}$$

Where:
- $\theta \in [-3.0, +3.0]$ represents the patient's real-time latent recovery ability.
- $b_i$ represents the intrinsic difficulty parameter of stimulus item $i$.
- $a_i$ represents the discrimination capacity of item $i$.

After each attempt, $\theta$ is updated via real-time Elo rating adjustments:
$$\theta_{\text{new}} = \theta_{\text{old}} + K \cdot (\text{Outcome} - P_i(\theta))$$

---

## 🛡️ Privacy & Offline Architecture

```
[ Microphone Voice Input ]
           │
           ▼
[ On-Device Vosk ASR (50MB Engine) ] ── (In-Memory RAM Only)
           │
           ▼
[ Jaro-Winkler Phoneme Scoring ] ── (Score Stored in Local SQLite Drift DB)
           │
           ▼
[ Audio Buffer Instantly Purged ] ── (Zero Bytes Sent to Cloud)
```

- **No Third-Party Analytics / Ads:** Zero tracking pixels, commercial advertising SDKs, or invasive telemetry.
- **GDPR & CCPA Compliant:** Full user data ownership with one-tap local and cloud account erasure.

---

## 🤝 Contributing

Contributions are welcomed from speech-language pathologists, neurologists, accessibility advocates, and open-source developers!

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/clinical-enhancement`).
3. Commit your Changes (`git commit -m "Add new WAB-R validated auditory comprehension stimuli"`).
4. Push to the Branch (`git push origin feature/clinical-enhancement`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for details.

---

<div align="center">
  <sub>Built with ❤️ for stroke and aphasia recovery worldwide.</sub>
</div>
