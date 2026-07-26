import { getPostBySlug } from "../posts";

import {
  countWords,
  countH1,
  countH2,
  countImages,
  countAltMissing,
  countInternalLinks,
} from "./counters";

import { calculateSeoScore } from "./score";

import { buildRecommendations } from "./recommendations";

import type {
  PostAnalysis,
  SeoAnalysisInput,
} from "./types";


export function analyzePost(
  slug: string
): PostAnalysis {

  const post = getPostBySlug(slug);


  const analysis: SeoAnalysisInput = {
    wordCount: countWords(post.content),

    titleLength: post.title.length,

    descriptionLength:
      post.description.length,

    h1Count: countH1(post.content),

    h2Count: countH2(post.content),

    imageCount: countImages(post.content),

    altMissingCount:
      countAltMissing(post.content),

    internalLinkCount:
      countInternalLinks(post.content),
  };


  const seoScore =
    calculateSeoScore(analysis);


  const recommendations =
    buildRecommendations(analysis);


  return {
    ...analysis,

    seoScore,

    status:
      seoScore >= 90
        ? "good"
        : seoScore >= 70
        ? "warning"
        : "bad",

    recommendations,
  };
}