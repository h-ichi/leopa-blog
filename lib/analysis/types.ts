export interface Recommendation {
  type: "good" | "warning" | "bad";
  title: string;
  message: string;
}


export interface SeoAnalysisInput {
  wordCount: number;

  titleLength: number;

  descriptionLength: number;

  h1Count: number;

  h2Count: number;

  imageCount: number;

  altMissingCount: number;

  internalLinkCount: number;
}


export interface PostAnalysis extends SeoAnalysisInput {
  seoScore: number;

  status: "good" | "warning" | "bad";

  recommendations: Recommendation[];
}