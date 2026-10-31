# Nitesh Kumar — AI/ML Portfolio

Responsive React + Vite portfolio with a black-and-cream editorial design, transparent portrait cutout, resume-based projects, skills, education and certifications.

## Requirements
- Node.js 18+ (Node.js 20 LTS recommended)
- npm

## Run locally
1. Extract the ZIP.
2. Open the `nitesh-ai-ml-portfolio` folder in VS Code.
3. In the terminal, run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the Vite URL shown in the terminal (usually `http://localhost:5173`).

## Build for production
```bash
npm ci
npm run build
npm run preview
```
Vite generates the production website in `dist/`.

## Included assets
- `public/nitesh-portrait.png`: transparent-background portrait created from your uploaded photo.
- `public/resume.pdf`: the resume PDF you uploaded; the Resume button opens it.
- `public/project-images/`: four custom SVG illustrations, one for each project card.

## Personalize
- Project cards link to their corresponding GitHub repositories or live demos. Update the `link` values in `src/App.jsx` to change them.
- GitHub: `https://github.com/niteshkumar02`
- LinkedIn: `https://linkedin.com/in/niteshkumar02`
- Email and location are based on the uploaded resume.

## Deploy
This is a static Vite site and can be deployed to Vercel, Netlify, or any static web host.

### Vercel or Netlify
1. Push the `nitesh-ai-ml-portfolio` folder to a GitHub repository and import that repository into your hosting provider.
2. Set the project/root directory to `nitesh-ai-ml-portfolio` if the portfolio is inside a larger repository.
3. Use these build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Node.js: 20 LTS recommended
4. Deploy. The provider will install dependencies using `package-lock.json` and rebuild on future pushes.

### Any static host
Run `npm ci` and `npm run build`, then upload the contents of `dist/` to the host. Do not upload `node_modules/`.

Before deploying, run `npm run build` locally and check the production site with `npm run preview`.

## Structure
```text
nitesh-ai-ml-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── public/
│   ├── nitesh-portrait.png
│   ├── resume.pdf
│   └── project-images/
│       ├── spamshield.svg
│       ├── text-summarizer.svg
│       ├── sentiment-analyzer.svg
│       └── ai-attendance.svg
└── src/
    ├── App.jsx
    ├── main.jsx
    └── styles.css
```


## Live AI Attendance System
The Intelligent AI Attendance System project card links to: https://snapclass-main-projects.streamlit.app/


## Project links configured
- Text Summarizer: https://github.com/niteshkpc/Text_summarization
- Sentiment Analyzer (RNN): https://github.com/niteshkpc/Minor-Project-on-RNN
- SpamShield / SMS Spam Detection: https://github.com/niteshkpc/Spam-_SMS_Detection
- Intelligent AI Attendance System: https://snapclass-main-projects.streamlit.app/
