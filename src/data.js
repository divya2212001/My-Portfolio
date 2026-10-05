export const profile = {
  name: 'Divyanjali Gopisetty',
  email: 'gopisetty.divyanjali@adypu.edu.in',
  resume: '/Resume_Divyanjali_Gopisetty.pdf',
  socials: [
    { label: 'GitHub', href: 'https://github.com/divya2212001' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/divyanjali-gopisetty-514250344' },
    { label: 'LeetCode', href: 'https://leetcode.com/u/divya2212/' },
  ],
};

export const projects = [
  {
    id: 'viora', number: '01', title: 'Viora AI', category: 'Computer Vision', subtitle: 'Perceptual image quality, made explainable.',
    description: 'A hybrid CNN and computer-vision system for perceptual image-quality prediction and defect analysis.',
    stack: ['ResNet18', 'OpenCV', 'Grad-CAM', 'FastAPI', 'MongoDB', 'React'],
    metrics: [{ label: 'MAE', value: 0.2883, max: 0.5, note: 'Mean absolute error across 1,511 test samples; lower is better.' }, { label: 'RMSE', value: 0.3649, max: 0.5, note: 'Root mean squared error; penalizes larger prediction errors.' }, { label: 'PLCC', value: 0.8566, max: 1, note: 'Pearson correlation with human quality scores; higher is better.' }, { label: 'SRCC', value: 0.8156, max: 1, note: 'Spearman rank correlation with human quality scores; higher is better.' }],
    overview: 'The model combines ResNet18 feature representations with eight handcrafted visual features. Learned features capture rich image patterns while explicit measures provide interpretable signals about image structure and defects.',
    architecture: ['Image input', 'ResNet18 features', '8 visual features', 'Hybrid prediction', 'Score + Grad-CAM'],
    details: ['Why hybrid features: convolutional representations learn useful patterns from data, while handcrafted visual signals add complementary measurements.', 'Explainability: Grad-CAM highlights regions that influence the network. This portfolio describes the method; it does not present fabricated model outputs.', 'Serving path: React interface → FastAPI inference → prediction and Grad-CAM → MongoDB analysis history.'],
  },
  {
    id: 'cybertriage', number: '02', title: 'CyberTriage-LM', category: 'Generative AI', subtitle: 'Adapting a language model for cyber triage.',
    description: 'A cybersecurity language-model research project exploring parameter-efficient supervised fine-tuning.',
    stack: ['Qwen2.5-7B', 'LoRA / QLoRA', 'Unsloth', 'PyTorch', '4-bit quantization'],
    metrics: [{ label: 'Records prepared', value: 5000, max: 5000, display: '5,000', note: 'Cybersecurity records in the dataset pipeline.' }, { label: 'Parameters trained', value: 0.53, max: 1, display: '0.53%', note: 'Share of model parameters trained using parameter-efficient adaptation.' }],
    overview: 'Research internship in Generative AI at iHub-Data, IIIT Hyderabad (June–August 2026). The project uses Qwen2.5-7B with supervised fine-tuning and low-rank adaptation techniques.',
    architecture: ['5,000 records', 'Prepare & curate', 'Qwen2.5-7B 4-bit', 'LoRA / QLoRA SFT', 'Task-adapted model'],
    details: ['Why quantize: 4-bit weights reduce memory requirements during model loading and fine-tuning.', 'Why LoRA: low-rank adapter weights allow targeted updates while keeping most base-model weights frozen. Training covered 0.53% of parameters.', 'Evaluation: inspect data quality, held-out task performance, and failure cases before drawing conclusions. No accuracy or benchmark result is reported here because none is documented.'],
  },
  {
    id: 'waterlogging', number: '03', title: 'Road Waterlogging Detection', category: 'Computer Vision', subtitle: 'From road footage to measurable detections.',
    description: 'A video-analytics workflow for detecting road waterlogging, spanning frame preparation, annotation, training, and validation.',
    stack: ['YOLO', 'Python', 'OpenCV', 'Label Studio', 'FFmpeg'],
    metrics: [{ label: 'mAP@50', value: 70.28, max: 100, display: '70.28%', note: 'Mean average precision at IoU threshold 0.50.' }, { label: 'mAP@50–95', value: 30.13, max: 100, display: '30.13%', note: 'Average mAP across IoU thresholds from 0.50 to 0.95.' }, { label: 'Precision', value: 62.23, max: 100, display: '62.23%', note: 'Share of predicted detections that are correct.' }, { label: 'Recall', value: 70.65, max: 100, display: '70.65%', note: 'Share of ground-truth objects detected by the model.' }],
    overview: 'Computer Vision research internship at iHub-Data, IIIT Hyderabad (March–May 2026). Work covered video preprocessing and frame extraction, dataset annotation, YOLO training, and validation.',
    architecture: ['Road video', 'FFmpeg frames', 'OpenCV prep', 'Label Studio', 'YOLO train / validate'],
    details: ['mAP@50 uses a single, more permissive overlap threshold. mAP@50–95 averages across stricter thresholds, so it reflects localization quality more broadly.', 'Precision and recall describe different error tradeoffs: precision concerns false detections; recall concerns missed instances.', 'Next experiments could examine lighting and weather slices, annotation consistency, and threshold selection. No trained weights or live inference demo are included here.'],
  },
  {
    id: 'health', number: '04', title: 'Agentic Health Support System', category: 'Applied ML', subtitle: 'A prediction workflow with a separate support layer.',
    description: 'An ML risk-prediction workflow paired with retrieval-augmented, multi-agent assistance and automated report generation.',
    stack: ['Random Forest', 'LangGraph', 'FAISS', 'Hugging Face', 'Streamlit'],
    metrics: [{ label: 'Accuracy', value: 91.8, max: 100, display: '91.8%', note: 'Random Forest accuracy with five-fold cross-validation.' }, { label: 'F1-score', value: 91.5, max: 100, display: '91.5%', note: 'Random Forest F1-score with five-fold cross-validation.' }, { label: 'ROC-AUC', value: 95.7, max: 100, display: '95.7%', note: 'Random Forest ROC-AUC with five-fold cross-validation.' }],
    overview: 'Classical prediction models (Random Forest, Logistic Regression, Decision Tree) are evaluated separately from the LLM-based retrieval and report-generation workflow.',
    architecture: ['Risk input', 'ML risk model', 'LangGraph flow', 'FAISS retrieval', 'Clinical report'],
    details: ['Risk prediction: compare three models using five-fold cross-validation. Random Forest results are shown above.', 'Assistance layer: LangChain and LangGraph coordinate retrieval from FAISS using Hugging Face embeddings, followed by generated support and report content.', 'The ML prediction and generated assistance are distinct components. This system is a project prototype and does not replace qualified medical professionals.'],
  },
];

export const skillGroups = [
  { label: 'AI / ML', skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Generative AI', 'LLM Fine-tuning', 'RAG', 'Model Evaluation'] },
  { label: 'Engineering', skills: ['Python', 'JavaScript', 'React', 'FastAPI', 'Node.js', 'REST APIs'] },
  { label: 'Data', skills: ['SQL', 'ClickHouse', 'Pandas', 'NumPy', 'MongoDB', 'MySQL', 'BI Dashboards'] },
  { label: 'Tools', skills: ['PyTorch', 'Scikit-learn', 'OpenCV', 'LangChain', 'FAISS', 'Git', 'Streamlit'] },
];

export const experience = [
  { date: 'MAR — MAY 2026', org: 'iHub-Data · IIIT Hyderabad', role: 'Research Intern — Computer Vision', detail: 'Built a road-waterlogging detection workflow spanning video preprocessing, frame extraction, dataset annotation, YOLO training, and validation. See case study 03 for evaluation metrics.' },
  { date: 'JUN — AUG 2026', org: 'iHub-Data · IIIT Hyderabad', role: 'Research Intern — Generative AI', detail: 'Worked on CyberTriage-LM using Qwen2.5-7B, 4-bit quantization, and LoRA / QLoRA supervised fine-tuning with a 5,000-record dataset pipeline.' },
  { date: 'JUN 2026 — PRESENT', org: 'Fire AI', role: 'Data Analytics Engineer', detail: 'Optimized 100+ ClickHouse SQL queries; built 60+ BI dashboards and 60+ KPI widgets; validated and reconciled data across 5+ seller platforms.' },
];
