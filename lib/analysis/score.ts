import type { SeoAnalysisInput } from "./types";


export function calculateSeoScore(
  analysis: SeoAnalysisInput
): number {
  let score = 0;


  // タイトル文字数
  if (
    analysis.titleLength >= 25 &&
    analysis.titleLength <= 35
  ) {
    score += 15;
  }


  // description
  if (
    analysis.descriptionLength >= 80 &&
    analysis.descriptionLength <= 140
  ) {
    score += 15;
  }


  // 本文文字数
  if (analysis.wordCount >= 2000) {
    score += 20;
  }


  // H1
  if (analysis.h1Count === 1) {
    score += 10;
  }


  // H2
  if (analysis.h2Count >= 2) {
    score += 10;
  }


  // 画像
  if (analysis.imageCount >= 1) {
    score += 10;
  }


  // alt
  if (analysis.altMissingCount === 0) {
    score += 10;
  }


  // 内部リンク
  if (analysis.internalLinkCount >= 3) {
    score += 10;
  }


  return score;
}